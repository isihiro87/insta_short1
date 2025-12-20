from PIL import Image

def get_bg_color(image_path):
    img = Image.open(image_path)
    rgb_im = img.convert('RGB')
    r, g, b = rgb_im.getpixel((0, 0))
    return '#{:02x}{:02x}{:02x}'.format(r, g, b)

if __name__ == "__main__":
    image_path = 'public/images/industry_02_watt.png'
    print(get_bg_color(image_path))
