import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from 'pages/myPage';
import Main from 'pages/main';
import Auth from 'pages/auth';
import UserEdit from 'pages/myPage/edit';
import WritePost from 'pages/portfolio/write';
import PortfolioDetail from 'pages/portfolio/detail/[id]';
import Header from 'components/common/header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/myPage">
          <Route path="" element={<MyPage />} />
          <Route path="edit" element={<UserEdit />} />
        </Route>
        <Route path="/portfolio">
          <Route path="write" element={<WritePost />} />
          <Route path="detail/:id" element={<PortfolioDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
