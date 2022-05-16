import axios from "axios";
import style from "./style/board-form.module.css"
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { boardActons } from "../../redux/reducers/board.reducer.ts";

export default function BoardhtmlForm(){
    const [board, setBoard] = useState({
        userid: '',
        title: '',
        name: '',
        teamId: '',
        subject: ''
    })
    const dispatch = useDispatch()
    //const [value, setValue] = useState({})

    const handleChange = e => {
        e.preventDefault()
        const{name, value} = e.target
        setBoard({...board, [name]:value})
    }   
  
    return (<>
        <div className={style.container}>
            <form onSubmit={e=>{
                e.preventDefault()
                dispatch(boardActons.boardRequest(board))
                setBoard({userid: '',title: '',name: '',teamId: '',subject: ''})
            }}>
            
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="userid">ID</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="userid" name="userid" onChange={handleChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="title">글 제목</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="title" name="title" onChange={handleChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">작성자</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="name" name="name" onChange={handleChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">팀명</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId" onChange={handleChange}>
                    <option value="K09" >FC 서울</option>
                    <option value="K02" >수원 삼성 블루윙즈</option>
                    <option value="K04" >인천 유나이티드</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">내용</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject" style={{height:200 + "px"}} onChange={handleChange}></input>
                </div>
            </div>
            <br/>
            <div className={style.row}>
            <input type="submit"  className={style.inputSubmit} value="Submit" />
            
            </div>
            </form>
            </div>
    </>)
}
