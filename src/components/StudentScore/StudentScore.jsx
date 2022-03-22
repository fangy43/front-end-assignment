import React from 'react'
import styles from './StudentScore.module.scss'
import badge from '../../assets/img/badge.svg'
import { Button } from '../Button/Button'

export const StudentScore = () => {
    return (
        <div className={styles.content}>
            <div className={styles.top}>
                <div>รอบที่ 4 : Admission</div>
                <Button/>
            </div>
            <div className={styles.score}>
                <img src={badge} alt="heart" style={{ width: "27px", height: "35px", padding: "0 30px" }} />
                <div>
                    <div className={styles.miniText}>คะแนนของคุณคือ</div>
                    <div className={styles.scoreNumber}>23,453</div>
                </div>
            </div>
        </div>
    )
}
