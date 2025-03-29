import levels from "@/api/levels/levelsData";
import Sidebar from "@/components/layout/Sidebar";
import CategoryLevel from "@/components/ui/CategoryLevel";
import DifficultyLevel from "@/components/ui/DifficultyLevel";
import ExerciseGame from "@/components/ui/ExerciseGame";
import Home from "@/components/ui/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar levels={levels} />

      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/:difficulty"
            element={<DifficultyLevel levels={levels} />}
          />
          <Route
            path="/:difficulty/:category"
            element={<CategoryLevel levels={levels} />}
          />
          <Route
            path="/:difficulty/:category/:levelId"
            element={<ExerciseGame levels={levels} />}
          />
        </Routes>
      </div>
    </div>
  );
}
