import { useState } from 'react'
import './App.css';





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
      <h1>React Dashboard</h1>
    </div>
  );
}

export default App;
