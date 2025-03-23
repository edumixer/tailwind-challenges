interface LiveBrowserProps {
  className?: string;
}

export default function LiveBrowser({ className }: LiveBrowserProps) {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <div className={className}>Este é um exemplo de texto.</div>
    </div>
  );
}
