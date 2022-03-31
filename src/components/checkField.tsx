import React from 'react';
import styles from './checkField.module.css';
import { useAppSelector } from '../hooks';
import { selectPrefectures } from '../features/prefectures/prefecturesSlice'
const CheckField: React.FC = () => {
    const prefectures = useAppSelector(selectPrefectures);

    console.log(prefectures)
    return (
        <div className={styles.wrapper}>
            <div>
                <p className={styles.title}>都道府県</p>
            </div>
            <div className={styles.content}>
                {prefectures && (prefectures.map(prefecture => (
                    <div className={styles.box} key={prefecture.prefName}>
                        <input
                            type="checkbox"
                            name="prefectureName"
                            value={prefecture.prefCode + ',' + prefecture.prefName}
                            id={"checkbox" + prefecture.prefCode}
                        />
                        <label
                            className={styles.text}
                            htmlFor={"checkbox" + prefecture.prefCode}
                        >
                            {prefecture.prefName.length === 3
                                ? " " + prefecture.prefName
                                : prefecture.prefName
                            }
                        </label>
                    </div>
                )))}
            </div>
        </div>
        
    )
}

export { CheckField }