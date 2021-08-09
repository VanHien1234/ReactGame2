import React, { Component } from 'react'
import  './game.css'
import Player from './Player'
import Computer from './Computer'
import KetQua from './KetQua'
export default class OanTuXi extends Component {
    render() {
        return (
            <div className="main text-center">
                <div className="row">
                    <div className= "col-4"><Player/></div>
                    <div className= "col-4"><KetQua/></div>
                    <div className= "col-4"><Computer/></div>
                </div>
            </div>
        )
    }
}
