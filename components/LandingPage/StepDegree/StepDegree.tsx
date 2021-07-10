import styles from './StepDegree.module.scss';

const StepDegree = () => {
  let mobile = [styles.mobile_view, styles.text_area].join(' ');
  return (
    <section className={styles.stepDegree_section}>
      <div className={styles.stepDegree_container}>
        <div className={styles.text_area}>
          <h2>Karo Degree
            <br />Se Achchi
            <br />
            <span>StepDegree </span>
          </h2>
          <p>
            Having doubts related to your career & future, and a regular <br />degree
            isn't helping out! We've planned for you to enhance your<br /> chances to better jobs & money.
          </p>
          <button
            className={styles.comingSoon_btn}
          >
            Coming Soon
          </button>


        </div>
        <div className={styles.img_area}>
          <img
            className={styles.boy_img}
            src='/images/StepDegree.png'
            alt='Build Skills With Experts Any Time, Anywhere'
            width={530}
            height={760}
          />
          <div className={styles.svg_img}>
            <svg width="597" height="212" viewBox="0 0 597 212" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.0002 12L85.5002 86.5L185 86.5L340 150.5L437 150.5L569 201.5" stroke="#00F0B5" stroke-opacity="0.5" />
              <circle cx="86.0004" cy="86" r="11" fill="#1271FF" fill-opacity="0.05" />
              <circle cx="86.0004" cy="86" r="10.85" stroke="#00F0B5" stroke-opacity="0.5" stroke-width="0.3" />
              <circle cx="86.0004" cy="86" r="6" fill="#00F0B5" />
              <circle cx="185" cy="86" r="11" fill="#1271FF" fill-opacity="0.05" />
              <circle cx="185" cy="86" r="10.85" stroke="#00F0B5" stroke-opacity="0.5" stroke-width="0.3" />
              <circle cx="185" cy="86" r="6" fill="#00F0B5" />
              <circle cx="437" cy="150" r="11" fill="#1271FF" fill-opacity="0.05" />
              <circle cx="437" cy="150" r="10.85" stroke="#00F0B5" stroke-opacity="0.5" stroke-width="0.3" />
              <circle cx="437" cy="150" r="6" fill="#00F0B5" />
              <circle cx="569" cy="201" r="11" fill="#1271FF" fill-opacity="0.05" />
              <circle cx="569" cy="201" r="10.85" stroke="#00F0B5" stroke-opacity="0.5" stroke-width="0.3" />
              <circle cx="569" cy="201" r="6" fill="#00F0B5" />
              <circle cx="340" cy="150" r="11" fill="#1271FF" fill-opacity="0.05" />
              <circle cx="340" cy="150" r="10.85" stroke="#00F0B5" stroke-opacity="0.5" stroke-width="0.3" />
              <circle cx="340" cy="150" r="6" fill="#00F0B5" />
              <circle cx="27.5002" cy="11.5" r="11.35" fill="#1271FF" fill-opacity="0.05" stroke="#1271FF" stroke-width="0.3" />
              <path d="M22.5002 7H31.5002V16H22.5002V7Z" fill="#1271FF" />
            </svg>
          </div>
        </div>
        <div className={styles.mobile}>
          <p className={styles.text_area}>
            Having doubts related to your career<br /> & future, and a regular degree
            isn't <br />helping out! We've planned for you<br /> to enhance your chances to better<br /> jobs & money.
          </p>
          <button
            className={styles.comingSoon_mobilebtn}
          >
            Coming Soon
          </button>
        </div>
      </div>

    </section>
  );
};

export default StepDegree;