import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <form action="">
        <input
          placeholder="enter your name"
          className={styles.footerInp}
          type="text"
        />
        <input
          placeholder="enter your email"
          className={styles.footerInp}
          type="email"
        />
        <textarea className={styles.textarea}></textarea>
        <button className={styles.submitBtn}>submit</button>
      </form>
      <h3 className={styles.footertitle}>contact us</h3>

     
      <i className={`fa-brands fa-twitter ${styles.brand1}`}></i>
      <i className={`fa-brands fa-facebook-f ${styles.brand1}`}></i>
      <i className={`fa-brands fa-instagram ${styles.brand1}`}></i>

      <p className={styles.footerNumber}>1 (234) 567-891</p>
      <p className={styles.footerNumber}>1 (234) 567-891</p>
    </footer>
  );
}

export default Footer;
