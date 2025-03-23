interface Level {
  description: string;
  code: string;
  solution: string;
}

interface LevelSelectorProps {
  levels: Level[];
  currentLevel: number;
  onSelectLevel: (levelIndex: number) => void;
  completedLevels: number[];
}

export default function LevelSelector({
  levels,
  currentLevel,
  onSelectLevel,
  completedLevels,
}: LevelSelectorProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Selecione o Nível</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {levels.map((level, index) => (
          <button
            key={index}
            onClick={() => onSelectLevel(index)}
            className={`p-4 rounded-lg text-center transition-colors ${
              currentLevel === index
                ? "bg-blue-500 text-white"
                : completedLevels.includes(index)
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <span>Nível {index + 1}</span>
              {completedLevels.includes(index) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
