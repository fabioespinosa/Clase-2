import React, {Component} from 'react';
import axios from 'axios';
import Estudiante from './estudiante';

const ROOT_URL = "http://157.253.124.182:5030";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      estudiantes: [],
      nombre: '',
      codigo: '',
      nota: ''
    }
  }
  
  agregarEstudiante() {
    axios.post(ROOT_URL+ "/estudiantes", {
      nombre: this.state.nombre,
      codigo: this.state.codigo,
      nota: this.state.nota
    })
    .then(response => {
      this.obtenerEstudiantes();
    })
  }
  
  obtenerEstudiantes() {
    axios.get(ROOT_URL+ "/estudiantes")
    .then(response => {
      this.setState({
        estudiantes: response.data
      })
    })
  }
  
  
  
  render() {
    return(
      <div>
        <button onClick={this.obtenerEstudiantes.bind(this)}>
          Obtener estudiantes 
        </button>
        {this.state.estudiantes.map(estudiante => {
          return <Estudiante estudiante={estudiante} />
        })}
        
        Nombre:
        <input type="text" value={this.state.nombre} onChange={(event) => {
          this.setState({nombre: event.target.value})
        }} />
        
        Codigo:
        <input type="text" value={this.state.codigo} onChange={(event) => {
          this.setState({codigo: event.target.value})
        }} />
        Nota:
        <input type="text" value={this.state.nota} onChange={(event) => {
          this.setState({nota: event.target.value})
        }} />
        
        <button onClick={this.agregarEstudiante.bind(this)}>Guardar estudiante</button>
      </div>
    )
  }
}

export default App;
