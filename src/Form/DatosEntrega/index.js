import React , {useState}from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validaciones";

const DatosEntrega = (props) => {

  const [direccion, setDireccion] = useState ({
    value:'',
    valid: null,
  })
  const [ciudad, setCiudad] = useState ({
    value:'',
    valid: null,
  })
  const [provincia, setProvincia] = useState ({
    value:'',
    valid: null,
  })
  

 const updateStep = props.updateStep
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
      onSubmit= {(e)=>{
        e.preventDefault()
        //updateStep(3)
        console.log(direccion, ciudad, provincia)

      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={direccion.value}
        onChange={(input)=>{
          const value= input.target.value
          const valid= validarInput(value)
          setDireccion({value, valid})
        }}
        error={direccion.valid === false}
        helperText={
          direccion.valid === false && "La dirección tiene que tener más de 4 caracteres."
        }
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ciudad.value}
        onChange={(input)=>{
          const value= input.target.value
          const valid= validarInput(value)
          setCiudad({value, valid})
        }}
        error={ciudad.valid === false}
        helperText={
          ciudad.valid === false && "La ciudadtiene que tener más de 4 caracteres."
        }
        
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={provincia.value}
        onChange={(input)=>{
          const value= input.target.value
          const valid= validarInput(value)
          setProvincia({value, valid})
        }}
        error={provincia.valid === false}
        helperText={
          provincia.valid === false && "La provincia tiene que tener más de 4 caracteres."
        }
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
