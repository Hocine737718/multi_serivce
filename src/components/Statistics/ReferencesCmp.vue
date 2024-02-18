<template>
  <div class="statistics_chart">
    <CanvasJSChart :options="options"  :styles="styleOptions"/>
  </div>
</template>
<script>
export default {
    name:'ReferencesCmp',
    data() {
      return {
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
            indexLabel: "{label} {y/24}(#percent%)",
            toolTipContent: "<span style='\"'color: {color};'\"'>{label}</span>: {y} clients",
            dataPoints: [
              { label: "BTPH", y: 5, color: '#3366cc' },
              { label: "Pharmaceutique", y: 4, color: '#dc3912' },
              { label: "Télécommunication", y:  2, color: '#ff9900' },
              { label: "Transport maritime conteneurisé", y:  2, color: '#109618' },
              { label: "Services", y: 6, color: '#990099'},
              { label: "Agroalimentaire", y: 2, color:  '#0099c6' },
              { label: "Équipements électriques", y: 1, color: '#dd4477' },
              { label: "Industrie des matériaux de construction", y: 2, color: '#66aa00'}
            ]
          }]
        },
        styleOptions: {
          width: "100%",
          height: "100%",
          margin:"auto"
        }
      }
    }
}
</script>