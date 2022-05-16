import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function TeamNav(){
  return (
    
      <ul>
        <li className={styles.li}> <Link href='team-form'>팀 정보</Link> </li>      
        <li className={styles.li}> <Link href='getTeams'>TeamList</Link> </li>      

    
      </ul>
    
  );
};