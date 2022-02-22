import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';


function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    fetch(`https://imperial-card-bk.herokuapp.com/supporters/search?email=${email}`)
      .then((r) => r.json())
        .then((r) => r.message ? setError(true) : navigate(`/card/${email}`))
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => login(e)}>
        <div className={styles.image} />
        <h1>BEM-VINDO LUNÁTICO</h1>
        <label style={{ display: 'flex', flexDirection: 'column' }} htmlFor="email">
          EMAIL:
          <input
            className={styles.input}
            id="email"
            onChange={({ target }) => setEmail(target.value)}
            value={email}
          />
          { error && (
            <small style={{ color: 'grey', marginTop: '2px' }}>Email não cadastrado</small>
          )}
        </label>
        <button type="submit" className={styles.button}>
          LOGIN
        </button>
        <button type="button" className={styles.buttonS} onClick={() => navigate('/register')}>
          AINDA NÃO SOU LUNÁTICO
        </button>
      </form>
    </div>
  );
};

export default Login;
