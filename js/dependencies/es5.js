if (!Array.isArray) {
	Array.isArray = function(obj) {
		return Object.prototype.toString.call(obj) == "[object Array]";
	};
}
if (!Array.prototype.forEach) {
	Array.prototype.forEach = function(block, thisObject) {
		var len = this.length >>> 0;
		for (var i = 0; i < len; i++) {
			if (i in this) {
				block.call(thisObject, this[i], i, this);
			}
		}
	};
}
if (!Array.prototype.map) {
	Array.prototype.map = function(fun /*, thisp*/) {
		var len = this.length >>> 0;
		if (typeof fun != "function")
			throw new TypeError();

		var res = new Array(len);
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in this)
				res[i] = fun.call(thisp, this[i], i, this);
		}

		return res;
	};
}
if (!Array.prototype.filter) {
	Array.prototype.filter = function(block /*, thisp */) {
		var values = [];
		var thisp = arguments[1];
		for (var i = 0; i < this.length; i++)
			if (block.call(thisp, this[i]))
				values.push(this[i]);
		return values;
	};
}
if (!Array.prototype.every) {
	Array.prototype.every = function(block /*, thisp */) {
		var thisp = arguments[1];
		for (var i = 0; i < this.length; i++)
			if (!block.call(thisp, this[i]))
				return false;
		return true;
	};
}
if (!Array.prototype.some) {
	Array.prototype.some = function(block /*, thisp */) {
		var thisp = arguments[1];
		for (var i = 0; i < this.length; i++)
			if (block.call(thisp, this[i]))
				return true;
		return false;
	};
}
if (!Array.prototype.reduce) {
	Array.prototype.reduce = function(fun /*, initial*/) {
		var len = this.length >>> 0;
		if (typeof fun != "function")
			throw new TypeError();
		if (len == 0 && arguments.length == 1)
			throw new TypeError();

		var i = 0;
		if (arguments.length >= 2) {
			var rv = arguments[1];
		} else {
			do {
				if (i in this) {
					rv = this[i++];
					break;
				}
				if (++i >= len)
					throw new TypeError();
			} while (true);
		}

		for (; i < len; i++) {
			if (i in this)
				rv = fun.call(null, rv, this[i], i, this);
		}

		return rv;
	};
}
if (!Array.prototype.reduceRight) {
	Array.prototype.reduceRight = function(fun /*, initial*/) {
		var len = this.length >>> 0;
		if (typeof fun != "function")
			throw new TypeError();
		if (len == 0 && arguments.length == 1)
			throw new TypeError();

		var i = len - 1;
		if (arguments.length >= 2) {
			var rv = arguments[1];
		} else {
			do {
				if (i in this) {
					rv = this[i--];
					break;
				}
				if (--i < 0)
					throw new TypeError();
			} while (true);
		}

		for (; i >= 0; i--) {
			if (i in this)
				rv = fun.call(null, rv, this[i], i, this);
		}

		return rv;
	};
}
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(value /*, fromIndex */) {
		var length = this.length;
		if (!length)
			return -1;
		var i = arguments[1] || 0;
		if (i >= length)
			return -1;
		if (i < 0)
			i += length;
		for (; i < length; i++) {
			if (!Object.prototype.hasOwnProperty.call(this, i))
				continue;
			if (value === this[i])
				return i;
		}
		return -1;
	};
}
if (!Array.prototype.lastIndexOf) {
	Array.prototype.lastIndexOf = function(value /*, fromIndex */) {
		var length = this.length;
		if (!length)
			return -1;
		var i = arguments[1] || length;
		if (i < 0)
			i += length;
		i = Math.min(i, length - 1);
		for (; i >= 0; i--) {
			if (!Object.prototype.hasOwnProperty.call(this, i))
				continue;
			if (value === this[i])
				return i;
		}
		return -1;
	};
}
if (!Object.getPrototypeOf) {
	Object.getPrototypeOf = function(object) {
		return object.__proto__;
	};
}
if (!Object.getOwnPropertyDescriptor) {
	Object.getOwnPropertyDescriptor = function(object) {
		return {}; // XXX
	};
}
if (!Object.getOwnPropertyNames) {
	Object.getOwnPropertyNames = function(object) {
		return Object.keys(object);
	};
}
if (!Object.create) {
	Object.create = function(prototype, properties) {
		if (typeof prototype != "object" || prototype === null)
			throw new TypeError("typeof prototype[" + (typeof prototype) + "] != 'object'");
		function Type() {
		}
		;
		Type.prototype = prototype;
		var object = new Type();
		if (typeof properties !== "undefined")
			Object.defineProperties(object, properties);
		return object;
	};
}
if (!Object.defineProperty) {
	Object.defineProperty = function(object, property, descriptor) {
		var has = Object.prototype.hasOwnProperty;
		if (typeof descriptor == "object" && object.__defineGetter__) {
			if (has.call(descriptor, "value")) {
				if (!object.__lookupGetter__(property) && !object.__lookupSetter__(property))
					object[property] = descriptor.value;
				if (has.call(descriptor, "get") || has.call(descriptor, "set"))
					throw new TypeError("Object doesn't support this action");
			}
			/*
			if ( // can't implement these features; allow false but not true
			   !(has.call(descriptor, "writable") ? descriptor.writable : true) ||
			   !(has.call(descriptor, "enumerable") ? descriptor.enumerable : true) ||
			   !(has.call(descriptor, "configurable") ? descriptor.configurable : true)
			)
			   throw new RangeError(
			       "This implementation of Object.defineProperty does not " +
			       "support configurable, enumerable, or writable."
			   );
			 */
			else if (typeof descriptor.get == "function")
				object.__defineGetter__(property, descriptor.get);
			if (typeof descriptor.set == "function")
				object.__defineSetter__(property, descriptor.set);
		}
		return object;
	};
}
if (!Object.defineProperties) {
	Object.defineProperties = function(object, properties) {
		for ( var property in properties) {
			if (Object.prototype.hasOwnProperty.call(properties, property))
				Object.defineProperty(object, property, properties[property]);
		}
		return object;
	};
}
if (!Object.seal) {
	Object.seal = function(object) {
		return object;
	};
}
if (!Object.freeze) {
	Object.freeze = function(object) {
		return object;
	};
}
if (!Object.preventExtensions) {
	Object.preventExtensions = function(object) {
		return object;
	};
}
if (!Object.isSealed) {
	Object.isSealed = function(object) {
		return false;
	};
}
if (!Object.isFrozen) {
	Object.isFrozen = function(object) {
		return false;
	};
}
if (!Object.isExtensible) {
	Object.isExtensible = function(object) {
		return true;
	};
}
if (!Object.keys) {
	Object.keys = function(object) {
		var keys = [];
		for ( var name in object) {
			if (Object.prototype.hasOwnProperty.call(object, name)) {
				keys.push(name);
			}
		}
		return keys;
	};
}
if (!Date.prototype.toISOString) {
	Date.prototype.toISOString = function() {
		return (this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + "T" + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds() + "Z");
	}
}
if (!Date.now) {
	Date.now = function() {
		return new Date().getTime();
	};
}
if (!Date.prototype.toJSON) {
	Date.prototype.toJSON = function(key) {
		if (typeof this.toISOString != "function")
			throw new TypeError();
		return this.toISOString();
	};
}

if (!Function.prototype.bind) {
	var slice = Array.prototype.slice;
	Function.prototype.bind = function(that) { // .length is 1
		var target = this;
		if (typeof target.apply != "function" || typeof target.call != "function")
			return new TypeError();
		var args = slice.call(arguments);
		var bound = function() {

			if (this instanceof bound) {
				var self = Object.create(target.prototype);
				target.apply(self, args.concat(slice.call(arguments)));
				return self;

			} else {
				return target.call.apply(target, args.concat(slice.call(arguments)));

			}

		};
		bound.bound = target;
		bound.boundTo = that;
		bound.boundArgs = args;
		bound.length = (typeof target == "function" ? Math.max(target.length - args.length, 0) : 0)
		return bound;
	};
}
if (!String.prototype.trim) {
	var trimBeginRegexp = /^\s\s*/;
	var trimEndRegexp = /\s\s*$/;
	String.prototype.trim = function() {
		return String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
	};
}