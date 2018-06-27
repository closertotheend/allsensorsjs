const test = require('ava')
const { mockWindow } = require('./monitors.test')
const {
  BatterySensor,
  GlobalSensor,
  NavigatorSensor,
  GeolocationSensor,
  MotionSensor,
  OrientationSensor
} = require('../../src/global-sensors')

let windowMocks = mockWindow()

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

test('test BatterySensor', async t => {
  const sensor = new BatterySensor()
  const sensorResponse = getResponseOf(sensor)
  const response = (await sensorResponse)
  t.deepEqual(sensor.serialize(response), windowMocks.battery)
})

test('test NavigatorSensor', async t => {
  const sensor = new NavigatorSensor()
  const sensorResponse = getResponseOf(sensor)
  const response = (await sensorResponse)
  t.deepEqual(sensor.serialize(response), windowMocks.navigator)
})

test('test GeolocationSensor', async t => {
  const sensor = new GeolocationSensor()
  const sensorResponse = getResponseOf(sensor)
  const response = (await sensorResponse)
  t.deepEqual(sensor.serialize(response), windowMocks.geo)
})

test('test MotionSensor', async t => {
  const sensor = new MotionSensor()
  const sensorResponse = getResponseOf(sensor)
  const response = (await sensorResponse)
  t.deepEqual(sensor.serialize(response), windowMocks.devicemotion)
})

test('test OrientationSensor', async t => {
  const sensor = new OrientationSensor()
  const sensorResponse = getResponseOf(sensor)
  const response = (await sensorResponse)
  t.deepEqual(sensor.serialize(response), windowMocks.deviceorientation)
})

function getResponseOf(sensor) {
  return new Promise((resolve, reject) => {
    sensor.listen(data => {
      resolve(data);
    });
  });
}
