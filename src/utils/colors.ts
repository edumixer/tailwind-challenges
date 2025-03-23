export interface ColorShades {
  [shade: string]: string;
}

export interface Colors {
  [color: string]: ColorShades;
}

export const colors: Colors = {
  gray: { 200: "#e5e7eb" },
  blue: { 100: "#dbeafe", 400: "#60a5fa", 500: "#3b82f6" },
  green: { 100: "#dcfce7" },
  pink: { 100: "#fce7f3" },
  yellow: { 100: "#fef9c3" },
  purple: { 100: "#f3e8ff", 500: "#a855f7" },
  red: { 100: "#fee2e2", 500: "#ef4444" },
  white: { default: "#ffffff" },
};