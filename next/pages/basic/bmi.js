import React, { useState } from 'react';
import axios from "axios";

export default function Bmi() {
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})
    const { name, height, weight } = inputs
    const [result, setResult] = useState(``)

    const onChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        alert(`${name}님의 bmi 지수는 ${(weight *10000/height/height).toFixed(2)}입니다.`)
        alert(`BMI 지수 : ${JSON.stringify(inputs)}`)
        axios.post(proxy + '/basic/bmi', inputs)
        .then(res => {
            const bmi = res.data     
            document.getElementById(`result-span`).innerHTML = `
            <h3>이름 : ${bmi.name}</h3>
            <h3>키 : ${bmi.height}</h3>
            <h3>몸무게 : ${bmi.weight}</h3>
            <h3>BMI 결과 : ${bmi.bmi}</h3>
            `      
            //alert(JSON.stringify(res.data))
        })
        .catch(err => alert(err))
    }
    return (<div>
        <form action="" onSubmit={handleSubmit }>
            <h1>BMI</h1>
            <div>
                <label htmlFor="">이름</label>
                <input type="text" name="name" onChange={onChange} /><br />

                <label htmlFor="">키</label>
                <input type="text" name="height" onChange={onChange} /><br />

                <label htmlFor="">몸무게</label>
                <input type="text" name="weight" onChange={onChange} /><br />
                                

                <input type="submit" value="BMI 체크" /><br />

            </div>
        </form>
        <div> 결과 : <span id = "result-span"></span></div>
    </div>)
}