(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
      ? define(["exports"], factory)
      : factory((global.allsensors = {}));
})(this, function(exports) {
  "use strict";

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
    return value != null && (type == "object" || type == "function");
  }

  var isObject_1 = isObject;

  var isObject$1 = /*#__PURE__*/ Object.freeze({
    default: isObject_1,
    __moduleExports: isObject_1
  });

  var commonjsGlobal =
    typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
        ? global
        : typeof self !== "undefined"
          ? self
          : {};

  /** Detect free variable `global` from Node.js. */
  var freeGlobal =
    typeof commonjsGlobal == "object" &&
    commonjsGlobal &&
    commonjsGlobal.Object === Object &&
    commonjsGlobal;

  var _freeGlobal = freeGlobal;

  var _freeGlobal$1 = /*#__PURE__*/ Object.freeze({
    default: _freeGlobal,
    __moduleExports: _freeGlobal
  });

  var freeGlobal$1 = (_freeGlobal$1 && _freeGlobal) || _freeGlobal$1;

  /** Detect free variable `self`. */
  var freeSelf =
    typeof self == "object" && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal$1 || freeSelf || Function("return this")();

  var _root = root;

  var _root$1 = /*#__PURE__*/ Object.freeze({
    default: _root,
    __moduleExports: _root
  });

  var root$1 = (_root$1 && _root) || _root$1;

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
    return root$1.Date.now();
  };

  var now_1 = now;

  var now$1 = /*#__PURE__*/ Object.freeze({
    default: now_1,
    __moduleExports: now_1
  });

  /** Built-in value references. */
  var Symbol = root$1.Symbol;

  var _Symbol = Symbol;

  var _Symbol$1 = /*#__PURE__*/ Object.freeze({
    default: _Symbol,
    __moduleExports: _Symbol
  });

  var Symbol$1 = (_Symbol$1 && _Symbol) || _Symbol$1;

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
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

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

  var _getRawTag$1 = /*#__PURE__*/ Object.freeze({
    default: _getRawTag,
    __moduleExports: _getRawTag
  });

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

  var _objectToString$1 = /*#__PURE__*/ Object.freeze({
    default: _objectToString,
    __moduleExports: _objectToString
  });

  var getRawTag$1 = (_getRawTag$1 && _getRawTag) || _getRawTag$1;

  var objectToString$1 =
    (_objectToString$1 && _objectToString) || _objectToString$1;

  /** `Object#toString` result references. */
  var nullTag = "[object Null]",
    undefinedTag = "[object Undefined]";

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

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
    return symToStringTag$1 && symToStringTag$1 in Object(value)
      ? getRawTag$1(value)
      : objectToString$1(value);
  }

  var _baseGetTag = baseGetTag;

  var _baseGetTag$1 = /*#__PURE__*/ Object.freeze({
    default: _baseGetTag,
    __moduleExports: _baseGetTag
  });

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
    return value != null && typeof value == "object";
  }

  var isObjectLike_1 = isObjectLike;

  var isObjectLike$1 = /*#__PURE__*/ Object.freeze({
    default: isObjectLike_1,
    __moduleExports: isObjectLike_1
  });

  var baseGetTag$1 = (_baseGetTag$1 && _baseGetTag) || _baseGetTag$1;

  var isObjectLike$2 = (isObjectLike$1 && isObjectLike_1) || isObjectLike$1;

  /** `Object#toString` result references. */
  var symbolTag = "[object Symbol]";

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
    return (
      typeof value == "symbol" ||
      (isObjectLike$2(value) && baseGetTag$1(value) == symbolTag)
    );
  }

  var isSymbol_1 = isSymbol;

  var isSymbol$1 = /*#__PURE__*/ Object.freeze({
    default: isSymbol_1,
    __moduleExports: isSymbol_1
  });

  var isObject$2 = (isObject$1 && isObject_1) || isObject$1;

  var isSymbol$2 = (isSymbol$1 && isSymbol_1) || isSymbol$1;

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
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol$2(value)) {
      return NAN;
    }
    if (isObject$2(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject$2(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, "");
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value)
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : reIsBadHex.test(value)
        ? NAN
        : +value;
  }

  var toNumber_1 = toNumber;

  var toNumber$1 = /*#__PURE__*/ Object.freeze({
    default: toNumber_1,
    __moduleExports: toNumber_1
  });

  var now$2 = (now$1 && now_1) || now$1;

  var toNumber$2 = (toNumber$1 && toNumber_1) || toNumber$1;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = "Expected a function";

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

    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber$2(wait) || 0;
    if (isObject$2(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing
        ? nativeMax(toNumber$2(options.maxWait) || 0, wait)
        : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
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
      return (
        lastCallTime === undefined ||
        timeSinceLastCall >= wait ||
        timeSinceLastCall < 0 ||
        (maxing && timeSinceLastInvoke >= maxWait)
      );
    }

    function timerExpired() {
      var time = now$2();
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
      return timerId === undefined ? result : trailingEdge(now$2());
    }

    function debounced() {
      var time = now$2(),
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

  var debounce$1 = /*#__PURE__*/ Object.freeze({
    default: debounce_1,
    __moduleExports: debounce_1
  });

  var debounce$2 = (debounce$1 && debounce_1) || debounce$1;

  /** Error message constants. */
  var FUNC_ERROR_TEXT$1 = "Expected a function";

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

    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    if (isObject$2(options)) {
      leading = "leading" in options ? !!options.leading : leading;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    return debounce$2(func, wait, {
      leading: leading,
      maxWait: wait,
      trailing: trailing
    });
  }

  var throttle_1 = throttle;

  var throttle$1 = /*#__PURE__*/ Object.freeze({
    default: throttle_1,
    __moduleExports: throttle_1
  });

  var throttle$2 = (throttle$1 && throttle_1) || throttle$1;

  class SensorMonitor {
    constructor(opts) {
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
          : throttle$2.bind(this, undefined, this.queryPeriod);

      return this;
    }

    startListening() {}
  }

  class GlobalSensorMonitor extends SensorMonitor {
    constructor() {
      super();
    }

    startListening() {
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
      return this;
    }
  }

  class BatteryMonitor extends SensorMonitor {
    constructor(args) {
      super(args);
    }

    startListening() {
      if (window.navigator.getBattery) {
        window.navigator.getBattery().then(battery => {
          debugger;
          this.state.battery = battery;
          battery.addEventListener("chargingchange", () => {
            this.state.battery = battery;
          });
        });
      }
      return this;
    }
  }

  class GeolocationMonitor extends SensorMonitor {
    constructor(args) {
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
      return this;
    }
  }

  class DeviceOrientationMonitor extends SensorMonitor {
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

  class DeviceMotionMonitor extends SensorMonitor {
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
      return this;
    }
  }

  class DeviceLightMonitor extends SensorMonitor {
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
      return this;
    }
  }

  class DeviceProximityMonitor extends SensorMonitor {
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
      return this;
    }
  }

  class DeviceAmbientLightMonitor extends SensorMonitor {
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
          console.error(
            "No light sensor",
            event.error.name,
            event.error.message
          );
        };
        sensor.start();
      }
      return this;
    }
  }

  class DeviceNavigatorMonitor extends SensorMonitor {
    constructor(args) {
      super(args);
    }

    startListening() {
      setTimeout(() => {
        this.state.navigator = navigator;
      }, this.queryPeriod);
      return this;
    }
  }

  var monitors = {
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
  var monitors_1 = monitors.GlobalSensorMonitor;
  var monitors_2 = monitors.BatteryMonitor;
  var monitors_3 = monitors.GeolocationMonitor;
  var monitors_4 = monitors.DeviceOrientationMonitor;
  var monitors_5 = monitors.DeviceMotionMonitor;
  var monitors_6 = monitors.DeviceLightMonitor;
  var monitors_7 = monitors.DeviceProximityMonitor;
  var monitors_8 = monitors.DeviceAmbientLightMonitor;
  var monitors_9 = monitors.DeviceNavigatorMonitor;

  var monitors$1 = /*#__PURE__*/ Object.freeze({
    default: monitors,
    __moduleExports: monitors,
    GlobalSensorMonitor: monitors_1,
    BatteryMonitor: monitors_2,
    GeolocationMonitor: monitors_3,
    DeviceOrientationMonitor: monitors_4,
    DeviceMotionMonitor: monitors_5,
    DeviceLightMonitor: monitors_6,
    DeviceProximityMonitor: monitors_7,
    DeviceAmbientLightMonitor: monitors_8,
    DeviceNavigatorMonitor: monitors_9
  });

  function serializeState(state) {
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

    return serialized;
  }

  function serializeDeviceMotionEvent({
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
    };
  }

  function serializeNavigator({
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
    };
  }

  function serializeBatteryManager({
    charging,
    chargingTime,
    dischargingTime,
    level
  }) {
    return { charging, chargingTime, dischargingTime, level };
  }

  function serializePosition({ coords }) {
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
    };
  }

  function serializeDeviceOrientationEvent({
    alpha,
    beta,
    gamma,
    absolute,
    bubbles,
    timeStamp
  }) {
    return { alpha, beta, gamma, absolute, bubbles, timeStamp };
  }

  var serialziers = {
    serializeState,
    serializeDeviceMotionEvent,
    serializeNavigator,
    serializeBatteryManager,
    serializePosition,
    serializeDeviceOrientationEvent
  };
  var serialziers_1 = serialziers.serializeState;
  var serialziers_2 = serialziers.serializeDeviceMotionEvent;
  var serialziers_3 = serialziers.serializeNavigator;
  var serialziers_4 = serialziers.serializeBatteryManager;
  var serialziers_5 = serialziers.serializePosition;
  var serialziers_6 = serialziers.serializeDeviceOrientationEvent;

  var serialziers$1 = /*#__PURE__*/ Object.freeze({
    default: serialziers,
    __moduleExports: serialziers,
    serializeState: serialziers_1,
    serializeDeviceMotionEvent: serialziers_2,
    serializeNavigator: serialziers_3,
    serializeBatteryManager: serialziers_4,
    serializePosition: serialziers_5,
    serializeDeviceOrientationEvent: serialziers_6
  });

  var require$$0 = (monitors$1 && monitors) || monitors$1;

  var require$$1 = (serialziers$1 && serialziers) || serialziers$1;

  const {
    BatteryMonitor: BatteryMonitor$1,
    GlobalSensorMonitor: GlobalSensorMonitor$1
  } = require$$0;
  const {
    serializeBatteryManager: serializeBatteryManager$1,
    serializeDeviceMotionEvent: serializeDeviceMotionEvent$1,
    serializeDeviceOrientationEvent: serializeDeviceOrientationEvent$1,
    serializeNavigator: serializeNavigator$1,
    serializePosition: serializePosition$1,
    serializeState: serializeState$1
  } = require$$1;

  class Sensor {
    constructor(opts, monitorClass, serializeFn) {
      if (opts && opts.queryPeriod) {
        this.queryPeriod = opts.queryPeriod;
      } else {
        this.queryPeriod = 0;
      }

      const monitor = new monitorClass({
        queryPeriod: this.queryPeriod
      }).startListening();

      this.serialize = serializeFn.bind(this);

      this.listeners = [];
      setInterval(() => {
        const state = monitor.state;
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

  class GlobalSensor extends Sensor {
    constructor(opts) {
      super(opts, GlobalSensorMonitor$1, serializeState$1);
    }
  }

  class BatteryMonitorSensor extends Sensor {
    constructor(opts) {
      super(opts, BatteryMonitor$1, serializeBatteryManager$1);
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
    BatteryMonitorSensor
  };
  var globalSensors_1 = globalSensors.serializeState;
  var globalSensors_2 = globalSensors.serializeBatteryManager;
  var globalSensors_3 = globalSensors.serializePosition;
  var globalSensors_4 = globalSensors.serializeDeviceOrientationEvent;
  var globalSensors_5 = globalSensors.serializeDeviceMotionEvent;
  var globalSensors_6 = globalSensors.serializeNavigator;
  var globalSensors_7 = globalSensors.GlobalSensor;
  var globalSensors_8 = globalSensors.BatteryMonitorSensor;

  exports.default = globalSensors;
  exports.serializeState = globalSensors_1;
  exports.serializeBatteryManager = globalSensors_2;
  exports.serializePosition = globalSensors_3;
  exports.serializeDeviceOrientationEvent = globalSensors_4;
  exports.serializeDeviceMotionEvent = globalSensors_5;
  exports.serializeNavigator = globalSensors_6;
  exports.GlobalSensor = globalSensors_7;
  exports.BatteryMonitorSensor = globalSensors_8;

  Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=index.js.map
