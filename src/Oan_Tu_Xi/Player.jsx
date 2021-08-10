import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actdatcuoc } from '../store/actions/GameActions';
class Player extends Component {
    render() {
       
        let {mangDatCuoc,datcuoc} =this.props;
        return (
            <div>
                
                <div className="speech-bubble">
                    <div className="mx-auto pt-3">
                        <img style={{width:50, height:50}} src={mangDatCuoc.find(item=>item.DatCuoc===true).img} alt="" />
                    </div>
                </div>
                <img style={{width:250,height:200}} src="./img/player.png" alt="" />
                <div className="row">
                    {mangDatCuoc.map((item,index)=>{
                        return<div className="col-4" key={index}> <button 
                        className="item"
                        onClick={()=>{datcuoc(item.name)}} >
                        <img style={{width:50, height:50}} src={item.img} alt="" /></button></div>
                    })}
                    
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    mangDatCuoc: state.GameReducer.mangDatCuoc,
});
const mapDispatchToProp = dispatch =>({

    datcuoc:name=>{
        dispatch(actdatcuoc(name))
    }

    /* return {
        datcuoc:(name)=>{
            dispatch({                                /// cách khai báo khác
                type:'Keo_Bua_Bao',
                payload:{name}
            })
        }
    } */
})

export default  connect(mapStateToProps,mapDispatchToProp)(Player)