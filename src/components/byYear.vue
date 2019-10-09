<template>
  <div class="chartElem mt-5">
    <h1 class="wellcome-header">Highest-grossing movies of all time!</h1>
    <div class="chart-row">
      <div>Top 5 grossing movies in the year 2019</div>
      <highcharts class="chart" :options="chartOptions2019" style="height: 700px; width: 70%;" data-sal="slide-up"
        data-sal-delay="100" data-sal-duration="1000" data-sal-easing="ease-out-bounce"></highcharts>
    </div>
    <div class="chart-row">
      <div>Top 5 grossing movies in the year 2018</div>
      <highcharts class="chart" :options="chartOptions2018" style="height: 700px; width: 70%;" data-sal="slide-up"
        data-sal-delay="100" data-sal-duration="1000" data-sal-easing="ease-out-bounce"></highcharts>
    </div>
    <div class="chart-row">
      <div>Top 5 grossing movies in the year 2017</div>
      <highcharts class="chart" :options="chartOptions2017" style="height: 700px; width: 70%;" data-sal="slide-up"
        data-sal-delay="100" data-sal-duration="1000" data-sal-easing="ease-out-bounce"></highcharts>
    </div>
    <div class="chart-row">
      <div>Top 5 grossing movies in the year 2016</div>
      <highcharts class="chart" :options="chartOptions2016" style="height: 700px; width: 70%;" data-sal="slide-up"
        data-sal-delay="100" data-sal-duration="1000" data-sal-easing="ease-out-bounce"></highcharts>
    </div>
    <div class="chart-row">
      <div>Top 5 grossing movies in the year 2015</div>
      <highcharts class="chart" :options="chartOptions2015" style="height: 700px; width: 70%;" data-sal="slide-up"
        data-sal-delay="100" data-sal-duration="1000" data-sal-easing="ease-out-bounce"></highcharts>
    </div>
    <div class="chart-row">
      <div>Top 5 grossing movies in the year 2015</div>
      <highcharts class="chart" :options="scatterChart" style="height: 100%; width: 90%;"></highcharts>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'
import sal from 'sal.js'

export default {
  data () {
    return {
      chartData: [],
      scatterChart: {
        chart: {
          type: 'packedbubble',
          height: '100%'
        },
        title: {
          text: 'Movie revenue by years'
        },
        tooltip: {
          formatter: function () {
            return 'Movie: <b>' + this.point.name + '<b><br> Revenue: $' + this.point.value
          }
        },
        plotOptions: {
          packedbubble: {
            minSize: '30%',
            maxSize: '130%',
            layoutAlgorithm: {
              splitSeries: false,
              gravitationalConstant: 0.02
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}',
              filter: {
                property: 'y',
                operator: '>',
                value: 250
              },
              style: {
                color: 'black',
                textOutline: 'none',
                fontWeight: 'normal'
              }
            }
          }
        },
        series: [{
          name: '2019',
          data: []
        }, {
          name: '2018',
          data: []
        }, {
          name: '2017',
          data: []
        }, {
          name: '2016',
          data: []
        }, {
          name: '2015',
          data: []
        }]
      },
      chartOptions2019: {
        legend: {
          enabled: false
        },
        tooltip: {
          formatter: function () {
            return 'Movie: <b>' + this.point.category + '<b><br> Revenue: $' + this.point.y
          }
        },
        yAxis: {
          title: {
            text: 'Revenue in dollars'
          }
        },
        chart: {
          type: 'column'
        },
        xAxis: {
          categories: [],
          crosshair: true
        },
        series: {
          drilldown: false,
          name: 'revenue',
          data: []
        }
      },
      chartOptions2018: {
        legend: {
          enabled: false
        },
        tooltip: {
          formatter: function () {
            return 'Movie: <b>' + this.point.category + '<b><br> Revenue: $' + this.point.y
          }
        },
        yAxis: {
          title: {
            text: 'Revenue in dollars'
          }
        },
        chart: {
          type: 'column'
        },
        xAxis: {
          categories: [],
          crosshair: true
        },
        series: {
          drilldown: false,
          name: 'revenue',
          data: []
        }
      },
      chartOptions2017: {
        legend: {
          enabled: false
        },
        tooltip: {
          formatter: function () {
            return 'Movie: <b>' + this.point.category + '<b><br> Revenue: $' + this.point.y
          }
        },
        yAxis: {
          title: {
            text: 'Revenue in dollars'
          }
        },
        chart: {
          type: 'column'
        },
        xAxis: {
          categories: [],
          crosshair: true
        },
        series: {
          drilldown: false,
          name: 'revenue',
          data: []
        }
      },
      chartOptions2016: {
        legend: {
          enabled: false
        },
        tooltip: {
          formatter: function () {
            return 'Movie: <b>' + this.point.category + '<b><br> Revenue: $' + this.point.y
          }
        },
        yAxis: {
          title: {
            text: 'Revenue in dollars'
          }
        },
        chart: {
          type: 'column'
        },
        xAxis: {
          categories: [],
          crosshair: true
        },
        series: {
          drilldown: false,
          name: 'revenue',
          data: []
        }
      },
      chartOptions2015: {
        legend: {
          enabled: false
        },
        tooltip: {
          formatter: function () {
            return 'Movie: <b>' + this.point.category + '<b><br> Revenue: $' + this.point.y
          }
        },
        yAxis: {
          title: {
            text: 'Revenue in dollars'
          }
        },
        chart: {
          type: 'column'
        },
        xAxis: {
          categories: [],
          crosshair: true
        },
        series: {
          drilldown: false,
          name: 'revenue',
          data: []
        }
      }
    }
  },
  created () {
    db.collection('years').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.chartData.push(doc.data())
      })
      this.chartData.forEach(el => {
        if (el.year === 2019) {
          this.chartOptions2019.series.data.push(el.revenue)
          this.chartOptions2019.xAxis.categories.push(el.name)
          this.scatterChart.series[0].data.push({
            name: el.name,
            value: el.revenue
          })
        } else if (el.year === 2018) {
          this.chartOptions2018.series.data.push(el.revenue)
          this.chartOptions2018.xAxis.categories.push(el.name)
          this.scatterChart.series[1].data.push({
            name: el.name,
            value: el.revenue
          })
        } else if (el.year === 2017) {
          this.chartOptions2017.series.data.push(el.revenue)
          this.chartOptions2017.xAxis.categories.push(el.name)
          this.scatterChart.series[2].data.push({
            name: el.name,
            value: el.revenue
          })
        } else if (el.year === 2016) {
          this.chartOptions2016.series.data.push(el.revenue)
          this.chartOptions2016.xAxis.categories.push(el.name)
          this.scatterChart.series[3].data.push({
            name: el.name,
            value: el.revenue
          })
        } else if (el.year === 2015) {
          this.chartOptions2015.series.data.push(el.revenue)
          this.chartOptions2015.xAxis.categories.push(el.name)
          this.scatterChart.series[4].data.push({
            name: el.name,
            value: el.revenue
          })
        }
      })
    })
  },
  mounted () {
    sal()
  }
}

</script>

<style>
  .chart-text {
    font-size: 20px;
  }

  .chart {
    margin: 0 auto;
  }

  .chart-row {
    margin-bottom: 10em;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: center;
  }

  .chart-row div {
    margin: 0 auto;
    font-size: 20px;
  }

</style>
