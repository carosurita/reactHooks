import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace,  FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./STEP"

//validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";

const Form = () => {
  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState({})

   
  useEffect(()=>{
    console.log("useEffect")
  })

  useEffect(()=>{
    console.log ("se ha actualizado el step", step)
  },[step])

  useEffect(async()=>{
    try{
      const data = await fetch ("https://jsonplaceholder.typicode.com/posts")
      const posts = await data.json()
      console.log(posts)
    }catch(e){
      console.log(e)
    }
  })

  // step = 0 --- datosUsuario
  //step = 1 --- datosPersonales
  //step = 2 .-- datosEntrega
  //step = 3 --- Complete

/*
  const selectStep = ()=>{
    switch (step){
      case 0: return<DatosUsuario/>
      break;
      case 1: return <DatosPersonales/>
      break;
      case 2: return <DatosEntrega/>
      break;
      default: return <Complete/>
      break;
    }
  }
*/
  //const steps = [<DatosUsuario/>, <DatosPersonales/>, <DatosEntrega/>, <Complete/>]

//mas prolijo hacer un objeto y determinar a cada step el valor que le corresponde

const updateStep = (step) => {
  console.log("actualizar paso", step);
  setStep(step);
};

const steps = {
  0: <DatosUsuario updateStep={updateStep} />,
  1: <DatosPersonales updateStep={updateStep} />,
  2: <DatosEntrega updateStep={updateStep} />,
  3: <Complete />,
};

const onSubmit = (e)=>{
  e.preventDefault ()
  let newStep = step+1
  setStep(newStep)
  console.log("newstep", newStep)
  console.log(step)
}

const handleChange = (element, position, currentStep, validator)=>{
  const value = element.target.value;
  const valid = validator(value)
  console.log (value);
  console.log(valid)
  console.log("position", position)
  console.log("currentStep", currentStep)
  console.log("validator", validator)

  stepFlow[0].inputs[0].label = "nombre"
  console.log (stepFlow)
}
const stepFlow = {
  0:{
    inputs: [
      {
        label: "Correo electrónico",
        type: "email",
        value:" ",
        valid: null,
        onChange: handleChange,
        helperText: "Ingresa un correo electrónico válido.",
        validator:validarEmail ,
      },
      {
        label: "Contraseña",
        type: "password",
        value:" ",
        valid: null,
        onChange:handleChange,
        helperText: "Ingresa una clave válida. Tiene que tener entre 8 y 20 caractéres",
        validator:validarPassword ,
      }
    ],
    buttonText: "Siguiente",
    onSubmit,
  },
  1:{
    inputs: [
      {
        label: "Correo electrónico",
        type: "email",
        value:" ",
        valid: null,
        onChange: handleChange,
        helperText: "Ingresa un correo electrónico válido.",
        validator:validarEmail ,
      },
      {
        label: "Contraseña",
        type: "password",
        value:" ",
        valid: null,
        onChange:handleChange,
        helperText: "Ingresa una clave válida. Tiene que tener entre 8 y 20 caractéres",
        validator:validarPassword ,
      }
    ],
    buttonText: "Siguiente",
    onSubmit,
  }
}

return (
  <Box
    sx={{
      padding: "30px",
      display: "flexbox",
      flexDirection: "column",
    }}
  >
    <LogoSpace>
      <Img src={"/favicon.png"} />
      <Typography variant="h3">AluraFood</Typography>
    </LogoSpace>
    <FormSpace>
      {step < 3 && <Stepper step={step} />}
      {/* <DatosUsuario />
      <DatosPersonales />
      <DatosEntrega /> */}
      {/*steps[step]*/}
      <Step data={stepFlow[step]} step={step} />
    </FormSpace>
  </Box>
);
};

export default Form;
