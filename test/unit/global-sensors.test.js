const test = require('ava')
const {mockWindow} = require('./monitors.test')
const {BatteryMonitorSensor} = require('../../src/global-sensors')

let windowMocks = mockWindow()

test('test BatterySensor', async t => {
  const batteryMonitorSensor = new BatteryMonitorSensor()

  const batteryMonitorResposne = new Promise(((resolve, reject) => {
    batteryMonitorSensor.listen((data) => {
      resolve({
        data,
        serialized: batteryMonitorSensor.serialize(data)
      })
    })
  }))

  t.deepEqual(await batteryMonitorResposne, {
    data: windowMocks.mockedBattery,
    serialized: windowMocks.battery
  })
})
