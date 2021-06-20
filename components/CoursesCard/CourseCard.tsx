// import Image from 'next/image';
import Link from 'next/link';
import styles from './CourseCard.module.scss';

interface courseFields {
  courseId: number;
  courseImage: string;
  courseLevel: string;
  courseName: string;
  coursePrice: number;
  smallDescription: string;
}

interface pageProps {
  course: courseFields;
}

const CourseCard = ({ course }: pageProps) => {
  return (
    <div className={styles.course_card}>
      <div className={styles.img_container}>
        <button className={styles.bookmark_btn}>
          <svg
            className={styles.bookmark_svg}
            width='20'
            height='22'
            viewBox='0 0 101 141'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M95.9077 0H4.27734C1.91511 0 0 1.84952 0 4.13086V136.869C0 138.54 1.04225 140.046 2.64055 140.686C3.1698 140.897 3.72557 141 4.27649 141C5.38974 141 6.4836 140.581 7.302 139.79L50.0934 98.4645L92.8831 139.79C94.1064 140.971 95.9462 141.325 97.5445 140.686C99.1428 140.046 100.185 138.54 100.185 136.869V4.13086C100.185 1.84952 98.27 0 95.9077 0ZM50.0931 88.4918C48.9588 88.4918 47.8709 88.9269 47.0687 89.7019L8.55469 126.896V8.26172H91.6301V126.896L53.1178 89.7019C52.3156 88.9269 51.2278 88.4918 50.0931 88.4918Z'
              fill='black'
            />
          </svg>
        </button>
        <p className={styles.price_value}>
          <strong>Rs. {course.coursePrice}</strong> Including GST
        </p>
        <img
          src={course.courseImage}
          alt='Course name'
          className={styles.card_img}
          width={200}
          height={300}
        />
      </div>
      <div className={styles.detail_container}>
        <div className={styles.rating_level_container}>
          <div className={styles.star_rating}>
            <svg
              className={styles.stars}
              width='22'
              height='16'
              viewBox='0 0 149 143'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M33.3493 143C31.7169 143 30.0958 142.49 28.7123 141.488C26.1351 139.618 24.9313 136.403 25.6327 133.3L35.2182 91.0136L2.71009 62.4627C0.320518 60.3736 -0.592338 57.0652 0.388727 54.038C1.36979 51.0165 4.03902 48.8772 7.19934 48.5847L50.2116 44.674L67.2171 4.81919C68.471 1.89102 71.3267 0 74.4995 0C77.6723 0 80.528 1.89102 81.7819 4.81236L98.7874 44.674L141.793 48.5847C144.96 48.8704 147.629 51.0165 148.61 54.038C149.591 57.0595 148.684 60.3736 146.295 62.4627L113.786 91.0079L123.372 133.293C124.075 136.403 122.87 139.618 120.294 141.482C117.723 143.347 114.296 143.491 111.589 141.862L74.4995 119.665L37.41 141.874C36.1561 142.62 34.759 143 33.3493 143V143ZM74.4995 110.102C75.9091 110.102 77.3051 110.482 78.5602 111.227L113.564 132.194L104.517 92.2818C103.871 89.4413 104.834 86.4756 107.026 84.5538L137.721 57.5946L97.1106 53.9014C94.1867 53.6338 91.6721 51.7929 90.5296 49.0947L74.4995 11.4839L58.45 49.1004C57.3201 51.7804 54.8054 53.6213 51.8884 53.8888L11.2725 57.5821L41.9663 84.5413C44.1649 86.4687 45.1267 89.4288 44.4753 92.2761L35.4354 132.187L70.4388 111.227C71.6927 110.482 73.0899 110.102 74.4995 110.102V110.102ZM49.8831 45.4447C49.8831 45.4447 49.8831 45.4516 49.8762 45.4573L49.8831 45.4447ZM99.1034 45.4265L99.1102 45.439C99.1102 45.4322 99.1102 45.4322 99.1034 45.4265Z'
                fill='black'
              />
            </svg>
            <svg
              className={styles.stars}
              width='22'
              height='16'
              viewBox='0 0 149 143'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M33.3493 143C31.7169 143 30.0958 142.49 28.7123 141.488C26.1351 139.618 24.9313 136.403 25.6327 133.3L35.2182 91.0136L2.71009 62.4627C0.320518 60.3736 -0.592338 57.0652 0.388727 54.038C1.36979 51.0165 4.03902 48.8772 7.19934 48.5847L50.2116 44.674L67.2171 4.81919C68.471 1.89102 71.3267 0 74.4995 0C77.6723 0 80.528 1.89102 81.7819 4.81236L98.7874 44.674L141.793 48.5847C144.96 48.8704 147.629 51.0165 148.61 54.038C149.591 57.0595 148.684 60.3736 146.295 62.4627L113.786 91.0079L123.372 133.293C124.075 136.403 122.87 139.618 120.294 141.482C117.723 143.347 114.296 143.491 111.589 141.862L74.4995 119.665L37.41 141.874C36.1561 142.62 34.759 143 33.3493 143V143ZM74.4995 110.102C75.9091 110.102 77.3051 110.482 78.5602 111.227L113.564 132.194L104.517 92.2818C103.871 89.4413 104.834 86.4756 107.026 84.5538L137.721 57.5946L97.1106 53.9014C94.1867 53.6338 91.6721 51.7929 90.5296 49.0947L74.4995 11.4839L58.45 49.1004C57.3201 51.7804 54.8054 53.6213 51.8884 53.8888L11.2725 57.5821L41.9663 84.5413C44.1649 86.4687 45.1267 89.4288 44.4753 92.2761L35.4354 132.187L70.4388 111.227C71.6927 110.482 73.0899 110.102 74.4995 110.102V110.102ZM49.8831 45.4447C49.8831 45.4447 49.8831 45.4516 49.8762 45.4573L49.8831 45.4447ZM99.1034 45.4265L99.1102 45.439C99.1102 45.4322 99.1102 45.4322 99.1034 45.4265Z'
                fill='black'
              />
            </svg>
            <svg
              className={styles.stars}
              width='22'
              height='16'
              viewBox='0 0 149 143'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M33.3493 143C31.7169 143 30.0958 142.49 28.7123 141.488C26.1351 139.618 24.9313 136.403 25.6327 133.3L35.2182 91.0136L2.71009 62.4627C0.320518 60.3736 -0.592338 57.0652 0.388727 54.038C1.36979 51.0165 4.03902 48.8772 7.19934 48.5847L50.2116 44.674L67.2171 4.81919C68.471 1.89102 71.3267 0 74.4995 0C77.6723 0 80.528 1.89102 81.7819 4.81236L98.7874 44.674L141.793 48.5847C144.96 48.8704 147.629 51.0165 148.61 54.038C149.591 57.0595 148.684 60.3736 146.295 62.4627L113.786 91.0079L123.372 133.293C124.075 136.403 122.87 139.618 120.294 141.482C117.723 143.347 114.296 143.491 111.589 141.862L74.4995 119.665L37.41 141.874C36.1561 142.62 34.759 143 33.3493 143V143ZM74.4995 110.102C75.9091 110.102 77.3051 110.482 78.5602 111.227L113.564 132.194L104.517 92.2818C103.871 89.4413 104.834 86.4756 107.026 84.5538L137.721 57.5946L97.1106 53.9014C94.1867 53.6338 91.6721 51.7929 90.5296 49.0947L74.4995 11.4839L58.45 49.1004C57.3201 51.7804 54.8054 53.6213 51.8884 53.8888L11.2725 57.5821L41.9663 84.5413C44.1649 86.4687 45.1267 89.4288 44.4753 92.2761L35.4354 132.187L70.4388 111.227C71.6927 110.482 73.0899 110.102 74.4995 110.102V110.102ZM49.8831 45.4447C49.8831 45.4447 49.8831 45.4516 49.8762 45.4573L49.8831 45.4447ZM99.1034 45.4265L99.1102 45.439C99.1102 45.4322 99.1102 45.4322 99.1034 45.4265Z'
                fill='black'
              />
            </svg>
            <svg
              className={styles.stars}
              width='22'
              height='16'
              viewBox='0 0 149 143'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M33.3493 143C31.7169 143 30.0958 142.49 28.7123 141.488C26.1351 139.618 24.9313 136.403 25.6327 133.3L35.2182 91.0136L2.71009 62.4627C0.320518 60.3736 -0.592338 57.0652 0.388727 54.038C1.36979 51.0165 4.03902 48.8772 7.19934 48.5847L50.2116 44.674L67.2171 4.81919C68.471 1.89102 71.3267 0 74.4995 0C77.6723 0 80.528 1.89102 81.7819 4.81236L98.7874 44.674L141.793 48.5847C144.96 48.8704 147.629 51.0165 148.61 54.038C149.591 57.0595 148.684 60.3736 146.295 62.4627L113.786 91.0079L123.372 133.293C124.075 136.403 122.87 139.618 120.294 141.482C117.723 143.347 114.296 143.491 111.589 141.862L74.4995 119.665L37.41 141.874C36.1561 142.62 34.759 143 33.3493 143V143ZM74.4995 110.102C75.9091 110.102 77.3051 110.482 78.5602 111.227L113.564 132.194L104.517 92.2818C103.871 89.4413 104.834 86.4756 107.026 84.5538L137.721 57.5946L97.1106 53.9014C94.1867 53.6338 91.6721 51.7929 90.5296 49.0947L74.4995 11.4839L58.45 49.1004C57.3201 51.7804 54.8054 53.6213 51.8884 53.8888L11.2725 57.5821L41.9663 84.5413C44.1649 86.4687 45.1267 89.4288 44.4753 92.2761L35.4354 132.187L70.4388 111.227C71.6927 110.482 73.0899 110.102 74.4995 110.102V110.102ZM49.8831 45.4447C49.8831 45.4447 49.8831 45.4516 49.8762 45.4573L49.8831 45.4447ZM99.1034 45.4265L99.1102 45.439C99.1102 45.4322 99.1102 45.4322 99.1034 45.4265Z'
                fill='black'
              />
            </svg>
            <svg
              className={styles.stars}
              width='22'
              height='16'
              viewBox='0 0 149 143'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M33.3493 143C31.7169 143 30.0958 142.49 28.7123 141.488C26.1351 139.618 24.9313 136.403 25.6327 133.3L35.2182 91.0136L2.71009 62.4627C0.320518 60.3736 -0.592338 57.0652 0.388727 54.038C1.36979 51.0165 4.03902 48.8772 7.19934 48.5847L50.2116 44.674L67.2171 4.81919C68.471 1.89102 71.3267 0 74.4995 0C77.6723 0 80.528 1.89102 81.7819 4.81236L98.7874 44.674L141.793 48.5847C144.96 48.8704 147.629 51.0165 148.61 54.038C149.591 57.0595 148.684 60.3736 146.295 62.4627L113.786 91.0079L123.372 133.293C124.075 136.403 122.87 139.618 120.294 141.482C117.723 143.347 114.296 143.491 111.589 141.862L74.4995 119.665L37.41 141.874C36.1561 142.62 34.759 143 33.3493 143V143ZM74.4995 110.102C75.9091 110.102 77.3051 110.482 78.5602 111.227L113.564 132.194L104.517 92.2818C103.871 89.4413 104.834 86.4756 107.026 84.5538L137.721 57.5946L97.1106 53.9014C94.1867 53.6338 91.6721 51.7929 90.5296 49.0947L74.4995 11.4839L58.45 49.1004C57.3201 51.7804 54.8054 53.6213 51.8884 53.8888L11.2725 57.5821L41.9663 84.5413C44.1649 86.4687 45.1267 89.4288 44.4753 92.2761L35.4354 132.187L70.4388 111.227C71.6927 110.482 73.0899 110.102 74.4995 110.102V110.102ZM49.8831 45.4447C49.8831 45.4447 49.8831 45.4516 49.8762 45.4573L49.8831 45.4447ZM99.1034 45.4265L99.1102 45.439C99.1102 45.4322 99.1102 45.4322 99.1034 45.4265Z'
                fill='black'
              />
            </svg>
          </div>
          <p className={styles.course_level}>{course.courseLevel}</p>
        </div>
        <Link href={'/courses/' + course.courseId}>
          <a className={styles.course_name}>{course.courseName}</a>
        </Link>
        <p className={styles.course_description}>{course.smallDescription}</p>
      </div>
    </div>
  );
};

export default CourseCard;
