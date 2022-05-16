import Link from "next/link";
import styles from "../common/style/Nav.module.css";

export default function BasicNav(){
  return (
    
      <ul>
        <li className={styles.li}> <Link href='counter'>Counter</Link> </li>
        <li className={styles.li}> <Link href='calc'>Calculator</Link> </li>
        <li className={styles.li}> <Link href='bmi'>BMI</Link> </li>
       
      </ul>
    
  );
};
