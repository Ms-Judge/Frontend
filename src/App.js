import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import ContestList from './pages/contest/ContestList'
import OpenContest  from './pages/contest/OpenContest'
import Question from './pages/question/Question';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import MyPage from './pages/user/MyPage';
import GlobalStyles from './styles/GlobalStyles';



function App() {
  return (
    <>
      <GlobalStyles />
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
    </>
  );
}


export default App;
