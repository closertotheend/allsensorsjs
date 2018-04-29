import throttle from "lodash/throttle";

export default class GlobalSensorMonitor {

  constructor(){
    this.state = {};
  }

  initialize(queryPeriod) {
    if (queryPeriod === undefined || queryPeriod === null) {
      queryPeriod = 0;
    }

    this.queryPeriod = queryPeriod;
    const state = this.state;
    const throttlify = queryPeriod === 0 ? x => x : this.throttlify.bind(this);
    const args = { state, queryPeriod, throttlify };

    new BatteryMonitor(args).initialize();
    new GeolocationMonitor(args).initialize();
    new DeviceOrientationMonitor(args).initialize();
    new DeviceMotionMonitor(args).initialize();
    new DeviceLightMonitor(args).initialize();
    new DeviceProximityMonitor(args).initialize();
    new DeviceAmbientLightMonitor(args).initialize();
    new DeviceNavigatorMonitor(args).initialize();

    return this;
  }

  throttlify(func) {
    return throttle(func, this.queryPeriod);
  }
}

class BatteryMonitor {
  constructor(args) {
    Object.assign(this, args);
  }

  initialize() {
    if (navigator.getBattery) {
      navigator.getBattery().then(battery => {
        this.state.battery = battery;
        battery.addEventListener("chargingchange", () => {
          this.state.battery = battery;
        });
      });
    }
  }
}

class GeolocationMonitor {
  constructor(args) {
    Object.assign(this, args);
  }

  initialize() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        geo => {
          this.state.geo = geo;
        },
        () => undefined,
        {
          enableHighAccuracy: true,
          timeout: this.queryPeriod,
          maximumAge: 0
        }
      );
    }
  }
}

class DeviceOrientationMonitor {
  constructor(args) {
    Object.assign(this, args);
  }

  initialize() {
    window.addEventListener(
      "deviceorientation",
      this.throttlify(deviceorientation => {
        this.state.deviceorientation = deviceorientation;
      }),
      false
    );
  }
}

class DeviceMotionMonitor {
  constructor(args) {
    Object.assign(this, args);
  }

  initialize() {
    window.addEventListener(
      "devicemotion",
      this.throttlify(devicemotion => {
        this.state.devicemotion = devicemotion;
      }),
      false
    );
  }
}

class DeviceLightMonitor {
  constructor(args) {
    Object.assign(this, args);
  }

  initialize() {
    window.addEventListener(
      "devicelight",
      this.throttlify(devicelight => {
        this.state.devicelight = devicelight;
      }),
      false
    );
  }
}

class DeviceProximityMonitor {
  constructor(args) {
    Object.assign(this, args);
  }

  initialize() {
    window.addEventListener(
      "deviceproximity",
      this.throttlify(deviceproximity => {
        this.state.deviceproximity = deviceproximity;
      }),
      false
    );
  }
}

class DeviceAmbientLightMonitor {
  constructor(args) {
    Object.assign(this, args);
  }

  initialize() {
    if ("AmbientLightSensor" in window) {
      const sensor = new window.AmbientLightSensor();
      sensor.onreading = () => {
        this.state.lightlevel = sensor;
      };
      sensor.onerror = event => {
        console.error("No light sensor", event.error.name, event.error.message);
      };
      sensor.start();
    }
  }
}

class DeviceNavigatorMonitor {
  constructor(args) {
    Object.assign(this, args);
  }

  initialize() {
    setTimeout(() => {
      this.state.navigator = navigator;
    }, this.queryPeriod);
  }
}
