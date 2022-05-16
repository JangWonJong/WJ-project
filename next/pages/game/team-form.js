import style from "board/style/board-form.module.css"
import { useState } from 'react'

export default function TeamForm(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {teamId,regionName,teamName,orgYyyy,stadiumName,address,tel} = inputs
    
    const handleSubmit = e => {
        e.preventDefault()
        alert(`등록할 팀 ID : ${teamId } ` +
             `연고지 : ${regionName } `+
             `팀이름 : ${teamName } `+
             `창단년도 : ${orgYyyy } `+
             `스타디움 명칭  : ${stadiumName } `+
             `주소 : ${address } `+
             `전화번호 : ${tel } `)
        axios.post('http://localhost:5000/api/game/write', inputs)
        .then(res => {
        alert(res.data)
        })
        .catch(err => alert(err))
    }
    const onChange = (e) => {
        const {value, name} =e.target
        setInputs({
            ...inputs, [name]: value
        })
    }

    return (<>
        <div className={style.container}>
            <form action="">
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="teamId">팀 ID</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="teamId" name="teamId" onChange={onChange}/>
                </div>
            </div>            
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="regionName">연고지</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="regionName" name="regionName" onChange={onChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="teamName">팀명</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="teamName" name="teamName" onChange={onChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="orgYyyy">창단년도</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="orgYyyy" name="orgYyyy" onChange={onChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="stadiumName">스타디움 명칭</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="stadiumName" name="stadiumName" onChange={onChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="address">주소</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="address" name="address" onChange={onChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="tel">전화번호</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="tel" name="tel" onChange={onChange}/>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" onClick={handleSubmit} className={style.inputSubmit}
                value="Submit"/>
            </div>
            </form>
            </div>
    </>)
}