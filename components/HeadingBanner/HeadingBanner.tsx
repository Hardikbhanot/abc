import styles from './HeadingBanner.module.scss';

interface PageProps {
  heading: string;
}

const Banner = ({ heading }: PageProps) => {
  return (
    <div className={styles.banner_container}>
      <h1 className={styles.banner_text}>{heading}</h1>
      <svg
        className={styles.cross}
        width='20'
        height='20'
        viewBox='0 0 124 124'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M2.45852 121.135C2.65277 121.329 2.85512 121.514 3.06759 121.688C3.28005 121.864 3.50061 122.026 3.72926 122.179C3.95791 122.331 4.19466 122.473 4.43545 122.602C4.67827 122.732 4.92716 122.849 5.18009 122.954C5.43505 123.06 5.69405 123.153 5.95711 123.232C6.21813 123.312 6.48523 123.379 6.75435 123.432C7.0255 123.487 7.29664 123.527 7.56981 123.553C7.84298 123.58 8.11818 123.594 8.39134 123.594C8.66654 123.594 8.94173 123.58 9.2149 123.553C9.48807 123.527 9.75921 123.487 10.0283 123.432C10.2995 123.379 10.5646 123.312 10.8276 123.232C11.0907 123.153 11.3497 123.06 11.6026 122.954C11.8576 122.849 12.1064 122.732 12.3472 122.602C12.5901 122.473 12.8268 122.331 13.0534 122.179C13.2821 122.026 13.5026 121.864 13.7151 121.688C13.9276 121.514 14.1319 121.329 14.3262 121.135L61.7969 73.6645L109.268 121.135C109.462 121.329 109.666 121.514 109.879 121.688C110.091 121.864 110.312 122.026 110.54 122.179C110.767 122.331 111.004 122.473 111.247 122.602C111.487 122.732 111.736 122.849 111.991 122.954C112.244 123.06 112.503 123.153 112.766 123.232C113.029 123.312 113.294 123.379 113.565 123.432C113.835 123.487 114.106 123.527 114.379 123.553C114.652 123.58 114.927 123.594 115.202 123.594C115.476 123.594 115.751 123.58 116.024 123.553C116.297 123.527 116.568 123.487 116.839 123.432C117.109 123.379 117.376 123.312 117.637 123.232C117.9 123.153 118.159 123.06 118.414 122.954C118.667 122.849 118.915 122.732 119.158 122.602C119.399 122.473 119.636 122.331 119.864 122.179C120.093 122.026 120.314 121.864 120.526 121.688C120.739 121.514 120.941 121.329 121.135 121.135C121.329 120.941 121.514 120.739 121.688 120.526C121.864 120.314 122.026 120.093 122.179 119.864C122.331 119.636 122.473 119.399 122.602 119.158C122.732 118.915 122.849 118.667 122.954 118.414C123.06 118.159 123.153 117.9 123.232 117.637C123.312 117.376 123.379 117.109 123.432 116.839C123.487 116.568 123.527 116.297 123.553 116.024C123.58 115.751 123.594 115.476 123.594 115.202C123.594 114.927 123.58 114.652 123.553 114.379C123.527 114.106 123.487 113.835 123.432 113.565C123.379 113.294 123.312 113.029 123.232 112.766C123.153 112.503 123.06 112.244 122.954 111.991C122.849 111.736 122.732 111.487 122.602 111.247C122.473 111.004 122.331 110.767 122.179 110.54C122.026 110.312 121.864 110.091 121.688 109.879C121.514 109.666 121.329 109.462 121.135 109.268L73.6645 61.7969L121.135 14.3262C121.329 14.1319 121.514 13.9276 121.688 13.7151C121.864 13.5026 122.026 13.2821 122.179 13.0534C122.331 12.8268 122.473 12.5901 122.602 12.3472C122.732 12.1064 122.849 11.8576 122.954 11.6026C123.06 11.3497 123.153 11.0907 123.232 10.8276C123.312 10.5646 123.379 10.2995 123.432 10.0283C123.487 9.75921 123.527 9.48807 123.553 9.2149C123.58 8.94173 123.594 8.66654 123.594 8.39134C123.594 8.11818 123.58 7.84298 123.553 7.56981C123.527 7.29664 123.487 7.0255 123.432 6.75435C123.379 6.48523 123.312 6.21813 123.232 5.95711C123.153 5.69405 123.06 5.43505 122.954 5.18009C122.849 4.92716 122.732 4.67827 122.602 4.43545C122.473 4.19466 122.331 3.95791 122.179 3.72926C122.026 3.50061 121.864 3.28005 121.688 3.06759C121.514 2.85512 121.329 2.65277 121.135 2.45852C120.941 2.26427 120.739 2.08013 120.526 1.90611C120.314 1.73007 120.093 1.56819 119.864 1.41441C119.636 1.26265 119.399 1.121 119.158 0.991502C118.915 0.862 118.667 0.744638 118.414 0.639418C118.159 0.534197 117.9 0.441117 117.637 0.362202C117.376 0.281263 117.109 0.214488 116.839 0.161878C116.568 0.107244 116.297 0.0667745 116.024 0.0404695C115.751 0.0141644 115.476 0 115.202 0C114.927 0 114.652 0.0141644 114.379 0.0404695C114.106 0.0667745 113.835 0.107244 113.565 0.161878C113.294 0.214488 113.029 0.281263 112.766 0.362202C112.503 0.441117 112.244 0.534197 111.991 0.639418C111.736 0.744638 111.487 0.862 111.247 0.991502C111.004 1.121 110.767 1.26265 110.54 1.41441C110.312 1.56819 110.091 1.73007 109.879 1.90611C109.666 2.08013 109.462 2.26427 109.268 2.45852L61.7969 49.9292L14.3262 2.45852C14.1319 2.26427 13.9276 2.08013 13.7151 1.90611C13.5026 1.73007 13.2821 1.56819 13.0534 1.41441C12.8268 1.26265 12.5901 1.121 12.3472 0.991502C12.1064 0.862 11.8576 0.744638 11.6026 0.639418C11.3497 0.534197 11.0907 0.441117 10.8276 0.362202C10.5646 0.281263 10.2995 0.214488 10.0283 0.161878C9.75921 0.107244 9.48807 0.0667745 9.2149 0.0404695C8.94173 0.0141644 8.66654 0 8.39134 0C8.11818 0 7.84298 0.0141644 7.56981 0.0404695C7.29664 0.0667745 7.0255 0.107244 6.75435 0.161878C6.48523 0.214488 6.21813 0.281263 5.95711 0.362202C5.69405 0.441117 5.43505 0.534197 5.18009 0.639418C4.92716 0.744638 4.67827 0.862 4.43545 0.991502C4.19466 1.121 3.95791 1.26265 3.72926 1.41441C3.50061 1.56819 3.28005 1.73007 3.06759 1.90611C2.85512 2.08013 2.65277 2.26427 2.45852 2.45852C2.26427 2.65277 2.08013 2.85512 1.90611 3.06759C1.73007 3.28005 1.56819 3.50061 1.41441 3.72926C1.26265 3.95791 1.121 4.19466 0.991502 4.43545C0.862 4.67827 0.744638 4.92716 0.639418 5.18009C0.534197 5.43505 0.441117 5.69405 0.362202 5.95711C0.281263 6.21813 0.214488 6.48523 0.161878 6.75435C0.107244 7.0255 0.0667745 7.29664 0.0404695 7.56981C0.0141644 7.84298 0 8.11818 0 8.39134C0 8.66654 0.0141644 8.94173 0.0404695 9.2149C0.0667745 9.48807 0.107244 9.75921 0.161878 10.0283C0.214488 10.2995 0.281263 10.5646 0.362202 10.8276C0.441117 11.0907 0.534197 11.3497 0.639418 11.6026C0.744638 11.8576 0.862 12.1064 0.991502 12.3472C1.121 12.5901 1.26265 12.8268 1.41441 13.0534C1.56819 13.2821 1.73007 13.5026 1.90611 13.7151C2.08013 13.9276 2.26427 14.1319 2.45852 14.3262L49.9292 61.7969L2.45852 109.268C2.26427 109.462 2.08013 109.666 1.90611 109.879C1.73007 110.091 1.56819 110.312 1.41441 110.54C1.26265 110.767 1.121 111.004 0.991502 111.247C0.862 111.487 0.744638 111.736 0.639418 111.991C0.534197 112.244 0.441117 112.503 0.362202 112.766C0.281263 113.029 0.214488 113.294 0.161878 113.565C0.107244 113.835 0.0667745 114.106 0.0404695 114.379C0.0141644 114.652 0 114.927 0 115.202C0 115.476 0.0141644 115.751 0.0404695 116.024C0.0667745 116.297 0.107244 116.568 0.161878 116.839C0.214488 117.109 0.281263 117.376 0.362202 117.637C0.441117 117.9 0.534197 118.159 0.639418 118.414C0.744638 118.667 0.862 118.915 0.991502 119.158C1.121 119.399 1.26265 119.636 1.41441 119.864C1.56819 120.093 1.73007 120.314 1.90611 120.526C2.08013 120.739 2.26427 120.941 2.45852 121.135Z'
          fill='#29EAC8'
        />
      </svg>
    </div>
  );
};

export default Banner;
