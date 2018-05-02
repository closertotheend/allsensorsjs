function serializeState (state) {
  const serialized = {}

  if (state.battery) {
    serialized.battery = serializeBatteryManager(state.battery)
  }

  if (state.geo) {
    serialized.geo = serializePosition(state.geo)
  }

  if (state.deviceorientation) {
    serialized.deviceorientation = serializeDeviceOrientationEvent(
      state.deviceorientation
    )
  }

  if (state.devicemotion) {
    serialized.devicemotion = serializeDeviceMotionEvent(state.devicemotion)
  }

  if (state.navigator) {
    serialized.navigator = serializeNavigator(state.navigator)
  }

  return serialized
}

function serializeDeviceMotionEvent ({
                                       acceleration,
                                       accelerationIncludingGravity,
                                       interval,
                                       rotationRate,
                                       timeStamp
                                     }) {
  return {
    acceleration: {
      x: acceleration.x,
      y: acceleration.y,
      z: acceleration.z
    },
    accelerationIncludingGravity: {
      x: accelerationIncludingGravity.x,
      y: accelerationIncludingGravity.y,
      z: accelerationIncludingGravity.z
    },
    interval,
    rotationRate: {
      alpha: rotationRate.alpha,
      beta: rotationRate.beta,
      gamma: rotationRate.gamma
    },
    timeStamp
  }
}

function serializeNavigator ({
                               appCodeName,
                               appVersion,
                               deviceMemory,
                               hardwareConcurrency,
                               appName,
                               languages,
                               language,
                               platform,
                               product,
                               userAgent,
                               vendor,
                               connection
                             }) {
  return {
    appCodeName,
    appVersion,
    deviceMemory,
    hardwareConcurrency,
    appName,
    languages,
    language,
    platform,
    product,
    userAgent,
    vendor,
    connection: connection
      ? {
        downlink: connection.downlink,
        downlinkMax: connection.downlinkMax,
        effectiveType: connection.effectiveType,
        type: connection.type
      }
      : null
  }
}

function serializeBatteryManager ({
                                    charging,
                                    chargingTime,
                                    dischargingTime,
                                    level
                                  }) {
  return {charging, chargingTime, dischargingTime, level}
}

function serializePosition ({coords}) {
  const {
    latitude,
    longitude,
    altitude,
    accuracy,
    speed,
    altitudeAccuracy,
    heading
  } = coords
  return {
    coords: {
      latitude,
      longitude,
      altitude,
      accuracy,
      speed,
      altitudeAccuracy,
      heading
    }
  }
}

function serializeDeviceOrientationEvent ({
                                            alpha,
                                            beta,
                                            gamma,
                                            absolute,
                                            bubbles,
                                            timeStamp
                                          }) {
  return {alpha, beta, gamma, absolute, bubbles, timeStamp}
}

module.exports = {
  serializeState,
  serializeDeviceMotionEvent,
  serializeNavigator,
  serializeBatteryManager,
  serializePosition,
  serializeDeviceOrientationEvent
}