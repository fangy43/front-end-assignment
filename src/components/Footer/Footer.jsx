import React from 'react'
import styles from './Footer.module.scss'
import upload from '../../assets/img/upload.svg'
export const Footer = ({likes}) => {
    return (
        <div className={styles.footer}>
            <div>
                {likes} คนที่สนใจ
            </div>
            <img src={upload} alt="heart" style={{ width: "18px", height: "23px", cursor:"pointer" }} />
        </div>
    )
}
