import { Outlet } from 'react-router';
import styles from './app.module.scss';

export function App() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.heading}>Rent Application</h1>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
