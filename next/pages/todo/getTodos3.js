import axios from "axios"
import React, { useEffect, useState } from "react"
import TableStyle from "../common/style/table.module.css"

export default function GetTodos(){
    const columns = ["해야 할 일"]
    const [data, setData] = useState('')
    useEffect(()=>{
        axios.get('http://localhost:5000/api/todo/list').then(res=>{
            setData(res.data.todos)
    }).catch(err=>{})
},[])
    return(
        <table className={TableStyle.table}>
            <thead>
                <tr>
                    <td>
                        할 일 목록
                    </td>
                </tr>
            </thead>
            <tbody>
                    {data.length == 0 ? 
                    <div>현재 등록된 일정이 없습니다</div>          
                    :data.map((todo) => (
                        <tr>
                        <td key={todo.task}>
                            <input type="checkbox"></input>
                            <a>{todo.task}</a>
                        </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}