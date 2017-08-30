/**
 *
 * @title 其它评分样式
 * @description character的使用
 *
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Rate from '../../src';

class Demo4 extends Component {
    render() {
        return (
            <ul style={{"listStyle":"none"}}>
                <li><Rate character="A"/></li>
                <li><Rate character="字"/></li>
                <li><Rate character={<Icon type="uf-bell" />}/></li>
                <li><Rate character={<Icon type="uf-heart" />}/></li>
            </ul>
        )
    }
}

export default Demo4;