'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isDefaultTextModeEnabled = exports.initDefaultTexts = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pubcoreHttp = require('pubcore-http');

var _pubcoreHttp2 = _interopRequireDefault(_pubcoreHttp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
	defaultTextsUri: '',
	defaultTexts: {}
};

var initDefaultTexts = exports.initDefaultTexts = function initDefaultTexts(c) {
	config = _extends({}, config, c);

	console.log(config.defaultTextsUri);

	(0, _pubcoreHttp2.default)(config.defaultTextsUri, null, 'GET').then(function (response) {
		config.defaultTexts = JSON.parse(response);

		console.log('config.defaultTexts');
		console.log(config.defaultTexts);
	}, function (error) {
		console.log('error');
		console.log(error);
	});
};

var isDefaultTextModeEnabled = exports.isDefaultTextModeEnabled = function isDefaultTextModeEnabled() {
	return config.defaultTextsUri != '';
};

exports.default = function (key, replacement, defaultText) {
	if (isDefaultTextModeEnabled()) {
		if (!config.defaultTexts.required && !config.defaultTexts.optional) {
			throw 'defaultTexts doesnt contains require nor optional section';
		} else if (!config.defaultTexts.required[key] && !defaultText) {
			throw 'There is no default text for key ' + key;
		}
	}
};