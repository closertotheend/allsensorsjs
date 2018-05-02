(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.allsensors = {})));
}(this, (function (exports) { 'use strict';

  const { BatteryMonitor, GlobalSensorMonitor } = require('./monitors');
  const {
    serializeBatteryManager,
    serializeDeviceMotionEvent,
    serializeDeviceOrientationEvent,
    serializeNavigator,
    serializePosition,
    serializeState
  } = require('./serialziers');

  class Sensor {
    constructor (opts, monitorClass, serializeFn) {

      if (opts && opts.queryPeriod) {
        this.queryPeriod = opts.queryPeriod;
      } else {
        this.queryPeriod = 0;
      }

      const monitor = new monitorClass({queryPeriod: this.queryPeriod}).startListening();

      this.serialize = serializeFn.bind(this);

      this.listeners = [];
      setInterval(() => {
        const state = monitor.state;
        this.listeners.forEach(listener => listener.call(null, state));
      }, this.queryPeriod);
    }

    listen (newListener) {
      this.listeners.push(newListener);
    }

    clearListeners () {
      this.listeners = [];
    }
  }

  class GlobalSensor extends Sensor {
    constructor (opts) {
      super(opts, GlobalSensorMonitor, serializeState);
    }
  }

  class BatteryMonitorSensor extends Sensor {
    constructor (opts) {
      super(opts, BatteryMonitor, serializeBatteryManager);
    }
  }

  exports.GlobalSensor = GlobalSensor;
  exports.BatteryMonitorSensor = BatteryMonitorSensor;
  exports.serializeState = serializeState;
  exports.serializeBatteryManager = serializeBatteryManager;
  exports.serializePosition = serializePosition;
  exports.serializeDeviceOrientationEvent = serializeDeviceOrientationEvent;
  exports.serializeDeviceMotionEvent = serializeDeviceMotionEvent;
  exports.serializeNavigator = serializeNavigator;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
