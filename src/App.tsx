import { useState } from "react";
import { Header } from "./components/Header";
import { SnakeView } from "./views/SnakeView";
import { ChatView } from "./views/ChatView";

type TabId = "snake" | "chat";

const TABS: { id: TabId; label: string }[] = [
  { id: "snake", label: "Snake" },
  { id: "chat", label: "Chat" },
];

function readSavedTab(): TabId {
  try {
    const saved = localStorage.getItem("active_tab");
    return saved === "chat" || saved === "snake" ? saved : "snake";
  } catch {
    return "snake";
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>(readSavedTab);

  const switchTab = (id: TabId) => {
    setActiveTab(id);
    try { localStorage.setItem("active_tab", id); } catch { /* storage unavailable */ }
  };

  return (
    <div className="app">
      <Header activeTab={activeTab} />

      <div className="app-tabs">
        <div className="tab-bar" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={t.id === activeTab}
              className={`tab-btn${t.id === activeTab ? " tab-btn--active" : ""}`}
              onClick={() => switchTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "snake" ? <SnakeView /> : <ChatView />}
      </div>
    </div>
  );
}
