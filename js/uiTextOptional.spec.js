"use strict";

var _chai = require("chai");

var _uiText = require("./uiText");

var _logMissingTextkey = require("./logMissingTextkey");

describe('uiTextOptional ' + new Date(), function () {
  it('is available', function () {
    (0, _chai.expect)(_uiText.uiTextOptional).to.not.be["null"];
  });
  it('never return key, if not exits in text-object', function () {
    (0, _chai.expect)((0, _uiText.uiTextOptional)({}, 'K')).to.equal('');
  });
  it('return text with replaced placeholder, if data is given', function () {
    (0, _chai.expect)((0, _uiText.uiTextOptional)({
      K: 'some text with replacement {count}'
    }, 'K', {
      count: 123
    })).to.equal('some text with replacement 123');
  });
  it('return default-text with replaced placeholder, if given', function () {
    (0, _chai.expect)((0, _uiText.uiTextOptional)({}, 'K', 'some text with replacement {count}', {
      count: 123
    })).to.equal('some text with replacement 123');
  });
  it('does not return default-text, if textdata and default-text is given', function () {
    (0, _chai.expect)((0, _uiText.uiTextOptional)({
      K: 'some text {count}'
    }, 'K', 'some default text', {
      count: 123
    })).to.equal('some text 123');
  });
  it('does not log if text is undefined for given key', function () {
    (0, _chai.expect)((0, _logMissingTextkey.isMissingTextkey)('K')).to.be["false"];
  });
});