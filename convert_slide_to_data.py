
# 使い方:
# python convert_slide_to_data.py --input_file [入力ファイルパス] --output_dir [出力ディレクトリ] --topic [トピック名] --output_file [出力ファイル名] --audio_base [音声ファイルのベースパス]
#
# 例:
# python convert_slide_to_data.py --input_file "datas/english/grade2/unit_06/01_*/slide_content5.md" --output_dir "src" --topic "比較級・最上級" --output_file "EnglishLessonData.tsx" --audio_base "audio/grade2/unit06/01/content5"

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
    
    # Handle [色:赤]text -> <RedText>text</RedText>
    # Matches [色:赤] followed by alphanumeric characters (e.g. er)
    text = re.sub(r'\[色:赤\]([a-zA-Z0-9]+)', r'<RedText>\1</RedText>', text)
    
    # Handle simple color styles
    def color_replacer(match):
        style_content = match.group(1)
        content = match.group(2)
        
        # Extract color value
        color_match = re.search(r'color\s*:\s*([^;"]+)', style_content)
        if color_match:
            color_val = color_match.group(1).strip()
            if color_val == 'red' or color_val == '#E91E63':
                return f"<RedText>{content}</RedText>"
            elif color_val == 'blue':
                return f"<span style={{{{ color: '#2196F3' }}}}>{content}</span>"
            
            return f"<span style={{{{ color: '{color_val}' }}}}>{content}</span>"
        return match.group(0)

    text = re.sub(r'<span style="([^"]+)">([^<]+)</span>', color_replacer, text)
    
    # Handle bold **text** -> <b>text</b>
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

def generate_tsx_content(rows, file_index, topic, audio_base_path, durations={}):
    audio_base = audio_base_path
    scenes = []
    
    # Determine audio prefix from audio_base_path
    # Example: audio/explain/part -> part
    audio_prefix = os.path.basename(audio_base_path)
    
    for i, row in enumerate(rows):
        scene_id = f"scene-{file_index}-{i+1:03d}"
        
        # Calculate duration
        duration = 150 # Default
        audio_filename = f"{audio_prefix}{i+1:03d}.wav"
        if audio_filename in durations:
            duration_sec = durations[audio_filename]
            duration = int(duration_sec * 30)
            
        audio_src = f"staticFile(`${{AUDIO_BASE}}{i+1:03d}.wav`)"
        
        raw_slide_text = row.get('スライドテキスト', '')
        script = row.get('読み上げ原稿', '')
        supplementary = row.get('補足セリフ', '')
        layout = row.get('レイアウト', 'standard').strip()
        if not layout:
            layout = 'standard'
        
        speech_bubble_prop = ""
        if supplementary and supplementary.strip():
            speech_bubble_prop = f'speechBubble="{supplementary.strip()}"'
            
        image_src = "staticFile('images/quiz_intro.png')" 
        
        board_props = []
        board_props.append(f'layout="{layout}"')
        board_props.append(f'imageSrc={{{image_src}}}')
        if speech_bubble_prop:
            board_props.append(speech_bubble_prop)

        # Parse content based on layout
        if layout == 'horizontal-split':
            # Expect "Left: ... Right: ..."
            text_norm = raw_slide_text.replace('<br>', '\n').replace('<br />', '\n')
            
            left_match = re.search(r'Left[:：](.*?)(?=Right[:：]|$)', text_norm, re.DOTALL | re.IGNORECASE)
            right_match = re.search(r'Right[:：](.*)', text_norm, re.DOTALL | re.IGNORECASE)
            
            if left_match:
                left_content = convert_html_to_jsx(left_match.group(1).strip().replace('\n', '<br />'))
                board_props.append(f'leftContent={{<>{left_content}</>}}')
            if right_match:
                right_content = convert_html_to_jsx(right_match.group(1).strip().replace('\n', '<br />'))
                board_props.append(f'rightContent={{<>{right_content}</>}}')
                
        elif layout == 'vertical-split':
            # Expect "Top: ... Bottom: ..."
            text_norm = raw_slide_text.replace('<br>', '\n').replace('<br />', '\n')
            
            top_match = re.search(r'Top[:：](.*?)(?=Bottom[:：]|$)', text_norm, re.DOTALL | re.IGNORECASE)
            bottom_match = re.search(r'Bottom[:：](.*)', text_norm, re.DOTALL | re.IGNORECASE)
            
            if top_match:
                top_content = convert_html_to_jsx(top_match.group(1).strip().replace('\n', '<br />'))
                board_props.append(f'topContent={{<>{top_content}</>}}')
            if bottom_match:
                bottom_content = convert_html_to_jsx(bottom_match.group(1).strip().replace('\n', '<br />'))
                board_props.append(f'bottomContent={{<>{bottom_content}</>}}')

        elif layout == 'vertical-list':
            # Expect list items
            lines = clean_text(raw_slide_text)
            items = []
            for line in lines:
                if line.startswith('・') or line.startswith('-'):
                    item_text = line.lstrip('・- ').strip()
                    items.append(convert_html_to_jsx(item_text))
            
            if items:
                items_jsx = ", ".join([f"<>{item}</>" for item in items])
                board_props.append(f'items={{[{items_jsx}]}}')

        else: # standard
            current_text_lines = clean_text(raw_slide_text)
            jp_lines = []
            en_lines = []
            for line in current_text_lines:
                if re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]', line):
                    jp_lines.append(line)
                else:
                    en_lines.append(line)
            
            if jp_lines:
                jp_text = convert_html_to_jsx("".join(jp_lines))
                board_props.append(f'japaneseText={{<>{jp_text}</>}}')
            if en_lines:
                en_text = convert_html_to_jsx(" ".join(en_lines))
                board_props.append(f'englishText={{<>{en_text}</>}}')

        # Join props with newline and indentation
        props_str = "\n                ".join(board_props)
        
        board_content = f'''<EnglishLessonBoard
                step="title"
                {props_str}
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
        if '*' in input_file or '?' in input_file:
             slide_files = glob.glob(input_file)
             if not slide_files:
                 print(f"No files found matching pattern: {input_file}")
                 return
        else:
            slide_files = [input_file]
    elif base_dir:
        slide_files = glob.glob(os.path.join(base_dir, "slide_content*.md"))
    else:
        print("Error: Either --base_dir or --input_file must be provided.")
        return

    if not slide_files:
        print(f"No slide_content files found.")
        return

    # Load audio durations if exists
    durations = {}
    durations_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'audio_durations.json')
    if os.path.exists(durations_path):
        import json
        try:
            with open(durations_path, 'r', encoding='utf-8') as f:
                durations = json.load(f)
            print(f"Loaded durations from {durations_path}")
        except Exception as e:
            print(f"Warning: Could not load audio_durations.json: {e}")

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
        tsx_content = generate_tsx_content(rows, file_index, topic, audio_base, durations)
        
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
