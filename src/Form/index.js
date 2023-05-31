import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace,  FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {
  const [step, setStep] = useState(2);

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
      {steps[step]}
    </FormSpace>
  </Box>
);
};

export default Form;
