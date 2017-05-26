'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcRate = require('rc-rate');

var _rcRate2 = _interopRequireDefault(_rcRate);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    count: _react.PropTypes.number,
    value: _react.PropTypes.number,
    defaultValue: _react.PropTypes.number,
    onChange: _react.PropTypes.func,
    onHoverChange: _react.PropTypes.func,
    allowHalf: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object

};

var defaultProps = {
    count: 5,
    defaultValue: 0,
    value: 0,
    onChange: function onChange() {},
    onHoverChange: function onHoverChange() {},
    allowHalf: false,
    disabled: false,
    character: _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-star' }),
    className: '',
    style: {},
    clsPrefix: 'u-rate'
};

var Rate = function (_Component) {
    _inherits(Rate, _Component);

    function Rate() {
        _classCallCheck(this, Rate);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Rate.prototype.render = function render() {
        var _props = this.props,
            count = _props.count,
            value = _props.value,
            defaultValue = _props.defaultValue,
            onChange = _props.onChange,
            clsPrefix = _props.clsPrefix,
            onHoverChange = _props.onHoverChange,
            allowHalf = _props.allowHalf,
            disabled = _props.disabled,
            character = _props.character,
            className = _props.className,
            style = _props.style;

        return _react2["default"].createElement(
            'span',
            { className: 'u-Rate' },
            _react2["default"].createElement(_rcRate2["default"], { prefixCls: clsPrefix, count: count, value: value, defaultValue: defaultValue, onChange: onChange,
                onHoverChange: onHoverChange, allowHalf: allowHalf, disabled: disabled, character: character,
                className: className, style: style })
        );
    };

    return Rate;
}(_react.Component);

;
Rate.propTypes = propTypes;
Rate.defaultProps = defaultProps;
exports["default"] = Rate;
module.exports = exports['default'];