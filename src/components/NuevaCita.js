import React, { Component } from 'react';
import uuid from 'uuid';

const  stateInicial = {
    citas : {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas : ''
    },
    error : false
}

class NuevaCita extends Component {
    state = {...stateInicial}
    //Cuando el usuario escribe en los inputs
    handleChange = e =>{

      this.setState({
          citas :{
            ...this.state.citas,
            [e.target.name] : e.target.value
          }
      })  
    }
    //Cuando el usuario envia el formulario

    handleSubmit = e=> {
       e.preventDefault(); 
     // Extraer los valores del state
        const {mascota,propietario,fecha,hora,sintomas} = this.state.citas;

     //Validar que los campos esten llenos
      if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
           this.setState({
               error: true
           })

           return;
      }

      // Generar objeto don los datos
        const nuevaCita = {...this.state.citas};
        nuevaCita.id = uuid();

     // Agergar las citas al state
          this.props.crearCita(nuevaCita);
     // agregar al state el state inicial
       this.setState({ ...stateInicial})     
    }
    render() {

        const {error} = this.state;
        return (
            <div className = 'card mt-5 py-5'>
               <div className = 'card-body'>
                   <h2 className = 'card-title text-center mb-5'>
                    Llena el formulario para crear una nueva cita
                   </h2>
                   {error ?<div className = "alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
                   <form onSubmit = {this.handleSubmit}>
                       <div className = 'form-group row'>
                         <label className = 'col-sm-4 col-lg-2 col-form-label'>Nombre Mascota</label>
                         <div className='col-sm-8 col-lg-10'>
                           <input 
                              type = 'text'
                              className = 'form-control'
                              placeholder = 'Nombre Mascota'
                              name = 'mascota'
                              onChange = {this.handleChange}
                              value = {this.state.citas.mascota}
                           />
                         </div>   
                       </div> 
                       <div className = 'form-group row'>
                         <label className = 'col-sm-4 col-lg-2 col-form-label'>Nombre Dueño Mascota</label>
                         <div className='col-sm-8 col-lg-10'>
                           <input 
                              type = 'text'
                              className = 'form-control'
                              placeholder = 'Nombre Dueño Mascota'
                              name = 'propietario'
                              onChange = {this.handleChange}
                              value = {this.state.citas.propietario}
                           />
                         </div>   
                       </div> 
                       <div className = 'form-group row'>
                        <label className = 'col-sm-4 col-lg-2 col-form-label'>Fecha</label>
                            <div className='col-sm-8 col-lg-4'>
                            <input 
                                type = 'date'
                                className = 'form-control'
                                name = 'fecha'
                                onChange = {this.handleChange}
                                value = {this.state.citas.fecha}
                            />
                            </div>   

                        <label className = 'col-sm-4 col-lg-2 col-form-label'>Hora</label>
                            <div className='col-sm-8 col-lg-4'>
                            <input 
                                type = 'time'
                                className = 'form-control'
                                name = 'hora'
                                onChange = {this.handleChange}
                                value = {this.state.citas.hora}
                            />
                            </div>   
                       </div>    
                       <div className = 'form-group row'>
                         <label className = 'col-sm-4 col-lg-2 col-form-label'>Síntomas</label>
                         <div className='col-sm-8 col-lg-10'>
                            <textarea 
                               className = 'form-control'
                               name = 'sintomas'
                               placeholder = 'Describe los síntomas'
                               onChange = {this.handleChange}
                               value = {this.state.citas.sintomas}
                            />
                          
                         </div>   
                       </div>   
                       <input 
                         type ='submit'
                         className = 'py-3 mt-2 btn-success btn-block'
                         value ='Agregar Nueva Cita'
                       />                                      

                   </form>
               </div>
                
            </div>
        );
    }
}

export default NuevaCita;