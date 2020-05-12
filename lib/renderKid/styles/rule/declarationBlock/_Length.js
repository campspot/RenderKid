// Generated by CoffeeScript 1.12.7
var _Declaration, _Length,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

_Declaration = require('./_Declaration');

module.exports = _Length = (function(superClass) {
  extend(_Length, superClass);

  function _Length() {
    return _Length.__super__.constructor.apply(this, arguments);
  }

  _Length.prototype._set = function(val) {
    if (!/^[0-9]+$/.test(String(val))) {
      throw Error("`" + this.prop + "` only takes an integer for value");
    }
    return this.val = parseInt(val);
  };

  return _Length;

})(_Declaration);