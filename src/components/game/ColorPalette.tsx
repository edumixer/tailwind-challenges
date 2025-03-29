import { colors } from "@/utils/colors";
import { useState } from "react";

interface ColorPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ColorPalette({ isOpen, onClose }: ColorPaletteProps) {
  const [copied, setCopied] = useState("");

  const handleCopy = (colorClass: string) => {
    navigator.clipboard.writeText(colorClass);
    setCopied(colorClass);
    setTimeout(() => setCopied(""), 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Paleta de Cores
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {Object.entries(colors).map(([color, shades]) => (
            <div key={color}>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 capitalize">
                {color}
              </h3>
              <div className="space-y-2">
                {Object.entries(shades).map(([shade, hex]) => {
                  const colorClass = `bg-${color}-${
                    shade === "default" ? "" : shade
                  }`;
                  return (
                    <div
                      key={shade}
                      className="flex items-center space-x-2 p-2 rounded-lg cursor-pointer hover:bg-gray-100"
                      onClick={() => handleCopy(colorClass)}
                    >
                      <div
                        className="w-8 h-8 rounded-full border border-gray-200"
                        style={{ backgroundColor: hex }}
                      />
                      <span className="text-sm text-gray-700">
                        {colorClass}
                      </span>
                      {copied === colorClass && (
                        <span className="text-sm text-green-500">Copiado!</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
