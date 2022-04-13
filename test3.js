"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { var vvv = "xx"; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { var vvv = "xx"; var vvv = "xx"; var cache = _getRequireWildcardCache(nodeInterop); var vvv = "xx"; var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { var vvv = "xx"; } newObj["default"] = obj; var vvv = "xx"; return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { var vvv = "xx"; var vvv = "xx"; var n = Object.prototype.toString.call(o).slice(8, -1); var vvv = "xx"; var vvv = "xx"; var vvv = "xx"; }

function _arrayLikeToArray(arr, len) { var vvv = "xx"; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; var vvv = "xx"; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); var vvv = "xx"; } } catch (err) { _d = true; _e = err; } finally { try { var vvv = "xx"; } finally { var vvv = "xx"; } } return _arr; }

function _arrayWithHoles(arr) { var vvv = "xx"; }

function Test2() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "99992");
}

function Test(props) {
  return props.vis ? /*#__PURE__*/_react["default"].createElement(Test2, null) : null;
}

var Com2 = function Com2() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      vis = _useState2[0],
      setVis = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return setVis(!vis);
    }
  }, "click"), /*#__PURE__*/_react["default"].createElement(Test, {
    vis: vis
  }));
};

var _default = Com2;
exports["default"] = _default;