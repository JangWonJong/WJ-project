import axios from 'axios'
import { useState } from 'react'

export default function Calc (){

    const [inputs, setInputs] = useState({opcode: "+"})
    const [result, setResult] = useState(``)
    const { num1, num2, opcode} = inputs

    const onChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        alert(`계산결과 : ${JSON.stringify(inputs)}`)
        axios.post(`http://localhost:5000/basic/calc`,inputs)
        .then(res => {
            const calc = res.data     
            document.getElementById(`result-span`).innerHTML = `
            <h3>숫자 1 : ${calc.num1}</h3>
            <h3>연산자 : ${calc.opcode}</h3>
            <h3>숫자 2 : ${calc.num2}</h3>
            <h3> 결과 : ${calc.calc}</h3>
            `
        })
        .catch(err => alert(err))
    }       

    return (<>
        <h1>계산기</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">num1</label>
            <input name="num1" type="text" onChange={onChange} /> <br />
            <label htmlFor="">연산자</label>
            <select name="opcode" onChange={onChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select><br />
            <label htmlFor="">num2</label>
            <input name="num2" type="text" onChange={onChange} /><br />
            
            <input type="submit" value="결과 체크"></input>
        </form>

        <div>결과 : <span id = "result-span"></span> </div>
    </>
    )
}