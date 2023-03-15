import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "pages/myPage";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MyPage />} path="/myPage" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
