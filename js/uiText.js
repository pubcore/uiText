'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.uiTextOptional = exports.initLogMissingTextkey = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _logMissingTextkey = require('./logMissingTextkey');

Object.defineProperty(exports, 'initLogMissingTextkey', {
	enumerable: true,
	get: function get() {
		return _logMissingTextkey.initLogMissingTextkey;
	}
});

var _replace = require('./replace');

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (T, key, arg3, arg4) {
	return (0, _replace2.default)({
		text: T[key],
		defaultText: typeof arg3 === 'string' ? arg3 : '',
		replacement: (typeof arg3 === 'undefined' ? 'undefined' : _typeof(arg3)) === 'object' ? arg3 : arg4,
		key: key
	});
};

var uiTextOptional = exports.uiTextOptional = function uiTextOptional(T, key, arg3, arg4) {
	return (0, _replace2.default)({
		text: T[key] === undefined ? typeof arg3 === 'string' ? arg3 : '' : T[key],
		defaultText: '',
		replacement: (typeof arg3 === 'undefined' ? 'undefined' : _typeof(arg3)) === 'object' ? arg3 : arg4,
		key: key
	});
};