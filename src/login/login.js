import React from 'react';
import ReactDOM from 'react-dom';
import '../css/denglv.css';
import '../css/commons.css';
import {Router,Route,Link} from 'react-router-dom'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="outdiv">
                <div className="head-top">
                    <span className="bt">登录</span>
                    <div className="div-1">
                        <img src={require('../img/fanhui-ioc.png')} />
                        <span>返回</span>
                    </div>
                </div> 
                <div className="body-conter">
                    <div className="div-dl">
                        <ul>
                            <li className="yhm">
                                <img className="yhico" src={require('../img/font-yonghu.png')}/>
                                <input placeholder="请输入用户名称" name="" type="text"  />
                                <img className="qk" src={require('../img/font-quxiao.png')}/>
                                <div></div>
                            </li>
                            <li className="yhm">
                                <img className="yhico" src={require('../img/iconfont-mima.png')}/>
                                <input placeholder="请输入密码" name="" type="password"  />
                                <img className="qk" src={require('../img/iconfont-chakan.png')}/>
                            </li>
                        </ul>
                    </div>
                    <div className="div-mmzd">
                        <ul>
                            
                            <li>
                                <span className="left-wjmm">忘记密码</span>
                                <span className="right-zddl">
                                <input  name="" type="checkbox"  />
                                下次自动登录
                                </span>
                            </li>
                        </ul>
                        <div className="dl-button"><a href="4-个人中心.html">登录</a></div>
                        <div className="fgx">------------------还没有账号------------------</div>
                        <div className="dl-button" style={{backgroundColor: '#fff',color:'#000'}}>
                            <Link to="/register">免费注册</Link>
                            
                        </div>
                    </div>
                    
                </div> 
            </div>
         )
    }
}
 
export default Login;