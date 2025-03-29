export interface Level {
  id: number;
  difficulty: 'facil' | 'medio' | 'dificil';
  category: 'texto' | 'background' | 'layout' | 'bordas' | 'espacamento';
  description: string;
  code: string;
  solution: string;
  xp: number;
}

const levels: Level[] = [
  // ========== FÁCIL - TEXTO ==========
  {
    id: 1,
    difficulty: 'facil',
    category: 'texto',
    description: "Centralize o texto e mude a cor para vermelho 500.",
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
    id: 2,
    difficulty: 'facil',
    category: 'texto',
    description: "Alinhe o texto à direita e use fonte negrito.",
    solution: "text-right font-bold",
    code: `
      export default function Card() {
        return (
          <p className="COMPLETE_AQUI">
            Texto alinhado à direita.
          </p>
        );
      }
    `,
    xp: 80,
  },
  {
    id: 3,
    difficulty: 'facil',
    category: 'texto',
    description: "Aumente o tamanho do texto para xl e mude a cor para azul 500.",
    solution: "text-xl text-blue-500",
    code: `
      export default function Card() {
        return (
          <h1 className="COMPLETE_AQUI">
            Título grande
          </h1>
        );
      }
    `,
    xp: 90,
  },

  // ========== FÁCIL - BACKGROUND ==========
  {
    id: 4,
    difficulty: 'facil',
    category: 'background',
    description: "Adicione um fundo amarelo no card.",
    solution: "bg-yellow-100",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI p-4">
            Card com fundo
          </div>
        );
      }
    `,
    xp: 50,
  },
  {
    id: 5,
    difficulty: 'facil',
    category: 'background',
    description: "Adicione um fundo gradiente vertical de azul 400 para roxo 400.",
    solution: "bg-gradient-to-b from-blue-400 to-purple-400",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI p-6 text-black">
            Gradiente vertical
          </div>
        );
      }
    `,
    xp: 120,
  },

  // ========== FÁCIL - LAYOUT ==========
  {
    id: 6,
    difficulty: 'facil',
    category: 'layout',
    description: "Centralize a div horizontalmente na página.",
    solution: "mx-auto",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI w-1/2 bg-gray-100 p-4">
            Div centralizada
          </div>
        );
      }
    `,
    xp: 100,
  },
  {
    id: 7,
    difficulty: 'facil',
    category: 'layout',
    description: "Crie um container com largura máxima de 1280px.",
    solution: "container max-w-5xl",
    code: `
      export default function Page() {
        return (
          <div className="COMPLETE_AQUI mx-auto">
            Conteúdo da página
          </div>
        );
      }
    `,
    xp: 80,
  },

  // ========== FÁCIL - BORDAS ==========
  {
    id: 8,
    difficulty: 'facil',
    category: 'bordas',
    description: "Adicione uma borda arredondada ao botão.",
    solution: "rounded",
    code: `
      export default function Button() {
        return (
          <button className="COMPLETE_AQUI bg-blue-500 text-black px-4 py-2">
            Botão
          </button>
        );
      }
    `,
    xp: 60,
  },
  {
    id: 9,
    difficulty: 'facil',
    category: 'bordas',
    description: "Adicione uma borda de 2px com a cor da borda de vermelho 500.",
    solution: "border-2 border-red-500",
    code: `
      export default function Alert() {
        return (
          <div className="COMPLETE_AQUI p-4">
            Alerta importante
          </div>
        );
      }
    `,
    xp: 70,
  },

  // ========== FÁCIL - ESPAÇAMENTO ==========
  {
    id: 10,
    difficulty: 'facil',
    category: 'espacamento',
    description: "Adicione um padding de 8 unidades em todos os lados.",
    solution: "p-8",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI bg-gray-100">
            Card com espaçamento
          </div>
        );
      }
    `,
    xp: 50,
  },
  {
    id: 11,
    difficulty: 'facil',
    category: 'espacamento',
    description: "Adicione margin superior de 4 unidades e margin inferior de 8.",
    solution: "mt-4 mb-8",
    code: `
      export default function Section() {
        return (
          <div className="COMPLETE_AQUI">
            Seção com margens
          </div>
        );
      }
    `,
    xp: 80,
  },

  // ========== MÉDIO - TEXTO ==========
  {
    id: 12,
    difficulty: 'medio',
    category: 'texto',
    description: "Adicione um sublinhado decorativo rosa 100 com espaçamento de 2px.",
    solution: "underline decoration-pink-100 underline-offset-2",
    code: `
      export default function Link() {
        return (
          <a href="#" className="COMPLETE_AQUI">
            Link destacado
          </a>
        );
      }
    `,
    xp: 150,
  },
  {
    id: 13,
    difficulty: 'medio',
    category: 'texto',
    description: "Crie um texto com sombra e transforme para maiúsculas.",
    solution: "text-shadow-md uppercase",
    code: `
      export default function Heading() {
        return (
          <h1 className="COMPLETE_AQUI text-2xl">
            Título estilizado
          </h1>
        );
      }
    `,
    xp: 160,
  },

  // ========== MÉDIO - BACKGROUND ==========
  {
    id: 14,
    difficulty: 'dificil',
    category: 'background',
    description: "Crie um fundo com padrão de listras diagonais.",
    solution: "bg-stripes bg-stripes-white bg-blue-500",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI p-6 text-black">
            Card com padrão
          </div>
        );
      }
    `,
    xp: 180,
  },

  // ========== DIFÍCIL - LAYOUT ==========
  {
    id: 15,
    difficulty: 'dificil',
    category: 'layout',
    description: "Crie um grid responsivo com 3 colunas no desktop e 1 no mobile.",
    solution: "grid grid-cols-1 md:grid-cols-3",
    code: `
      export default function Gallery() {
        return (
          <div className="COMPLETE_AQUI gap-4">
            <div className="bg-gray-200 p-4">Item 1</div>
            <div className="bg-gray-200 p-4">Item 2</div>
            <div className="bg-gray-200 p-4">Item 3</div>
          </div>
        );
      }
    `,
    xp: 250,
  },

  // ========== DIFÍCIL - BORDAS ==========
  {
    id: 16,
    difficulty: 'dificil',
    category: 'bordas',
    description: "Crie uma borda de 2px com gradiente para a direita do rosa 100 para o azul 500.",
    solution: "border-2 border-transparent bg-gradient-to-r from-pink-500 to-blue-500",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI p-6">
            Card com borda gradiente
          </div>
        );
      }
    `,
    xp: 280,
  },

  // ========== DIFÍCIL - ESPAÇAMENTO ==========
  {
    id: 17,
    difficulty: 'dificil',
    category: 'espacamento',
    description: "Aplique espaçamentos diferentes em cada lado (top:8, right:4, bottom:12, left:2).",
    solution: "pt-8 pr-4 pb-12 pl-2",
    code: `
      export default function Card() {
        return (
          <div className="COMPLETE_AQUI bg-gray-100">
            Card com espaçamentos assimétricos
          </div>
        );
      }
    `,
    xp: 200,
  },
  {
    id: 18,
    difficulty: 'facil',
    category: 'layout',
    description: "Crie uma lista não ordenada com espaçamento entre itens de 2 unidades.",
    solution: "space-y-2",
    code: `
      export default function Lista() {
        return (
          <ul className="COMPLETE_AQUI">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        );
      }
    `,
    xp: 85,
  },
  {
    id: 19,
    difficulty: 'facil',
    category: 'layout',
    description: "Adicione padding à lista para que os marcadores fiquem visíveis.",
    solution: "pl-6",
    code: `
      export default function Lista() {
        return (
          <ul className="COMPLETE_AQUI">
            <li>Maçã</li>
            <li>Banana</li>
            <li>Laranja</li>
          </ul>
        );
      }
    `,
    xp: 70,
  },
  {
    id: 20,
    difficulty: 'medio',
    category: 'layout',
    description: "Crie uma lista horizontal com flexbox e gap de 4 unidades.",
    solution: "flex gap-4",
    code: `
      export default function ListaHorizontal() {
        return (
          <ul className="COMPLETE_AQUI">
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        );
      }
    `,
    xp: 130,
  },
  {
    id: 21,
    difficulty: 'dificil',
    category: 'layout',
    description: "Deixe os marcadores da lista visíveis e adicione espaçamento entre os itens",
    solution: "list-disc pl-5 space-y-2",
    code: `
      export default function ListaSimples() {
        return (
          <ul className="COMPLETE_AQUI">
            <li>Tarefa 1</li>
            <li>Tarefa 2</li>
            <li>Tarefa 3</li>
          </ul>
        );
      }
    `,
    xp: 65,
  },
];

export default levels;