import classes from "./About.module.css";
import Button from "./Button";
import user from "../Assets/Image/user.png";

const images = [
  { src: ["./Image/image6.png"] },
  { src: ["./Image/image5.png", "./Image/BookMyShowLogo.png"] },
  { src: ["./Image/image2.png", "./Image/image3.png", "./Image/image7.png"] },
  { src: ["./Image/image4.png", "./Image/ola.png"] },
  { src: ["./Image/Amazon.png"] },
];

const About = () => {
  return (
    <>
      <div className={classes.section}>
        <h1>Referanslarımız</h1>
        <p>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>

        <div className={classes.images}>
          {images.map((images, idx) => {
            return (
              <div className={classes.wrap} key={idx}>
                {images.src.map((image, i) => {
                  return (
                    <div key={i} className={classes.item}>
                      <img className={classes.i} src={image} alt="images" />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.container}>
        <img src={user} alt="user"></img>
        <h1>Bize Ulaşın</h1>
        <p>
          Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle
          irtibata geçin.
        </p>
        <Button className={classes.btn} description="Bize Ulaşın"></Button>
      </div>
    </>
  );
};

export default About;
