import React, { Component, createElement } from 'react'
import bg from './hdu.png'
import css from './index.module.css'
import NewYear from '../NewYear'
import Fireworks from '../Fireworks'
import Couplet from '../Couplet'
import snow from '../Snow/index.js'
export default class index extends Component {
    componentDidMount(){
        let script = document.createElement('script')
        script.type = 'text/javascript';
        script.async = true;
        script.src = snow;
        
        document.head.appendChild(script); 
        let canvas=document.createElement('canvas')
        canvas.id = 'sky'
        document.body.appendChild(canvas)  
    }
    render() {

        let bgGround = {
            display: 'inline-block',
            height: '100%',
            width: '100%',
            backgroundImage: 'url(' + bg + ')'
        }
        return (
            
            <div className = "App" style={bgGround}>
            
            <canvas id='sky' ></canvas>
                <div className={css.happy}>Happy new year</div>
                
                <NewYear />
                <Fireworks />
                <Couplet />
            </div>
        )
    }
}
