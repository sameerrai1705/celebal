import image1 from "../Assets/Image/Illustration.jpg";
import image2 from "../Assets/Image/Illustration1.jpg";
import Button from "./Button";
import classes from "./ThirdPage.module.css";

const ThirdPage = () => {
  return (
    <div className={classes.wrap}>
      <div className={classes.section}>
        <div className={classes.container}>
          <h1>Kalite ve Süreç Yönetimi</h1>
          <p>
            Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP®
            sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır.
            Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz
            alanları güçlendirmek, uluslararası geçerliliği olan PMI®
            metodolojisini şirketinizde uygulamak ve geliştirmek için
            yanınızdayız.
          </p>
          <div className={classes.btn}>
            <Button description="Keşfet"></Button>
          </div>
        </div>
        <div>
          <img src={image1} alt="info" />
        </div>
      </div>

      <div className={classes.section}>
        <div>
          <img src={image2} alt="info" />
        </div>
        <div className={classes.container}>
          <h1>Test Yönetimi ve Analizi</h1>
          <p>
            Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek
            amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel ya
            da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test
            ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile
            baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi
            sunmaktadır.
          </p>
          <div className={classes.btn}>
            <Button description="Keşfet"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
