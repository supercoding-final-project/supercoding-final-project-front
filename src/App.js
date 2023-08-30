import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/globalLayout/globalStyle";
import MainLayout from "./pages/main/MainLayout";
import NotFoundLayout from "./pages/error/NotFoundLayout";
import MentiMyLayout from "./pages/my/MentiMyLayout";
import MentoMyLayout from "./pages/my/MentoMyLayout";
import MentoMainLayout from "./pages/main/MentoMainLayout";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        {/* {mento ? <Route path="/Mento" element={<MentoMainLayout />} /> :<Route path="/" element={<MainLayout />} /> } */}
        <Route path="/" element={<MainLayout />} />
        <Route path="/Mento" element={<MentoMainLayout />} />
        {/* path 경로는 pages의 폴더 이름으로 */}
        <Route path="/my/menti" element={<MentiMyLayout />} />
        <Route path="/my/mento" element={<MentoMyLayout />} />
        <Route path="*" element={<NotFoundLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
