import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np
import os

# 数式フォントをTeX風(Computer Modern)にする設定
plt.rcParams['mathtext.fontset'] = 'cm'

# 出力ディレクトリの作成
OUTPUT_DIR = "math_problems_centered"
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

class GeometryPlotter:
    def __init__(self, filename):
        self.fig, self.ax = plt.subplots(figsize=(6, 6)) # 正方形に近い方が中央寄せしやすい
        self.ax.set_aspect('equal')
        self.ax.axis('off')
        self.filename = filename
        self.all_points = [] # 描画された全ての点を記録するリスト

    def _track_points(self, points):
        """描画範囲計算のために点を記録する"""
        if isinstance(points, list):
            self.all_points.extend(points)
        else:
            self.all_points.append(points)

    def set_optimal_limits(self):
        """記録された点に基づいて最適な表示範囲を計算し設定する"""
        if not self.all_points:
            return

        points = np.array(self.all_points)
        min_x, min_y = np.min(points, axis=0)
        max_x, max_y = np.max(points, axis=0)

        width = max_x - min_x
        height = max_y - min_y
        center_x = (min_x + max_x) / 2
        center_y = (min_y + max_y) / 2

        # 長い方の辺に合わせて正方形の範囲を作る（アスペクト比維持のため）
        max_range = max(width, height)
        
        # 余白の設定
        margin = max_range * 0.1
        if margin == 0: margin = 0.5

        padded_range = max_range + 2 * margin

        self.ax.set_xlim(center_x - padded_range / 2, center_x + padded_range / 2)
        self.ax.set_ylim(center_y - padded_range / 2, center_y + padded_range / 2)


    def save(self):
        self.set_optimal_limits()
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np
import os

# 数式フォントをTeX風(Computer Modern)にする設定
plt.rcParams['mathtext.fontset'] = 'cm'

# 出力ディレクトリの作成
OUTPUT_DIR = "math_problems_centered"
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

class GeometryPlotter:
    def __init__(self, filename):
        self.fig, self.ax = plt.subplots(figsize=(6, 6)) # 正方形に近い方が中央寄せしやすい
        self.ax.set_aspect('equal')
        self.ax.axis('off')
        self.filename = filename
        self.all_points = [] # 描画された全ての点を記録するリスト

    def _track_points(self, points):
        """描画範囲計算のために点を記録する"""
        if isinstance(points, list):
            self.all_points.extend(points)
        else:
            self.all_points.append(points)

    def set_optimal_limits(self):
        """記録された点に基づいて最適な表示範囲を計算し設定する"""
        if not self.all_points:
            return

        points = np.array(self.all_points)
        min_x, min_y = np.min(points, axis=0)
        max_x, max_y = np.max(points, axis=0)

        width = max_x - min_x
        height = max_y - min_y
        center_x = (min_x + max_x) / 2
        center_y = (min_y + max_y) / 2

        # 長い方の辺に合わせて正方形の範囲を作る（アスペクト比維持のため）
        max_range = max(width, height)
        
        # 余白の設定
        margin = max_range * 0.1
        if margin == 0: margin = 0.5

        padded_range = max_range + 2 * margin

        self.ax.set_xlim(center_x - padded_range / 2, center_x + padded_range / 2)
        self.ax.set_ylim(center_y - padded_range / 2, center_y + padded_range / 2)


    def save(self):
        self.set_optimal_limits()
        plt.tight_layout()
        save_path = os.path.join(OUTPUT_DIR, self.filename)
        plt.savefig(save_path, dpi=150, bbox_inches='tight', pad_inches=0.1)
        plt.close()
        print(f"Saved: {save_path}")

    def draw_line(self, p1, p2, color='#000000', lw=2.5, linestyle='-', zorder=1):
        self.ax.plot([p1[0], p2[0]], [p1[1], p2[1]], color=color, lw=lw, linestyle=linestyle, zorder=zorder)
        self._track_points([p1, p2])

    def draw_polygon(self, points, color='#000000', fill=None, alpha=1.0, zorder=1):
        poly = patches.Polygon(points, closed=True, edgecolor=color, facecolor=fill if fill else 'none', alpha=alpha, linewidth=2.5, zorder=zorder)
        self.ax.add_patch(poly)
        self._track_points(points)

    def add_text(self, p, text, offset=(0, 0), fontsize=20, color='black', zorder=10):
        # テキストが "$x$" の場合のみ、サイズを強制的に大きく(24)する
        final_fontsize = 24 if text == "$x$" else fontsize

        pos = (p[0] + offset[0], p[1] + offset[1])
        self.ax.text(pos[0], pos[1], text, fontsize=final_fontsize, ha='center', va='center', color=color, zorder=zorder)
        self._track_points([(pos[0]-0.2, pos[1]-0.2), (pos[0]+0.2, pos[1]+0.2)])

    def add_angle_arc(self, p_center, p_start, p_end, text=None, radius=0.5, color='black', fontsize=16, zorder=5):
        v1 = np.array(p_start) - np.array(p_center)
        v2 = np.array(p_end) - np.array(p_center)
        angle1 = np.degrees(np.arctan2(v1[1], v1[0]))
        angle2 = np.degrees(np.arctan2(v2[1], v2[0]))
        
        if angle2 < angle1:
            angle2 += 360
            
        width = angle2 - angle1
        if width > 360: width -= 360

        if width > 180:
             angle1, angle2 = angle2, angle1 + 360
             width = 360 - width

        arc = patches.Arc(p_center, radius*2, radius*2, angle=0, theta1=angle1, theta2=angle2, color=color, linewidth=1, zorder=zorder)
        self.ax.add_patch(arc)
        
        mid_angle = np.radians(angle1 + width/2)
        arc_mid_point = (p_center[0] + radius * np.cos(mid_angle),
                         p_center[1] + radius * np.sin(mid_angle))
        self._track_points([p_center, arc_mid_point])

        if text:
            text_pos = (p_center[0] + radius*1.5 * np.cos(mid_angle),
                        p_center[1] + radius*1.5 * np.sin(mid_angle))
            
            # テキストが "$x$" の場合のみ、サイズを強制的に大きく(24)する
            final_fontsize = 24 if text == "$x$" else fontsize
            
            self.ax.text(text_pos[0], text_pos[1], text, fontsize=final_fontsize, color=color, ha='center', va='center', zorder=zorder)
            self._track_points([text_pos])

    def add_tick_mark(self, p1, p2, num_marks=1, color='black'):
        mid = ((p1[0]+p2[0])/2, (p1[1]+p2[1])/2)
        vec = np.array(p2) - np.array(p1)
        length = np.linalg.norm(vec)
        if length == 0: return
        perp = np.array([-vec[1], vec[0]]) / length * 0.15
        
        for i in range(num_marks):
            offset = (i - (num_marks-1)/2) * 0.1
            base = (mid[0] + vec[0]/length*offset, mid[1] + vec[1]/length*offset)
            m1 = (base[0] + perp[0], base[1] + perp[1])
            m2 = (base[0] - perp[0], base[1] - perp[1])
            self.ax.plot([m1[0], m2[0]], [m1[1], m2[1]], color=color, lw=1)
            self._track_points([m1, m2])

    def add_right_angle_mark(self, p_corner, p1, p2, size=0.3, color='black'):
        v1 = (np.array(p1) - np.array(p_corner))
        v1 = v1 / np.linalg.norm(v1) * size
        v2 = (np.array(p2) - np.array(p_corner))
        v2 = v2 / np.linalg.norm(v2) * size
        
        p_new = np.array(p_corner) + v1 + v2
        sq = [np.array(p_corner)+v1, p_new, np.array(p_corner)+v2]
        self.ax.plot([sq[0][0], sq[1][0], sq[2][0]], [sq[0][1], sq[1][1], sq[2][1]], color=color, lw=1)
        self._track_points(sq)

# Helper functions for geometry
def get_isosceles_top(base_width, top_angle_deg, base_center=(2.5, 0)):
    height = (base_width / 2) / np.tan(np.radians(top_angle_deg / 2))
    return (base_center[0], height)

def get_isosceles_from_base_angle(base_width, base_angle_deg, base_center=(2.5, 0)):
    height = (base_width / 2) * np.tan(np.radians(base_angle_deg))
    return (base_center[0], height)


# --- Problems ---

def prob_06():
    plot = GeometryPlotter("problem_06.png")
    B = (0, 0)
    C = (4, 0)
    A = (0, 4 * np.tan(np.radians(35)))
    
    ab_len = A[1]
    ac_vec = np.array(C) - np.array(A)
    ac_len = np.linalg.norm(ac_vec)
    D = np.array(A) + ac_vec * (ab_len / ac_len)
    
    plot.draw_polygon([A, B, C])
    plot.draw_line(B, D)
    
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    plot.add_text(D, "D", (0.2, 0.2))
    
    plot.add_right_angle_mark(B, A, C)
    plot.add_angle_arc(C, A, B, "35°")
    
    # 修正: 元はABD(角B)でしたが、ADE(Eなし、恐らくADB)と解釈して
    # 角ADB(Center D)にxを設定します
    plot.add_angle_arc(D, B, A, "$x$", radius=0.7)
    
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, D, 1)
    plot.save()

def prob_06_steps():
    # Base coordinates
    B = (0, 0)
    C = (4, 0)
    A = (0, 4 * np.tan(np.radians(35)))
    
    ab_len = A[1]
    ac_vec = np.array(C) - np.array(A)
    ac_len = np.linalg.norm(ac_vec)
    D = np.array(A) + ac_vec * (ab_len / ac_len)

    # Step 1: Highlight Triangle ABC, Angles B & C
    plot = GeometryPlotter("problem_06_step1.png")
    plot.draw_polygon([A, B, C], fill='#E3F2FD', alpha=0.5) # Highlight ABC
    plot.draw_line(B, D)
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    plot.add_text(D, "D", (0.2, 0.2))
    plot.add_right_angle_mark(B, A, C, color='#E91E63') # Highlight Angle B
    plot.add_angle_arc(C, A, B, "35°", color='#E91E63') # Highlight Angle C
    plot.add_angle_arc(D, B, A, "$x$", radius=0.7)
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, D, 1)
    plot.save()

    # Step 2: Show Angle A = 55°
    plot = GeometryPlotter("problem_06_step2.png")
    plot.draw_polygon([A, B, C])
    plot.draw_line(B, D)
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    plot.add_text(D, "D", (0.2, 0.2))
    plot.add_right_angle_mark(B, A, C)
    plot.add_angle_arc(C, A, B, "35°")
    plot.add_angle_arc(D, B, A, "$x$", radius=0.7)
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, D, 1)
    plot.add_angle_arc(A, B, C, "55°", radius=0.8, color='#E91E63') # Show Angle A
    plot.save()

    # Step 3: Highlight Triangle ABD, Sides AB & AD
    plot = GeometryPlotter("problem_06_step3.png")
    plot.draw_polygon([A, B, D], fill='#FFEBEE', alpha=0.5) # Highlight ABD
    plot.draw_line(B, C) # Draw rest of BC
    plot.draw_line(D, C) # Draw rest of AC
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    plot.add_text(D, "D", (0.2, 0.2))
    plot.add_right_angle_mark(B, A, C)
    plot.add_angle_arc(C, A, B, "35°")
    plot.add_angle_arc(D, B, A, "$x$", radius=0.7)
    plot.add_tick_mark(A, B, 1, color='#E91E63') # Highlight Side AB
    plot.add_tick_mark(A, D, 1, color='#E91E63') # Highlight Side AD
    plot.add_angle_arc(A, B, C, "55°", radius=0.8)
    plot.save()

    # Step 4: Highlight Base Angles of ABD
    plot = GeometryPlotter("problem_06_step4.png")
    plot.draw_polygon([A, B, D])
    plot.draw_line(B, C)
    plot.draw_line(D, C)
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    plot.add_text(D, "D", (0.2, 0.2))
    plot.add_right_angle_mark(B, A, C)
    plot.add_angle_arc(C, A, B, "35°")
    plot.add_angle_arc(D, B, A, "$x$", radius=0.7, color='#E91E63') # Highlight Angle D (x)
    plot.add_angle_arc(B, D, A, "62.5°", radius=0.7, color='#E91E63') # Highlight Angle B (ABD)
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, D, 1)
    plot.add_angle_arc(A, B, C, "55°", radius=0.8)
    plot.save()

    # Step 5: Answer x = 62.5°
    plot = GeometryPlotter("problem_06_step5.png")
    plot.draw_polygon([A, B, C])
    plot.draw_line(B, D)
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    plot.add_text(D, "D", (0.2, 0.2))
    plot.add_right_angle_mark(B, A, C)
    plot.add_angle_arc(C, A, B, "35°")
    plot.add_angle_arc(D, B, A, "$x$=62.5°", radius=0.7, color='#E91E63') # Answer
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, D, 1)
    plot.save()

def prob_07():
    plot = GeometryPlotter("problem_07.png")
    C = get_isosceles_top(4, 40, (2.5, 0))
    A = (0.5, 0)
    B = (4.5, 0)
    
    plot.draw_polygon([A, B, C])
    
    D = (C[0]*0.4 + A[0]*0.6, C[1]*0.4 + A[1]*0.6)
    plot.draw_line(B, D)
    
    plot.add_text(A, "A", (-0.3, -0.1))
    plot.add_text(B, "B", (0.3, -0.1))
    plot.add_text(C, "C", (0, 0.3))
    plot.add_text(D, "D", (-0.3, 0.1))
    
    # 修正: radiusをデフォルト(0.5)から1.2倍(0.6)へ変更
    plot.add_angle_arc(C, A, B, "40°", radius=0.6)
    plot.add_angle_arc(D, A, B, "$x$")
    
    plot.add_text(B, "●", (-0.6, 0.25), fontsize=10)
    plot.add_text(B, "●", (-0.4, 0.6), fontsize=10)
    
    plot.add_tick_mark(C, A, 1)
    plot.add_tick_mark(C, B, 1)
    plot.save()

def prob_07_steps():
    # Base coordinates
    C = get_isosceles_top(4, 40, (2.5, 0))
    A = (0.5, 0)
    B = (4.5, 0)
    D = (C[0]*0.4 + A[0]*0.6, C[1]*0.4 + A[1]*0.6)

    # Step 1: Highlight Triangle ABC, Angle C = 40°
    plot = GeometryPlotter("problem_07_step1.png")
    plot.draw_polygon([A, B, C], fill='#E3F2FD', alpha=0.5)
    plot.draw_line(B, D)
    plot.add_text(A, "A", (-0.3, -0.1))
    plot.add_text(B, "B", (0.3, -0.1))
    plot.add_text(C, "C", (0, 0.3))
    plot.add_text(D, "D", (-0.3, 0.1))
    plot.add_angle_arc(C, A, B, "40°", radius=0.6, color='#E91E63')
    plot.add_angle_arc(D, A, B, "$x$")
    plot.add_text(B, "●", (-0.6, 0.25), fontsize=10)
    plot.add_text(B, "●", (-0.4, 0.6), fontsize=10)
    plot.add_tick_mark(C, A, 1)
    plot.add_tick_mark(C, B, 1)
    plot.save()

    # Step 2: Show Angles A & B = 70°
    plot = GeometryPlotter("problem_07_step2.png")
    plot.draw_polygon([A, B, C])
    plot.draw_line(B, D)
    plot.add_text(A, "A", (-0.3, -0.1))
    plot.add_text(B, "B", (0.3, -0.1))
    plot.add_text(C, "C", (0, 0.3))
    plot.add_text(D, "D", (-0.3, 0.1))
    plot.add_angle_arc(C, A, B, "40°", radius=0.6)
    plot.add_angle_arc(D, A, B, "$x$")
    plot.add_text(B, "●", (-0.6, 0.25), fontsize=10)
    plot.add_text(B, "●", (-0.4, 0.6), fontsize=10)
    plot.add_tick_mark(C, A, 1)
    plot.add_tick_mark(C, B, 1)
    plot.add_angle_arc(A, B, C, "70°", radius=0.5, color='#E91E63')
    plot.add_angle_arc(B, A, C, "70°", radius=0.8, color='#E91E63')
    plot.save()

    # Step 3: Focus on Angle B bisector, show 35°
    plot = GeometryPlotter("problem_07_step3.png")
    plot.draw_polygon([A, B, C])
    plot.draw_line(B, D)
    plot.add_text(A, "A", (-0.3, -0.1))
    plot.add_text(B, "B", (0.3, -0.1))
    plot.add_text(C, "C", (0, 0.3))
    plot.add_text(D, "D", (-0.3, 0.1))
    plot.add_angle_arc(C, A, B, "40°", radius=0.6)
    plot.add_angle_arc(D, A, B, "$x$")
    plot.add_text(B, "●", (-0.6, 0.25), fontsize=10, color='#E91E63')
    plot.add_text(B, "●", (-0.4, 0.6), fontsize=10)
    plot.add_tick_mark(C, A, 1)
    plot.add_tick_mark(C, B, 1)
    plot.add_angle_arc(A, B, C, "70°", radius=0.5)
    # Highlight the 35 degree part
    plot.add_angle_arc(B, A, D, "35°", radius=1.0, color='#E91E63')
    plot.save()

    # Step 4: Highlight Triangle ABD
    plot = GeometryPlotter("problem_07_step4.png")
    plot.draw_polygon([A, B, D], fill='#FFEBEE', alpha=0.5)
    plot.draw_line(D, C)
    plot.draw_line(B, C)
    plot.add_text(A, "A", (-0.3, -0.1))
    plot.add_text(B, "B", (0.3, -0.1))
    plot.add_text(C, "C", (0, 0.3))
    plot.add_text(D, "D", (-0.3, 0.1))
    plot.add_angle_arc(C, A, B, "40°", radius=0.6)
    plot.add_angle_arc(D, A, B, "$x$", color='#E91E63')
    plot.add_text(B, "●", (-0.6, 0.25), fontsize=10)
    plot.add_text(B, "●", (-0.4, 0.6), fontsize=10)
    plot.add_tick_mark(C, A, 1)
    plot.add_tick_mark(C, B, 1)
    plot.add_angle_arc(A, B, C, "70°", radius=0.5, color='#E91E63')
    plot.add_angle_arc(B, A, D, "35°", radius=1.0, color='#E91E63')
    plot.save()

    # Step 5: Answer x = 75°
    plot = GeometryPlotter("problem_07_step5.png")
    plot.draw_polygon([A, B, C])
    plot.draw_line(B, D)
    plot.add_text(A, "A", (-0.3, -0.1))
    plot.add_text(B, "B", (0.3, -0.1))
    plot.add_text(C, "C", (0, 0.3))
    plot.add_text(D, "D", (-0.3, 0.1))
    plot.add_angle_arc(C, A, B, "40°", radius=0.6)
    plot.add_angle_arc(D, A, B, "$x=75°$", radius=0.7, color='#E91E63')
    plot.add_text(B, "●", (-0.6, 0.25), fontsize=10)
    plot.add_text(B, "●", (-0.4, 0.6), fontsize=10)
    plot.add_tick_mark(C, A, 1)
    plot.add_tick_mark(C, B, 1)
    plot.save()

    # Step 6: Exterior Angle Theorem visualization
    plot = GeometryPlotter("problem_07_step6.png")
    plot.draw_polygon([B, C, D], fill='#E3F2FD', alpha=0.5) # Highlight BCD
    plot.draw_line(A, D)
    plot.draw_line(A, B)
    plot.add_text(A, "A", (-0.3, -0.1))
    plot.add_text(B, "B", (0.3, -0.1))
    plot.add_text(C, "C", (0, 0.3))
    plot.add_text(D, "D", (-0.3, 0.1))
    plot.add_angle_arc(C, A, B, "40°", radius=0.6, color='#E91E63')
    plot.add_angle_arc(D, A, B, "$x$", color='#E91E63')
    plot.add_text(B, "●", (-0.6, 0.25), fontsize=10)
    plot.add_text(B, "●", (-0.4, 0.6), fontsize=10, color='#E91E63') # Highlight other dot
    plot.add_tick_mark(C, A, 1)
    plot.add_tick_mark(C, B, 1)
    plot.add_angle_arc(B, D, C, "35°", radius=1.0, color='#E91E63')
    plot.save()

if __name__ == "__main__":
    prob_06()
    prob_07()
    prob_06_steps()
    prob_07_steps()
    print("All images generated in 'math_problems_centered' folder.")