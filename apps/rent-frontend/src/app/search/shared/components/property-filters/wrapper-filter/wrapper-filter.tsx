import styles from './wrapper-filter.module.scss';
import { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export function WrapperFilter({ title, children }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{title}</h1>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default WrapperFilter;
