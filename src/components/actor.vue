<template>
  <div class="chartElem mt-5">
    <div v-if="this.$route.params.name !== 'all'">
      <div class="actor-header-biography">
        <div class="actor-bio-avatar" :style="{ backgroundImage: `url(${getImgUrl(this.$route.params.name)})` }"
          data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000" data-sal-easing="ease-out-bounce">
        </div>
        <bio :name="name" data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
          data-sal-easing="ease-out-bounce"></bio>
      </div>
      <div class="chart-row">
        <div>Top 5 rated movies</div>
        <highcharts class="chart" :options="chartOptions" style="height: 700px; width: 70%;" data-sal="slide-up"
          data-sal-delay="100" data-sal-duration="1000" data-sal-easing="ease-out-bounce"></highcharts>
      </div>
      <div class="chart-row mt-10">
        <div class="mb-5">In the next graph we have connected movie revenue and IMDb rating.</div>
        <highcharts class="chart" :options="chartOptions1" style="height: 700px; width: 70%;" data-sal="slide-up"
          data-sal-delay="100" data-sal-duration="1000" data-sal-easing="ease-out-bounce"></highcharts>
      </div>
    </div>
    <div v-if="this.$route.params.name === 'all'">
      <div class="chart-row mt-10">
        <div class="mb-5">In the graph bellow we have visualised all actors movie revenue.</div>
        <highcharts class="chart" :options="scatteredChart" style="height: 100%; width: 70%;" data-sal="slide-up"
          data-sal-delay="100" data-sal-duration="1000" data-sal-easing="ease-out-bounce"></highcharts>
      </div>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'
import sal from 'sal.js'
import bio from './biography'

export default {
  components: {
    bio
  },
  data () {
    return {
      name: this.$route.params.name,
      chartData: [],
      scatteredChart: {
        chart: {
          type: 'packedbubble',
          height: '100%'
        },
        title: {
          text: 'Movie revenue by actors'
        },
        tooltip: {
          formatter: function () {
            return 'Movie: <b>' + this.point.movie + '<b><br> Actor: ' + this.point.name + '<br> Revenue: $' + this
              .point.y + '<br> IMDb rating: ' + this.point.rating
          }
        },
        plotOptions: {
          packedbubble: {
            minSize: '30%',
            maxSize: '120%',
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
          name: 'Leonardo Di caprio',
          data: []
        }, {
          name: 'Jack Nicholson',
          data: []
        }, {
          name: 'Jack Nicholson',
          data: []
        }, {
          name: 'Christian Bale',
          data: []
        }, {
          name: 'Matthew Mcconaughey',
          data: []
        }]
      },
      chartOptions1: {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Relationship between box office revenue and IMDb rating'
        },
        tooltip: {
          formatter: function () {
            return 'Movie: <b>' + this.point.movie + '<b><br> Revenue: $' + this.point.y +
                '<br> IMDb rating: ' + this.point.myData
          }
        },
        xAxis: {
          type: 'linear',
          allowDecimals: true,
          categories: [],
          title: {
            text: 'IMDb rating'
          }
        },
        yAxis: {
          title: {
            text: 'Revenue in dollars'
          },
          labels: {
            formatter: function () {
              return this.value / 1000000 + 'M'
            }
          }
        },
        plotOptions: {
          area: {
            marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        series: {
          drilldown: false,
          name: 'Revenue',
          data: [],
          movie: []
        }
      },
      chartOptions: {
        legend: {
          enabled: false
        },
        tooltip: {
          formatter: function () {
            return 'Movie: <b>' + this.point.category + '<b><br> Revenue: $' + this.point.myData +
                '<br> IMDb rating: ' + this.point.y
          }
        },
        chart: {
          type: 'column'
        },
        title: {
          text: 'Top rated movies'
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
  mounted () {
    db.collection('actors').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.chartData.push(doc.data())
      })
      this.chartData.forEach(el => {
        if (el.actor === this.$route.params.name) {
          this.chartOptions.series.data.push({
            y: el.rating,
            myData: el.revenue,
            movie: el.name
          })
          this.chartOptions.xAxis.categories.push(el.name)
          this.chartOptions1.series.data.push({
            y: el.revenue,
            myData: el.rating,
            movie: el.name
          })
          this.chartOptions1.xAxis.categories.push(el.rating)
        } else if (this.$route.params.name === 'all') {
          if (el.actor === 'dicaprio') {
            this.scatteredChart.series[0].data.push({
              name: 'DiCaprio',
              value: el.revenue,
              rating: el.rating,
              movie: el.name
            })
          } else if (el.actor === 'nicholson') {
            this.scatteredChart.series[1].data.push({
              name: 'Nicholson',
              value: el.revenue,
              rating: el.rating,
              movie: el.name
            })
          } else if (el.actor === 'deniro') {
            this.scatteredChart.series[2].data.push({
              name: 'De Niro',
              value: el.revenue,
              rating: el.rating,
              movie: el.name
            })
          } else if (el.actor === 'bale') {
            this.scatteredChart.series[3].data.push({
              name: 'Bale',
              value: el.revenue,
              rating: el.rating,
              movie: el.name
            })
          } else if (el.actor === 'matthew') {
            this.scatteredChart.series[4].data.push({
              name: 'Mcconaughey',
              value: el.revenue,
              rating: el.rating,
              movie: el.name
            })
          }
        }
      })
    })
    sal()
  },
  methods: {
    getImgUrl (pic) {
      return pic ? require('../assets/' + pic + '.jpg') : ''
    }
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
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: center;
  }

  .chart-row div {
    margin: 0 auto;
    font-size: 20px;
  }

  .actor-bio-avatar {
    margin: 0 auto;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

</style>
