import throttle from "lodash/throttle";


class SensorMonitor {

  constructor(opts){
    if(!opts){
      opts = {}
    }

    let {queryPeriod, state} = opts;

    if (queryPeriod === undefined || queryPeriod === null) {
      queryPeriod = 0;
    }
    this.queryPeriod = queryPeriod;

    if (state === undefined || state === null) {
      state = {};
    }
    this.state = state;

    let noThrottlingFn = x => x
    this.throttlify = queryPeriod === 0 ? noThrottlingFn :
      throttle.bind(this, undefined, this.queryPeriod);

    return this;
  }

  startListening(){
  }
}

export class GlobalSensorMonitor extends SensorMonitor{

  constructor(){
    super();
  }

  startListening(){
    const args = {state: this.state, queryPeriod: this.queryPeriod};
    this.state.battery = {};
    new BatteryMonitor({state: this.state.battery, queryPeriod: this.queryPeriod}).startListening();
    new GeolocationMonitor(args).startListening();
    new DeviceOrientationMonitor(args).startListening();
    new DeviceMotionMonitor(args).startListening();
    new DeviceLightMonitor(args).startListening();
    new DeviceProximityMonitor(args).startListening();
    new DeviceAmbientLightMonitor(args).startListening();
    new DeviceNavigatorMonitor(args).startListening();
    return this
  }
}

export class BatteryMonitor extends SensorMonitor{
  
  constructor(args){
    super(args);
  }

  startListening () {
    if (navigator.getBattery) {
      navigator.getBattery().then(battery => {
        this.state = battery;
        battery.addEventListener("chargingchange", () => {
          this.state = battery;
        });
      });
    }
    return this
  }
}

export class GeolocationMonitor extends SensorMonitor{
  constructor(args){
    super(args);
  }

  startListening() {
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
    return this
  }
}

export class DeviceOrientationMonitor extends SensorMonitor{
  constructor(args) {
    super(args);
  }

  startListening() {
    window.addEventListener(
      "deviceorientation",
      this.throttlify(deviceorientation => {
        this.state.deviceorientation = deviceorientation;
      }),
      false
    );
  }
}

export class DeviceMotionMonitor extends SensorMonitor{
  constructor(args) {
    super(args);
  }


  startListening() {
    window.addEventListener(
      "devicemotion",
      this.throttlify(devicemotion => {
        this.state.devicemotion = devicemotion;
      }),
      false
    );
    return this
  }
}

export class DeviceLightMonitor extends SensorMonitor{
  constructor(args) {
    super(args);
  }


  startListening() {
    window.addEventListener(
      "devicelight",
      this.throttlify(devicelight => {
        this.state.devicelight = devicelight;
      }),
      false
    );
    return this
  }
}

export class DeviceProximityMonitor extends SensorMonitor{
  constructor(args) {
    super(args);
  }

  startListening() {
    window.addEventListener(
      "deviceproximity",
      this.throttlify(deviceproximity => {
        this.state.deviceproximity = deviceproximity;
      }),
      false
    );
    return this
  }
}

export class DeviceAmbientLightMonitor extends SensorMonitor{
  constructor(args) {
    super(args);
  }

  startListening() {
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
    return this
  }
}

export class DeviceNavigatorMonitor extends SensorMonitor {
  constructor(args) {
    super(args);
  }

  startListening() {
    setTimeout(() => {
      this.state.navigator = navigator;
    }, this.queryPeriod);
    return this
  }
}
