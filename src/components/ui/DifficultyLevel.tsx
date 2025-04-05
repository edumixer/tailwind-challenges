import { Level } from "@/api/levels/levelsData";
import { useNavigate, useParams } from "react-router-dom";

export default function DifficultyLevel({ levels }: { levels: Level[] }) {
  const { difficulty } = useParams();
  const navigate = useNavigate();

  const categories = [
    ...new Set(
      levels.filter((l) => l.difficulty === difficulty).map((l) => l.category)
    ),
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 capitalize mt-10 p-8 text-center">
        {difficulty}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => navigate(`/${difficulty}/${category}`)}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h2 className="text-xl font-semibold capitalize">{category}</h2>
            <p className="text-gray-500">
              {
                levels.filter(
                  (l) => l.difficulty === difficulty && l.category === category
                ).length
              }{" "}
              níveis
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
