// @flow
/*::
type Options = ?{queryPeriod?:number, state?:{}}
export type { SensorMonitor };
*/
const throttle = require('lodash/throttle')

class SensorMonitor {
  /*:: state: Object */
  /*:: queryPeriod: number */
  /*:: throttlify: (x: Object) => Object */
  constructor (opts /*: Options */) {
    if (!opts) {
      opts = {}
    }

    let { queryPeriod, state } = opts

    if (queryPeriod === undefined || queryPeriod === null) {
      queryPeriod = 0
    }
    this.queryPeriod = queryPeriod

    if (state === undefined || state === null) {
      state = {}
    }
    this.state = state

    let noThrottlingFn = x => x
    this.throttlify =
      queryPeriod === 0
        ? noThrottlingFn
        : throttle.bind(this, undefined, this.queryPeriod)

    return this
  }

  startListening () {}
}

class GlobalSensorMonitor extends SensorMonitor {
  constructor (opts /*: Options */) {
    super()
  }

  startListening () {
    new BatteryMonitor({
      state: this.state,
      queryPeriod: this.queryPeriod
    }).startListening()
    new GeolocationMonitor({
      state: this.state,
      queryPeriod: this.queryPeriod
    }).startListening()
    new DeviceOrientationMonitor({
      state: this.state,
      queryPeriod: this.queryPeriod
    }).startListening()
    new DeviceMotionMonitor({
      state: this.state,
      queryPeriod: this.queryPeriod
    }).startListening()
    new DeviceLightMonitor({
      state: this.state,
      queryPeriod: this.queryPeriod
    }).startListening()
    new DeviceProximityMonitor({
      state: this.state,
      queryPeriod: this.queryPeriod
    }).startListening()
    new DeviceAmbientLightMonitor({
      state: this.state,
      queryPeriod: this.queryPeriod
    }).startListening()
    new DeviceNavigatorMonitor({
      state: this.state,
      queryPeriod: this.queryPeriod
    }).startListening()
    return this
  }
}

class BatteryMonitor extends SensorMonitor {
  constructor (args /*: Options */) {
    super(args)
  }

  startListening () {
    if (window.navigator.getBattery) {
      window.navigator.getBattery().then(battery => {
        this.state.battery = battery
        battery.addEventListener('chargingchange', () => {
          this.state.battery = battery
        })
      })
    }
    return this
  }
}

class GeolocationMonitor extends SensorMonitor {
  constructor (args /*: Options */) {
    super(args)
  }

  startListening () {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        geo => {
          this.state.geo = geo
        },
        (a1, a2) => undefined,
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 30000
        }
      )
    }
    return this
  }
}

class DeviceOrientationMonitor extends SensorMonitor {
  constructor (args /*: Options */) {
    super(args)
  }

  startListening () {
    window.addEventListener(
      'deviceorientation',
      this.throttlify(deviceorientation => {
        this.state.deviceorientation = deviceorientation
      }),
      false
    )
    return this;
  }
}

class DeviceMotionMonitor extends SensorMonitor {
  constructor (args /*: Options */) {
    super(args)
  }

  startListening () {
    window.addEventListener(
      'devicemotion',
      this.throttlify(devicemotion => {
        this.state.devicemotion = devicemotion
      }),
      false
    )
    return this
  }
}

class DeviceLightMonitor extends SensorMonitor {
  constructor (args /*: Options */) {
    super(args)
  }

  startListening () {
    window.addEventListener(
      'devicelight',
      this.throttlify(devicelight => {
        this.state.devicelight = devicelight
      }),
      false
    )
    return this
  }
}

class DeviceProximityMonitor extends SensorMonitor {
  constructor (args /*: Options */) {
    super(args)
  }

  startListening () {
    window.addEventListener(
      'deviceproximity',
      this.throttlify(deviceproximity => {
        this.state.deviceproximity = deviceproximity
      }),
      false
    )
    return this
  }
}

class DeviceAmbientLightMonitor extends SensorMonitor {
  constructor (args /*: Options */) {
    super(args)
  }

  startListening () {
    if ('AmbientLightSensor' in window) {
      const sensor = new window.AmbientLightSensor()
      sensor.onreading = () => {
        this.state.lightlevel = sensor
      }
      sensor.onerror = event => {
        console.error('No light sensor', event.error.name, event.error.message)
      }
      sensor.start()
    }
    return this
  }
}

class DeviceNavigatorMonitor extends SensorMonitor {
  constructor (args /*: Options */) {
    super(args)
  }

  startListening () {
    setTimeout(() => {
      this.state.navigator = navigator
    }, this.queryPeriod)
    return this
  }
}

module.exports = {
  SensorMonitor,
  GlobalSensorMonitor,
  BatteryMonitor,
  GeolocationMonitor,
  DeviceOrientationMonitor,
  DeviceMotionMonitor,
  DeviceLightMonitor,
  DeviceProximityMonitor,
  DeviceAmbientLightMonitor,
  DeviceNavigatorMonitor
}
