/**
 * Created by Lever on 16/5/12.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';


export class Footer extends Component{
    render(){
        return (
            <div className="bottom-frame">
                <footer className="container">
                    <div className="pull-left contact-info">
                        <p>客服热线 ( 10:00-19:00 )</p>
                        <p className="big-title">400-818-1788</p>
                        <p className="mb50">sofund@renren-inc.com</p>
                        <ul>
                            <li>
                                <Link to="/incInfo">联系我们</Link>
                            </li>
                            <li>
                                <a href="http://www.renren-inc.com/zh/">人人公司</a>
                            </li>
                            <li>
                                <a href="http://matrix.sofund.com">MATRIX</a>
                            </li>
                            <li>
                                <a href="http://private.sofund.com">人人私募</a>
                            </li>
                        </ul>
                        <span>人人金服版权所有  京ICP备15040616</span>
                    </div>
                    <div className="pull-right">
                        <div className="wechat-code">
                            <img src="http://static.sofund.com/matrix/images/sofund_wechat_code.png" alt="人人金服MATRIX" className="wechat"/>
                            <p>人人金服官方公众号</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}