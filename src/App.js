
import './App.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div>
      <Titulo></Titulo>
      <Subtitulo comision="c19i" estado={true}/>
      <hr/>
      <Button variant="primary" >Primary</Button>
  
    </div>
    
  );
}

export default App;
