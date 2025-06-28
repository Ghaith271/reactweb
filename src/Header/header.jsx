import styles from "./header.module.css";
import foto2 from "./foto2.jpg";
import man from "./man.jpg";
import icon from "./2732655.png";
import image56456 from "./56456.jpg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.sewf}>
        <h2 className={styles.services}>Our Services</h2>
        <p className={styles["services-description"]}>
          Consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
        </p>

        <div>
          <img className={styles.imgs} src={foto2} alt="Service" />
          <h1 className={styles.dental}>dental care</h1>
          <p className={styles.description2}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit <br /> nullam nunc justo sagittis <br /> suscipit ultrices.
          </p>

          <h1 className={styles.dental1}>dental care</h1>
          <p className={styles.description3}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit <br /> nullam nunc justo sagittis <br /> suscipit ultrices.
          </p>

          <h1 className={styles.dental2}>dental care</h1>
          <p className={styles.description4}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit <br /> nullam nunc justo sagittis <br /> suscipit ultrices.
          </p>

          <h1 className={styles.dental3}>dental care</h1>
          <p className={styles.description5}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit <br /> nullam nunc justo sagittis <br /> suscipit ultrices.
          </p>

          <div>
            <img className={styles.imgin} src={man} alt="Man" />
          </div>

          <div className={styles.bac}>
            <h1 className={styles.yes}>
              Yes, healthy and beautiful <br /> smile is possible for you
            </h1>
            <h2 className={styles.freepik2}>
              Image from <a className={styles.fre2} href="#">Freepik</a>
            </h2>
          </div>
        </div>

        <div>
          <h3 className={styles.dic}>
            Do missing or ill-fitting dentures have you avoiding certain foods? <br />
            Do you hide your mouth when you smile or talk? <br />
            Does this sound familiar? Then schedule a consultation <br />
            so we can talk to you about dental implants.
          </h3>
          <h2 className={styles.freepik3}>
            Image from <a className={styles.fre3} href="#">Freepik</a>
          </h2>
        </div>

        <div className={styles["all-true"]}>
          <img className={styles["true-img"]} src={icon} alt="Icon" />
          <h3 className={styles.Permanent}>Permanent and stable like natural teeth</h3>
        </div>

        <div className={styles["all-true2"]}>
          <img className={styles["true-img"]} src={icon} alt="Icon" />
          <h3 className={styles.Permanent}>No need for messy adhesives</h3>
        </div>

        <div className={styles["all-true3"]}>
          <img className={styles["true-img"]} src={icon} alt="Icon" />
          <h3 className={styles.Permanent}>Eat the foods you want</h3>
        </div>

        <div className={styles["all-true4"]}>
          <img className={styles["true-img"]} src={icon} alt="Icon" />
          <h3 className={styles.Permanent}>Smile and talk naturally</h3>
        </div>

        <button className={styles["btn-in"]}>REQUEST IMPLANT CONSULTATION</button>

        <div>
          <img className={styles.imgc} src={image56456} alt="Clinic" />
          <img className={styles.imgc} src={image56456} alt="Clinic" />
          <img className={styles.imgc} src={image56456} alt="Clinic" />
          <img className={styles.imgc} src={image56456} alt="Clinic" />
        </div>
      </div>
    </header>
  );
}

export default Header;
