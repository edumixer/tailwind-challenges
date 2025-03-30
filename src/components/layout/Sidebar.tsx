import { Level } from "@/api/levels/levelsData";
import {
  ChevronLeft,
  ChevronRight,
  CircleSlash2,
  Image,
  LayoutGrid,
  Space,
  Type,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ levels }: { levels: Level[] }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const difficultyCounts = levels.reduce((acc, level) => {
    acc[level.difficulty] = (acc[level.difficulty] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categoryCounts = levels.reduce((acc, level) => {
    acc[level.category] = (acc[level.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categoryIcons = {
    texto: <Type size={18} className="text-indigo-600" />,
    background: <Image size={18} className="text-indigo-600" />,
    layout: <LayoutGrid size={18} className="text-indigo-600" />,
    bordas: <CircleSlash2 size={18} className="text-indigo-600" />,
    espacamento: <Space size={18} className="text-indigo-600" />,
  };

  return (
    <div className="relative">
      <div
        className={`${
          isCollapsed ? "w-20" : "w-64"
        } bg-gradient-to-b from-blue-50 to-indigo-50 shadow-xl h-screen fixed top-0 left-0 flex flex-col transition-all duration-300`}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-5 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition-all z-50 border-2 border-white flex items-center justify-center w-8 h-8"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>

        <div className="p-6 bg-indigo-600 text-white sticky top-0 z-10">
          {isCollapsed ? (
            <h2 className="text-xl font-bold text-center">TC</h2>
          ) : (
            <>
              <h2 className="text-xl font-bold">Tailwind Challenges</h2>
              <p className="text-indigo-100 text-sm mt-1">
                Selecione uma categoria
              </p>
            </>
          )}
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-6">
            <div>
              {!isCollapsed && (
                <h3 className="font-semibold text-gray-700 mb-3 px-2 flex items-center">
                  <span className="mr-2">📊</span>
                  Dificuldade
                </h3>
              )}
              <ul className="space-y-2">
                {["facil", "medio", "dificil"].map((difficulty) => (
                  <li key={difficulty}>
                    <Link
                      to={`/${difficulty}`}
                      className={`flex ${
                        isCollapsed ? "justify-center" : "justify-between"
                      } items-center px-4 py-2 rounded-lg transition-all ${
                        difficulty === "facil"
                          ? "bg-green-50 hover:bg-green-100"
                          : difficulty === "medio"
                          ? "bg-yellow-50 hover:bg-yellow-100"
                          : "bg-red-50 hover:bg-red-100"
                      }`}
                      title={
                        difficulty === "facil"
                          ? "Fácil"
                          : difficulty === "medio"
                          ? "Médio"
                          : "Difícil"
                      }
                    >
                      {isCollapsed ? (
                        <span className="font-medium">
                          {difficulty.charAt(0).toUpperCase()}
                        </span>
                      ) : (
                        <>
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
                        </>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {!isCollapsed && (
                <h3 className="font-semibold text-gray-700 mb-3 px-2 flex items-center">
                  <span className="mr-2">🗂️</span>
                  Tipos de Exercícios
                </h3>
              )}
              <ul className="space-y-2">
                {Object.keys(categoryCounts).map((category) => (
                  <li key={category}>
                    <Link
                      to={`/facil/${category}`}
                      className={`flex ${
                        isCollapsed ? "justify-center" : "justify-between"
                      } items-center px-4 py-2 rounded-lg bg-white hover:bg-indigo-100 transition-all`}
                      title={
                        category === "texto"
                          ? "Texto"
                          : category === "background"
                          ? "Background"
                          : category === "layout"
                          ? "Layout"
                          : category === "bordas"
                          ? "Bordas"
                          : "Espaçamento"
                      }
                    >
                      <div className="flex items-center gap-2">
                        {categoryIcons[category as keyof typeof categoryIcons]}
                        {!isCollapsed && (
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
                        )}
                      </div>
                      {!isCollapsed && (
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-bold">
                          {categoryCounts[category]}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {!isCollapsed && (
          <div className="p-4 border-t border-indigo-100 bg-white sticky bottom-0">
            <p className="text-center text-sm text-gray-500">
              Total de exercícios: {levels.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
