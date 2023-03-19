import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect } from "react";

export default function Chart({ points }) {

    const [options, setOptions] = useState({
        chart: {
            type: 'areaspline',
            styleMode: true,
            backgroundColor: 'transparent',
            height: '220px',

            style: {
                fontFamily: 'poppins',
                fontSize: '12px',
                fontWeight: '400',
                color: '#000000',

            },
            marginLeft: 15,
            marginRight: 15,
        },

        title: {
            text: ""
        },

        xAxis: {

            allowDecimals: false,
            //tickInterval: 1,

            tickLength: 0,

            gridLineWidth: 1,

            // endOnTick: true,
            // startOnTick: true,

            labels: {
                style: {
                    color: "#000000",
                    fontFamily: 'poppins',
                    fontSize: '12px',
                    fontWeight: '400',
                    opacity: 0.4,
                },
            },

        },

        yAxis: {
            enabled: false,
            title: {
                text: "",
            },
            labels: {
                enabled: false,
            },
            gridLineColor: 'transparent',
        },

        plotOptions: {
            series: {
                pointStart: 2023,
                fillColor: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, 'rgba(0, 221, 111, 0.65)'],
                        [1, 'rgba(204, 255, 230,0.2)']
                    ]
                },
            },
            areaspline: {
                color: '#00DD6F',
            },

        },

        tooltip: {
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
            borderRadius: 20,
            //outside: true,

            positioner: function (labelWidth, labelHeight, point) {
                let x = point.plotX, y = point.plotY;
                if (point.plotX > this.chart.chartWidth - (labelWidth / 2) + 10) {
                    x = point.plotX - (labelWidth);
                    y = point.plotY + (labelHeight / 1.5);
                    if (y > this.chart.chartHeight - labelHeight) {
                        y = point.plotY;
                    }
                }
                else if (point.plotX < (labelWidth / 8) + 10) {
                    x = point.plotX + 25;
                    y = point.plotY + (labelHeight / 1.5);
                    if (y > this.chart.chartHeight - labelHeight) {
                        y = point.plotY;
                    }
                }
                else if (point.plotX < 70 && point.plotY < 60) {
                    x = point.plotX - 15;
                    y = point.plotY + (labelHeight) + 15;
                }
                else if (point.plotX < 90 && point.plotY < 60) {
                    x = point.plotX - 25;
                    y = point.plotY + (labelHeight) + 15;
                }
                else if (point.plotX + labelWidth - 20 > this.chart.chartWidth) {
                    x = this.chart.chartWidth - labelWidth - 5;
                }
                else if (point.plotX + labelWidth / 2 <= labelWidth) {
                    x = 0;
                }
                else {
                    x = point.plotX - labelWidth / 4;
                }
                return {
                    x: x,
                    y: y - labelHeight
                }
            },
            shape: "callout",
            style: {
                color: '#000000',
                fontSize: '12px',
                zIndex: 90,
            },
            formatter() {
                return `Amount <strong>\u20B9 ${Number(this.y.toFixed(0)).toLocaleString("en-In")}</strong> <br> Year <strong> ${this.x} </strong>`
            }
        },

        legend: {
            enabled: false,
        },

        series: [
            {
                name: 'CAGR',
                data: null,
            }
        ],

        responsive: {
            rules: [{
                condition: {
                    minWidth: 615
                },
                chartOptions: {
                    tooltip: {
                        backgroundColor: '#FFFFFF',
                        borderColor: '#FFFFFF',
                        borderRadius: 20,
                        style: {
                            display: 'flex',
                            color: '#000000',
                            fontSize: '14px',
                            zIndex: '90',
                            position: 'absolute',
                        },
                        formatter() {
                            return `Amount <strong>\u20B9 ${Number(this.y.toFixed(0)).toLocaleString("en-In")}</strong> <br> Year <strong> ${this.x} </strong>`
                        }
                    },
                    xAxis: {

                        allowDecimals: false,
                        //tickInterval: 1,

                        tickLength: 0,

                        gridLineWidth: 1,

                        // endOnTick: true,
                        // startOnTick: true,

                        labels: {
                            style: {
                                color: "#000000",
                                fontFamily: 'poppins',
                                fontSize: '14px',
                                fontWeight: '400',
                                opacity: 0.4,
                            },
                        },

                    },
                }
            }]
        },

        credits: {
            enabled: false
        },

    });

    useEffect(() => {
        setOptions(previousState => {
            return ({
                ...previousState, series: {
                    data: points,
                }
            })
        })
    }, [points]);


    return (

        <HighchartsReact highcharts={Highcharts} options={options} />

    )
}