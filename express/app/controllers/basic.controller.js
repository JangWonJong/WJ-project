const { bmi } = require('../services/basicService')
exports.getBmi = (res, req)=> {
  const {name, height, weight} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`이름 : ${JSON.stringify(name)}`)
    console.log(`키 : ${JSON.stringify(height)}`)
    console.log(`몸무게 : ${JSON.stringify(weight)}`)
    const json = bmi({name, height, weight})
    console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
    res.status(200).json(json)
}

/*
app.post("/api/basic/calc", (req, res)=>{
    const{num1, opcode, num2} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`num1 값 : ${JSON.stringify(num1)}`)
    console.log(`opcode 값 : ${JSON.stringify(opcode)}`)
    console.log(`num2 값 : ${JSON.stringify(num2)}`)
    const json = Calc(num1, opcode, num2)
    res.json(json)
    
  })
*/

