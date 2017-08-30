
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rate from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 默认Rate","code":"/**\n *\n * @title 默认Rate\n * @description 这是描述\n *\n */\n\nimport React, { Component } from 'react';\nimport Rate from 'tinper-bee';\n\nclass Demo1 extends Component {\n    render() {\n        return (\n            <Rate />\n        )\n    }\n}\n\n","desc":" 这是描述"},{"example":<Demo2 />,"title":" 支持选中半星","code":"/**\n *\n * @title 支持选中半星\n * @description 将allowHalf设置为true即可\n *\n */\n\nimport React, { Component } from 'react';\nimport Rate from 'tinper-bee';\n\nclass Demo2 extends Component {\n    render() {\n        return (\n            <Rate allowHalf={true}/>\n        )\n    }\n}\n\n","desc":" 将allowHalf设置为true即可"},{"example":<Demo3 />,"title":" 评分加显示文案","code":"/**\n *\n * @title 评分加显示文案\n * @description onChange和onHoverChange的使用\n *\n */\n\nimport React, { Component } from 'react';\nimport Rate from 'tinper-bee';\n\nclass Demo3 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            value:3\n        };\n        this.handleChange=this.handleChange.bind(this);\n        this.onHoverChange=this.onHoverChange.bind(this);\n    }\n    handleChange(value){\n        this.setState({\n            value:value\n        })\n    }\n    onHoverChange(value){\n        this.setState({\n            value:value\n        })\n    }\n    render() {\n        return (\n            <div>\n                <Rate onChange={this.handleChange} count={8} onHoverChange={this.onHoverChange} />\n                <span>{this.state.value}</span>\n            </div>\n        )\n    }\n}\n\n","desc":" onChange和onHoverChange的使用"},{"example":<Demo4 />,"title":" 其它评分样式","code":"/**\n *\n * @title 其它评分样式\n * @description character的使用\n *\n */\n\nimport React, { Component } from 'react';\nimport Icon from 'bee-icon';\nimport Rate from 'tinper-bee';\n\nclass Demo4 extends Component {\n    render() {\n        return (\n            <ul style={{\"listStyle\":\"none\"}}>\n                <li><Rate character=\"A\"/></li>\n                <li><Rate character=\"字\"/></li>\n                <li><Rate character={<Icon type=\"uf-bell\" />}/></li>\n                <li><Rate character={<Icon type=\"uf-heart\" />}/></li>\n            </ul>\n        )\n    }\n}\n\n","desc":" character的使用"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
