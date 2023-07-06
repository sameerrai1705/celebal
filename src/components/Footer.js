import classes from './Footer.module.css';
import {CiFacebook , CiLinkedin , CiTwitter , CiInstagram} from 'react-icons/ci';

const Data = [
  {
    content: [
      "Çözüm ve Hizmetler",
      "Yazılım Geliştirme",
      "Outsourcing",
      "Kalite ve Süreç Yönetimi",
      "Danışmanlık",
      "IoT Destekli Çözümler",
    ],
  },
  {
    content: [
      "Ürünler",
      "Eğitim Yönetim Sistemi",
      "İnsan Sermayesi Yönetim Sistemi",
      "Müşteri İlişkileri Yönetim Sistemi",
      "İçerik Yönetim Sistemi",
    ],
  },
  {
    content: [
      "Kurumsal",
      "Hakkımızda",
      "Belge ve Yetkinlikler",
      "İş Ortakları",
    ],
  },
  {
    content: ["İletişim", "Bilgi İstek Formu", "Uzman Talep Formu"],
  },
];

const Footer = () => {
  return (
    <div className={classes.section}>
    <div className={classes.container}>
      {Data.map((item, id) => {
        return (
          <div className={classes.wrap} key={id}>
            {item.content.map((data, idx) => {
              return (
                <div className={classes.title} key={idx}>
                    <p> {data} </p>  
                </div>
              )
            })}
          </div>
        );
      })}
    </div>

      <div className={classes.copy}>
        <p>© Copyright 2010-2023 - Can Çevik</p>
        <div>
            <CiLinkedin size= "25px" style={{marginRight: "15px"}} ></CiLinkedin>
            <CiTwitter size= "25px" style={{marginRight: "15px"}}></CiTwitter>
            <CiInstagram size= "25px" style={{marginRight: "15px"}}></CiInstagram>
            <CiFacebook size= "25px" style={{marginRight: "15px"}}></CiFacebook>
        </div>
      </div>

    </div>
  );
};

export default Footer;
