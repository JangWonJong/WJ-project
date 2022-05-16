import axios from "axios"
import React, {useEffect} from 'react'
import table from './common/style/table.module.css'
import Image from 'next/image'
export default function Home() {
    useEffect(() => {
        const loginUser = localStorage.getItem("loginUser")
        const user = JSON.parse(loginUser)
        if (loginUser === null) {
            axios
                .get("http://localhost:5000/api/now")
                .then((res) => {
                    var data = res.data
                        document
                        .getElementById("timeZone")
                        .innerHTML = `<h1>현재시간: ` + data.now + `<h1>`

                });
        } else {
            document
                .getElementById("timeZone")
                .innerHTML = '<h1>환영합니다: ' + user.name + '<h1>'
        }
    }, []);

    return (
        <table className={table.table}>
            <thead>
                <tr>
                    <th>
                        <h2>HOME</h2>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td>
                        <div id="timeZone"></div>
                        <Image src={"/images/기욤.gif"} width={500} height={300} alt=""></Image>
                    </td>
                </tr>
            </tbody>
        </table>
    )

}