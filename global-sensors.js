import GlobalSensorMonitor from "./monitors";

export default class GlobalSensor {
  listeners = [];

  constructor(opts) {
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
