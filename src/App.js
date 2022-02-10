import { useState } from 'react'
import './App.css';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';





const App = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);


  const openSideBar = () => {
    setSideBarOpen(true)
  }

  const closeSideBar = () => {
    setSideBarOpen(false)
  }



  return (
    <div className="container">
      <Navbar openSideBar={openSideBar} closeSideBar={closeSideBar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSideBar={closeSideBar} />
    </div>
  );
}

export default App;
