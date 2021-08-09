import React, { Component } from 'react'

export default class Computer extends Component {
    render() {
        return (
            <div>
                <div className="speech-bubble1">
                <div className="mx-auto pt-3">
                        <img style={{width:50, height:50}} src="./img/keo.png" alt="" />
                    </div>
                </div>
                <img style={{width:250,height:250}} src="./img/playerComputer.png" alt="" />
            </div>
        )
    }
}
