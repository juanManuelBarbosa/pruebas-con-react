import React, {Fragment , useState} from 'react';

const Formulario = ()=>{
    const [datos , setDatos] = useState({
        nombre: '',
        apellido:''
    })

    const inputChange = (e)=>{
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const enviarDatos = (e) =>{
            e.preventDefault();
            console.log(`El nombre es: ${datos.nombre} - El apellido es: ${datos.apellido}`)
    }

    return (
        <Fragment>
            <form className='row' onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input
                    placeholder='ingrese el nombre'
                    className='form-control'
                    type="text"
                    name='nombre'
                    onChange={inputChange}
                    />
                </div>

                <div className="col-md-3">
                    <input
                    placeholder='ingrese el apellido'
                    className='form-control'
                    type="text"
                    name='apellido'
                    onChange={inputChange}
                    />
                </div>

                <div className="col-md-3">
                    <button className='btn btn-primary' type='submit'>Enviar!</button>
                </div>

            </form>

            <h3 className="col-md-4">{datos.nombre} {datos.apellido}</h3>
            
        </Fragment>
    );



}

export default Formulario