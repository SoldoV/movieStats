<template>
  <div class="chartElem mt-5">
    <div class="chart-text"
         data-sal="slide-up"
         data-sal-delay="100"
         data-sal-duration="1000"
         data-sal-easing="ease-out-bounce">
         <h1 class="wellcome-header">Highest-grossing movies of all time!</h1>
      <p>Four of the 20 highest-grossing movies of all time came out last year. Avengers: Endgame now tops the worldwide box office list and the remake of The Lion King has cracked the Top 10. Those stats, of course, are skewed by rising ticket prices and increases in population. Adjusted for inflation, no movie can match the $3.7 billion haul that Gone with the Wind’s $390 million box-office receipts since its 1939 release would be worth in today’s dollars. But here, we’re looking at the highest-grossing movies in gross dollar receipts.
        With the exception of Titanic and two Disney films, every single movie below is part of a franchise. James Cameron, directed what at one point were the two biggest box-office hits of all time is quite a feat, one we’re sure hasn’t gone to his head. That they were so different—an historic romance drama and a sci-fi action/adventure—makes it all the more impressive. And all credit to what the Russo Brothers have accomplished with the Marvel properties they were handed.
        There are some highly enjoyable movies on here and some films that we can only shake our heads at and marvel at the worldwide moviegoer.
        Here are the 10 highest-grossing movies of all-time:</p>
    </div>
    <div class="row">
      <highcharts class="chart" :options="chartOptions" style="height: 700px; width: 70%;"
                  data-sal="slide-up"
                  data-sal-delay="100"
                  data-sal-duration="1000"
                  data-sal-easing="ease-out-bounce"></highcharts>
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
    db.collection('allTimeTopRated').get()
      .then(
        querySnapshot => {
          querySnapshot.forEach(doc => {
            this.chartData.push(doc.data())
          })
          this.chartData.forEach(el => {
            this.chartOptions.series.data.push(el.revenue)
            this.chartOptions.xAxis.categories.push(el.name)
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
  margin: 4em 0 2em 0;
}
.chart {
  margin: 0 auto;
}

</style>
