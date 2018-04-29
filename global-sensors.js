import GlobalSensorMonitor from "./monitors";
import {serializeDeviceOrientationEvent, serializeState} from "./serialziers";
export class GlobalSensor {
  constructor(opts) {
    this.listeners = [];
    if (opts && opts.queryPeriod) {
      this.queryPeriod = opts.queryPeriod;
    }

    const globalSensorMonitor = new GlobalSensorMonitor().initialize(
      this.queryPeriod
    );

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

export {serializeState, serializeDeviceOrientationEvent, GlobalSensorMonitor}
