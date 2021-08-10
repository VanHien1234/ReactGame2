import React, { Component } from 'react'
import  './game.css'
import Player from './Player'
import Computer from './Computer'
import KetQua from './KetQua'
import { connect } from 'react-redux';
import { actKetQua, actComRandom } from '../store/actions/GameActions';
 class OanTuXi extends Component {
    render() {
        return (
            <div className="main text-center">
                <div className="row">
                    <div className= "col-4"><Player/></div>
                    <div className= "col-4"><KetQua/>
                    <button 
                    className="btn btn-success"
                    onClick={()=>this.props.ComRandom()}
                    >Play Game</button>
                    </div>
                    <div className= "col-4"><Computer/></div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProp = dispatch =>({
    ComRandom:()=>{
        dispatch(actComRandom());
        dispatch(actKetQua());
    },
    
    



   /*  return{
        playgame:()=>{
            dispatch({
                type :'Computer_random'
            })
            dispatch({
                type :'Ket_Qua'
            })
        }
    } */
        
})
export default  connect(null,mapDispatchToProp)(OanTuXi)