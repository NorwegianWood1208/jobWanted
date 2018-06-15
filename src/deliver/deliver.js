import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router-dom';
import '../css/commons.css';
import '../css/tdjl.css';
import '../css/nav-tcc.css'
class Deliver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <div class="outdiv">
                    <div class="head-top"> 
                        <span class="bt">投递记录</span>
                        <div class="div-1">
                            <img src="img/fanhui-ioc.png" />
                            <span>返回</span>
                        </div>
                        <img class="cd-button" src="img/iconfont-caidan.png"></img>
                    </div>
                    <div class="body-conter" style={{bottom:'60px'}}>
                        <ul>
                            <li>
                                <div class="fgxs"></div>
                            </li>
                            <li>
                                <div class="zwmc">app前段设计师app前段设计师</div>
                                <div class="sjtb">
                                    <span>7-31</span>
                                    <img src="img/qianjin-ioc.png" />
                                </div>
                            </li>
                            <li>
                                <div class="gsm">盖亚设计有限公司</div>
                                <img class="scioc" src="img/gr-ioc/shouc-hs.png" />
                            </li>
                            <li>
                                <div class="dq">江苏-南京</div>
                                <div class="xz">面议</div>
                            </li>
                            <li style={{width: '100%'}}>
                                <div class="fgx"></div>
                            </li>
                        </ul>
                    </div>
                </div>
         )
    }
}
 
export default Deliver;