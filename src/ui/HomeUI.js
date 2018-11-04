import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import './homeUI.css';
import App from '../App';
const {Header, Sider, Content} = Layout;


class HomeUI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        console.log(this.state.collapsed);
        this.setState({
                collapsed: !this.state.collapsed,
            }
        );
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo">
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                            <Menu.Item key="1">
                                <Icon type="user"/>
                                <span>我的订单</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera"/>
                                <span>我的消息</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload"/>
                                <span>登录</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                        <App/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default HomeUI;