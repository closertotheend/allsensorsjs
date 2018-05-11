const test = require('ava')
const { mockWindow } = require('./monitors.test')
const {
  BatteryMonitorSensor,
  GlobalSensor
} = require('../../src/global-sensors')

let windowMocks = mockWindow()

test('test BatteryMonitorSensor', async t => {
  const batteryMonitorSensor = new BatteryMonitorSensor()

  const batteryMonitorResposne = new Promise((resolve, reject) => {
    batteryMonitorSensor.listen(data => {
      resolve(data)
    })
  })

  let resp = (await batteryMonitorResposne).battery
  t.deepEqual(resp, windowMocks.mockedBattery)

  t.deepEqual(batteryMonitorSensor.serialize(resp), windowMocks.battery)
})

// test('test GlobalSensor', async t => {
//   const batteryMonitorSensor = new GlobalSensor()
//
//   const globalSensor = new Promise(((resolve, reject) => {
//     batteryMonitorSensor.listen((data) => {
//       resolve(data)
//     })
//   }))
//
//   t.deepEqual(await globalSensor, 123)
// })
