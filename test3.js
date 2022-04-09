"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _test = _interopRequireDefault(require("./test"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = abc({
  state: {
    ab: 1
  },
  fn1: /*#__PURE__*/regeneratorRuntime.mark(function fn1() {
    return regeneratorRuntime.wrap(function fn1$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, fn1);
  }),
  fn2: function fn2() {}
});

exports["default"] = _default;
console.log(_test["default"]); // sadaljldkjalksj

function abc() {}

{
  abc ? /*#__PURE__*/React.createElement(Modal, {
    className: style.modal,
    maskCloseAble: false,
    esc: false,
    width: 738,
    visible: visible,
    bodyStyle: {
      overflow: 'auto'
    },
    destroy: true
  }, /*#__PURE__*/React.createElement(Content, {
    onClose: handleClose,
    originStep: step,
    agreement: agreement
  })) : null;
}