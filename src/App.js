import logo from './logo.svg';
import './App.css';
import Example from './Example';
import { useState } from 'react';

//Git quản lý bằng branch asdsa
// branch main (master/ production) -> deploy production tới user
// branch clone/ master -> test chức năng trước khi đẩy production.
// developer -> tạo branch từ production
// login -> tạo từ production 1 branch tên là ... 123-login
// đẩy code lên git -> tạo Merge request để merge production (cherry pick code -> clone)
// testor -> test trên clone -> còn bug -> dev fix bug -> (hết bug) acp lên production -> testor test
// lại trên production 1 lần nữa
function App() {
  const [exam, setExam] = useState("Page Home");
   
    const handleClick = () => {
        console.log("click")
        setExam("Page Account");
    }
  return (
    <div className="App">
      <Example name={exam} click={handleClick}/>
    </div>
  );
}

export default App;
