import React, { Component } from 'react'
import { connect } from 'react-redux';
class KetQua extends Component {
    render() {
        let {ketqua,soLanChoi,soLanThang} =this.props
        return (
            <div className="container">
                <h1 className="ketqua"> {ketqua}</h1>
                <h1 className="lanchoi">Bạn Đã Chơi :  {soLanChoi}  </h1>
                <h1 className="lanthang">Số Lần Thắng :  {soLanThang}  </h1>
                
            </div>
        )
    }
}

const mapStateToProps = state =>({
    ketqua: state.GameReducer.ketqua,
    soLanThang: state.GameReducer.soLanThang,
    soLanChoi: state.GameReducer.soLanChoi,
});

export default  connect(mapStateToProps)(KetQua)
