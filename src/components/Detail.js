import classes from './Detail.module.css';
import {BsFastForwardCircle} from 'react-icons/bs'

const Data = [
  {
    desc: "Yazılım Kalitesini Arttırıyoruz",
  },
  {
    desc: "Olası Hataları Önceden Belirliyoruz",
  },
  {
    desc: "Oluşabilecek Riskleri Önlüyoruz",
  },
  {
    desc: "Zaman ve Maliyetten Tasarruf Sağlıyoruz",
  },
];

const Detail = () => {
  return (
    <div className={classes.container}>
      <h1>Test Yönetimiyle Neler Sağlıyoruz?</h1>
      <p>IoT Destekli Çözümler</p>
      <div className={classes.wrap}>
        {Data.map((item , id) => {
            return (
                <div key={id} className={classes.cover}>
                    <p> {item.desc} </p>
                    <BsFastForwardCircle size="24px"></BsFastForwardCircle>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Detail;
