import React, { Component } from 'react'
import { connect } from 'react-redux';
class Computer extends Component {
    render() {
        let{computer}= this.props
        return (
            <div>
                <div className="speech-bubble1">
                <div className="mx-auto pt-3">
                        <img style={{width:50, height:50}} src={computer.img} alt="" />
                    </div>
                </div>
                <img style={{width:250,height:250}} src="./img/playerComputer.png" alt="" />
            </div>
        )
    }
}


const mapStateToProps = state =>({
    computer: state.GameReducer.computer,
});

export default  connect(mapStateToProps)(Computer)