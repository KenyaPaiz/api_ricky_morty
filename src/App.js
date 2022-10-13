import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import ListCharacter from './components/ListCharacter';
import { Navbar} from './components/Navbar';
import { Login } from './components/Login';
import { Perfil } from './components/Perfil';

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className='contenido'>
      {isAuthenticated ? (
        <>
            <Navbar></Navbar>
            <div className="container">
                <ListCharacter></ListCharacter>
            </div>
        </>
      ) : (
        <div className="App-header">
          <Login></Login>
        </div>
      )}
    </div>
  
  );
}

export default App;
