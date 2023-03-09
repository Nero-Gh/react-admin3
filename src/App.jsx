import react from 'react'
import Sidebar from "./components/sidebar.jsx/Sidebar";
import Topbar from "./components/topbar/Topbar";
import  Home from './pages/home/Home'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
