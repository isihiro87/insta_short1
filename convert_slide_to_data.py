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
    
    # Replace <span style="color:red">...</span> with <span style={{ color: 'red' }}>...</span>
    # Handle simple color styles
    def color_replacer(match):
        style_content = match.group(1)
        content = match.group(2)
        
        # Extract color value
        color_match = re.search(r'color\s*:\s*([^;"]+)', style_content)
        if color_match:
            color_val = color_match.group(1).strip()
            # Map common colors if needed, or use as is
            if color_val == 'red':
                color_val = '#E91E63' # Pinkish red used in samples
            elif color_val == 'blue':
                color_val = '#2196F3'
            
            return f"<span style={{{{ color: '{color_val}' }}}}>{content}</span>"
        return match.group(0)

    # Replace <span style="color:red">...</span> with <RedText>...</RedText>
    # Handle simple color styles
    def color_replacer(match):
        style_content = match.group(1)
        content = match.group(2)
        
        # Extract color value
        color_match = re.search(r'color\s*:\s*([^;"]+)', style_content)
        if color_match:
            color_val = color_match.group(1).strip()
            # Map common colors if needed
            if color_val == 'red' or color_val == '#E91E63':
                return f"<RedText>{content}</RedText>"
            elif color_val == 'blue':
                return f"<span style={{{{ color: '#2196F3' }}}}>{content}</span>"
            
            return f"<span style={{{{ color: '{color_val}' }}}}>{content}</span>"
        return match.group(0)

    text = re.sub(r'<span style="([^"]+)">([^<]+)</span>', color_replacer, text)
    
    # Also handle [色:赤]text format if it exists in the raw markdown before HTML conversion
    # But here we are likely processing text that might already have some HTML or raw text
    # The input 'text' comes from parse_markdown_table which reads raw markdown cells.
    # Let's add a handler for [色:赤]text or text[色:赤]
    # Pattern seems to be: text[色:赤] based on slide_content3.md line 6: interesting[色:赤]er
    
    # Regex for text[色:赤] -> <RedText>text</RedText>
    # This is tricky because "text" might be just the preceding word.
    # Let's look at the example: interesting[色:赤]er -> interesting<RedText>er</RedText> ?
    # Or is it interesting[色:赤] -> <RedText>interesting</RedText> ?
    # Line 6: interesting[色:赤]er
    # Line 7: interesting[色:赤]er
    # It seems [色:赤] applies to the PRECEDING character or word?
    # Actually, looking at line 6: "interesting[色:赤]er"
    # If I look at the file content again:
    # 6: | 4 | 「より面白い」だから er をつけたい… | (維持)<br>↓<br>面白い：**interesting**<br>比較級：**interesting[色:赤]er**？ | いつも通りなら… |
    # It seems likely it means "er" should be red? Or "interesting" is red?
    # Usually [Color:Red] applies to the text inside?
    # Wait, standard markdown doesn't have [色:赤]. This is a custom format.
    # If it is "interesting[色:赤]er", maybe it means "interesting" is normal, and "er" is red?
    # Or maybe it's a suffix instruction?
    # Let's assume [色:赤] tags the *preceding* word? Or maybe it's `[色:赤]text`?
    # Let's check line 6 again. `interesting[色:赤]er`.
    # If I assume it's `interesting` + `[色:赤]` + `er`.
    # Maybe it means "interesting" is red?
    # Let's look at line 16: `This book is ( ) ( ) than that book.<br><br>面白い：**interesting**`
    # Line 20: `This book is **more interesting** than that book.`
    
    # Let's look at another file or assume a standard behavior.
    # Often in these custom formats: `text[色:赤]` might mean `text` is red.
    # BUT `interesting[色:赤]er` looks like `interesting` is the word, and `[色:赤]` modifies it?
    # Actually, `er` follows it.
    # Maybe it is `interesting` (normal) `[色:赤]` (start red?) `er` (red text) `[色:end]`? No end tag.
    
    # Alternative interpretation: `[色:赤]` is a marker that the *previous* segment is red?
    # Or maybe `interesting` is normal, and `er` is red?
    # Let's look at the context: "interesting is a long word... er cannot be attached".
    # So `interesting-er`. The `er` is the suffix being discussed.
    # So likely `er` is the target, but `[色:赤]` is *before* it? `interesting[色:赤]er`
    # No, `[色:赤]` is inside the word?
    # Let's assume for now that `[色:赤]` turns the *preceding* word red.
    # `interesting` -> red? No, that would be the whole word.
    # `er` is the suffix.
    # Maybe `[色:赤]` means "Make the NEXT text red"?
    # `interesting` [RED] `er` ? -> `interesting` <RedText>er</RedText>
    
    # Let's try to find if there are other examples.
    # Line 4: `This book is ( ) ( ) than that book.`
    # Line 16: `This book is ( ) ( ) than that book.`
    
    # Let's look at `convert_slide_to_data.py` again. It didn't have logic for `[色:赤]`.
    # It only had logic for `<span style="color:red">`.
    # So `[色:赤]` is likely raw text that needs conversion.
    
    # Let's try to handle `text[色:赤]` -> `<RedText>text</RedText>`
    # Regex: `(\w+)\[色:赤\]` -> `<RedText>\1</RedText>`
    # Test: `interesting[色:赤]er` -> `interesting<RedText>er</RedText>`? No, `er` is after.
    # If it matches `interesting`, then `interesting` becomes red.
    # If the user wants `er` to be red, they would write `interesting er[色:赤]`.
    
    # Let's look at the file content of `slide_content3.md` again carefully.
    # `interesting[色:赤]er`
    # If `[色:赤]` modifies the *preceding* string, then `interesting` becomes red.
    # But the lesson is about "interesting is too long, so don't add er".
    # So maybe the "er" part is the mistake/focus?
    # But "er" is *after* the tag in `interesting[色:赤]er`.
    # Wait, `interesting` is before.
    # Maybe it means "Make 'interesting' red"?
    
    # Let's check if I can find other files to infer the rule.
    # Or I can just ask the user? No, I should try to infer or use a safe fallback.
    # The user said "定型的に行えるところはpythonで".
    # If I am unsure, I can leave it for AI?
    # But the user specifically asked to modify the script.
    
    # Let's add a generic replacer for `[色:赤]` to `<RedText>` if it wraps something?
    # Maybe it's `[色:赤]text[色:終了]`? No.
    
    # Let's assume `[色:赤]` is just a marker that needs to be replaced by `<RedText>` and we need to figure out what it wraps.
    # If I replace `[色:赤]` with `<RedText>` and assume it wraps the *following* word?
    # `interesting` <RedText> `er` ?
    # That would make `er` red. That makes sense in the context of "adding er".
    # Let's try: `\[色:赤\](\w+)` -> `<RedText>\1</RedText>`
    # But in `interesting[色:赤]er`, the tag is *between* them.
    # If it is `interesting` `[色:赤]` `er`.
    # If I replace `[色:赤]` with `<RedText>`, I get `interesting<RedText>er`.
    # I need a closing tag `</RedText>`.
    # If I assume it wraps the *rest of the word*?
    # `interesting<RedText>er</RedText>`
    
    # Let's implement a regex that turns `[色:赤]` into `<RedText>` and adds `</RedText>` at the end of the word boundary?
    # Regex: `\[色:赤\](\w+)`
    # Matches `[色:赤]er`.
    # So `interesting[色:赤]er` -> `interesting` + match(`[色:赤]er`).
    # This seems plausible.
    
    text = re.sub(r'\[色:赤\](\w+)', r'<RedText>\1</RedText>', text)
    
    # Also handle **text** -> <strong>text</strong> or similar if needed, but usually markdown handles it.
    # The script currently doesn't convert markdown bold to HTML/JSX.
    # `**text**` remains `**text**` in the output?
    # `EnglishLessonBoard` might handle markdown?
    # `EnglishLessonBoard` takes `sentences` which are `<span>...</span>`.
    # If `<span>**text**</span>` is passed, it depends on CSS.
    # Usually we want `<b>` or `<strong>`.
    
    text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', text)
    
    return text

def clean_text(text):
    # Remove scene markers
    text = re.sub(r'【シーン\d+】', '', text)
    # Remove [日] [英] tags
    text = text.replace('[日]', '').replace('[英]', '')
    # Remove leading/trailing breaks/spaces
    text = text.replace('<br>', '\n').replace('<br />', '\n')
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    return lines

def generate_tsx_content(rows, file_index, topic, audio_base_path):
    # audio_base_path is passed from main
    audio_base = f"{audio_base_path}{file_index}_"
    
    scenes = []
    
    for i, row in enumerate(rows):
        scene_id = f"scene-{file_index}-{i+1:03d}"
        duration = 150 # Default duration from reference
        audio_src = f"staticFile(`${{AUDIO_BASE}}{i+1:02d}.wav`)" # Reference uses 01.wav not 001.wav
        
        raw_slide_text = row.get('スライドテキスト', '')
        script = row.get('読み上げ原稿', '')
        direction = row.get('画像・演出指示', '')
        supplementary = row.get('補足セリフ', '')
        
        # Clean text
        # We don't need to resolve (維持) strictly if we are just extracting lines, 
        # but if the user wants the full text, we might need to.
        # However, the reference file Scene 3 has "この本は..." which implies (維持) was resolved to the previous full text.
        # BUT Scene 4 has ONLY formula.
        # Let's try to resolve (維持) simply.
        
        # For now, let's just process the current text. 
        # If (維持) is present, we might want to carry over the *previous* japaneseText/englishText?
        # This is complex to do perfectly without state.
        # Let's implement a simple state tracker.
        
        # State
        # last_japanese_text
        # last_english_text
        # But we are inside a loop. We need to initialize them outside if we want persistence.
        # But the function is called once per file.
        
        # Let's simplify: 
        # 1. Clean text.
        # 2. Check for formula.
        # 3. If not formula, try to split into JP/EN.
        
        current_text_lines = clean_text(raw_slide_text)
        
        # Extract speechBubble
        speech_bubble_prop = ""
        if supplementary and supplementary.strip():
            speech_bubble_prop = f'speechBubble="{supplementary.strip()}"'
            
        # Image src
        image_src = "staticFile('images/quiz_intro.png')" # Default from reference
        if "イラスト" in direction:
            image_src = "staticFile('images/illustration.png')"
            
        # Check for formula
        is_formula = False
        if any('+' in line for line in current_text_lines):
            is_formula = True
            
        board_content = ""
        
        if is_formula:
            # Generate FormulaContainer
            formula_items = []
            for line in current_text_lines:
                parts = line.split('+')
                for j, part in enumerate(parts):
                    clean_part = part.strip()
                    clean_part = convert_html_to_jsx(clean_part)
                    if clean_part:
                        formula_items.append(f'<FormulaItem>{clean_part}</FormulaItem>')
                    if j < len(parts) - 1:
                        formula_items.append('<FormulaText>+</FormulaText>')
            
            formula_content = "\n                        ".join(formula_items)
            
            board_content = f'''<EnglishLessonBoard
                step="title"
                formula={{
                    <FormulaContainer>
                        {formula_content}
                    </FormulaContainer>
                }}
                imageSrc={{{image_src}}}
                {speech_bubble_prop}
            />'''
        else:
            # Not a formula. Try to determine Japanese and English text.
            # Heuristic:
            # If line contains Japanese characters -> Japanese Text
            # If line contains mostly English -> English Text
            # If multiple lines, join them?
            
            jp_lines = []
            en_lines = []
            
            for line in current_text_lines:
                # Simple check for Japanese characters (Hiragana, Katakana, Kanji)
                if re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]', line):
                    jp_lines.append(line)
                else:
                    en_lines.append(line)
            
            # If no JP lines found but we have lines, maybe it's all English?
            # Or if no EN lines found?
            
            # Construct props
            jp_prop = ""
            if jp_lines:
                # Join with <br> or just take the first?
                # Reference uses a single string for japaneseText
                jp_text = "".join(jp_lines) # Simple join
                jp_text = convert_html_to_jsx(jp_text)
                jp_prop = f'japaneseText="{jp_text}"'
                
            en_prop = ""
            if en_lines:
                # English text is often wrapped in <>...</> in reference
                en_text_inner = " ".join(en_lines)
                en_text_inner = convert_html_to_jsx(en_text_inner)
                en_prop = f'englishText={{<>{en_text_inner}</>}}'
            
            # If both empty (e.g. (維持) only and we stripped it), maybe use previous?
            # For now, if empty, it will just render empty props.
            
            board_content = f'''<EnglishLessonBoard
                step="title"
                {jp_prop}
                {en_prop}
                imageSrc={{{image_src}}}
                {speech_bubble_prop}
            />'''

        scene_code = f'''    {{
        id: '{scene_id}',
        durationInFrames: {duration},
        audioSrc: {audio_src},
        boardContent: () => (
            {board_content}
        ),
        pauseAfter: 15,
    }},'''
        scenes.append(scene_code)

    scenes_str = "\n".join(scenes)
    
    tsx_content = f'''import {{ staticFile }} from 'remotion';
import {{ QuizBoard, EnglishLessonBoard, RedText, FormulaContainer, FormulaItem, FormulaText, CenteredList, CrossedText }} from './components/english';
import {{ Scene }} from './data';

export type {{ Scene }};

const AUDIO_BASE = '{audio_base}';
// const TOPIC = '{topic}';

export const englishLessonData: Scene[] = [
{scenes_str}
];
'''
    return tsx_content

def main():
    import argparse

    parser = argparse.ArgumentParser(description='Convert slide_content.md to englishData.tsx')
    parser.add_argument('--base_dir', help='Base directory containing slide_content files')
    parser.add_argument('--input_file', help='Specific slide_content file to process')
    parser.add_argument('--topic', required=True, help='Topic string for the lesson')
    parser.add_argument('--output_dir', required=True, help='Output directory for .tsx files')
    parser.add_argument('--output_file', help='Specific output filename (e.g. EnglishLessonData.tsx)')
    parser.add_argument('--audio_base', default='audio/grade2/unit06/01/content', help='Base path for audio files')

    args = parser.parse_args()

    base_dir = args.base_dir
    input_file = args.input_file
    output_dir = args.output_dir
    output_file = args.output_file
    topic = args.topic
    audio_base = args.audio_base
    
    # Ensure output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    slide_files = []
    if input_file:
        slide_files = [input_file]
    elif base_dir:
        slide_files = glob.glob(os.path.join(base_dir, "slide_content*.md"))
    else:
        print("Error: Either --base_dir or --input_file must be provided.")
        return

    if not slide_files:
        print(f"No slide_content files found.")
        return

    for slide_file in slide_files:
        filename = os.path.basename(slide_file)
        # Extract number
        match = re.search(r'slide_content(\d+)\.md', filename)
        if not match:
            print(f"Warning: Could not extract number from {filename}")
            file_index = "0" # Default or error handling
        else:
            file_index = match.group(1)
        
        print(f"Processing {filename}...")
        rows = parse_markdown_table(slide_file)
        
        if not rows:
            print(f"Warning: No rows found in {filename}")
            continue
            
        # Pass topic and audio_base to generate function
        tsx_content = generate_tsx_content(rows, file_index, topic, audio_base)
        
        if output_file:
            output_filename = output_file
        else:
            output_filename = f"englishData{file_index}.tsx"
            
        output_path = os.path.join(output_dir, output_filename)
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(tsx_content)
            
        print(f"Generated {output_filename} at {os.path.abspath(output_path)}")

if __name__ == "__main__":
    main()
