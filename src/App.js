import logo from "./logo.svg";
import "./App.css";
import Example from "./Example";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { QueryClient, QueryClientProvider } from "react-query";
//Git quản lý bằng branch, thông qua pull request conflict 1
//Git quản lý bằng branch, thông qua pull request conflict 2
// branch main (master/ production) -> deploy production tới user
// branch clone/ master -> test chức năng trước khi đẩy production.
// developer -> tạo branch từ production
// login -> tạo từ production 1 branch tên là ... 123-login
// đẩy code lên git -> tạo Merge request để merge production (cherry pick code -> clone)
// testor -> test trên clone -> còn bug -> dev fix bug -> (hết bug) acp lên production -> testor test
// lại trên production 1 lần nữa
// máy tính (local) - git server
// branch trên local chưa chắc server có (cần phải public)
// remote
function App() {
  const location = useLocation();
  const [exam, setExam] = useState("Page Home");
  const queryClient = new QueryClient();
  const handleClick = () => {
    console.log("click");
    setExam("Page Account");
  };
  console.log(location);
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="App">
          <div>sad</div>
          <>
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
