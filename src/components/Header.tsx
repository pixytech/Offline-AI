const SUBTITLES: Record<string, string> = {
  snake: 'Small language models play Snake in your browser, with live latency and tokens per second.',
  chat: 'Chat with language models offline in the browser, or through Claude, OpenAI and Gemini.',
};

interface Props { activeTab: string; }

export function Header({ activeTab }: Props) {
  return (
    <header className="app-header">
      <div>
        <h1>Offline-AI</h1>
        <p>{SUBTITLES[activeTab] ?? SUBTITLES.snake}</p>
      </div>
      <a href="https://github.com/pixytech/Offline-AI" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </header>
  );
}
