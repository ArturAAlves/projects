import React from 'react'
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import CountUp from "react-countup"
import styles from "./Cards.module.scss"
import cx from "classnames"


const Cards = ({ confirmed, deaths, lastUpdate, recovered }) => {
    if (!confirmed) {
        return "loading.."
    }
    return (
        <Grid container justify="center" className={cx(styles.container)} >
            <Grid item component={Card} xs={9} md={2} className={cx(styles.card, styles.infected)} >
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Infected
                        </Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2}
                            separator={","}
                        />
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2">
                        Number of active cases of COVID-19
                        </Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={9} md={2} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Recovered
                        </Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2}
                            separator={","}
                        />
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2">
                        Number of recoveries from COVID-19
                        </Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={9} md={2} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Deaths
                        </Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2}
                            separator={","}
                        />
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2">
                        Number of Deaths from COVID-19
                        </Typography>
                </CardContent>
            </Grid>
        </Grid>

    )
}

export default Cards
