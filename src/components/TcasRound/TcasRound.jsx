import React from 'react'
import styles from './TcasRound.module.scss'
export const TcasRound = ({ roundSeats }) => {
 
    return (
        <div className={styles.rounds}>
            <div className={styles.roundText}>รอบที่เปิด</div>
            <div className={styles.roundContainer}>
                {roundSeats.map((round, i) => {
                    if (round < 0) {
                        return (
                            <div className={styles.circle} style={{ backgroundColor: "#d8d8d8" }}>
                                {i + 1}
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className={styles.circle} style={{ backgroundColor: "#2ecc71" }}>
                                {i + 1}
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
