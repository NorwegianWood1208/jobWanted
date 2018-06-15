import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router-dom';
import '../css/denglv.css';
import '../css/commons.css';
class  Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="outdiv">
                <div className="head-top"> 
                    <span className="bt">注册</span>
                    <div className="div-1">
                        <img src={require('../img/fanhui-ioc.png')} />
                        <span>返回</span>
                    </div>
                </div>
                <div className="body-conter" style={{bottom:'60px'}}>
                    <div className="div-dl" style={{height: '10em'}}>
                        <ul>
                            <li className="yhm">
                                <img className="yhico" src={require('../img/font-yonghu.png')}/>
                                <input placeholder="请输入用户名称" name="" type="text"  />
                                <img className="qk" src={require('../img/font-quxiao.png')}/>
                                <div style={{clear: 'both'}}></div>
                            </li>
                            <li className="yhm" >
                                <img className="yhico" src={require('../img/iconfont-mima.png')}/>
                                <input placeholder="请输入密码" name="" type="password"  />
                                <img className="qk" src={require('../img/iconfont-chakan.png')}/>
                            </li>
                            <li className="yhm" style={{border: 'none'}}>
                                <img className="yhico" src={require('../img/iconfont-dengluyanzhengma.png')}/>
                                <input style= {{width: '40%'}} placeholder="短信验证码" name="" type="text"  />
                                <div className="yzmb">获取验证码</div>
                            </li>
                        </ul>
                    </div>
                    <div className="div-mmzd">
                        <ul>
                            
                            <li style={{height: '1.2em'}}>
                                <span style={{float: 'left'}} className="right-zddl">
                                <input  name="" type="checkbox"  />
                                同意
                            
                                </span>
                            </li>
                        </ul>
                        <div className="dl-button">免费注册</div>
                        <div className="fgx">------------------已有账号？------------------</div>
                        <div className="dl-button" style={{backgroundColor: '#fff', color:  '#5FB52C'}}>
                        <Link to="/login">立即登录</Link></div>
                    </div>
                </div>                                                                                                -->
            </div>
         )
    }
}
 
export default Register;