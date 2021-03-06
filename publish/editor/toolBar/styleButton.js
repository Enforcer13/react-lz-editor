'use strict';

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleButton = function (_React$Component) {
  _inherits(StyleButton, _React$Component);

  function StyleButton() {
    _classCallCheck(this, StyleButton);

    var _this = _possibleConstructorReturn(this, (StyleButton.__proto__ || Object.getPrototypeOf(StyleButton)).call(this));

    _this.onToggle = function (e) {
      e.preventDefault();
      _this.props.onToggle(_this.props.style);
    };
    return _this;
  }

  _createClass(StyleButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var className = 'RichEditor-styleButton';
      if (this.props.active) {
        className += ' RichEditor-activeButton ant-btn ant-btn-primary ant-btn-icon-only ';
      }

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'span',
          { className: className, onClick: this.onToggle, title: this.props.text },
          _react2.default.createElement(_icon2.default, { type: '' + this.props.label })
        ),
        function () {
          if (!!_this2.props.split) {
            return _react2.default.createElement(
              'span',
              { className: 'RichEditor-controls-split' },
              _this2.props.split
            );
          }
        }()
      );
    }
  }]);

  return StyleButton;
}(_react2.default.Component);

module.exports = StyleButton;