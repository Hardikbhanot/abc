import Link from 'next/link';
import styles from './SecondaryBanner.module.scss';

const SecondaryBanner = () => {
  return (
    <main className={styles.secondary_banner}>
      <section className={styles.banner_container}>
        <p className={styles.secondary_banner_sub_heading}>
          IMPARTING EDUCATION THROUGH INNOVATION
        </p>
        <h2 className={styles.secondary_banner_main_heading}>
          Courses to Boost Your Career
        </h2>
        <p className={styles.secondary_banner_discription}>
          Explore our courses and open the gateway to a bright career, So start
          learning now ! We promise you'll be the winner always!
        </p>
        {/* <div className={styles.secondary_banner_courses_card_container}>
          <div className={styles.secondary_banner_courses_card}></div>
          <div className={styles.secondary_banner_courses_card}></div>
          <div className={styles.secondary_banner_courses_card}></div>
          <div className={styles.secondary_banner_courses_card}></div>
          <div className={styles.secondary_banner_courses_card}></div>
          <div className={styles.secondary_banner_courses_card}></div>
        </div> */}
        <Link href='https://futureminds.in/courses/'>
          <a title='View All Courses'>
            <svg
              width='20'
              height='23'
              viewBox='0 0 20 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14 13.6562C12.7188 13.6562 12.1027 14.375 10 14.375C7.89732 14.375 7.28571 13.6562 6 13.6562C2.6875 13.6562 0 16.3605 0 19.6938V20.8438C0 22.0342 0.959821 23 2.14286 23H17.8571C19.0402 23 20 22.0342 20 20.8438V19.6938C20 16.3605 17.3125 13.6562 14 13.6562ZM17.8571 20.8438H2.14286V19.6938C2.14286 17.5555 3.875 15.8125 6 15.8125C6.65179 15.8125 7.70982 16.5312 10 16.5312C12.308 16.5312 13.3438 15.8125 14 15.8125C16.125 15.8125 17.8571 17.5555 17.8571 19.6938V20.8438ZM10 12.9375C13.5491 12.9375 16.4286 10.04 16.4286 6.46875C16.4286 2.89746 13.5491 0 10 0C6.45089 0 3.57143 2.89746 3.57143 6.46875C3.57143 10.04 6.45089 12.9375 10 12.9375ZM10 2.15625C12.3616 2.15625 14.2857 4.09238 14.2857 6.46875C14.2857 8.84512 12.3616 10.7812 10 10.7812C7.63839 10.7812 5.71429 8.84512 5.71429 6.46875C5.71429 4.09238 7.63839 2.15625 10 2.15625Z'
                fill='white'
              />
            </svg>
            <p>View All Courses</p>
          </a>
        </Link>
        <p className={styles.secondary_banner_discription}>
          Enjoy the top notch learning methods and achieve next level skills!
          You are the creator of your own career & we will guide you through
          that.{' '}
          <Link href='https://futureminds.in/student-registration/'>
            Register Free Now!​
          </Link>
          ​
        </p>
      </section>
      <section className={styles.secondary_banner_container}>
        <p className={styles.secondary_banner_sub_heading}>
          EDUCATION FOR EVERYONE
        </p>
        <h2 className={styles.secondary_banner_main_heading}>
          Online Classes Ease of Learning
        </h2>
        <p className={styles.secondary_banner_discription}>
          In the ever evolving world & fast growing competition, We equip you
          with the best skills to command you success.
        </p>
        <div className={styles.courses_detail_card_container}>
          <div className={styles.courses_detail_card}>
            <div className={styles.courses_detail_card_icon}>
              <svg
                width='51'
                height='54'
                viewBox='0 0 51 54'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21.5565 29.1616C21.9503 28.9733 22.1169 28.5013 21.9286 28.1076C21.7404 27.7137 21.2683 27.5471 20.8747 27.7355C18.4651 28.8877 16.8094 31.2029 16.4544 33.8102C14.6364 34.4731 13.1439 35.7588 12.2169 37.4785C12.0098 37.8627 12.1534 38.3421 12.5376 38.5492C12.9387 38.7447 13.2956 38.6378 13.6084 38.2285C14.2477 37.0424 15.2239 36.1147 16.4127 35.5413C16.5715 37.4171 17.3833 39.1544 18.7422 40.4904C19.1161 40.7959 19.4886 40.7928 19.8598 40.4809C20.1659 40.1697 20.1617 39.6693 19.8504 39.3634C18.6331 38.1666 17.9628 36.5676 17.9628 34.8609C17.9628 32.4425 19.3734 30.2054 21.5565 29.1616Z'
                  fill='black'
                />
                <path
                  d='M0.091496 31.5502C-0.0648889 31.9577 0.138707 32.415 0.546214 32.5713C0.63937 32.6071 0.735056 32.624 0.829266 32.624C1.14699 32.624 1.44669 32.4309 1.56725 32.1167C2.03693 30.8929 3.06903 29.9515 4.32801 29.5986C4.69136 29.497 5.0701 29.4455 5.45347 29.4455C5.94887 29.4455 6.43489 29.5319 6.89814 29.7024C7.30754 29.8532 7.76205 29.6433 7.91285 29.2338C8.06365 28.8242 7.85384 28.3698 7.44422 28.219C6.80561 27.9839 6.13581 27.8648 5.45347 27.8648C5.05419 27.8648 4.65796 27.9057 4.271 27.9866C2.62221 26.7987 1.64713 24.9078 1.64713 22.8634C1.64713 19.9479 3.67655 17.4127 6.45765 16.7315C7.20796 18.3827 8.52775 19.7583 10.1608 20.5645C10.2733 20.6199 10.3926 20.6463 10.5101 20.6463C10.8014 20.6462 11.0818 20.4845 11.2194 20.2055C11.4125 19.8141 11.2519 19.3402 10.8606 19.1469C9.38892 18.4204 8.23384 17.117 7.69176 15.5715C7.4575 14.9015 7.33874 14.1989 7.33874 13.4833C7.33874 10.0022 10.1708 7.16999 13.6521 7.16999C14.9897 7.16999 16.2918 7.59015 17.3749 8.38398C17.7267 8.64195 18.2215 8.56597 18.4796 8.21379C18.7377 7.86171 18.6614 7.36716 18.3093 7.10919C17.7566 6.70411 17.1571 6.37627 16.5227 6.12894C16.3722 3.81647 17.9372 1.58071 20.4333 1.58071C22.5141 1.58071 24.22 3.21432 24.3371 5.26629C24.334 5.34111 24.344 11.1468 24.344 11.1468C21.9981 13.0613 18.578 13.0373 16.2509 11.0425C15.9195 10.7585 15.4205 10.7968 15.1365 11.1282C14.8524 11.4596 14.8907 11.9586 15.2222 12.2426C16.701 13.5101 18.5329 14.1413 20.3623 14.1413C21.7422 14.1413 23.1198 13.7803 24.344 13.0643V43.2482C24.344 43.6848 24.6979 44.0386 25.1344 44.0386C25.5709 44.0386 25.9248 43.6848 25.9248 43.2482V35.6619H28.1568V40.2307C28.1568 40.6673 28.5106 41.0211 28.9471 41.0211H32.5168C32.8618 42.2359 33.9804 43.1287 35.3043 43.1287C36.9022 43.1287 38.2023 41.8286 38.2023 40.2307C38.2023 38.6329 36.9022 37.3328 35.3043 37.3328C33.9804 37.3328 32.8618 38.2256 32.5168 39.4404H29.7375V35.6619H31.4236C32.7309 35.6619 33.7947 34.5982 33.7947 33.2908V32.5007H35.3043C35.7409 32.5007 36.0947 32.1469 36.0947 31.7103C36.0947 31.2737 35.7409 30.9199 35.3043 30.9199H33.7947V27.7067H35.6484C35.9934 28.9215 37.112 29.8143 38.4359 29.8143C40.0338 29.8143 41.3339 28.5142 41.3339 26.9163C41.3339 25.3184 40.0338 24.0184 38.4359 24.0184C37.112 24.0184 35.9934 24.9111 35.6484 26.126H33.7947V23.1235H35.3043C35.7409 23.1235 36.0947 22.7697 36.0947 22.3331C36.0947 21.8965 35.7409 21.5428 35.3043 21.5428H33.7947V20.7527C33.7947 19.4454 32.7309 18.3817 31.4236 18.3817H29.7375V14.603H32.5168C32.8618 15.8178 33.9804 16.7106 35.3043 16.7106C36.9022 16.7106 38.2023 15.4106 38.2023 13.8127C38.2023 12.2148 36.9022 10.9147 35.3043 10.9147C33.9804 10.9147 32.8618 11.8075 32.5168 13.0223H28.9471C28.5106 13.0223 28.1568 13.3761 28.1568 13.8127V18.3817H25.9248C25.9248 18.3817 25.9222 5.34111 25.9191 5.26629C26.0362 3.21432 27.7419 1.58071 29.8228 1.58071C32.3 1.58071 33.8847 3.8504 33.7334 6.16424C33.0984 6.41168 32.499 6.73941 31.9463 7.14439C31.5942 7.40236 31.518 7.89702 31.776 8.24909C32.0342 8.60127 32.5287 8.67725 32.8807 8.41939C33.996 7.61733 35.237 7.21267 36.6035 7.2054C40.0846 7.2054 42.9167 10.0376 42.9167 13.5188C42.9167 15.8594 41.4896 18.1484 39.395 19.1823C39.0035 19.3756 38.8429 19.8495 39.0361 20.2409C39.3395 20.6614 39.6923 20.781 40.0946 20.5998C41.7381 19.7885 43.064 18.4002 43.812 16.7343C46.0533 17.2831 47.8244 19.0117 48.4095 21.2817C48.6519 21.7588 48.9727 21.9482 49.3721 21.8498C49.7948 21.7409 50.0492 21.3099 49.9402 20.8872C49.2189 18.0889 47.0567 15.9475 44.3106 15.2292C44.4341 14.6699 44.4975 14.0977 44.4975 13.5189C44.4975 9.16601 40.9563 5.6248 36.6036 5.6248C36.1686 5.6248 35.7377 5.66115 35.3142 5.73081C35.2768 2.71787 32.9714 0 29.8228 0C27.836 0 26.0924 1.06055 25.128 2.64516C24.1638 1.06055 22.4201 0 20.4333 0C17.2477 0 15.0542 2.69838 14.9419 5.69551C14.5182 5.62585 14.0872 5.58939 13.6521 5.58939C9.29924 5.58939 5.75802 9.1306 5.75802 13.4835C5.75802 14.0747 5.82452 14.659 5.95351 15.2298C4.43602 15.6284 3.0606 16.4745 2.01511 17.6701C0.75845 19.1075 0.0664155 20.9519 0.0664155 22.8633C0.0664155 25.0834 0.986178 27.1586 2.57806 28.6387C1.45502 29.2917 0.565077 30.316 0.091496 31.5502V31.5502ZM35.3043 38.9136C36.0307 38.9136 36.6216 39.5045 36.6216 40.2309C36.6216 40.9572 36.0307 41.5481 35.3043 41.5481C34.578 41.5481 33.9871 40.9572 33.9871 40.2309C33.9871 39.5045 34.578 38.9136 35.3043 38.9136ZM38.4358 25.5991C39.1622 25.5991 39.7531 26.1899 39.7531 26.9163C39.7531 27.6427 39.1622 28.2336 38.4358 28.2336C37.7116 28.2336 37.1223 27.646 37.1189 26.9224C37.1189 26.9203 37.1192 26.9184 37.1192 26.9163C37.1192 26.9142 37.1189 26.9123 37.1189 26.9102C37.1223 26.1867 37.7116 25.5991 38.4358 25.5991ZM35.3043 12.4953C36.0307 12.4953 36.6216 13.0862 36.6216 13.8126C36.6216 14.5389 36.0307 15.1298 35.3043 15.1298C34.578 15.1298 33.9871 14.5389 33.9871 13.8126C33.9871 13.0862 34.578 12.4953 35.3043 12.4953V12.4953ZM25.9248 24.1776H27.9912V29.8659H25.9248V24.1776ZM31.4235 19.9624C31.8593 19.9624 32.2138 20.3169 32.2138 20.7527V33.2908C32.2138 33.7267 31.8593 34.0812 31.4235 34.0812H25.9247V31.4466H28.7815C29.2181 31.4466 29.5718 31.0929 29.5718 30.6563V23.3872C29.5718 22.9506 29.2181 22.5969 28.7815 22.5969H25.9247V19.9624H31.4235Z'
                  fill='black'
                />
                <path
                  d='M22.6776 22.4314C21.6698 20.562 19.9948 19.2031 17.9587 18.6025C17.6771 18.5083 17.3537 18.5778 17.1353 18.8071C16.8343 19.1231 16.8465 19.6234 17.1626 19.9244C17.2551 20.0126 17.3677 20.0766 17.489 20.1119V20.112C19.1278 20.589 20.4764 21.6791 21.2862 23.1814C21.599 23.5907 21.9559 23.6976 22.357 23.5021C22.7411 23.2951 22.8847 22.8157 22.6776 22.4314V22.4314Z'
                  fill='black'
                />
                <path
                  d='M50.5444 33.6069C50.5444 31.5317 49.4163 29.6473 47.679 28.6371C48.8084 27.5871 49.607 26.2325 49.971 24.7126C50.0727 24.2881 49.8108 23.8616 49.3864 23.7599C48.9616 23.6585 48.5354 23.9201 48.4337 24.3444C48.0807 25.8188 47.2161 27.1003 45.9853 27.9868C44.9164 27.7669 43.8585 27.8443 42.8114 28.2192C42.4017 28.37 42.192 28.8242 42.3428 29.2339C42.4936 29.6435 42.9477 29.8533 43.3575 29.7025C44.2087 29.399 45.0653 29.3643 45.9274 29.5986C47.7151 30.0994 48.9638 31.7477 48.9638 33.6071C48.9638 35.3756 47.8231 36.9508 46.1885 37.5314C45.7676 36.9637 45.2741 36.4554 44.7138 36.0173C44.3698 35.7485 43.873 35.809 43.6043 36.1531C43.3354 36.497 43.3962 36.9937 43.74 37.2625C45.2653 38.4552 46.1648 40.3045 46.1648 42.2367C46.1648 45.7178 43.3326 48.5499 39.8515 48.5499C38.5167 48.5499 37.2412 48.1385 36.1621 47.3593C35.3827 46.7986 34.7314 46.0539 34.2784 45.2059C34.0729 44.8209 33.5942 44.6753 33.209 44.8811C32.8241 45.0867 32.6785 45.5654 32.8843 45.9505C33.3807 46.8802 34.0682 47.7103 34.8864 48.3729C34.657 50.636 32.7255 52.4183 30.411 52.4183C28.0496 52.4183 26.0478 50.5234 25.9188 48.1703C25.9387 47.6795 25.9284 47.1828 25.9249 46.692C25.9249 46.2554 25.5712 45.9016 25.1346 45.9016C25.1322 45.9016 25.13 45.9019 25.1277 45.9019C25.1254 45.9019 25.1232 45.9016 25.1209 45.9016C24.6844 45.9016 24.3305 46.2554 24.3305 46.692C24.327 47.1831 24.3167 47.6801 24.3366 48.1714C24.2071 50.524 22.2054 52.4183 19.8444 52.4183C17.5301 52.4183 15.5987 50.6361 15.3691 48.3732C16.188 47.7103 16.8753 46.8801 17.3718 45.9505C17.5774 45.5654 17.432 45.0867 17.0469 44.8811C16.6618 44.6752 16.1831 44.8208 15.9774 45.2059C15.5245 46.054 14.8731 46.7985 14.0927 47.36C13.0147 48.1384 11.7393 48.5498 10.4044 48.5498C6.9232 48.5498 4.09109 45.7177 4.09109 42.2366C4.09109 41.0512 4.42094 39.8975 5.04542 38.8975C5.05227 38.8876 5.05891 38.8776 5.06534 38.8673C5.45346 38.2514 5.94147 37.7114 6.5159 37.2624C6.85976 36.9936 6.92057 36.4968 6.65174 36.1531C6.38291 35.809 5.88625 35.7483 5.54229 36.0172C4.98209 36.4553 4.4887 36.9635 4.0677 37.5311C2.90314 37.1167 1.9564 36.187 1.53456 35.0105C1.38724 34.5997 0.934944 34.3859 0.523854 34.5333C0.112975 34.6806 -0.100737 35.1331 0.0465852 35.5441C0.592352 37.0664 1.77609 38.2884 3.247 38.9061C2.76361 39.944 2.51028 41.0782 2.51028 42.2366C2.51028 46.5893 6.05149 50.1305 10.4043 50.1305C11.6426 50.1305 12.8399 49.8465 13.926 49.303C14.5583 51.9855 16.9848 53.9991 19.8443 53.9991C22.0147 53.9991 24.0501 52.8143 25.1276 50.9302C26.2051 52.8143 28.2404 53.9991 30.4109 53.9991C33.2704 53.9991 35.6971 51.9853 36.3292 49.3027C37.4158 49.8466 38.6132 50.1305 39.8514 50.1305C44.2042 50.1305 47.7455 46.5893 47.7455 42.2366C47.7455 41.0788 47.4923 39.945 47.0095 38.9075C49.1063 38.0279 50.5444 35.939 50.5444 33.6069V33.6069Z'
                  fill='black'
                />
              </svg>
            </div>
            <h3 className={styles.courses_detail_card_heading}>
              Learn the In-Demand Skills
            </h3>
            <p className={styles.courses_detail_card_discription}>
              Be it AI/ML Development, UI/UX, Full Stack, Digital Marketing,
              Mobile App Development or any in-demand skills, Our experts teach
              them all.
            </p>
            <Link href='https://futureminds.in/courses/'>Start Now!</Link>
          </div>
          <div className={styles.courses_detail_card}>
            <div className={styles.courses_detail_card_icon}>
              <svg
                width='51'
                height='43'
                viewBox='0 0 51 43'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M48.121 0H2.87903C2.11572 0.000843691 1.38392 0.30444 0.844181 0.844181C0.30444 1.38392 0.000843691 2.11572 0 2.87903V33.3145C0.000843691 34.0778 0.30444 34.8096 0.844181 35.3494C1.38392 35.8891 2.11572 36.1927 2.87903 36.1935H19.561L19.0674 38.6613H15.629C15.4109 38.6613 15.2016 38.748 15.0474 38.9022C14.8931 39.0565 14.8065 39.2657 14.8065 39.4839V41.9516C14.8065 42.1698 14.8931 42.379 15.0474 42.5333C15.2016 42.6875 15.4109 42.7742 15.629 42.7742H35.371C35.5891 42.7742 35.7984 42.6875 35.9526 42.5333C36.1069 42.379 36.1935 42.1698 36.1935 41.9516V39.4839C36.1935 39.2657 36.1069 39.0565 35.9526 38.9022C35.7984 38.748 35.5891 38.6613 35.371 38.6613H31.9326L31.439 36.1935H48.121C48.8843 36.1927 49.6161 35.8891 50.1558 35.3494C50.6956 34.8096 50.9992 34.0778 51 33.3145V2.87903C50.9992 2.11572 50.6956 1.38392 50.1558 0.844181C49.6161 0.30444 48.8843 0.000843691 48.121 0ZM34.5484 40.3065V41.129H16.4516V40.3065H34.5484ZM20.7455 38.6613L21.239 36.1935H29.761L30.2545 38.6613H20.7455ZM49.3548 33.3145C49.3546 33.6417 49.2245 33.9554 48.9931 34.1867C48.7618 34.418 48.4481 34.5481 48.121 34.5484H2.87903C2.55187 34.5481 2.23819 34.418 2.00685 34.1867C1.77552 33.9554 1.64543 33.6417 1.64516 33.3145V31.2581H49.3548V33.3145ZM49.3548 29.6129H1.64516V2.87903C1.64543 2.55187 1.77552 2.23819 2.00685 2.00685C2.23819 1.77552 2.55187 1.64543 2.87903 1.64516H48.121C48.4481 1.64543 48.7618 1.77552 48.9931 2.00685C49.2245 2.23819 49.3546 2.55187 49.3548 2.87903V29.6129Z'
                  fill='black'
                />
                <path
                  d='M26.3226 32.0806H24.6774C24.4593 32.0806 24.25 32.1673 24.0958 32.3216C23.9415 32.4758 23.8549 32.6851 23.8549 32.9032C23.8549 33.1214 23.9415 33.3306 24.0958 33.4849C24.25 33.6391 24.4593 33.7258 24.6774 33.7258H26.3226C26.5408 33.7258 26.75 33.6391 26.9043 33.4849C27.0585 33.3306 27.1452 33.1214 27.1452 32.9032C27.1452 32.6851 27.0585 32.4758 26.9043 32.3216C26.75 32.1673 26.5408 32.0806 26.3226 32.0806Z'
                  fill='black'
                />
              </svg>
            </div>
            <h3 className={styles.courses_detail_card_heading}>
              Secured Internship
            </h3>
            <p className={styles.courses_detail_card_discription}>
              Be it Technical course OR Job oriented Non- technical one, We
              ensure you get live experience through corporate internships .
            </p>
            <Link href='https://futureminds.in/courses/'>Start Now!</Link>
          </div>
          <div className={styles.courses_detail_card}>
            <div className={styles.courses_detail_card_icon}>
              <svg
                width='40'
                height='50'
                viewBox='0 0 40 50'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M31.9002 16.9729C31.5311 16.5667 30.931 16.5667 30.5619 16.9729L17.9821 30.8187L11.0788 23.2229C10.7097 22.8167 10.1097 22.8167 9.74057 23.2229C9.37147 23.6292 9.37147 24.2896 9.74057 24.6959L17.3119 33.0292C17.4975 33.2312 17.7397 33.3334 17.982 33.3334C18.2243 33.3334 18.4665 33.2313 18.6502 33.0292L31.9001 18.4459C32.2693 18.0395 32.2693 17.3792 31.9002 16.9729Z'
                  fill='black'
                />
                <path
                  d='M39.0741 6.29373L20.1456 0.0437256C19.9677 -0.0145752 19.7803 -0.0145752 19.6023 0.0437256L0.673884 6.29373C0.274434 6.42498 0 6.83123 0 7.29168V30.2084C0 39.4209 12.7616 47.6146 19.5948 49.9542C19.6857 49.9854 19.7803 50 19.8749 50C19.9695 50 20.0642 49.9854 20.155 49.9542C26.9883 47.6125 39.7498 39.4208 39.7498 30.2083V7.29168C39.7498 6.83123 39.4754 6.42703 39.0741 6.29373ZM37.857 30.2083C37.857 37.5228 27.3271 45.2145 19.8749 47.8666C12.4228 45.2145 1.89282 37.5228 1.89282 30.2083V8.06668L19.8749 2.12918L37.857 8.06668V30.2083V30.2083Z'
                  fill='black'
                />
              </svg>
            </div>
            <h3 className={styles.courses_detail_card_heading}>
              We Got Your Fee Covered
            </h3>
            <p className={styles.courses_detail_card_discription}>
              Having issues paying fees! Don't worry our financial partners got
              it covered for You.
            </p>
            <Link href='https://futureminds.in/courses/'>Start Now!</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SecondaryBanner;
