import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ContestList from "./pages/contest/contestList";
import OpenContest from "./pages/contest/openContest";
import Question from "./pages/question/Question";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signUp";
import MyPage from "./pages/user/mypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/OpenContest" element={<OpenContest />} />
        <Route path="/ContestList" element={<ContestList />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/Mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
