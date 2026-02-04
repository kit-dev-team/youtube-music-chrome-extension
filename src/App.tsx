// src/App.tsx
import { useState } from "react";

function App() {
  const [view, setView] = useState<"main" | "playlist">("main");

  return (
    <div style={{ padding: "20px" }}>
      {view === "main" ? (
        <div>
          <h1>유튜브 뮤직 매니저</h1>
          <button onClick={() => setView("playlist")}>
            재생목록 관리 화면으로 이동
          </button>
        </div>
      ) : (
        <div>
          <h1>내 재생목록</h1>
          <button onClick={() => setView("main")}>뒤로 가기</button>
          {/* 여기서 서버(8080) 데이터를 리스트로 뿌려주면 끝! */}
        </div>
      )}
    </div>
  );
}

export default App;
