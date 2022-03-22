import React from 'react'
import styles from './SummaryScore.module.scss'

export const SummaryScore = ({score}) => {
    console.log(score)
    return (
        <div className={styles.summaryScore}>
            <div>
                <div className={styles.score}>{score? score.min : "-" }</div>
                <div className={styles.detail}>คะแนนต่ำสุด {score?.year.toString().substring(2,4) || "-"}</div>
            </div>
            <div style={{ width: "2px", height: "29px", backgroundColor: "#d8d8d8" }}></div>
            <div>
                <div className={styles.score}>{score?score.avg : "-"}</div>
                <div className={styles.detail}>คะแนนเฉลี่ย {score?.year.toString().substring(2,4) || "-"}</div>
            </div>
            <div style={{ width: "2px", height: "29px", backgroundColor: "#d8d8d8" }}></div>
            <div>
                <div className={styles.score}>{score?score.max : "-" }</div>
                <div className={styles.detail}>คะแนนสูงสุด {score?.year.toString().substring(2,4) || "-"}</div>
            </div>
        </div>
    )
}
