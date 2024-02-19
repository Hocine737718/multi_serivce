const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  configureWebpack: {
    performance: {
      hints: false // Désactive les avertissements de performance
    }
  }
};
