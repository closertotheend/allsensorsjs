const test = require('ava')
const {
  battery,
  geo,
  deviceorientation,
  devicemotion,
  navigator
} = require('./serializers.test')
const {
  GlobalSensorMonitor,
  BatteryMonitor,
  GeolocationMonitor,
  DeviceOrientationMonitor,
  DeviceMotionMonitor,
  DeviceLightMonitor,
  DeviceProximityMonitor,
  DeviceAmbientLightMonitor,
  DeviceNavigatorMonitor
} = require('../../src/monitors')

function mockWindow () {
  const mockedBattery = { addEventListener: () => {}, ...battery }

  const mockedNavigator = Object.assign({}, navigator, {
    getBattery: async () => mockedBattery,
    geolocation: {
      watchPosition: fn => {
        fn(geo)
      }
    }
  })

  global.navigator = mockedNavigator
  global.window = {
    navigator: mockedNavigator,
    addEventListener: (listenerName, fn) => {
      if (listenerName === 'deviceorientation') {
        fn(deviceorientation)
      }
      if (listenerName === 'devicemotion') {
        fn(devicemotion)
      }
    }
  }
  return {
    battery,
    mockedBattery,
    mockedNavigator,
    geo,
    devicemotion,
    deviceorientation,
    navigator
  }
}

let { mockedBattery, mockedNavigator } = mockWindow()

test('test BatteryMonitor', async t => {
  const monitor = new BatteryMonitor()
  monitor.startListening()
  const response = promisify(monitor)
  const { addEventListener, ...responseBattery } = (await response).battery
  t.deepEqual(responseBattery, battery)
})

test('test GeolocationMonitor', async t => {
  const monitor = new GeolocationMonitor()
  monitor.startListening()
  const geoStateResponse = promisify(monitor)
  t.deepEqual((await geoStateResponse).geo, geo)
})

test('test DeviceOrientationMonitor', async t => {
  const monitor = new DeviceOrientationMonitor()
  monitor.startListening()
  const responsePromise = promisify(monitor)
  t.deepEqual((await responsePromise).deviceorientation, deviceorientation)
})

test('test DeviceMotionMonitor', async t => {
  const monitor = new DeviceMotionMonitor()
  monitor.startListening()
  const responsePromise = promisify(monitor)
  t.deepEqual((await responsePromise).devicemotion, devicemotion)
})

test('test DeviceNavigatorMonitor', async t => {
  const monitor = new DeviceNavigatorMonitor()
  monitor.startListening()
  const responsePromise = promisify(monitor)
  t.deepEqual(
    (await getWithoutUnneededFields(responsePromise)).navigator.appCodeName,
    (await getWithoutUnneededFields(mockedNavigator)).appCodeName
  )
})

// test('test GlobalSensorMonitor', async t => {
//   const monitor = new GlobalSensorMonitor()
//   monitor.startListening()
//   const responsePromise = promisify(monitor)
//   t.truthy(await responsePromise)
// })

async function getWithoutUnneededFields (responsePromise) {
  let { geolocation, ...responseWithNoGeolocation } = await responsePromise
  return responseWithNoGeolocation
}

function promisify (monitor) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(monitor.state)
    }, 10)
  })
}

module.exports = {
  mockWindow
}
