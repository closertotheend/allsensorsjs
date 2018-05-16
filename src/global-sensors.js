// @flow
/*::
type Options = {
  queryPeriod: number
};
import type {State} from "./serialziers";
*/

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
  /*:: listeners: Array<(any: {}) => void> */
  /*:: queryPeriod: number */
  /*:: serialize: (state : State) => {} */

  constructor (opts /*: Options */, monitorClass, serializeFn) {
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

  listen (newListener /*: (any: {}) => void */) {
    this.listeners.push(newListener)
  }

  clearListeners () {
    this.listeners = []
  }
}

class GlobalSensor extends Sensor {
  constructor (opts /*: Options */) {
    super(opts, GlobalSensorMonitor, serializeState)
  }
}

class BatteryMonitorSensor extends Sensor {
  constructor (opts /*: Options */) {
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
