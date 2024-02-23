<template>
  <div class="statistics_chart">
    <CanvasJSChart :options="options"  :styles="styleOptions" @chart-ref="chartRef"/>
  </div>
</template>
<script>
import {generateColors} from '@/assets/js/global.js';
export default {
    name:'NumbersCmp',
    data() {
      return {
        chart: null,
        options: {
          theme: "light2",
          animationEnabled: true,
          backgroundColor: 'rgba(255,255,255,0)',
          data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            /*yValueFormatString: "#,##0K",*/
            toolTipContent: "<span style='\"'color: {color};'\"'>{label}</span>: {y} services",
            dataPoints: [],
          }]
        },
        styleOptions: {
          width: "100%",
          height: "100%",
        }
      }
    },
    methods:{
      chartRef(chart) {
        this.chart = chart;
      }
    },
    async mounted(){
        await this.$store.dispatch('get_stats', 'services_stats');
        let nb = this.$store.state.services_stats.service_nb;
        let colors=generateColors(nb);
        let stats_labels = this.$store.state.services_stats.type_services;
        let stats_y = this.$store.state.services_stats.values;
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