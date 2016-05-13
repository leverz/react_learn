/**
 * Created by Lever on 16/5/12.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

class Banner extends Component{
    render(){
        return (
            <div className="banner">
                <div className="shadow"></div>
                <div className="banner-img banner-index">
                    <div className="content-text">
                        <h1>用科技开启金融服务行业的新时代</h1>
                        <div className="btn-lg">
                            <Link to="/applyUse">立即试用</Link>
                        </div>
                    </div>
                </div>
                <div className="red-ribbon">
                    <img src="http://static.sofund.com/matrix/images/red-ribbon.png" alt="人人金服MATRIX"/>
                </div>
            </div>
        )
    }
}
export class Header extends Component {
    render(){
        return (
            <div className="top-frame">
                <div className="top-float">
                    <header className="container">
                        <div className="pull-left logo">
                            <img src="http://static.sofund.com/matrix/images/sofund_new_logo.png" alt="人人金服MATRIX"/>
                        </div>
                        <div className="pull-right mt-md-10">
                            <ul className="nav">
                                <li><Link to="/index">首页</Link></li>
                                <li><Link to="/appInfo">产品介绍</Link></li>
                                <li><Link to="/incInfo">公司介绍</Link></li>
                                <li><Link to="/applyUse">申请试用</Link></li>
                            </ul>
                            <div className="pull-left login">
                                <a href="http://matrix.sofund.com">
                                    <img src="http://static.sofund.com/matrix/images/login_new.png" alt="人人金服MATRIX"/>
                                </a>
                            </div>
                        </div>
                    </header>
                </div>
                <Banner></Banner>
            </div>
        )
    }
}

// export {Header as default}