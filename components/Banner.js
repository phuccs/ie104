import "slick-carousel/slick/slick.css"; //thư viện react-slick
import "slick-carousel/slick/slick-theme.css"; //slick-carousel
import Slider from "react-slick";  
import styles from "../styles/Banner.module.css";

export default function Banner() {
  const images = [
    { id: 1, src: "/banner.png", alt: "Banner 1" },
    { id: 2, src: "/banner2.png", alt: "Banner 2" },
    { id: 3, src: "/banner3.png", alt: "Banner 3" },
  ];

  const settings = {
    dots: true, // Hiển thị chấm chỉ mục
    infinite: true, // Lặp lại ảnh
    speed: 500, // Thời gian chuyển đổi
    slidesToShow: 1, // Số slide hiển thị
    slidesToScroll: 1, // Số slide chuyển đổi
    autoplay: true, // Tự động chạy
    arrows: true, // Nút điều hướng
  };

  return (
    <div className={styles.bannerContainer}>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className={styles.slide}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
