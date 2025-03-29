import { Level } from "@/api/levels/levelsData";
import { Link } from "react-router-dom";

export default function Sidebar({ levels }: { levels: Level[] }) {
  const difficultyCounts = levels.reduce((acc, level) => {
    acc[level.difficulty] = (acc[level.difficulty] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categoryCounts = levels.reduce((acc, level) => {
    acc[level.category] = (acc[level.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="w-64 bg-gradient-to-b from-blue-50 to-indigo-50 shadow-xl h-screen fixed top-0 left-0 overflow-y-auto flex flex-col">
      <div className="p-6 bg-indigo-600 text-white">
        <h2 className="text-xl font-bold">Tailwind Challenges</h2>
        <p className="text-indigo-100 text-sm mt-1">Selecione uma categoria</p>
      </div>

      <div className="flex-1 p-4 space-y-6">
        <div>
          <h3 className="font-semibold text-gray-700 mb-3 px-2 flex items-center">
            <span className="mr-2">📊</span>
            Dificuldade
          </h3>
          <ul className="space-y-2">
            {["facil", "medio", "dificil"].map((difficulty) => (
              <li key={difficulty}>
                <Link
                  to={`/${difficulty}`}
                  className={`flex justify-between items-center px-4 py-2 rounded-lg transition-all ${
                    difficulty === "facil"
                      ? "bg-green-50 hover:bg-green-100"
                      : difficulty === "medio"
                      ? "bg-yellow-50 hover:bg-yellow-100"
                      : "bg-red-50 hover:bg-red-100"
                  }`}
                >
                  <span className="capitalize font-medium">
                    {difficulty === "facil"
                      ? "Fácil"
                      : difficulty === "medio"
                      ? "Médio"
                      : "Difícil"}
                  </span>
                  <span className="bg-white px-2 py-1 rounded-full text-xs font-bold">
                    {difficultyCounts[difficulty] || 0}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700 mb-3 px-2 flex items-center">
            <span className="mr-2">🗂️</span>
            Tipos de Exercícios
          </h3>
          <ul className="space-y-2">
            {Object.keys(categoryCounts).map((category) => (
              <li key={category}>
                <Link
                  to={`/facil/${category}`}
                  className="flex justify-between items-center px-4 py-2 rounded-lg bg-white hover:bg-indigo-100 transition-all"
                >
                  <span className="capitalize font-medium">
                    {category === "texto"
                      ? "Texto"
                      : category === "background"
                      ? "Background"
                      : category === "layout"
                      ? "Layout"
                      : category === "bordas"
                      ? "Bordas"
                      : "Espaçamento"}
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-bold">
                    {categoryCounts[category]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-4 border-t border-indigo-100 bg-white">
        <p className="text-center text-sm text-gray-500">
          Total de exercícios: {levels.length}
        </p>
      </div>
    </div>
  );
}
