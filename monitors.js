import throttle from "lodash/throttle";


class SensorMonitor {

  constructor({queryPeriod, state} = { state:{}}){
    this.state = state;
    if (queryPeriod === undefined || queryPeriod === null) {
      queryPeriod = 0;
    }
    this.throttlify = queryPeriod === 0 ? x => x : throttle.bind(this, undefined, this.queryPeriod);
    this.beginListening();
    return this;
  }

  beginListening(){
  }
}

export default class GlobalSensorMonitor extends SensorMonitor{

  constructor(){
    super();
  }

  beginListening(){
    const args = {state: this.state, queryPeriod: this.queryPeriod};
    new BatteryMonitor(args);
    new GeolocationMonitor(args);
    new DeviceOrientationMonitor(args);
    new DeviceMotionMonitor(args);
    new DeviceLightMonitor(args);
    new DeviceProximityMonitor(args);
    new DeviceAmbientLightMonitor(args);
    new DeviceNavigatorMonitor(args);
  }
}

class BatteryMonitor extends SensorMonitor{
  
  constructor(args){
    super(args);
  }

  beginListening () {
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

class GeolocationMonitor extends SensorMonitor{
  constructor(args){
    super(args);
  }

  beginListening() {
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

class DeviceOrientationMonitor extends SensorMonitor{
  constructor(args) {
    super(args);
  }

  beginListening() {
    window.addEventListener(
      "deviceorientation",
      this.throttlify(deviceorientation => {
        this.state.deviceorientation = deviceorientation;
      }),
      false
    );
  }
}

class DeviceMotionMonitor extends SensorMonitor{
  constructor(args) {
    super(args);
  }


  beginListening() {
    window.addEventListener(
      "devicemotion",
      this.throttlify(devicemotion => {
        this.state.devicemotion = devicemotion;
      }),
      false
    );
  }
}

class DeviceLightMonitor extends SensorMonitor{
  constructor(args) {
    super(args);
  }


  beginListening() {
    window.addEventListener(
      "devicelight",
      this.throttlify(devicelight => {
        this.state.devicelight = devicelight;
      }),
      false
    );
  }
}

class DeviceProximityMonitor extends SensorMonitor{
  constructor(args) {
    super(args);
  }

  beginListening() {
    window.addEventListener(
      "deviceproximity",
      this.throttlify(deviceproximity => {
        this.state.deviceproximity = deviceproximity;
      }),
      false
    );
  }
}

class DeviceAmbientLightMonitor extends SensorMonitor{
  constructor(args) {
    super(args);
  }

  beginListening() {
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

class DeviceNavigatorMonitor extends SensorMonitor {
  constructor(args) {
    super(args);
  }

  beginListening() {
    setTimeout(() => {
      this.state.navigator = navigator;
    }, this.queryPeriod);
  }
}
