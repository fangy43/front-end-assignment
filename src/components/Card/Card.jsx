import React from 'react'
import { CardHeader } from '../CardHeader/CardHeader'
import { Footer } from '../Footer/Footer'
import { StudentScore } from '../StudentScore/StudentScore'
import { SummaryScore } from '../SummaryScore/SummaryScore'
import { TcasRound } from '../TcasRound/TcasRound'
import styles from './Card.module.scss'

export const Card = ({ data }) => {
    //console.log(data)
    return (
        <div className={styles.container}>
            <CardHeader department={data.name} faculty={data.faculty} logo={data.logo}/>
            <TcasRound roundSeats={data.roundSeats}/>
            <StudentScore/>
            <SummaryScore score={data.score}/>
            <Footer likes={data.likes}/>
        </div>
    )
}
