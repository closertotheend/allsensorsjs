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

test('test GlobalSensor', async t => {
  const globalSensor = new GlobalSensor()

  const globalSensorPromise = new Promise((resolve, reject) => {
    globalSensor.listen(data => {
      resolve(data)
    })
  })

  const globalSensorResponse = await globalSensorPromise
  t.deepEqual(globalSensorResponse, {
    battery: windowMocks.mockedBattery,
    navigator: windowMocks.mockedNavigator,
    devicemotion: windowMocks.devicemotion,
    deviceorientation: windowMocks.deviceorientation,
    geo: windowMocks.geo
  })

  t.deepEqual(globalSensor.serialize(globalSensorResponse), {
    battery: windowMocks.battery,
    navigator: windowMocks.navigator,
    devicemotion: windowMocks.devicemotion,
    deviceorientation: windowMocks.deviceorientation,
    geo: windowMocks.geo
  })
})
