import React from 'react';
import styles from './prefectures.module.css';


type Props = {
    prefectures: {prefCode: number, prefName: string}[];
}

const Prefectures: React.FC<Props> = ({ prefectures }) => {
    return (
        <div className={styles.content}>
            {prefectures.map(prefecture => (
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
            ))}
        </div>
    )
}

export { Prefectures }