<template>
  <div class="statistics_chart">
    <CanvasJSChart :options="options"  :styles="styleOptions"  @chart-ref="chartRef"/>
  </div>
</template>
<script>
import {generateColors} from '@/assets/js/global.js';
export default {
    name:'ReferencesCmp',
    data() {
      return {
        chart: null,
        options: {
          theme: "light2",
          animationEnabled: true,
          backgroundColor: 'rgba(255,255,255,0)',
          title: {
            text: "NOS CLIENTS"
          },
          subtitles: [{
            text: "par secteur d'activité"
          }],
          data: [{
            type: "doughnut",
            toolTipContent: "<span style='\"'color: {color};'\"'>{label}</span>: {y} clients",
            dataPoints: []
          }]
        },
        styleOptions: {
          width: "100%",
          height: "100%",
          margin:"auto"
        }
      }
    },
    methods:{
      chartRef(chart) {
        this.chart = chart;
      }
    },
    async mounted(){
        await this.$store.dispatch('get_stats', 'line_business_stats');
        let nb = this.$store.state.line_business_stats.line_business_nb;
        this.chart.options.data[0].indexLabel=`{label} {y/${nb}}(#percent%)`;
        let colors=generateColors(nb);
        let stats_labels = this.$store.state.line_business_stats.names;
        let stats_y = this.$store.state.line_business_stats.values;
        for (let e in stats_labels) {
            this.chart.options.data[0].dataPoints.push({
            label: stats_labels[e],
            y: stats_y[stats_labels[e]],
            color: colors[e]
            });
        }
        this.chart.render();
    }
}
</script>