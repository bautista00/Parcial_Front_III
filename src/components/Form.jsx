import React from 'react'
import { useState } from 'react';
import Card from './Card';

const Form = () => {
   
    const [user, setUser] = useState({
    nombre: "", 
    apellido: "", 
    edad: ""
})

    const [show, setShow] = useState(false);
    
    const [err, setErr] = useState(false)

    const handleSubmit = function(e){
        e.preventDefault();
        if(user.nombre.length > 3 && user.nombre.startsWith(" ") == false && user.apellido.length >6){
            setShow(true);   
            setErr(false);         
        }else{
            setErr(true);
        }
    }
    return (
        <>
        {show ?
         (<Card nombre={user.nombre} apellido={user.apellido}/>)  
      
         :
        
        ( 
        <form onSubmit={handleSubmit}>
            <label >Nombre: </label>
            <input type="text" value={user.nombre} onChange={(event)=>{ setUser({...user, nombre: event.target.value }) }}/>
            <label >Apellido: </label>
            <input type="text" value={user.apellido} onChange={(event)=>{ setUser({...user, apellido: event.target.value }) }}/>
            <label >Edad: </label>
            <input type= "text"  value={user.edad} onChange={(event)=>{ setUser({...user, edad: event.target.value }) }}/>
        
            <button>Enviar</button>
            {err && "Por favor chequea que la informacion sea correcta"}
        </form>
        )}
        </>
        )

}

export default Form