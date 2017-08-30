/**
 *
 * @title 评分加显示文案
 * @description onChange和onHoverChange的使用
 *
 */

import React, { Component } from 'react';
import Rate from '../../src';

class Demo3 extends Component {
    constructor(props){
        super(props);
        this.state={
            value:3
        };
        this.handleChange=this.handleChange.bind(this);
        this.onHoverChange=this.onHoverChange.bind(this);
    }
    handleChange(value){
        this.setState({
            value:value
        })
    }
    onHoverChange(value){
        this.setState({
            value:value
        })
    }
    render() {
        return (
            <div>
                <Rate onChange={this.handleChange} count={8} onHoverChange={this.onHoverChange} />
                <span>{this.state.value}</span>
            </div>
        )
    }
}

export default Demo3;