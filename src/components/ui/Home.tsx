import { Code, Paintbrush, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative inline-block mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Tailwind Challenges
          </h1>
          <Sparkles
            className="absolute -top-4 -right-6 text-yellow-400 animate-pulse"
            size={32}
          />
        </div>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Domine Tailwind CSS através de desafios práticos e divertidos!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 cursor-pointer">
          {[
            {
              icon: <Paintbrush size={40} className="text-blue-600 mx-auto" />,
              title: "Aprenda na Prática",
              description: "Exercícios hands-on para cada conceito do Tailwind",
            },
            {
              icon: <Code size={40} className="text-purple-600 mx-auto" />,
              title: "Desafios Reais",
              description: "Problemas comuns do dia a dia de desenvolvimento",
            },
            {
              icon: <Sparkles size={40} className="text-indigo-600 mx-auto" />,
              title: "Progresso Visual",
              description: "Acompanhe sua evolução com nosso sistema de níveis",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/facil"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
          >
            Começar Agora
          </Link>
          <Link
            to="/facil/texto"
            className="px-8 py-3 bg-white text-indigo-600 font-semibold border-2 border-indigo-600 rounded-lg shadow-md hover:bg-indigo-50 transition-all"
          >
            Primeiro Desafio
          </Link>
        </div>

        {/* Dica rápida */}
        <p className="mt-12 text-gray-500 flex items-center justify-center gap-2">
          <Sparkles size={16} className="text-yellow-400" />
          Dica: Use o menu lateral para navegar entre os desafios
          <Sparkles size={16} className="text-yellow-400" />
        </p>
      </div>
    </div>
  );
}
