import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div>
                
                <div className="speech-bubble">
                    <div className="mx-auto pt-3">
                        <img style={{width:50, height:50}} src="./img/keo.png" alt="" />
                    </div>
                </div>
                <img style={{width:250,height:200}} src="./img/player.png" alt="" />
                <div className="row">
                    <div className="col-4"> <button className="item">
                        <img style={{width:50, height:50}} src="./img/keo.png" alt="" /></button></div>
                    <div className="col-4"> <button className="item">
                        <img style={{width:50, height:50}} src="./img/bua.png" alt="" /></button></div>
                    <div className="col-4"> <button className="item">
                        <img style={{width:50, height:50}} src="./img/bao.png" alt="" /></button></div>  
                </div>
            </div>
        )
    }
}
