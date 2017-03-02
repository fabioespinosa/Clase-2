import React, {Component} from 'react';
import axios from 'axios';
const ROOT_URL = "http://localhost:5030";

class Estudiante extends Component { 

  borrarEstudiante() {
    axios.delete(ROOT_URL+"/estudiantes/"+this.props.estudiante.id).then(response => {
      console.log(response);
      console.log('Borro estudiante', this.props.nombre);
    })
  }
  
  render(){    
    return ( 
      <div>{this.props.estudiante.nombre}, {this.props.estudiante.codigo}, {this.props.estudiante.nota}
        <button onClick={this.borrarEstudiante.bind(this)}>Borrar</button>
      </div>
    ); 
  } 
}

export default Estudiante;
