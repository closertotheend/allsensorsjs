# AllSensorsJS

This library is intended for aggregating and serializing all possible device sensor information into single object.

Usage example:

```javascript
var sensor = new allsensors.GlobalSensor({ queryPeriod: 1000 })
sensor.listen((state) => {
    var serialized = sensor.serialize(state);
    console.log(serialized)
})
```

Following code should print following object to console:

```javascript
{
    "battery": {
        "charging": true,
        "chargingTime": null,
        "dischargingTime": null,
        "level": 0.88
    },
    "geo": {
        "coords": {
            "latitude": 45.4031005,
            "longitude": 24.697922,
            "altitude": 44.599998474121094,
            "accuracy": 27.507999420166016,
            "speed": null,
            "altitudeAccuracy": null,
            "heading": null
        }
    },
    "deviceorientation": {
        "alpha": 314.6642875423403,
        "beta": 0.906291018720582,
        "gamma": 1.0539128367879316,
        "absolute": false,
        "bubbles": false,
        "timeStamp": 19015.50000000134
    },
    "devicemotion": {
        "acceleration": {
            "x": 0.11509060114622116,
            "y": -0.025507241487503052,
            "z": 0.0029134750366210938
        },
        "accelerationIncludingGravity": {
            "x": -0.06703764945268631,
            "y": 0.12928688526153564,
            "z": 9.806650161743164
        },
        "interval": 16,
        "rotationRate": {
            "alpha": 0,
            "beta": 0.1831110483869743,
            "gamma": 0
        },
        "timeStamp": 24303.100000000995
    },
    "navigator": {
        "appCodeName": "Mozilla",
        "appVersion": "5.0 (Linux; Android 7.1.2; Moto G4 Build/NJH47F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.158 Mobile Safari/537.36",
        "deviceMemory": 2,
        "hardwareConcurrency": 8,
        "appName": "Netscape",
        "languages": [
            "en-US",
            "en",
            "ru",
            "et",
            "sk"
        ],
        "language": "en-US",
        "platform": "Linux armv7l",
        "product": "Gecko",
        "userAgent": "Mozilla/5.0 (Linux; Android 7.1.2; Moto G4 Build/NJH47F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.158 Mobile Safari/537.36",
        "vendor": "Google Inc.",
        "connection": {
            "downlink": 8.4,
            "downlinkMax": null,
            "effectiveType": "4g",
            "type": "wifi"
        }
    }
}
```
