// @flow
/*::
type Options = {
  queryPeriod: number
};
import type {State} from "./serializers";
import type {SensorMonitor} from "./monitors";
*/

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
} = require('./monitors')

const {
  serializeBatteryManager,
  serializeDeviceMotionEvent,
  serializeDeviceOrientationEvent,
  serializeNavigator,
  serializePosition,
  serializeState
} = require('./serializers')

class Sensor {
  /*:: listeners: Array<(any: {}) => void> */
  /*:: queryPeriod: number */
  /*:: serialize: (statePart : any) => {} */
  /*:: monitor: SensorMonitor */

  constructor (opts /*: Options */, monitorClass, serializeFn) {
    if (opts && opts.queryPeriod) {
      this.queryPeriod = opts.queryPeriod
    } else {
      this.queryPeriod = 0
    }

    this.monitor = new monitorClass({
      queryPeriod: this.queryPeriod
    }).startListening()

    this.serialize = serializeFn.bind(this)

    this.listeners = []
    setInterval(() => {
      const state = this.monitor.state
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

class BatterySensor extends Sensor {
  constructor (opts /*: Options */) {
    super(opts, BatteryMonitor, ({battery}) => {
      return serializeBatteryManager(battery)
    })
  }
}

class OrientationSensor extends Sensor {
  constructor (opts /*: Options */) {
    super(opts, DeviceOrientationMonitor, serializeDeviceOrientationEvent)
  }
}

class MotionSensor extends Sensor {
  constructor (opts /*: Options */) { 
    super(opts, DeviceMotionMonitor, serializeDeviceMotionEvent)
  }
}

class GeolocationSensor extends Sensor {
  constructor (opts /*: Options */) {
    super(opts, GeolocationMonitor, serializePosition)
  }
}

class NavigatorSensor extends Sensor {
  constructor (opts /*: Options */) {
    super(opts, DeviceNavigatorMonitor, (data) => {
      return serializeNavigator(data.navigator)
    })
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
  BatterySensor,
  OrientationSensor,
  MotionSensor,
  GeolocationSensor,
  NavigatorSensor,
}
