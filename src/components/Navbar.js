import classes from "./Navbar.module.css";
import Button from "./Button";

import React from "react";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>

      <div className={classes.navbarContainer}>

        <ul className={classes.navbarMenu}>
          <li>
            <a href="#home">Çözüm ve Hizmetler</a>
          </li>
          <li>
            <a href="#about">Ürünler</a>
          </li>
          <li>
            <a href="#contact">Teknolojiler</a>
          </li>
          <li>
            <a href="#personal">İnsan Kaynakları</a>
          </li>
          <li>
            <a href="#hii">Kurumsal</a>
          </li>
        </ul>

        <Button description = "İletişim"></Button>

      </div>


      <div className={classes.container}>
        <h1>Bilgi Teknolojilerinde 23 Yillik Tecrübe</h1>
        <p>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>

        <div className={classes.text}>
            <input type="text" placeholder="Mail bültenimize kayıt ol"></input>
            <Button description = "Kayıt Ol"></Button>
        </div>

      </div>


    </nav>
  );
};

export default Navbar;
