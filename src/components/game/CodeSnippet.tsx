import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/esm/styles/prism/dracula";

interface CodeSnippetProps {
  code: string;
  className?: string;
  onClassNameChange: (className: string) => void;
}

export default function CodeSnippet({
  code,
  className,
  onClassNameChange,
}: CodeSnippetProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [localClassName, setLocalClassName] = useState(className || "");

  useEffect(() => {
    setLocalClassName(className || "");
  }, [className]);

  const handleBlur = () => {
    setIsEditing(false);
    onClassNameChange(localClassName.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleBlur();
    }
  };

  const codeWithEditableClassName = code.replace(
    /className="COMPLETE_AQUI"/,
    `className="${localClassName || "COMPLETE_AQUI"}"`
  );

  return (
    <div className="mt-4">
      <SyntaxHighlighter language="jsx" style={dracula}>
        {codeWithEditableClassName}
      </SyntaxHighlighter>
      {isEditing ? (
        <input
          type="text"
          value={localClassName}
          onChange={(e) => {
            setLocalClassName(e.target.value);
            onClassNameChange(e.target.value.trim());
          }}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="mt-2 p-2 border border-blue-500 rounded-lg focus:outline-none w-full"
        />
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="mt-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors w-full"
        >
          Editar className
        </button>
      )}
    </div>
  );
}
