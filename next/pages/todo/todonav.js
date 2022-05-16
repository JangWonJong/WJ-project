import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function TodoNav(){
  return (
    
      <ul>
        <li className={styles.li}> <Link href='addTodo'>스케줄 추가</Link> </li>      
        <li className={styles.li}> <Link href='getTodos'>스케줄 목록</Link> </li>      
        <li className={styles.li}> <Link href='modiTodo'>스케줄 수정</Link> </li>      
        <li className={styles.li}> <Link href='removeTodo'>스케줄 삭제</Link> </li>      

    
      </ul>
    
  );
};