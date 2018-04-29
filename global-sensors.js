import GlobalSensorMonitor from "./monitors";
import {
  serializeState,
  serializeBatteryManager,
  serializePosition,
  serializeDeviceOrientationEvent,
  serializeDeviceMotionEvent,
  serializeNavigator
} from "./serialziers";

class Sensor{
  constructor({queryPeriod} = {}, monitorClass, serializeFn) {
    this.listeners = [];
    if (queryPeriod) {
      this.queryPeriod = opts.queryPeriod;
    }

    const monitor = new monitorClass({queryPeriod: this.queryPeriod})

    this.serialize = serializeFn.bind(this)

    setInterval(() => {
      const state = monitor.state;
      this.listeners.forEach(listener => listener.call(null, state));
    }, this.queryPeriod);
  }

  listen(newListener) {
    this.listeners.push(newListener);
  }

  clearListeners() {
    this.listeners = [];
  }
}
export class GlobalSensor extends Sensor{
  constructor(opts) {
  serializeState,
    super(opts, GlobalSensorMonitor, serializeState);
  }
}

export {
  serializeState,
  serializeBatteryManager,
  serializePosition,
  serializeDeviceOrientationEvent,
  serializeDeviceMotionEvent,
  serializeNavigator
}
