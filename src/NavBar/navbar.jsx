import styles from "./navbar.module.css";
import foto from "./foto.png";

function NavBar() {
  return (
    <nav>
      <div>
        <ul className={styles.navbb}>
          <li className={styles.links}><a className={styles.links} href="#">Home</a></li>
          <li className={styles.links}><a className={styles.links} href="#">About</a></li>
          <li className={styles.links}><a className={styles.links} href="#">Contact</a></li>
        </ul>
      </div>
      <div className={styles.navin}>
        <img src={foto} alt="" />
        <h1 className={styles.hight}>High-end Dentistry</h1>
        <h1 className={styles.welcome}>
          Welcome to Dental <br /> Clinic
        </h1>
        <h2 className={styles.freepik}>
          Image from <a className={styles.fre} href="#">Freepik</a>
        </h2>
        <button className={styles.contact}>CONTACT US</button>
      </div>
    </nav>
  );
}

export default NavBar;
