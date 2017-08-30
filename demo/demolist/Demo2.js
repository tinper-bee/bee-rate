/**
 *
 * @title 支持选中半星
 * @description 将allowHalf设置为true即可
 *
 */

import React, { Component } from 'react';
import Rate from '../../src';

class Demo2 extends Component {
    render() {
        return (
            <Rate allowHalf={true}/>
        )
    }
}

export default Demo2;