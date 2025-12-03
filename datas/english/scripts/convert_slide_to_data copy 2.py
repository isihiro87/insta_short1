import os
import re
import glob

def parse_markdown_table(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    headers = []
    rows = []
    in_table = False
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
        
        if line.startswith('|'):
            # Check if it's a separator line
            if '---' in line:
                continue
                
            cells = [cell.strip() for cell in line.split('|')[1:-1]]
            
            if not headers:
                headers = cells
                in_table = True
            else:
                # Check if this is a repeated header row
                if cells == headers:
                    continue
                    
                row = {}
                for i, cell in enumerate(cells):
                    if i < len(headers):
                        row[headers[i]] = cell
                rows.append(row)
        elif in_table:
            # End of table
            in_table = False
            # Reset headers if we encounter multiple tables (e.g. multiple patterns)
            # For now, we just aggregate all rows from all tables
            # headers = [] 

    return rows

def convert_html_to_jsx(text):
    if not text:
        return ""
    
    # Replace <br> with <br />
    text = text.replace('<br>', '<br />')
    
    # Handle <span style="color:red">...</span> -> <RedText>...</RedText>
    def color_replacer(match):
        style_content = match.group(1)
        content = match.group(2)
        
        # Extract color value
        color_match = re.search(r'color\s*:\s*([^;"]+)', style_content)
        if color_match:
            color_val = color_match.group(1).strip()
            if color_val == 'red' or color_val == '#E91E63':
                return f"<RedText>{content}</RedText>"
            # Add other colors if needed, or fallback to style prop
            return f"<span style={{{{ color: '{color_val}' }}}}>{content}</span>"
        return match.group(0)

    text = re.sub(r'<span style="([^"]+)">([^<]+)</span>', color_replacer, text)
    
    # Handle strikethrough if present (assuming <s> or ~~ in markdown converted to html, or just explicit tags if user adds them)
    # For now, let's assume if we see <CrossedText> we leave it, or if we see <s> we convert it.
    # The input is likely HTML-ish from the markdown table.
    
    return text

def clean_text(text):
    # Remove scene markers
    text = re.sub(r'【シーン\d+】', '', text)
    # Remove leading/trailing breaks/spaces
    text = text.replace('<br>', '\n').replace('<br />', '\n')
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    return lines

def generate_tsx_content(rows, file_index):
    audio_base = f"audio/grade2/unit06/01/content{file_index}_"
    # topic = '比較級・最上級' # Could be extracted or hardcoded
    
    scenes = []
    last_text_lines = [] 
    
    for i, row in enumerate(rows):
        scene_num = i + 1
        scene_id = f"scene-{file_index}-{scene_num:03d}"
        
        duration = 150 # Default from user example
        audio_src = f"staticFile(`${{AUDIO_BASE}}{scene_num:03d}.wav`)"
        
        raw_slide_text = row.get('スライドテキスト', '')
        script = row.get('読み上げ原稿', '')
        direction = row.get('画像・演出指示', '')
        speech_text = row.get('セリフ', '').strip()
        
        # Resolve "（維持）"
        resolved_text = raw_slide_text
        last_text_joined = "<br>".join(last_text_lines)
        
        if raw_slide_text.strip() == '（維持）' or raw_slide_text.startswith('（維持）<br>'):
             resolved_text = raw_slide_text.replace('（維持）', last_text_joined, 1)
        elif '（維持）' in raw_slide_text:
            lines = raw_slide_text.split('<br>')
            resolved_lines = []
            for k, line in enumerate(lines):
                if '（維持）' in line:
                    if k < len(last_text_lines):
                        resolved_lines.append(last_text_lines[k])
                    else:
                        resolved_lines.append(line)
                else:
                    resolved_lines.append(line)
            resolved_text = "<br>".join(resolved_lines)
            
        current_text_lines = clean_text(resolved_text)
        if current_text_lines:
            last_text_lines = current_text_lines
            
        # Parse content for EnglishLessonBoard
        japanese_text = ""
        english_text = ""
        formula_content = ""
        bottom_comment = ""
        words = []
        
        # Heuristics for parsing lines
        # 1. Check for [日], [英] tags
        # 2. Check for Formula (contains +)
        # 3. Fallback: Line 1 -> JP, Line 2 -> EN (if matches English chars), others -> Comment
        
        temp_lines = []
        for line in current_text_lines:
            if '[日]' in line:
                japanese_text = line.replace('[日]', '').strip()
            elif '[英]' in line:
                english_text = line.replace('[英]', '').strip()
            elif '+' in line and not '（' in line and not '(' in line: # Simple heuristic for formula
                # If it looks like a formula "A + B"
                # But be careful of sentences.
                # User example: "more + interesting"
                formula_content = line
            else:
                temp_lines.append(line)
        
        # If no explicit tags found, try positional
        if not japanese_text and not english_text:
            if len(temp_lines) > 0:
                # Check if first line is Japanese
                if re.search(r'[ぁ-んァ-ン一-龥]', temp_lines[0]):
                    japanese_text = temp_lines[0]
                    temp_lines.pop(0)
            
            if len(temp_lines) > 0:
                # Check if next line is English
                if re.match(r'^[A-Za-z0-9\s\.\,\?\!\(\)\<\>\/]+$', temp_lines[0].replace('<RedText>', '').replace('</RedText>', '').replace('<span', '').replace('</span>', '')):
                    english_text = temp_lines[0]
                    temp_lines.pop(0)
        
        # Remaining lines might be formula or comments
        for line in temp_lines:
            if '+' in line and not formula_content:
                 formula_content = line
            else:
                if bottom_comment:
                    bottom_comment += "<br />" + line
                else:
                    bottom_comment = line

        # Convert to JSX
        japanese_text_jsx = convert_html_to_jsx(japanese_text)
        english_text_jsx = convert_html_to_jsx(english_text)
        bottom_comment_jsx = convert_html_to_jsx(bottom_comment)
        
        # Handle Formula
        formula_jsx = ""
        if formula_content:
            # Check if it's a list of formulas
            if '<br />' in formula_content or '<br>' in formula_content:
                 # CenteredList
                 items = formula_content.replace('<br />', '<br>').split('<br>')
                 list_items = "<br />".join([item.strip() for item in items])
                 formula_jsx = f'''
                    <CenteredList>
                        {list_items}
                    </CenteredList>
                 '''
            else:
                # Single FormulaContainer
                parts = formula_content.split('+')
                formula_items = []
                for part in parts:
                    part = part.strip()
                    # Check for crossed text in part?
                    # For now, simple text
                    formula_items.append(f'<FormulaItem>{part}</FormulaItem>')
                
                joined_items = f'\n                        <FormulaText>+</FormulaText>\n                        '.join(formula_items)
                formula_jsx = f'''
                    <FormulaContainer>
                        {joined_items}
                    </FormulaContainer>
                '''

        # Image Src
        image_src = "staticFile('images/quiz_intro.png')" # Default
        if "イラスト" in direction:
             image_src = "staticFile('images/illustration.png')" # Placeholder
        
        # Construct Props
        props = []
        props.append('step="title"')
        if japanese_text_jsx:
            if '<' in japanese_text_jsx:
                props.append(f'japaneseText={{\n                    <>\n                        {japanese_text_jsx}\n                    </>\n                }}')
            else:
                props.append(f'japaneseText="{japanese_text_jsx}"')
        if english_text_jsx:
            # englishText often contains JSX like <RedText>, so wrap in <>...</>
            props.append(f'englishText={{\n                    <>\n                        {english_text_jsx}\n                    </>\n                }}')
        
        if formula_jsx:
             props.append(f'formula={{\n                    {formula_jsx}\n                }}')
             
        if bottom_comment_jsx:
             props.append(f'bottomComment={{\n                    <>\n                        {bottom_comment_jsx}\n                    </>\n                }}')
             
        if speech_text:
             props.append(f'speechBubble="{speech_text}"')
             
        props.append(f'imageSrc={{{image_src}}}')
        
        # Words prop? (User example has words={['interesting']})
        # Maybe extract from english text if it has RedText?
        # Or just leave empty for now unless we have a rule.
        
        props_str = "\n                ".join(props)

        board_content_jsx = f'''<EnglishLessonBoard
                {props_str}
            />'''

        scene_code = f'''    {{
        id: '{scene_id}',
        durationInFrames: {duration},
        audioSrc: {audio_src},
        boardContent: () => (
            {board_content_jsx}
        ),
        characterComment: "",
        pauseAfter: 15,
    }},'''
        scenes.append(scene_code)

    scenes_str = "\n".join(scenes)
    
    tsx_content = f'''import {{ staticFile }} from 'remotion';
import {{ QuizBoard, EnglishLessonBoard, RedText, FormulaContainer, FormulaItem, FormulaText, CenteredList, CrossedText }} from './components/english';
import {{ Scene }} from './data';

export type {{ Scene }};

const AUDIO_BASE = '{audio_base}';
// const TOPIC = '比較級・最上級';

export const englishLessonData: Scene[] = [
{scenes_str}
];
'''
    return tsx_content

def main():
    base_dir = r"c:\Users\user\Dropbox\gutto_contents\remotions\insta-short1\datas\english\grade2\unit_06\01_比較級・最上級"
    output_dir = base_dir
    
    slide_files = glob.glob(os.path.join(base_dir, "slide_content*.md"))
    
    for slide_file in slide_files:
        filename = os.path.basename(slide_file)
        # Extract number
        match = re.search(r'slide_content(\d+)\.md', filename)
        if not match:
            continue
            
        file_index = match.group(1)
        
        print(f"Processing {filename}...")
        rows = parse_markdown_table(slide_file)
        
        if not rows:
            print(f"Warning: No rows found in {filename}")
            continue
            
        tsx_content = generate_tsx_content(rows, file_index)
        
        output_filename = f"englishData{file_index}.tsx"
        output_path = os.path.join(output_dir, output_filename)
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(tsx_content)
            
        print(f"Generated {output_filename}")

if __name__ == "__main__":
    main()
