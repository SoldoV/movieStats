<template>
  <div class="chartElem">
    <div class="row">
      <highcharts class="chart" :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  data () {
    return {
      chartData: [],
      chartOptions: {
        legend: {
            enabled: false
        },
        chart: {
          type: 'column'
        },
        title: {
          text: 'Sin chart'
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
    db.collection('allTimeTopRated').get().then
    (querySnapshot => {
      querySnapshot.forEach(doc => {
        this.chartData.push(doc.data())
      })
        this.chartData.forEach(el => {
          this.chartOptions.series.data.push(el.revenue)
          this.chartOptions.xAxis.categories.push(el.name)
      })
    })
  }
}
</script>

<style>
.highcharts-background {
  fill: #303030 !important;
}
</style>