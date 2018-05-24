(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.allsensors = {})));
}(this, (function (exports) { 'use strict';

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = _freeGlobal || freeSelf || Function('return this')();

  var _root = root;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return _root.Date.now();
  };

  var now_1 = now;

  /** Built-in value references. */
  var Symbol = _root.Symbol;

  var _Symbol = Symbol;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag$1 && symToStringTag$1 in Object(value))
      ? _getRawTag(value)
      : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
  }

  var isSymbol_1 = isSymbol;

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol_1(value)) {
      return NAN;
    }
    if (isObject_1(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject_1(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var toNumber_1 = toNumber;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber_1(wait) || 0;
    if (isObject_1(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          timeWaiting = wait - timeSinceLastCall;

      return maxing
        ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
        : timeWaiting;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now_1();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now_1());
    }

    function debounced() {
      var time = now_1(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  var debounce_1 = debounce;

  /** Error message constants. */
  var FUNC_ERROR_TEXT$1 = 'Expected a function';

  /**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */
  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    if (isObject_1(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce_1(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }

  var throttle_1 = throttle;

  // @flow
  /*::
  type Options = ?{queryPeriod?:number, state?:{}}
  export type { SensorMonitor };
  */


  class SensorMonitor {
    /*:: state: Object */
    /*:: queryPeriod: number */
    /*:: throttlify: (x: Object) => Object */
    constructor (opts /*: Options */) {
      if (!opts) {
        opts = {};
      }

      let { queryPeriod, state } = opts;

      if (queryPeriod === undefined || queryPeriod === null) {
        queryPeriod = 0;
      }
      this.queryPeriod = queryPeriod;

      if (state === undefined || state === null) {
        state = {};
      }
      this.state = state;

      let noThrottlingFn = x => x;
      this.throttlify =
        queryPeriod === 0
          ? noThrottlingFn
          : throttle_1.bind(this, undefined, this.queryPeriod);

      return this
    }

    startListening () {}
  }

  class GlobalSensorMonitor extends SensorMonitor {
    constructor (opts /*: Options */) {
      super();
    }

    startListening () {
      new BatteryMonitor({
        state: this.state,
        queryPeriod: this.queryPeriod
      }).startListening();
      new GeolocationMonitor({
        state: this.state,
        queryPeriod: this.queryPeriod
      }).startListening();
      new DeviceOrientationMonitor({
        state: this.state,
        queryPeriod: this.queryPeriod
      }).startListening();
      new DeviceMotionMonitor({
        state: this.state,
        queryPeriod: this.queryPeriod
      }).startListening();
      new DeviceLightMonitor({
        state: this.state,
        queryPeriod: this.queryPeriod
      }).startListening();
      new DeviceProximityMonitor({
        state: this.state,
        queryPeriod: this.queryPeriod
      }).startListening();
      new DeviceAmbientLightMonitor({
        state: this.state,
        queryPeriod: this.queryPeriod
      }).startListening();
      new DeviceNavigatorMonitor({
        state: this.state,
        queryPeriod: this.queryPeriod
      }).startListening();
      return this
    }
  }

  class BatteryMonitor extends SensorMonitor {
    constructor (args /*: Options */) {
      super(args);
    }

    startListening () {
      if (window.navigator.getBattery) {
        window.navigator.getBattery().then(battery => {
          this.state.battery = battery;
          battery.addEventListener('chargingchange', () => {
            this.state.battery = battery;
          });
        });
      }
      return this
    }
  }

  class GeolocationMonitor extends SensorMonitor {
    constructor (args /*: Options */) {
      super(args);
    }

    startListening () {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          geo => {
            this.state.geo = geo;
          },
          (a1, a2) => undefined,
          {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 30000
          }
        );
      }
      return this
    }
  }

  class DeviceOrientationMonitor extends SensorMonitor {
    constructor (args /*: Options */) {
      super(args);
    }

    startListening () {
      window.addEventListener(
        'deviceorientation',
        this.throttlify(deviceorientation => {
          this.state.deviceorientation = deviceorientation;
        }),
        false
      );
      return this
    }
  }

  class DeviceMotionMonitor extends SensorMonitor {
    constructor (args /*: Options */) {
      super(args);
    }

    startListening () {
      window.addEventListener(
        'devicemotion',
        this.throttlify(devicemotion => {
          this.state.devicemotion = devicemotion;
        }),
        false
      );
      return this
    }
  }

  class DeviceLightMonitor extends SensorMonitor {
    constructor (args /*: Options */) {
      super(args);
    }

    startListening () {
      window.addEventListener(
        'devicelight',
        this.throttlify(devicelight => {
          this.state.devicelight = devicelight;
        }),
        false
      );
      return this
    }
  }

  class DeviceProximityMonitor extends SensorMonitor {
    constructor (args /*: Options */) {
      super(args);
    }

    startListening () {
      window.addEventListener(
        'deviceproximity',
        this.throttlify(deviceproximity => {
          this.state.deviceproximity = deviceproximity;
        }),
        false
      );
      return this
    }
  }

  class DeviceAmbientLightMonitor extends SensorMonitor {
    constructor (args /*: Options */) {
      super(args);
    }

    startListening () {
      if ('AmbientLightSensor' in window) {
        const sensor = new window.AmbientLightSensor();
        sensor.onreading = () => {
          this.state.lightlevel = sensor;
        };
        sensor.onerror = event => {
          console.error('No light sensor', event.error.name, event.error.message);
        };
        sensor.start();
      }
      return this
    }
  }

  class DeviceNavigatorMonitor extends SensorMonitor {
    constructor (args /*: Options */) {
      super(args);
    }

    startListening () {
      setTimeout(() => {
        this.state.navigator = navigator;
      }, this.queryPeriod);
      return this
    }
  }

  var monitors = {
    SensorMonitor,
    GlobalSensorMonitor,
    BatteryMonitor,
    GeolocationMonitor,
    DeviceOrientationMonitor,
    DeviceMotionMonitor,
    DeviceLightMonitor,
    DeviceProximityMonitor,
    DeviceAmbientLightMonitor,
    DeviceNavigatorMonitor
  };

  // @flow
  /*::
  export type State = {
    battery?:{},
    geo?:{},
    deviceorientation?:{},
    devicemotion?:{},
    navigator?:{}
  }
  */
  function serializeState (state /*: State */) {
    const serialized = {};

    if (state.battery) {
      serialized.battery = serializeBatteryManager(state.battery);
    }

    if (state.geo) {
      serialized.geo = serializePosition(state.geo);
    }

    if (state.deviceorientation) {
      serialized.deviceorientation = serializeDeviceOrientationEvent(
        state.deviceorientation
      );
    }

    if (state.devicemotion) {
      serialized.devicemotion = serializeDeviceMotionEvent(state.devicemotion);
    }

    if (state.navigator) {
      serialized.navigator = serializeNavigator(state.navigator);
    }

    return serialized
  }

  function serializeDeviceMotionEvent (
    {
      acceleration,
      accelerationIncludingGravity,
      interval,
      rotationRate,
      timeStamp
    } /*: Object */
  ) {
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

  function serializeNavigator (
    {
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
    } /*: Object */
  ) {
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

  function serializeBatteryManager (
    { charging, chargingTime, dischargingTime, level } /*: Object */
  ) {
    return { charging, chargingTime, dischargingTime, level }
  }

  function serializePosition ({ coords } /*: Object */) {
    const {
      latitude,
      longitude,
      altitude,
      accuracy,
      speed,
      altitudeAccuracy,
      heading
    } = coords;
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

  function serializeDeviceOrientationEvent (
    { alpha, beta, gamma, absolute, bubbles, timeStamp } /*: Object */
  ) {
    return { alpha, beta, gamma, absolute, bubbles, timeStamp }
  }

  var serialziers = {
    serializeState,
    serializeDeviceMotionEvent,
    serializeNavigator,
    serializeBatteryManager,
    serializePosition,
    serializeDeviceOrientationEvent
  };

  // @flow
  /*::
  type Options = {
    queryPeriod: number
  };
  import type {State} from "./serialziers";
  import type {SensorMonitor} from "./monitors";
  */

  const {
    GlobalSensorMonitor: GlobalSensorMonitor$1,
    BatteryMonitor: BatteryMonitor$1,
    GeolocationMonitor: GeolocationMonitor$1,
    DeviceOrientationMonitor: DeviceOrientationMonitor$1,
    DeviceMotionMonitor: DeviceMotionMonitor$1,
    DeviceLightMonitor: DeviceLightMonitor$1,
    DeviceProximityMonitor: DeviceProximityMonitor$1,
    DeviceAmbientLightMonitor: DeviceAmbientLightMonitor$1,
    DeviceNavigatorMonitor: DeviceNavigatorMonitor$1
  } = monitors;

  const {
    serializeBatteryManager: serializeBatteryManager$1,
    serializeDeviceMotionEvent: serializeDeviceMotionEvent$1,
    serializeDeviceOrientationEvent: serializeDeviceOrientationEvent$1,
    serializeNavigator: serializeNavigator$1,
    serializePosition: serializePosition$1,
    serializeState: serializeState$1
  } = serialziers;

  class Sensor {
    /*:: listeners: Array<(any: {}) => void> */
    /*:: queryPeriod: number */
    /*:: serialize: (state : State) => {} */
    /*:: monitor: SensorMonitor */

    constructor (opts /*: Options */, monitorClass, serializeFn) {
      if (opts && opts.queryPeriod) {
        this.queryPeriod = opts.queryPeriod;
      } else {
        this.queryPeriod = 0;
      }

      this.monitor = new monitorClass({
        queryPeriod: this.queryPeriod
      }).startListening();

      this.serialize = serializeFn.bind(this);

      this.listeners = [];
      setInterval(() => {
        const state = this.monitor.state;
        this.listeners.forEach(listener => listener.call(null, state));
      }, this.queryPeriod);
    }

    listen (newListener /*: (any: {}) => void */) {
      this.listeners.push(newListener);
    }

    clearListeners () {
      this.listeners = [];
    }
  }

  class GlobalSensor extends Sensor {
    constructor (opts /*: Options */) {
      super(opts, GlobalSensorMonitor$1, serializeState$1);
    }
  }

  class BatterySensor extends Sensor {
    constructor (opts /*: Options */) {
      super(opts, BatteryMonitor$1, serializeBatteryManager$1);
    }
  }

  class OrientationSensor extends Sensor {
    constructor (opts /*: Options */) {
      super(opts, DeviceOrientationMonitor$1, serializeDeviceOrientationEvent$1);
    }
  }

  class MotionSensor extends Sensor {
    constructor (opts /*: Options */) {
      super(opts, DeviceMotionMonitor$1, serializeDeviceMotionEvent$1);
    }
  }

  class GeolocationSensor extends Sensor {
    constructor (opts /*: Options */) {
      super(opts, GeolocationMonitor$1, serializePosition$1);
    }
  }

  class NavigatorSensor extends Sensor {
    constructor (opts /*: Options */) {
      super(opts, DeviceNavigatorMonitor$1, serializeNavigator$1);
    }
  }

  var globalSensors = {
    serializeState: serializeState$1,
    serializeBatteryManager: serializeBatteryManager$1,
    serializePosition: serializePosition$1,
    serializeDeviceOrientationEvent: serializeDeviceOrientationEvent$1,
    serializeDeviceMotionEvent: serializeDeviceMotionEvent$1,
    serializeNavigator: serializeNavigator$1,
    GlobalSensor,
    BatterySensor,
    OrientationSensor,
    MotionSensor,
    GeolocationSensor,
    NavigatorSensor,
  };
  var globalSensors_1 = globalSensors.serializeState;
  var globalSensors_2 = globalSensors.serializeBatteryManager;
  var globalSensors_3 = globalSensors.serializePosition;
  var globalSensors_4 = globalSensors.serializeDeviceOrientationEvent;
  var globalSensors_5 = globalSensors.serializeDeviceMotionEvent;
  var globalSensors_6 = globalSensors.serializeNavigator;
  var globalSensors_7 = globalSensors.GlobalSensor;
  var globalSensors_8 = globalSensors.BatterySensor;
  var globalSensors_9 = globalSensors.OrientationSensor;
  var globalSensors_10 = globalSensors.MotionSensor;
  var globalSensors_11 = globalSensors.GeolocationSensor;
  var globalSensors_12 = globalSensors.NavigatorSensor;

  exports.default = globalSensors;
  exports.serializeState = globalSensors_1;
  exports.serializeBatteryManager = globalSensors_2;
  exports.serializePosition = globalSensors_3;
  exports.serializeDeviceOrientationEvent = globalSensors_4;
  exports.serializeDeviceMotionEvent = globalSensors_5;
  exports.serializeNavigator = globalSensors_6;
  exports.GlobalSensor = globalSensors_7;
  exports.BatterySensor = globalSensors_8;
  exports.OrientationSensor = globalSensors_9;
  exports.MotionSensor = globalSensors_10;
  exports.GeolocationSensor = globalSensors_11;
  exports.NavigatorSensor = globalSensors_12;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
