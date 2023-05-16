import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import {validarEmail, validarPassword} from "./validaciones.js"
/*
class ComponenteClase extends React.Component{
  constructor (props) {
      super(props);
      this.state = {
        email: {
          value: '',
          valid: true
        } ,
        password: {
          value: '',
          valid: true
        }
      }
    }

  render (){
    return <>Contenido</>
  }
}

PASAMOS DE COMPONENTES DE CLASE A COMPONENTES FUNCIONALES CON CUALQUIERA DE ESTAS FORMAS

function ComponenteFuncion (){
  return <>Componente</>
}

const ComponenteFuncion = ()={
  return <>Contenido</>
}

*/

const DatosUsuario = ()=> {
//los datos que estaban en el constructor, necesario en class, se pasan de esta forma ahora, utilizando el Hook useSetate
  const [email, setEmail] = useState({value: ' ', valid: true}) 
  const [password, setPassword] = useState({value: '', valid: true})
  
    return (
      <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={(e)=>{
          e.preventDefault()
          console.log(email,password)
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={false}
          helperText={false && "Ingresa un correo electrónico válido"}
          //value={this.state.email.value} forma usada en class componentes, porque tenia que tomar el valor de ese estado
          value={email.value}
          //onChange={(input)=>this.setState({email: {value: input.target.value}})} forma usada en class component//
          onChange={(input)=>{
            const email = input.target.value
            const valido = validarEmail(email)
            setEmail({ value:email, valid: valido})
          }}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          value={password.value}
          onChange={(input)=>{
            const password = input.target.value
            setPassword({value: password, valid:validarPassword(password)})
          }}
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  
}

export default DatosUsuario;
