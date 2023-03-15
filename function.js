export const calc = (num1,num2,calculation) => {
    if(calculation === "+" && typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2
    }else if(calculation === "-" && typeof num1 === "number" && typeof num2 === "number"){
        return num1 - num2
    }else if(calculation === "*" && typeof calculation === "string" ){
        return num1 * num2
    }else return "false Input"
}