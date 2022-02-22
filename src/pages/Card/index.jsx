import { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from './styles.module.css';
import Badge from '../../images/LUNATICOS.png';
import { useParams } from 'react-router-dom';

function Card() {
  const [supporter, setSupporter] = useState(false)
  const tilt = useRef(null);
  const { email } = useParams();

  useEffect(() => {
    fetch(`https://imperial-card-bk.herokuapp.com/supporters/search?email=${email}`)
      .then((r) => r.json())
        .then((r) => setSupporter(r));
  }, []);

  useEffect(() => {
    const options = {
      speed: 300,
      max: 10,
      transition: true,
    };

    VanillaTilt.init(tilt.current, options);
  }, []);

  const numberFix = (number) => {
    const size = 4 - number.toString().length;
    let base = '';
    for (let i = 0; i < size; i++) {
      base += '0';
    }
    return `${base}${number}`
  } 

  return (
    <div className={styles.container}>
      <div ref={tilt} className={styles.card}>
        <h2 className={styles.nickname}>{supporter && supporter.nick}</h2>
        <div className={styles.badge}>
          <img
            src={Badge}
            className={styles.image}
            alt="Badge da torcida"
          >
          </img>
        </div>
        <h1 className={styles.title}>TORCEDOR LUNÁTICO</h1>
        <div className={styles.nameContainer}>
          <h2 className={styles.name}>{supporter && supporter.name}</h2>
          <span className={styles.id}>#{supporter && numberFix(supporter.id)}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
