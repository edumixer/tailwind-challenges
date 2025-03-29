interface LiveBrowserProps {
  code: string;
}

export default function LiveBrowser({ code }: LiveBrowserProps) {
  const extractContent = (code: string) => {
    const match = code.match(/<div[^>]*>(.*?)<\/div>/s);
    return match ? match[1] : "Este é um exemplo de texto.";
  };

  const extractClasses = (code: string) => {
    const match = code.match(/className="([^"]*)"/);
    return match ? match[1] : "";
  };

  const content = extractContent(code);
  const classes = extractClasses(code);

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <div className={classes} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
