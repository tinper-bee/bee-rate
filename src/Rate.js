import React, {Component, PropTypes} from 'react';
import Rates from 'rc-rate';
import Icon from 'bee-icon';
const propTypes = {
    count: PropTypes.number,
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    onChange: PropTypes.func,
    onHoverChange: PropTypes.func,
    allowHalf: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object
};
const defaultProps = {
    count: 5,
    defaultValue: 0,
    value:0,
    onChange: () => {

    },
    onHoverChange: () => {

    },
    allowHalf: false,
    disabled: false,
    character: <Icon type="uf-star" />,
    className: '',
    style: {}
};
class Rate extends Component {
    render() {
        const {count, value, defaultValue, onChange, onHoverChange, allowHalf, disabled, character, className, style} = this.props;
        return (
            <span className="u-Rate">
                <Rates count={count} value={value}  defaultValue={defaultValue} onChange={onChange}
                       onHoverChange={onHoverChange} allowHalf={allowHalf} disabled={disabled} character={character}
                       className={className} style={style}/>
            </span>
        )
    }
};
Rate.propTypes = propTypes;
Rate.defaultProps = defaultProps;
export default Rate;