import React from 'react';
import styles from './main.module.css';
import { CheckField } from './checkField';

const Main: React.FC = () => {
    return(
        <main>
            <h2 className={styles.title}>Title</h2>
            <CheckField />
        </main>
    )
}

export { Main }