<template>
  <div>
    <div class="tile is-ancestor">

      <!--Select Stocks panel-->
      <div class="tile is-parent is-2">
        <article class="tile is-child">
          <nav class="panel">
            <p class="panel-heading">
              Escolha sua ação
            </p>

            <!--Seach input-->
            <div class="panel-block">
              <p class="control has-icon">
                <input class="input is-large" type="text" placeholder="Procurar">
                <span class="icon">
                  <i class="fa fa-search"></i>
                </span>
              </p>
            </div>
            <!--List-->
            <a class="panel-block is-active"><span class="panel-icon"><i class="fa fa-chevron-down"></i></span>Bacon</a>
            <a class="panel-block"><span class="panel-icon"><i class="fa fa-chevron-down"></i></span>BB</a>
            <a class="panel-block is-dark"><span class="panel-icon"><i class="fa fa-chevron-up"></i></span>USIMINAS</a>
            <a class="panel-block"><span class="panel-icon"><i class="fa fa-chevron-down"></i></span>PETROBRAS</a>
            <a class="panel-block"><span class="panel-icon"><i class="fa fa-chevron-up"></i></span>TEST</a>
          </nav>
        </article>
      </div>

      <div id="wrapper" class="tile is-parent" style="height: 100px">
        <article class="tile is-child box">

            <h4 class="title">Nome da ação</h4>
            <chart :type="'line'" :data="seriesData" :options="options_3"></chart>

        </article>
    </div>
  </div>

  <div class="tile is-ancestor">
    <div class="tile is-parent is-4">
      <article class="tile is-child box">
        <h4 class="title">RADAR</h4>
        <chart :type="'radar'" :data="seriesData" :options="options_3" height="400"></chart>
      </article>
    </div>
    <div class="tile is-parent is-4">
      <article class="tile is-child box">
        <h4 class="title">LINE</h4>
        <chart :type="'line'" :data="seriesData" :options="options_3"></chart>
      </article>
    </div>
    <div class="tile is-parent is-4">
      <article class="tile is-child box">
        <h4 class="title">BARS</h4>
        <chart :type="'bar'" :data="seriesData" :options="options_3"></chart>
      </article>
    </div>
  </div>
  </div>
</template>

<script>
  import Chart from 'vue-bulma-chartjs'

  export default {
    components: {
      Chart
    },

    data () {
      return {
        labels: ['Sleeping', 'Designing', 'Coding', 'Cycling'],
        data: [20, 40, 5, 35],

        options: {
          segmentShowStroke: false
        },
        backgroundColor: [
          '#1fc8db',
          '#fce473',
          '#42afe3',
          '#ed6c63',
          '#97cd76'
        ],

        labels_2: ['April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'],
        data_2: [1, 9, 3, 4, 5, 6, 7, 8, 2].map(e => (Math.sin(e) * 25) + 25),

        labels_3: ['May', 'June', 'Jule', 'August', 'September', 'October', 'November'],
        data_3: [
          [65, 59, 90, 81, 56, 55, 40],
          [28, 48, 40, 19, 88, 27, 45]
        ],
        options_3: {
          tooltips: {
            mode: 'label'
          }
        },
        option_4: {
          maintainAspectRatio: false,
          responsive: false
        },
        backgroundColor_3: [
          'rgba(31, 200, 219, 1)',
          'rgba(151, 205, 118, 1)'
        ],
        series: ['Product A', 'Product B']
      }
    },

    computed: {
      pieData () {
        return {
          labels: this.labels,
          datasets: [{
            data: this.data,
            backgroundColor: this.backgroundColor
          }]
        }
      },

      waveData () {
        return {
          labels: this.labels_2,
          datasets: [{
            label: 'My Radar',
            data: this.data_2,
            backgroundColor: this.backgroundColor[0]
          }]
        }
      },

      seriesData () {
        let data = {
          labels: this.labels_3
        }
        data.datasets = this.series.map((e, i) => {
          return {
            data: this.data_3[i],
            label: this.series[i],
            borderColor: this.backgroundColor_3[i].replace(/1\)$/, '.5)'),
            pointBackgroundColor: this.backgroundColor_3[i],
            backgroundColor: this.backgroundColor_3[i].replace(/1\)$/, '.5)')
          }
        })
        return data
      }
    },

    created () {
      setInterval(() => {
        // https://vuejs.org/guide/list.html#Mutation-Methods
        this.data_2.unshift(this.data_2.pop())
      }, 377)
    }
  }
</script>

<style scoped>
</style>
