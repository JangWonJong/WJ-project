import axios from 'axios'
import { useEffect, useState } from 'react'
import tableStyles from '../common/style/table.module.css'


const Table = ({columns,colspan, data}) =>{
    return(
        <table className={tableStyles.table}>
            <thead>
            <tr className={tableStyles.tr}>
            {columns.map((column)=>(               
                <th className={tableStyles.td} key = {column.userid}>{column}</th>
            ))}
            </tr>
            </thead>
            <tbody>
                {data.length == 0 ? <tr className={tableStyles.tr}>
                    <td colSpan={colspan} className={tableStyles.td}>NO Schedule</td>
                </tr>
                :data.map((todo)=>(
                    <tr className={tableStyles.tr} key={todo.userid}>
                        <td className={tableStyles.td}>{todo.userid}</td>
                        <td className={tableStyles.td}>{todo.task}</td>
                        <td className={tableStyles.td}>{todo.completed}</td>
                    
                </tr>

                ))}
            </tbody>
        </table>

        
    )
}

export default function TodoList(){
    const columns = ['사용자 ID', '해야할 일', '완료']
    const [data, setData] = useState([])

    useEffect(()=>{        
        axios.get('http://localhost:5000/todo/list')
        .then(res=>{
            setData(res.data.todos)        
        })
        .catch(err=>{})
    },[])
    return (<>
        <h1>Schedule List</h1>
        <div className={tableStyles.td}>
        <Table columns={columns} colspan={3} data = {data}></Table>
        </div>
        </>)
}