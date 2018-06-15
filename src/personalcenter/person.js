import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router-dom';
import '../css/commons.css';
import '../css/grzx.css'
class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="outdiv">
                <div className="head-top">
                    <span className="bt">个人中心</span>
                    <div className="div-1">
                        <img src={require('../img/fanhui-ioc.png')}/>
                        <span>返回</span>
                    </div>
                    <span className="dl-button">张三</span>
                </div> 
                <div className="body-conter" style={{bottom:'60px',backgroundColor: '#fff'}}>
                
                    <div className="zjdl">
                        <img src={require('../img/baitou-ico.png')} />
                    </div>
                    <div className="mz">吴小花 欢迎回来</div>
                    <div className="mz" style={{fontSize: '0.6em',color: '#999999'}}>
                        最后登录时间：2018.5.30     最后更新时间：2018.5.30
                    </div>
                    <img className="beij" src={require('../img/320.png')}></img>
                    <div className="grnr">
                        <ul>
                            <li>
                                <img src={require('../img/gr-ioc/yulan.png')} />
                                <span><a href="6-简历预览.html">简历预览</a></span>
                                <img className="lie" src={require('../img/qianjin-ioc.png')} />
                                <div style={{clear: 'both'}}></div>
                            </li>
                            <li>
                                <img src={require('../img/gr-ioc/bianji.png')} />
                                <span><a href="#">简历编辑</a></span>
                                <img className="lie" src={require('../img/qianjin-ioc.png')} />
                                <div style={{clear:'both'}}></div>
                            </li>
                            <li>
                                <img src={require('../img/gr-ioc/toudi-3.png')}/>
                                <span><a href="3-投递记录.html">投递记录</a></span>
                                <img className="lie" src={require('../img/qianjin-ioc.png')} />
                                <div style={{clear: 'both'}}></div>
                            </li>
                            <li>
                                <img src={require('../img/gr-ioc/shouc.png')}/>
                                <span><a href="7-职位收藏.html">职位收藏夹</a></span>
                                <img className="lie" src={require('../img/qianjin-ioc.png')} />
                                <div style={{clear: 'both'}}></div>
                            </li>
                            <li>
                                <img src={require('../img/gr-ioc/qiugai.png')}/>
                                <span><a href="5-修改密码.html">修改密码</a></span>
                                <img className="lie" src={require('../img/qianjin-ioc.png')} />
                                <div style={{clear: 'both'}}></div>
                            </li>
                            <li>
                                <img src={require('../img/gr-ioc/tuichu.png')} />
                                <span><a href="1-登录页面.html">退出登录</a></span>
                                <img className="lie" src={require('../img/qianjin-ioc.png')} />
                                <div style={{clear: 'both'}}></div>
                            </li>
                        </ul>
                    </div>
                </div>	
            </div>
         )
    }
}
 
export default Person;