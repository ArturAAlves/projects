import { Line, Bar } from "react-chartjs-2"

import styles from "./Chart.module.scss"




function Chart({ dailyData, selectedCountry, data }) {
    // const totalDeaths = () => )
    const lineChart = (
        dailyData ? <Line
            data={
                {
                    labels: dailyData.map(data => data.reportDate),
                    datasets: [
                        {
                            data: dailyData.map(data => data.totalConfirmed),
                            label: "Infected",
                            fill: true,
                            borderColor: 'rgba(96, 96, 223,0.9)',
                            // backgroundColor: 'rgba(96, 96, 223,0.9)'
                            backgroundColor: "rgba(96, 96, 223,0.1)"
                        },
                        {
                            data: dailyData.map(data => data.incidentRate),
                            label: "Recovered",
                            fill: true,
                            borderColor: 'rgb(32, 143, 32, 0.7)',
                            // backgroundColor: 'rgb(32, 143, 32, 0.7)'
                            backgroundColor: "rgb(32, 143, 32, 0.2)"

                        },
                        {
                            data: dailyData.map(data => data.deaths.total),
                            label: "Deaths",
                            fill: true,
                            borderColor: 'rgb(182, 73, 73)',
                            // backgroundColor: 'rgb(182, 73, 73)'
                            backgroundColor: "rgb(182, 73, 73)"
                        }
                    ]

                    // data: { data.confirmed }, label: "Infeceted", fill: true, borderColor: "#3333ff",
                    // { data: data(({ deaths }) => deaths), label: "Deaths", fill: true, borderColor: "#3333ff" 
                }}

            options={{
                maintainAspectRatio: false
            }}
            height={300}

        /> : "Loading"
    )



    const barChart = (
        data ?
            <Bar className={styles.chart}
                data={
                    {
                        labels: ["infected", "Recovered", "Deaths"],
                        datasets: [
                            {
                                label: "People",
                                backgroundColor: ["rgb(96, 96, 223)", "rgb(32, 143, 32)", "rgb(182, 73, 73)"],
                                data: [data.confirmed.value, data.recovered.value, data.deaths.value],


                            }
                        ]
                    }}

                options={{

                    legend: { display: false },
                    title: {
                        display: true,
                        text: `Current State in ${selectedCountry}`,
                        fontSize: 28,
                        lineHeight: 2,
                    },

                    // scales: {
                    //     xAxes: [{
                    //         ticks: {
                    //             fontSize: 25
                    //         }
                    //     }],
                    //     yAxes: [{
                    //         ticks: {
                    //             fontSize: 25
                    //         }
                    //     }]
                    // }
                }}

            /> : "Loading"
    )


    // console.log(dailyData)
    // console.log(data)
    // console.log(data)

    return (
        <div className={styles.container} >
            {selectedCountry === "Global" ? lineChart : barChart}
        </div>
    )
}

export default Chart
