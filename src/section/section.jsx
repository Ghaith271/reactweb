import styles from "./section.module.css";
import image from "./تنزيل.png";

function Section() {
  return (
    <>
      <section className={styles.testimonialsSection}>
        <h2>Very honest and affordable!</h2>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonial}>
            <div className={styles.quoteMark}>“</div>
            <h3>STELLA LARSON</h3>
            <p>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.quoteMark}>“</div>
            <h3>NICK JHONSON</h3>
            <p>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.quoteMark}>“</div>
            <h3>OLGA IVANOVA</h3>
            <p>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
        </div>
        <div className={styles.navArrows}>
          <button className={styles.arrow}>&#8249;</button>
          <button className={styles.arrow}>&#8250;</button>
        </div>
      </section>

      <section>
        <div className={styles.lll}>
          <h1 className={styles.dee}>
            Download Dental <br /> Information Guide
          </h1>
          <h2 className={styles.freepik4}>
            Image from <a className={styles.fre4} href="#">
              Freepik
            </a>
          </h2>
        </div>

        <form>
          <input
            className={styles.input1}
            placeholder="Enter Your Name"
            type="text"
          />
          <br />
          <input
            className={styles.input2}
            placeholder="Enter a valid email address"
            type="text"
          />
          <br />
          <button className={styles.Get}>Get Your Pricing Guide Now!</button>
        </form>

        <img className={styles.imgg} width="600px" src={image} alt="Dental Guide" />
      </section>
    </>
  );
}

export default Section;
