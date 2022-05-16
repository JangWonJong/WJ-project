import Link from "next/link";
import styles from "./style/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/admin/dashboard'>DashBoard</Link> </li>
        <li className={styles.li}> <Link href='/basic/basicnav'>BASIC</Link> </li>
        <li className={styles.li}> <Link href='/board/boardnav'>게시판</Link> </li>        
        <li className={styles.li}> <Link href='/game/game'>경기등록</Link> </li>        
        <li className={styles.li}> <Link href='/game/game-list'>경기리스트</Link> </li>        
        <li className={styles.li}> <Link href='/game/teamnav'>TeamList</Link> </li>
        <li className={styles.li}> <Link href='/todo/todonav'>스케줄</Link> </li>
        <li className={styles.li}> <Link href='/user/usernav'>사용자 관리</Link> </li>


      </ul>
    </nav>
  );
};