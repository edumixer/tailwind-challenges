import { Level } from "@/api/levels/levelsData";
import Feedback, { FeedbackProps } from "@/components/game/Feedback";
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CodeSnippet from "../game/CodeSnippet";
import ColorPalette from "../game/ColorPalette";
import LevelSelector from "../game/LevelSelector";
import LiveBrowser from "../game/LiveBrowser";

const levelXPRequirements = [
  0, 100, 220, 360, 450, 530, 600, 690, 750, 800, 1120,
];
export default function ExerciseGame({ levels }: { levels: Level[] }) {
  const { levelId } = useParams();
  const navigate = useNavigate();

  const [currentLevel, setCurrentLevel] = useState(() =>
    levels.findIndex((l) => l.id === Number(levelId))
  );
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState<FeedbackProps>({
    message: "",
    type: "success",
  });
  const [isColorPaletteOpen, setIsColorPaletteOpen] = useState(false);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [currentXP, setCurrentXP] = useState(0);
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  useEffect(() => {
    const levelIndex = levels.findIndex((l) => l.id === Number(levelId));
    if (levelIndex !== -1) {
      setCurrentLevel(levelIndex);
      setUserInput("");
      setFeedback({ message: "", type: "success" });
    }
  }, [levelId]);

  const getLiveBrowserCode = () => {
    const level = levels[currentLevel];
    // Substitui COMPLETE_AQUI e remove a parte de export default
    return level.code
      .replace("COMPLETE_AQUI", userInput || "")
      .replace(/^.*export default function[^{]*{/, "")
      .replace(/}[^}]*$/, "");
  };

  const handleCheck = () => {
    const level = levels[currentLevel];
    if (userInput.trim() === level.solution) {
      setFeedback({ message: "Parabéns! Você acertou!", type: "success" });
      setCurrentXP((prev) => prev + level.xp);

      if (!completedLevels.includes(currentLevel)) {
        setCompletedLevels([...completedLevels, currentLevel]);
      }

      if (currentLevel < levels.length - 1) {
        const nextLevel = levels[currentLevel + 1];
        navigate(
          `/${nextLevel.difficulty}/${nextLevel.category}/${nextLevel.id}`
        );
      } else {
        setIsGameCompleted(true);
      }
    } else {
      setFeedback({ message: "Tente novamente!", type: "error" });
    }
  };

  const handleSelectLevel = (levelIndex: number) => {
    const level = levels[levelIndex];
    navigate(`/${level.difficulty}/${level.category}/${level.id}`);
  };

  const calculateCurrentLevelIndex = () => {
    for (let i = levelXPRequirements.length - 1; i >= 0; i--) {
      if (currentXP >= levelXPRequirements[i]) {
        return Math.min(i, levels.length - 1);
      }
    }
    return 0;
  };

  const currentLevelIndex = calculateCurrentLevelIndex();
  const nextLevelXPRequirement =
    levelXPRequirements[currentLevelIndex + 1] ||
    levelXPRequirements[levelXPRequirements.length - 1];

  const progress = nextLevelXPRequirement
    ? Math.min(
        ((currentXP - levelXPRequirements[currentLevelIndex]) /
          (nextLevelXPRequirement - levelXPRequirements[currentLevelIndex])) *
          100,
        100
      )
    : 100;

  const displayCurrentLevel = isGameCompleted
    ? levels.length - 1
    : currentLevelIndex;
  const displayNextLevel = isGameCompleted
    ? levels.length
    : Math.min(currentLevelIndex + 1, levels.length);

  return (
    <div className="container mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-2 p-4">
          Aprenda Tailwind CSS
        </h1>
        <p className="text-gray-600">
          Complete os desafios para dominar o Tailwind CSS!
        </p>
      </header>

      <div className="mb-8 p-6">
        <div className="flex items-center">
          <span className="text-gray-700 mr-2">{displayCurrentLevel}</span>
          <div className="flex-1">
            <ProgressBar
              completed={progress}
              bgColor="#3b82f6"
              height="10px"
              baseBgColor="#e5e7eb"
              isLabelVisible={false}
            />
          </div>
          <span className="text-gray-700 ml-2">{displayNextLevel}</span>
        </div>
        <div className="text-center mt-2 text-gray-700">
          XP: {currentXP} / {nextLevelXPRequirement}
        </div>
      </div>

      <LevelSelector
        levels={levels}
        currentLevel={currentLevel}
        onSelectLevel={handleSelectLevel}
        completedLevels={completedLevels}
      />

      {isGameCompleted ? (
        <div className="text-center text-green-600 text-2xl font-bold mt-8">
          Parabéns! Você completou todos os níveis! 🎉
        </div>
      ) : (
        <>
          <div className="my-6 p-6 bg-white shadow-lg rounded-lg">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Desafio {currentLevel + 1}:</span>{" "}
              {levels[currentLevel].description}
            </p>

            <CodeSnippet
              code={levels[currentLevel].code}
              className={userInput}
              onClassNameChange={setUserInput}
            />

            <button
              onClick={handleCheck}
              className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Verificar
            </button>
          </div>

          <Feedback message={feedback.message} type={feedback.type} />

          <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Visualização
            </h2>

            {/* <LiveBrowser className={userInput} /> */}
            <LiveBrowser code={getLiveBrowserCode()} />
          </div>
        </>
      )}

      <button
        onClick={() => setIsColorPaletteOpen(true)}
        className="fixed right-4 bottom-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
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
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </button>

      <ColorPalette
        isOpen={isColorPaletteOpen}
        onClose={() => setIsColorPaletteOpen(false)}
      />
    </div>
  );
}
