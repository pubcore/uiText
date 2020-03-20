"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _chai = require("chai");

var _fakexmlhttprequest = _interopRequireDefault(require("fakexmlhttprequest"));

var _uiText = _interopRequireWildcard(require("./uiText"));

var _logMissingTextkey = require("./logMissingTextkey");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var T = {
  foo: 'bar'
};
var requests = [];

global.XMLHttpRequest = function () {
  var r = new _fakexmlhttprequest["default"](arguments);
  requests.push(r);
  return r;
};

describe('uiText, ' + new Date(), function () {
  beforeEach(function () {
    requests = [];
  });
  it('logs text-keys which did not exist', function () {
    (0, _uiText["default"])(T, 'thisKeyDoesNotExist');
    (0, _chai.expect)((0, _logMissingTextkey.isMissingTextkey)('thisKeyDoesNotExist')).to.be["true"];
  });
  it('returns text of type string', function () {
    (0, _chai.expect)((0, _uiText["default"])({
      k: ''
    }, 'k')).to.equal('');
    (0, _chai.expect)((0, _uiText["default"])({
      k: 1
    }, 'k')).to.equal('1');
    (0, _chai.expect)((0, _uiText["default"])({
      k: 0
    }, 'k')).to.equal('0');
    (0, _chai.expect)((0, _uiText["default"])({
      k: null
    }, 'k')).to.equal('null');
  });
  it('returns text with replaced replacements', function () {
    (0, _chai.expect)((0, _uiText["default"])({
      k: 'Text with replacement {count}.'
    }, 'k', {
      count: 5
    })).to.equal('Text with replacement 5.');
  });
  it('must return given default text, if text is undefined', function () {
    (0, _chai.expect)((0, _uiText["default"])({}, 'k', 'a default text')).to.equal('a default text');
  });
  it('must return given default text with replaced replacement', function () {
    (0, _chai.expect)((0, _uiText["default"])({}, 'k', 'a default text with replacement {count}.', {
      count: 123
    })).to.match(/123/);
  });
  it('must return text with replaced replacements, in spite of given default text', function () {
    (0, _chai.expect)((0, _uiText["default"])({
      k: 'a text with replacement {count}.'
    }, 'k', 'a default text {count}', {
      count: 5
    })).to.equal('a text with replacement 5.');
  });
  it('http post missing textkey data, if corresponding uri is given', function () {
    (0, _uiText.initLogMissingTextkey)({
      postUri: 'https://xyz.com/',
      timeout: 0
    });
    (0, _uiText["default"])({}, 'aKey', 'a default text {count}', {
      count: 5
    });
    (0, _chai.expect)(requests.length).to.equal(1);
    (0, _chai.expect)(JSON.parse(requests[0].requestBody).aKey).to.equal('a default text {count} {"count":5}');
  });
});