'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initLogMissingTextkey = exports.isMissingTextkey = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pubcoreHttp = require('pubcore-http');

var _pubcoreHttp2 = _interopRequireDefault(_pubcoreHttp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var missingTextkeys = {},
    missingTextkeyData = {},
    missingTextkeyTimer,
    config = {
	postUri: '',
	timeout: 3000
},
    requestCount = 0;

var postStatus = function postStatus() {
	return (0, _pubcoreHttp2.default)(config.postUri, missingTextkeyData).then(function () {
		missingTextkeyData = {};
		missingTextkeys = {};
	});
};

var startPostMissingTextkeyTimer = function startPostMissingTextkeyTimer() {
	if (missingTextkeyTimer) {
		clearTimeout(missingTextkeyTimer);
	}
	missingTextkeyTimer = setTimeout(postStatus, config.timeout);
};

var isMissingTextkey = exports.isMissingTextkey = function isMissingTextkey(key) {
	return missingTextkeys[key] || false;
};

var initLogMissingTextkey = exports.initLogMissingTextkey = function initLogMissingTextkey(c) {
	config = _extends({}, config, c);
};

exports.default = function (key, replacement, defaultText) {
	if (!missingTextkeys[key]) {
		missingTextkeys[key] = true;
		missingTextkeyData[key] = (defaultText || key) + (replacement ? ' ' + JSON.stringify(replacement) : '');

		if (config.postUri && requestCount < 1) {
			requestCount++;
			if (config.timeout === 0) {
				postStatus();
			} else if (config.timeout > 0) {
				startPostMissingTextkeyTimer();
			}
		}
	}
};