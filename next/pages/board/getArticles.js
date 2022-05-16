import axios from 'axios'
import { useEffect, useState } from 'react'
import tableStyles from '../common/style/table.module.css'


const Table = ({columns,colspan, data}) =>{
    return(
        <table className={tableStyles.table}>
            <thead>
            <tr >
            {columns.map((column)=>(               
                <th key = {column.userid}>{column}</th>
            ))}
            </tr>
            </thead>
            <tbody>
                {data.length == 0 ? <tr>
                    <td colSpan={colspan}>NO DATA</td>
                </tr>
                :data.map((board)=>(
                    <tr key={board.userid} >
                    <td >{board.userid}</td>
                    <td >{board.title}</td>
                    <td >{board.name}</td>
                    <td >{board.teamId}</td>
                    <td >{board.subject}</td>
                </tr>

                ))}
            </tbody>
        </table>
        
    )
}

export default function BoardList(){
    const columns = ['사용자 ID', '글 제목', '작성자 ', '팀ID', '게시글 내용']
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/board/list')
        .then(res=>{
            setData(res.data.boards)        
        })
        .catch(err=>{})
    },[])
    return (<>
        <h1>게시판</h1>
        <div>
        <Table columns={columns} colspan={5} data = {data}></Table>
        </div>
        </>)
}