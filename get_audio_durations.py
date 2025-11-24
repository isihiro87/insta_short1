import wave
import os
import json

audio_dir = r"c:\Users\user\Dropbox\gutto_contents\remotions\insta-short1\public\audio\iso_triangle"
files = sorted([f for f in os.listdir(audio_dir) if f.endswith(".wav")])
durations = {}

for f in files:
    path = os.path.join(audio_dir, f)
    with wave.open(path, 'r') as wav:
        frames = wav.getnframes()
        rate = wav.getframerate()
        duration = frames / float(rate)
        durations[f] = duration

with open('audio_durations.json', 'w') as f:
    json.dump(durations, f, indent=2)

print("Durations saved to audio_durations.json")
