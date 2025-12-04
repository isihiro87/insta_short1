import convert_slide_to_data
import os

# Absolute path with unicode
input_file = r"c:\Users\user\Dropbox\gutto_contents\remotions\insta-short1\datas\english\grade2\unit_06\01_比較級・最上級\slide_content3.md"
output_dir = "src/"
output_file = "EnglishLessonData.tsx"
topic = "比較級"
audio_base = "audio/explain/part"

print(f"Input file exists: {os.path.exists(input_file)}")

if os.path.exists(input_file):
    # We need to mimic main() logic slightly to load durations
    durations = {}
    durations_path = os.path.join(os.path.dirname(os.path.abspath(convert_slide_to_data.__file__)), 'audio_durations.json')
    if os.path.exists(durations_path):
        import json
        try:
            with open(durations_path, 'r', encoding='utf-8') as f:
                durations = json.load(f)
            print(f"Loaded durations from {durations_path}")
        except Exception as e:
            print(f"Warning: Could not load audio_durations.json: {e}")

    rows = convert_slide_to_data.parse_markdown_table(input_file)
    content = convert_slide_to_data.generate_tsx_content(rows, "3", topic, audio_base, durations)

    with open(os.path.join(output_dir, output_file), "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Generated {output_file}")
else:
    print("File not found")
