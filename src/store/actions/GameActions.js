import * as GameConstants from '../constants/GameConstants'

export const  actdatcuoc = name =>({
    type: GameConstants.Keo_Bua_Bao,
    payload: name
});

export const actComRandom =()=>({
    type: GameConstants.Computer_random 
    
})

export const actKetQua =()=>({
    type:GameConstants.Ket_Qua
})