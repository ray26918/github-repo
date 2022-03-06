import { Outlet, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Outlet />
      <Header />
      { <Navigate to='/repos' replace = {true} /> }
    </div>
  );
}

export default App;
