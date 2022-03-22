import React from 'react'
import styles from './CardHeader.module.scss'
import heart from '../../assets/img/heart.svg'

export const CardHeader = ({ department,faculty,logo }) => {
   
    return (
        <div className={styles.header}>
                <img src={logo} alt="logo" style={{ width: "80px", height: "86px" }} />
                <div className={styles.text}>
                    <div>
                        <div className={styles.flexrowSpace}>
                            <div className={styles.faculty}>{faculty.name}</div>
                            <img src={heart} alt="heart" style={{ width: "24px", height: "21px" , cursor:"pointer" }} />
                        </div>
                        <div className={styles.department}>{department}</div>
                    </div>
                    <div className={styles.university}>{faculty.university.name}</div>
                </div>
            </div>
    )
}
