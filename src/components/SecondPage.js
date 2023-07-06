import React from "react";
import classes from "./SecondPage.module.css";
import Data from "../Assets/Data";

const SecondPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Kalite ve Süreç Yönetimi</h1>
        <p>
          Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
          farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
          Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
        </p>
      </div>

      <div className={classes.wrap}>
        {Data.map((item, idx) => {
          return (
            <div className={classes.cover} key={idx}>
              <img src={item.image} alt = {`something ${idx}`} />
              <h3> {item.title} </h3>
              <p> {item.desc} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondPage;
