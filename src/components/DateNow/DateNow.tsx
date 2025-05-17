import { JSX, useEffect, useState } from 'react';
import { format } from 'date-fns';
import styles from './DateNow.module.scss';

const DateNow: React.FC = (): JSX.Element => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.date}>
          <p className={styles.dateText}>
            {format(date, 'EEEE, MMMM do, yyyy HH:mm')}
          </p>
        </div>
      </header>
    </>
  );
};

export default DateNow;
