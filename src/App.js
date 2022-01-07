
import './App.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import "bootstrap/dist/css/bootstrap.min.css"
import FormTareas from './components/FormTareas';


function App() {
  return (
    <div>
      <Titulo></Titulo>
      <Subtitulo comision="c19i" estado={true}/>
      <hr/>
      <FormTareas></FormTareas>
    </div>
    
  );
}

export default App;
