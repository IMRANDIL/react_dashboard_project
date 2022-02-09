import { useState } from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';





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
      <Navbar sideBarOpen={sidebarOpen} openSideBar={openSideBar} />
      <h1>React Dashboard</h1>
    </div>
  );
}

export default App;
