import React, { Component } from 'react'
import css from './index.module.css'
import heng from './heng.png'
import shu from './shu.png'
import bj from './bg.jpg'
import f1 from './f1.png'
import f2 from './f2.png'
import fu from './fu.png'
import quan from './quan.png'
import tu from './300.jpg'
import {Link,withRouter} from 'react-router-dom'
 class index extends Component {
     state={
         hengpi:[`金牛送福`,'财源广进','吉星高照','辞旧迎春',`万事如意`,'喜迎新春'],
         left:[`日出江花红胜火`,`一帆风顺吉星到`,`一帆风顺年年好`,`一干二净除旧习`,'一年好运随春到','一年四季春常在'],
         right:[`春来江水绿如蓝`,`万事如意福临门`,'万事如意步步高','五讲四美树新风','四季彩云滚滚来','万紫千红永开花'],
         h_id:0,
         l_id:0,
         r_id:0
     }
    handleClick = ()=>{
        this.props.history.replace('/')
    }
    handleState = ()=>{
        console.log(Math.floor(Math.random()*this.state.hengpi.length+0))
        this.setState(
            {h_id:Math.floor(Math.random()*this.state.hengpi.length+0),l_id:Math.floor(Math.random()*this.state.hengpi.length+0),
                r_id:Math.floor(Math.random()*this.state.hengpi.length+0)},
    )
            
    }
    render() {
        let {hengpi,h_id,l_id,r_id} = this.state
        let {left} = this.state
        let {right} = this.state
        
        return (
            <div className={css.div}>
                <canvas id='sky' ></canvas>
                <h1 className={css.hengpi}>{hengpi[h_id]}</h1>
                <h1 className={css.left}>{left[l_id]}</h1>
                <h1 className={css.right}>{right[r_id]}</h1>
                <img className = {css.bj} src={bj} />
                <img className = {css.heng} src={heng} /><br/>
                <img className = {css.shuLeft} src={shu} />
                <img className = {css.shuRight} src={shu} />
                <button onClick={this.handleClick}>
                <img className = {css.zIndex} src={f1} /></button>
                <img className = {css.zIndex2} src={f2} />
                {/* <img className = {css.fu} src={fu} width ='230' height='230'/>
                <img className = {css.quan} src={quan} width ='500' height='500'/> */}
                <button onClick={this.handleState}>
                <img className = {css.fu} src={tu} ></img></button>
                
            </div>
        )
    }
}
export default withRouter(index)
