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
  constructor(opts, monitor, serializeFn) {
    this.listeners = [];
    if (opts && opts.queryPeriod) {
      this.queryPeriod = opts.queryPeriod;
    }

    const globalSensorMonitor = monitor.initialize(
      this.queryPeriod
    );

    this.serialize = serializeFn.bind(this)

    setInterval(() => {
      const state = globalSensorMonitor.state;
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
    super(opts, new GlobalSensorMonitor(), serializeState);
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
