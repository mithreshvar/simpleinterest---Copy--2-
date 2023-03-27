import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect } from "react";

function DoughnutChart({ invested, totalInterest, dependency }) {

  const [option, setOptions] = useState({
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      height: '254px',
    },
    title: {
      text: '',
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
        dataLabels: {
          enabled: false,
        }
      }
    },
    tooltip: {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderRadius: 20,
      style: {
        color: '#000000',
        fontSize: '12px',
      },
      formatter() {
        return `${this.key} <strong>\u20B9 ${this.y.toLocaleString("en-In")}</strong>`
      },
      labels: {
        enabled: false,
      }
    },
    series: [{
      data: null,
    }],
    credits: {
      enabled: false,
    },
    responsive: {
      rules: [{
        condition: {
          minWidth: 600
        },
        chartOptions: {
          tooltip: {
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
            borderRadius: 20,
            style: {
              color: '#000000',
              fontSize: '14px',
            },
            formatter() {
              return `${this.key} <strong>\u20B9 ${this.y.toLocaleString("en-In")}</strong>`
            },
            labels: {
              enabled: false,
            }
          },
        }
      }]
    },
  });

  useEffect(() => {
    setOptions(previousOptions => {
      return ({
        ...previousOptions,
        series: [{
          data: [
            {
              name: 'Invested',
              y: invested,
              color: '#0161FF',
              showInLegend: false,
            },
            {
              name: 'Total Interest',
              y: totalInterest,
              color: '#2ecc71',
              showInLegend: false,
            }
          ]
        }],
      })
    })
  }, [dependency])

  return (

    <HighchartsReact highcharts={Highcharts} options={option} />

  )
}

export default DoughnutChart;