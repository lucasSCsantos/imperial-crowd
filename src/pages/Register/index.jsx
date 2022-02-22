import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';


function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [nick, setNick] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [age, setAge] = useState(0);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const sign = (e) => {
    e.preventDefault();
    axios.post(`https://imperial-card-bk.herokuapp.com/supporters`, {
      name,
      email,
      nick,
      state,
      city,
      age,
    })
      .then((r) => navigate(`/card/${email}`))
      .catch((err) => setError({ message: err.message }))
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => sign(e)}>
        <h1>VIRE LUNÁTICO</h1>
        <label style={{ display: 'flex', flexDirection: 'column' }} htmlFor="name">
          NOME:
          <input
            className={styles.input}
            id="name"
            type="text"
            onChange={({ target }) => setName(target.value)}
            value={name}
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column' }} htmlFor="nickname">
          NICK:
          <input
            className={styles.input}
            id="nickname"
            type="text"
            onChange={({ target }) => setNick(target.value)}
            value={nick}
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column' }} htmlFor="age">
          IDADE:
          <input
            className={styles.input}
            id="age"
            type="number"
            onChange={({ target }) => setAge(target.value)}
            value={age}
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column' }} htmlFor="city">
          CIDADE:
          <input
            className={styles.input}
            id="city"
            type="text"
            onChange={({ target }) => setCity(target.value)}
            value={city}
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column' }} htmlFor="state">
          ESTADO:
          <input
            className={styles.input}
            id="state"
            type="text"
            onChange={({ target }) => setState(target.value)}
            value={state}
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column' }} htmlFor="email">
          EMAIL:
          <input
            className={styles.input}
            id="email"
            type="text"
            onChange={({ target }) => setEmail(target.value)}
            value={email}
          />
        </label>
        <button type="submit" className={styles.button}>
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default Register;
