import { Navigate, Outlet  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';


function App() {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
