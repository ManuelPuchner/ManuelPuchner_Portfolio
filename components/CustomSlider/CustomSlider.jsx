import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./CustomSlider.module.scss"

const CustomCarousel = ({children}) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      emulateTouch
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              className={`${styles.indicator} ${styles.active}`}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            className={`${styles.indicator}`}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {children}
    </Carousel>
  );
};
{/* <div>
        <img src="/NotizApp.png" alt="" />
      </div>
      <div>
        <img src="/NotizAppGitHub.png" alt="" />
      </div> */}
{/* <Carousel showThumbs={false} showStatus={false} showArrows={false}>
  <div>
    <img src="/Home.png" alt="" />
  </div>
  <div>
    <img src="/Login.png" alt="" />
  </div>
  <div>
    <img src="/Signup.png" alt="" />
  </div>
  <div>
    <img src="/Dashboard.png" alt="" />
  </div>
</Carousel>; */}
export default CustomCarousel;
