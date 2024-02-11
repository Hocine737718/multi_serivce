<template>
  <div class="statistics_chart">
    <CanvasJSChart :options="options"  :styles="styleOptions"/>
  </div>
</template>
<script>

export default {
    name:'NumbersCmp',
    data() {
      return {
        options: {
          theme: "light2",
          animationEnabled: true,
          backgroundColor: 'rgba(255,255,255,0)',
          data: [{
            type: "pie",
            indexLabel: "{y/1726}#percent%",

            showInLegend: true,
            legendText: "{label}",
            /*yValueFormatString: "#,##0K",*/
            toolTipContent: "<span style='\"'color: {color};'\"'>{label}</span>: {y} clients",
            dataPoints: [
              { label: "CONSEIL", y: 948, color: '#ff9900' },
              { label: "FORMATION", y: 34, color: '#109618' },
              { label: "ADMINISTRATION RH", y:  704, color: '#3366cc' },
              { label: "AUDIT", y:  40, color: '#dc3912' }
            ]
          }]
        },
        styleOptions: {
          width: "100%",
          height: "100%",
        }
      }
    }
}
</script>