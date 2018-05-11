const { GlobalSensor } = require('./bundle')

window = {
  navigator: {},
  addEventListener: function () {}
}
navigator = {}
const sensor = new GlobalSensor()
sensor.listen(data => {
  console.log(data)
})
