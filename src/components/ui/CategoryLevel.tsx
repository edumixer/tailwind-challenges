import { Level } from "@/api/levels/levelsData";
import { useNavigate, useParams } from "react-router-dom";

export default function CategoryLevel({ levels }: { levels: Level[] }) {
  const { difficulty, category } = useParams();
  const navigate = useNavigate();

  const categoryLevels = levels.filter(
    (l) => l.difficulty === difficulty && l.category === category
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 capitalize">
        {difficulty} - {category}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryLevels.map((level) => (
          <div
            key={level.id}
            onClick={() => navigate(`/${difficulty}/${category}/${level.id}`)}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h3 className="font-semibold">Nível {level.id}</h3>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {level.description}
            </p>
            <p className="text-xs text-gray-500 mt-2">{level.xp} XP</p>
          </div>
        ))}
      </div>
    </div>
  );
}
