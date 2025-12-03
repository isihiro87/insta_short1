import wave
import os
import sys

def merge_audio_files(files):
    if len(files) < 2:
        print("エラー: マージするには少なくとも2つのファイルが必要です。")
        print("使用法: python audio_merger.py part.wav part.wav")
        return

    output_path = files[0]
    input_paths = files[1:]
    
    # 1. Validate all files exist
    if not os.path.exists(output_path):
        print(f"エラー: 最初のファイルが見つかりません: {output_path}")
        return
        
    for f in input_paths:
        if not os.path.exists(f):
            print(f"エラー: ファイルが見つかりません: {f}")
            return

    # 2. Read all data
    all_data = []
    base_params = None
    
    # Read first file
    try:
        with wave.open(output_path, 'rb') as w:
            base_params = w.getparams()
            all_data.append(w.readframes(w.getnframes()))
    except Exception as e:
        print(f"エラー: {output_path} の読み込み失敗: {e}")
        return

    # Read other files
    for f in input_paths:
        try:
            with wave.open(f, 'rb') as w:
                params = w.getparams()
                # Check compatibility (nchannels, sampwidth, framerate)
                if (params.nchannels != base_params.nchannels or 
                    params.sampwidth != base_params.sampwidth or 
                    params.framerate != base_params.framerate):
                    print(f"エラー: {f} の形式が一致しません。マージを中止します。")
                    return
                all_data.append(w.readframes(w.getnframes()))
        except Exception as e:
            print(f"エラー: {f} の読み込み失敗: {e}")
            return

    # 3. Write combined data
    try:
        with wave.open(output_path, 'wb') as w:
            w.setparams(base_params)
            for data in all_data:
                w.writeframes(data)
        print(f"マージ成功: {output_path} (合計 {len(all_data)} ファイル)")
    except Exception as e:
        print(f"エラー: 書き込み失敗: {e}")
        return

    # 4. Delete merged files
    for f in input_paths:
        try:
            os.remove(f)
            print(f"削除: {f}")
        except Exception as e:
            print(f"警告: {f} の削除失敗: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("使用法: python audio_merger.py <base_file.wav> <append_file1.wav> [append_file2.wav ...]")
        print("  base_file.wav に後ろのファイルを結合し、結合されたファイルは削除します。")
    else:
        merge_audio_files(sys.argv[1:])
