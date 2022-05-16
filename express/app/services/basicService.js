export default function BasicService(){
  const calcbmi = (payload) => {
    const{name, height, weight} = payload
    let _height=Number(height)
    let _weight=Number(weight)
    let bmi = _weight/Math.pow(_height,2);
    let output = Math.round(bmi*100)/100;
    const result = {name,height,weight}
    if (output<18.5)
      result.bmi = "Underweight";
    if (output>=18.5  && output<=25)
      result.bmi = "Normal";
    if (output>=25 && output<=30)
      result.bmi = "Obese";
    if (output>30)
      result.bmi = "Overweight";
    return result
}
return{
  getBmi(req, _res){
    const {name, height, weight} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`이름 : ${JSON.stringify(name)}`)
    console.log(`키 : ${JSON.stringify(height)}`)
    console.log(`몸무게 : ${JSON.stringify(weight)}`)
    const json = calcbmi({name, height, weight})
    console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
    return json
  }
}
}


/*exports.calc = (payload) => {
    const {num1, opcode, num2} = payload
    const result = {num1 , opcode , num2}
    switch (opcode){
      case "+" :
        result.calc = (num1 + num2)
        return result
      case "-" :
        result.calc = (num1 - num2)
        return result
      case "*" :
        result.calc = (num1 * num2)
        return result
      case "/" :
        result.calc = (num1 / num2)
        return result
      case "%" :
        result.calc = (num1 % num2)
        return result
    }
}*/






