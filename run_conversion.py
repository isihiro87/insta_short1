import convert_slide_to_data
import os

# Absolute path with unicode
input_file = r"c:\Users\user\Dropbox\gutto_contents\remotions\insta-short1\datas\english\grade2\unit_06\01_比較級・最上級\slide_content3.md"
output_dir = "src/"
output_file = "EnglishLessonData_test.tsx"
topic = "比較級"
audio_base = "audio/grade2/unit06/01/content"

print(f"Input file exists: {os.path.exists(input_file)}")

if os.path.exists(input_file):
    rows = convert_slide_to_data.parse_markdown_table(input_file)
    content = convert_slide_to_data.generate_tsx_content(rows, "3", topic, audio_base)

    with open(os.path.join(output_dir, output_file), "w", encoding="utf-8") as f:
        f.write(content)

    print("Done")
else:
    print("File not found")
