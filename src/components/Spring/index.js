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
export default class index extends Component {
    render() {
        let hengpi = `金牛送福`
        let left = `日出江花红胜火`
        let right = `春来江水绿如蓝`
        return (
            <div className={css.div}>
            
                <h1 className={css.hengpi}>{hengpi}</h1>
                <h1 className={css.left}>{left}</h1>
                <h1 className={css.right}>{right}</h1>
                <img className = {css.bj} src={bj} />
                <img className = {css.heng} src={heng} /><br/>
                <img className = {css.shuLeft} src={shu} />
                <img className = {css.shuRight} src={shu} />
                <img className = {css.zIndex} src={f1} />
                <img className = {css.zIndex2} src={f2} />
                {/* <img className = {css.fu} src={fu} width ='230' height='230'/>
                <img className = {css.quan} src={quan} width ='500' height='500'/> */}
                <img className = {css.fu} src={tu} ></img>
                <canvas id='sky' ></canvas>
            </div>
        )
    }
}
