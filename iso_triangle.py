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

    def draw_line(self, p1, p2, color='#000000', lw=2.5, linestyle='-'):
        self.ax.plot([p1[0], p2[0]], [p1[1], p2[1]], color=color, lw=lw, linestyle=linestyle)
        self._track_points([p1, p2])

    def draw_polygon(self, points, color='#000000', fill=None, alpha=1.0):
        poly = patches.Polygon(points, closed=True, edgecolor=color, facecolor=fill if fill else 'none', alpha=alpha, linewidth=2.5)
        self.ax.add_patch(poly)
        self._track_points(points)

    # --- 修正箇所 1: add_text ---
    def add_text(self, p, text, offset=(0, 0), fontsize=20, color='black'):
        # テキストが "$x$" の場合のみ、サイズを強制的に大きく(24)する
        final_fontsize = 24 if text == "$x$" else fontsize

        pos = (p[0] + offset[0], p[1] + offset[1])
        self.ax.text(pos[0], pos[1], text, fontsize=final_fontsize, ha='center', va='center', color=color)
        self._track_points([(pos[0]-0.2, pos[1]-0.2), (pos[0]+0.2, pos[1]+0.2)])

    # --- 修正箇所 2: add_angle_arc ---
    def add_angle_arc(self, p_center, p_start, p_end, text=None, radius=0.5, color='black', fontsize=16):
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

        arc = patches.Arc(p_center, radius*2, radius*2, angle=0, theta1=angle1, theta2=angle2, color=color, linewidth=1)
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
            
            self.ax.text(text_pos[0], text_pos[1], text, fontsize=final_fontsize, color=color, ha='center', va='center')
            self._track_points([text_pos])

    def add_tick_mark(self, p1, p2, num_marks=1):
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
            self.ax.plot([m1[0], m2[0]], [m1[1], m2[1]], 'k-', lw=1)
            self._track_points([m1, m2])

    def add_right_angle_mark(self, p_corner, p1, p2, size=0.3):
        v1 = (np.array(p1) - np.array(p_corner))
        v1 = v1 / np.linalg.norm(v1) * size
        v2 = (np.array(p2) - np.array(p_corner))
        v2 = v2 / np.linalg.norm(v2) * size
        
        p_new = np.array(p_corner) + v1 + v2
        sq = [np.array(p_corner)+v1, p_new, np.array(p_corner)+v2]
        self.ax.plot([sq[0][0], sq[1][0], sq[2][0]], [sq[0][1], sq[1][1], sq[2][1]], 'k-', lw=1)
        self._track_points(sq)

# Helper functions for geometry (unchanged)
def get_isosceles_top(base_width, top_angle_deg, base_center=(2.5, 0)):
    height = (base_width / 2) / np.tan(np.radians(top_angle_deg / 2))
    return (base_center[0], height)

def get_isosceles_from_base_angle(base_width, base_angle_deg, base_center=(2.5, 0)):
    height = (base_width / 2) * np.tan(np.radians(base_angle_deg))
    return (base_center[0], height)


# --- Problems ---

def prob_01():
    plot = GeometryPlotter("problem_01.png")
    B, C = (1, 0), (4, 0)
    A = get_isosceles_top(3, 40, ((1+4)/2, 0))
    
    plot.draw_polygon([A, B, C])
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    
    plot.add_angle_arc(A, B, C, "40°")
    plot.add_angle_arc(B, C, A, "$x$")
    
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, C, 1)
    plot.save()

def prob_02():
    plot = GeometryPlotter("problem_02.png")
    B, C = (1, 0), (4, 0)
    A = get_isosceles_from_base_angle(3, 55, ((1+4)/2, 0))
    
    plot.draw_polygon([A, B, C])
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    
    plot.add_angle_arc(B, C, A, "55°")
    plot.add_angle_arc(A, B, C, "$x$")
    
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, C, 1)
    plot.save()

def prob_03():
    plot = GeometryPlotter("problem_03.png")
    B, C = (1, 0), (4, 0)
    A = get_isosceles_from_base_angle(3, 70, ((1+4)/2, 0))
    
    plot.draw_polygon([A, B, C])
    D = (5.5, 0)
    plot.draw_line(C, D, linestyle='-')
    
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0, -0.3))
    
    plot.add_angle_arc(C, D, A, "110°", radius=0.6)
    plot.add_angle_arc(A, B, C, "$x$")
    
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, C, 1)
    plot.save()

def prob_04():
    plot = GeometryPlotter("problem_04.png")
    B, C = (1, 0), (4, 0)
    A = get_isosceles_top(3, 50, ((1+4)/2, 0))
    
    plot.draw_polygon([A, B, C])
    vec_BA = np.array(A) - np.array(B)
    D = np.array(A) + vec_BA * 0.5
    plot.draw_line(A, D, linestyle='-')

    plot.add_text(A, "A", (0, 0.2))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    
    plot.add_angle_arc(A, C, D, "130°", radius=0.6)
    plot.add_angle_arc(B, C, A, "$x$")
    
    plot.add_tick_mark(A, B, 2)
    plot.add_tick_mark(A, C, 2)
    plot.save()

def prob_05():
    plot = GeometryPlotter("problem_05.png")
    B, C = (1, 0), (4, 0)
    A = get_isosceles_top(3, 60, ((1+4)/2, 0))
    
    plot.draw_polygon([A, B, C])
    vec_BA = np.array(A) - np.array(B)
    D = np.array(A) + vec_BA * 0.5
    plot.draw_line(A, D, linestyle='-')

    plot.add_text(A, "A", (0, -0.5))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    
    plot.add_angle_arc(A, C, D, "120°", radius=0.5)
    plot.add_angle_arc(B, C, A, "$x$")
    
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, C, 1)
    plot.save()

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
    plot.add_angle_arc(A, B, D, "$x$", radius=0.7)
    
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
    
    plot.add_angle_arc(C, A, B, "40°")
    plot.add_angle_arc(D, A, B, "$x$")
    
    plot.add_text(B, "●", (-0.6, 0.25), fontsize=10)
    plot.add_text(B, "●", (-0.4, 0.6), fontsize=10)
    
    plot.add_tick_mark(C, A, 1)
    plot.add_tick_mark(C, B, 1)
    plot.save()

def prob_08():
    plot = GeometryPlotter("problem_08.png")
    base_w = 4
    center = (2.5, 2.5)
    A = (center[0], center[1] + 1.5)
    D = (center[0], center[1] - 1.5)
    B = (center[0] - base_w/2, center[1])
    C = (center[0] + base_w/2, center[1])
    
    plot.draw_line(A, B)
    plot.draw_line(B, D)
    plot.draw_line(D, C)
    plot.draw_line(C, A)
    plot.draw_line(B, C, linestyle='-')
    
    plot.add_text(A, "70°", (0, -0.5))
    plot.add_text(D, "50°", (0, 0.5))
    
    plot.add_angle_arc(C, D, A, radius=1.0)
    # ここは手動で24指定が残っていても、add_textのロジックで24が適用されます
    plot.add_text(C, "$x$", (-0.8, 0.3), fontsize=24) 
    
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, C, 1)
    plot.add_tick_mark(D, B, 2)
    plot.add_tick_mark(D, C, 2)
    plot.save()

def prob_09():
    plot = GeometryPlotter("problem_09.png")
    B, C = (0, 0), (4, 0)
    A = get_isosceles_top(4, 50, (2, 0))
    D = get_isosceles_from_base_angle(4, 20, (2, 0))
    
    plot.draw_polygon([A, B, C])
    plot.draw_line(B, D)
    plot.draw_line(C, D)
    
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(A, "50°", (0, -0.6))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    plot.add_text(D, "D", (0, -0.3))
    
    plot.add_angle_arc(B, C, D, "20°", radius=0.8)
    plot.add_angle_arc(B, D, A, radius=0.5)
    
    plot.add_text(B, "$x$", (0.3, 0.8), fontsize=24)
    
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, C, 1)
    plot.add_tick_mark(D, B, 2)
    plot.add_tick_mark(D, C, 2)
    plot.save()

def prob_10():
    plot = GeometryPlotter("problem_10.png")
    B, C = (0, 0), (4, 0)
    A = get_isosceles_top(4, 50, (2, 0))
    M = (2, 0)
    
    plot.draw_polygon([A, B, C])
    plot.draw_line(A, M)
    
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    plot.add_text(M, "M", (0, -0.3))
    
    plot.add_angle_arc(B, C, A, radius=0.7)
    plot.add_angle_arc(B, C, A, radius=0.8)
    plot.add_angle_arc(C, A, B, radius=0.7)
    plot.add_angle_arc(C, A, B, radius=0.8)
    
    plot.add_right_angle_mark(M, A, C)
    plot.save()

def prob_11():
    plot = GeometryPlotter("problem_11.png")
    B = (-1.5, 0)
    D = (1.5, 0)
    A = (0, 3)
    C = (4, 0)
    
    plot.draw_polygon([A, B, C])
    plot.draw_line(A, D)
    
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    plot.add_text(D, "D", (-0.1, -0.3))
    
    plot.add_angle_arc(B, D, A, "50°") 
    
    plot.add_angle_arc(C, A, B, radius=0.7)
    plot.add_text(C, "38°", (-1.0, 0.3))
    
    plot.add_angle_arc(D, A, C, "$x$")
    
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, D, 1)
    plot.save()

def prob_12():
    plot = GeometryPlotter("problem_12.png")
    B, C = (1, 0), (4, 0)
    A = get_isosceles_top(3, 50, (2.5, 0))
    D = (2.5, 0)
    
    plot.draw_polygon([A, B, C])
    plot.draw_line(A, D, linestyle='-')
    
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    plot.add_text(D, "D", (0, -0.3))
    
    plot.add_text(A, "●", (-0.1, -0.5), fontsize=10)
    plot.add_text(A, "●", (0.1, -0.5), fontsize=10)
    
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, C, 1)
    plot.save()

def prob_13():
    plot = GeometryPlotter("problem_13.png")
    
    x_deg = 20
    x_rad = np.radians(x_deg)
    L = 2.0
    
    def get_r(n):
        return L * np.sin(n * x_rad) / np.sin(x_rad)
    
    O = (0, 0)
    r1 = get_r(1)
    A = (r1 * np.cos(x_rad), r1 * np.sin(x_rad))
    r2 = get_r(2)
    B = (r2, 0)
    r3 = get_r(3)
    C = (r3 * np.cos(x_rad), r3 * np.sin(x_rad))
    r4 = get_r(4)
    D = (r4, 0)
    
    r_max_top = r4 * 1.1 
    M = (r_max_top * np.cos(x_rad), r_max_top * np.sin(x_rad))
    r_max_bottom = r4 * 1.2
    N = (r_max_bottom, 0)
    
    plot.draw_line(O, M, linestyle='-') 
    plot.draw_line(O, N, linestyle='-') 
    
    plot.draw_line(A, B)
    plot.draw_line(B, C)
    plot.draw_line(C, D)
    
    plot.add_text(O, "O", (-0.2, -0.1))
    plot.add_text(A, "A", (-0.1, 0.3))
    plot.add_text(B, "B", (0, -0.3))
    plot.add_text(C, "C", (-0.1, 0.3))
    plot.add_text(D, "D", (0, -0.3))
    plot.add_text(M, "M", (0.2, 0.1))
    plot.add_text(N, "N", (0.2, -0.1))
    
    plot.add_angle_arc(O, N, A, "$x$", radius=0.7) 
    plot.add_angle_arc(C, D, M, "80°", radius=0.6)
    
    plot.add_tick_mark(O, A, 2)
    plot.add_tick_mark(A, B, 2)
    plot.add_tick_mark(B, C, 2)
    plot.add_tick_mark(C, D, 2)
    
    plot.save()

def prob_14():
    plot = GeometryPlotter("problem_14.png")
    B, C = (0, 0), (6, 0)
    A = (3, 4)
    D = (1.5, 0)
    E = (4.5, 0)
    
    plot.draw_polygon([A, B, C])
    plot.draw_line(A, D)
    plot.draw_line(A, E)
    
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    plot.add_text(D, "D", (-0.1, -0.3))
    plot.add_text(E, "E", (0.1, -0.3))
    
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, C, 1)
    plot.add_tick_mark(B, D, 2)
    plot.add_tick_mark(C, E, 2)
    plot.save()

def prob_15():
    plot = GeometryPlotter("problem_15.png")
    B, C = (0, 0), (6, 0)
    A = (3, 4)
    M = (3, 0)
    
    v_BA = np.array(A) - np.array(B)
    D = np.array(B) + v_BA * 0.3
    v_CA = np.array(A) - np.array(C)
    E = np.array(C) + v_CA * 0.3
    
    plot.draw_polygon([A, B, C])
    plot.draw_line(D, M)
    plot.draw_line(E, M)
    
    plot.add_text(A, "A", (0, 0.3))
    plot.add_text(B, "B", (-0.3, -0.1))
    plot.add_text(C, "C", (0.3, -0.1))
    plot.add_text(M, "M", (0, -0.3))
    plot.add_text(D, "D", (-0.3, 0))
    plot.add_text(E, "E", (0.3, 0))
    
    plot.add_tick_mark(A, B, 1)
    plot.add_tick_mark(A, C, 1)
    plot.add_tick_mark(D, B, 2)
    plot.add_tick_mark(E, C, 2)
    plot.save()

if __name__ == "__main__":
    prob_01()
    prob_02()
    prob_03()
    prob_04()
    prob_05()
    prob_06()
    prob_07()
    prob_08()
    prob_09()
    prob_10()
    prob_11()
    prob_12()
    prob_13()
    prob_14()
    prob_15()
    print("All images generated in 'math_problems_centered' folder.")