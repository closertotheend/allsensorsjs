const { BatteryMonitor, GlobalSensorMonitor } = require('./monitors')
const {
  serializeBatteryManager,
  serializeDeviceMotionEvent,
  serializeDeviceOrientationEvent,
  serializeNavigator,
  serializePosition,
  serializeState
} = require('./serialziers')

class Sensor {
  constructor (opts, monitorClass, serializeFn) {
    if (opts && opts.queryPeriod) {
      this.queryPeriod = opts.queryPeriod
    } else {
      this.queryPeriod = 0
    }

    const monitor = new monitorClass({
      queryPeriod: this.queryPeriod
    }).startListening()

    this.serialize = serializeFn.bind(this)

    this.listeners = []
    setInterval(() => {
      const state = monitor.state
      this.listeners.forEach(listener => listener.call(null, state))
    }, this.queryPeriod)
  }

  listen (newListener) {
    this.listeners.push(newListener)
  }

  clearListeners () {
    this.listeners = []
  }
}

class GlobalSensor extends Sensor {
  constructor (opts) {
    super(opts, GlobalSensorMonitor, serializeState)
  }
}

class BatteryMonitorSensor extends Sensor {
  constructor (opts) {
    super(opts, BatteryMonitor, serializeBatteryManager)
  }
}

module.exports = {
  serializeState,
  serializeBatteryManager,
  serializePosition,
  serializeDeviceOrientationEvent,
  serializeDeviceMotionEvent,
  serializeNavigator,
  GlobalSensor,
  BatteryMonitorSensor
}
