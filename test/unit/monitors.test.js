const test = require('ava')
const {battery} = require('./serializers.test')
const {BatteryMonitor} = require('../../src/monitors')

function mockWindow () {
  const mockedBattery = {addEventListener: () => {}, ...battery}
  global.window = {
    navigator: {
      getBattery: async () => mockedBattery
    }
  }
  return {battery, mockedBattery}
}

mockWindow()

test('test BatteryMonitor', async t => {
  const batteryMonitor = new BatteryMonitor()
  batteryMonitor.startListening()
  const batteryStateResponse = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(batteryMonitor.state)
    }, 10)
  })
  t.is(await batteryStateResponse, await window.navigator.getBattery())
})

module.exports = {
  mockWindow
}