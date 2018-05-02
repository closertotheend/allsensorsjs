import test from "ava";
import { serializeState } from "../../src/serialziers";

const devicemotion = {
  acceleration: { x: 1, y: 2, z: 3 },
  accelerationIncludingGravity: {
    x: -0.06224924325942993,
    y: 0.19153612852096558,
    z: 9.86889934539795
  },
  interval: 16,
  rotationRate: {
    alpha: -0.12207403670472061,
    beta: 0.12207403670472061,
    gamma: 0
  },
  timeStamp: 8024.800000001051
};

const navigator = {
  appCodeName: "Mozilla",
  appName: "Netscape",
  appVersion:
    "5.0 (Linux; Android 7.1.2; Moto G4 Build/NJH47F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
  languages: ["en-US", "en", "ru", "et", "sk"],
  platform: "Linux armv7l",
  product: "Gecko",
  userAgent:
    "Mozilla/5.0 (Linux; Android 7.1.2; Moto G4 Build/NJH47F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.126 Mobile Safari/537.36",
  vendor: "Google Inc.",
  deviceMemory: 2,
  language: "en-US",
  hardwareConcurrency: 8,
  connection: {
    downlink: 10,
    downlinkMax: Infinity,
    effectiveType: "4g",
    type: "wifi"
  }
};

const geo = {
  coords: {
    accuracy: 75,
    altitude: undefined,
    altitudeAccuracy: undefined,
    heading: undefined,
    latitude: 59.403152000000006,
    longitude: 24.6973848,
    speed: null
  }
};

const deviceorientation = {
  alpha: null,
  beta: null,
  gamma: null,
  absolute: false,
  bubbles: false,
  timeStamp: 405.4000000032829
};

const battery = {
  charging: true,
  chargingTime: Infinity,
  dischargingTime: Infinity,
  level: 1
};

test("test StateSerializer", t => {
  t.deepEqual(
    serializeState({
      battery,
      geo,
      deviceorientation,
      devicemotion,
      navigator
    }),
    {
      devicemotion,
      geo,
      deviceorientation,
      battery,
      navigator
    }
  );
});
