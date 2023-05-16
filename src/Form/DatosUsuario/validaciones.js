export const validarEmail = (email)=>{
    const lenght = email.lenght
    if (lenght >3 && lenght < 25 && email.includes('@')){
        return true
    }else{
        return false
    }
}

export function validarPassword(password){
    
    const lenght = password.lenght
    if (lenght >8 && lenght < 20 ){
        return true
    }else{
        return false
    }
}