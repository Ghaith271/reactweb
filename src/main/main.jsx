import styles from "./main.module.css";
import seImg from "./se.jpg";
import fgbImg from "./fgb-min.jpg";
import img677 from "./6776776.jpg";

function Main() {
  return (
    <main>
      <div className={styles.minn}>
        <h1 className={styles.minnTitle}>
          If You Have More Questions <br />
          Contact Us
        </h1>
        <p className={styles.paragraf}>
          We provide a full suite of dental care to cover you and your <br /> family’s oral health needs.
        </p>
        <button className={styles.btn2}>123-456-789</button>
      </div>

      <div>
        <h1 className={styles.Dental}>Dental Services</h1>
        <img className={styles.imginnn} src={seImg} alt="Dental Service" />
        <img className={styles.imgim} width="400px" src={fgbImg} alt="Dental Image" />
        <p className={styles.ppp}>
          Sample text. Click to select the text box. Click again <br /> or double click to start editing the text.
        </p>
        <h2 className={styles.freepik5}>
          Image from <a className={styles.fre5} href="#">Freepik</a>
        </h2>
        <button className={styles.btn3}>CONTACT US</button>
      </div>

      <div>
        <img className={styles.img44} width="700" src={img677} alt="Dental Staff" />
      </div>

      <div className={styles.nnd}>
        <h1 className={styles.Our}>
          Our practice is built on <br /> the experience of our <br /> highly trained staff
        </h1>
        <h2 className={styles.freepik6}>
          Image from <a className={styles.fre6} href="#">Freepik</a>
        </h2>
      </div>
    </main>
  );
}

export default Main;
