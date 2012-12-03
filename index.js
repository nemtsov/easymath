var parser = require('./easymath');

module.exports = new EasyMath();

function EasyMath() {
  this._parser = parser;
}

EasyMath.prototype.parse = function (str) {
  return this._parser.parse(str);
};

EasyMath.prototype.evaluate = function (str) {
  return this._parser.parse(str).evaluate();
};
