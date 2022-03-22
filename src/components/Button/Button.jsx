import React from 'react'
import styles from './Button.module.scss'
import btnIcon from '../../assets/img/btn-icon.svg'
export const Button = () => {
  return (
    <div className={styles.button}>
        แก้ไขคะแนน
        <img src={btnIcon} alt="icon" style={{ width: "18px",height:"18px" }} />
    </div>
  )
}