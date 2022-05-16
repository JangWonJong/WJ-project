import Link from "next/link";
import styles from "../common/style/Nav.module.css";

export default function boardNav(){
  return (
    
      <ul>
        <li className={styles.li}> <Link href='addArticle'>게시글등록</Link> </li>      
        <li className={styles.li}> <Link href='getArticles'>게시글목록</Link> </li>      
        <li className={styles.li}> <Link href='modiArticle'>게시글수정</Link> </li>      
        <li className={styles.li}> <Link href='removeArticle'>게시글삭제</Link> </li>      
    
      </ul>
    
  );
};