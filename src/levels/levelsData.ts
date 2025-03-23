export interface Level {
  description: string;
  code: string;
  solution: string;
  xp: number;
}

const levels: Level[] = [
  {
    description: "Centralize o texto e mude a cor para vermelho escuro.",
    solution: "text-center text-red-500",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI">
            Este é um exemplo de texto.
          </div>
        );
      }
    `,
    xp: 75,
  },
  {
    description: "Adicione um padding de 8 unidades e um fundo cinza.",
    solution: "p-8 bg-gray-200",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI">
            Este é um exemplo de texto.
          </div>
        );
      }
    `,
    xp: 100
  },
  {
    description: "Crie um botão com fundo azul, texto branco e borda arredondada.",
    solution: "bg-blue-500 text-white rounded",
    code: `
      export default function Button() {
        return (
          <button className="COMPLETE_AQUI">
            Clique aqui
          </button>
        );
      }
    `,
    xp: 140
  },
  {
    description: "Adicione um fundo verde claro ao card.",
    solution: "bg-green-100",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI">
            Este é um exemplo de texto.
          </div>
        );
      }
    `,
    xp: 50
  },
  {
    description: "Adicione um fundo rosa claro ao card e centralize a div.",
    solution: "bg-pink-100 flex justify-center items-center",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI">
            Este é um exemplo de texto.
          </div>
        );
      }
    `,
    xp: 150
  },
  {
    description: "Adicione um fundo amarelo claro ao card.",
    solution: "bg-yellow-100",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI">
            Este é um exemplo de texto.
          </div>
        );
      }
    `,
    xp: 50
  },
  {
    description: "Adicione um fundo roxo claro ao card.",
    solution: "bg-purple-100",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI">
            Este é um exemplo de texto.
          </div>
        );
      }
    `,
    xp: 50
  },
  {
    description: "Adicione um fundo azul claro ao card.",
    solution: "bg-blue-100",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI">
            Este é um exemplo de texto.
          </div>
        );
      }
    `,
    xp: 50
  },
  {
    description: "Adicione um fundo gradiente para direita, que vai de azul claro para azul escuro ao card.",
    solution: "bg-gradient-to-r from-blue-100 to-blue-500",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI">
            Texto com gradiente de azul claro e azul escuro.
          </div>
        );
      }
    `,
    xp: 200
  },
  {
    description: "Adicione um fundo gradiente para esquerda, que vai do azul 400 até o roxo 500 no card.",
    solution: "bg-gradient-to-l from-blue-400 to-purple-500",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI">
            Este é um exemplo de texto.
          </div>
        );
      }
    `,
    xp: 255
  },
];

export default levels;