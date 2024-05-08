import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import ContestList from './pages/contest/ContestList'
import OpenContest  from './pages/contest/OpenContest'
import Question from './pages/question/Question';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Main />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/OpenContest' element={<OpenContest />} />
        <Route path='/ContestList' element={<ContestList />} />
        <Route path='/Question' element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
