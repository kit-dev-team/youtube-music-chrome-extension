// 아이콘 클릭 시 사이드패널이 열리도록 설정
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error("SidePanel 설정 오류:", error));

chrome.runtime.onInstalled.addListener(() => {
  console.log("YouTube Music Manager 설치 완료!");
});
