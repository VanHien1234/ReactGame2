const initialState ={
    mangDatCuoc :[
        {name:'bua',img:'./img/bua.png',DatCuoc:false},
        {name:'keo',img:'./img/keo.png',DatCuoc:true},
        {name:'bao',img:'./img/bao.png',DatCuoc:false}
    ],
    ketqua:"GOOD LUCK ",
    soLanThang:0,
    soLanChoi:0,
    computer:{name:'keo',img:'./img/keo.png'},

}

const GameReducer = (state = initialState, {type,payload}) =>{
    
    switch(type){
        
        case 'Keo_Bua_Bao':{
            
            let mangCuocUpdate =[...state.mangDatCuoc]
            mangCuocUpdate = mangCuocUpdate.map((item,index)=>{
                if(item.name === payload){
                    return{...item,DatCuoc:true}
                }
                return {...item,DatCuoc:false}
            })
            state.mangDatCuoc = mangCuocUpdate
            return{...state }
        }
        case 'Computer_random':{
            let random_index = Math.floor(Math.random()*3)
            let computer_random = state.mangDatCuoc[random_index]
            state.computer = computer_random
            return {...state}
        }
        case 'Ket_Qua':{
            state.soLanChoi +=1;
            let player = state.mangDatCuoc.find(item => item.DatCuoc===true)
            let computer = state.computer
            switch(player.name){
                case 'keo':{
                    
                    if(computer.name === 'keo'){
                        state.ketqua = 'TIE'
                    }
                    if(computer.name === 'bua'){
                        state.ketqua = 'LOSE'
                    }
                    if(computer.name === 'bao'){
                        state.ketqua = 'WIN'
                        state.soLanThang +=1
                    }
                };break;
                case 'bua':{
                    
                    if(computer.name === 'keo'){
                        state.ketqua = 'WIN'
                        state.soLanThang +=1
                    }
                    if(computer.name === 'bua'){
                        state.ketqua = 'TIE'
                    }
                    if(computer.name === 'bao'){
                        state.ketqua = 'LOSE'
                    }
                };break;
                case 'bao':{
                    
                    if(computer.name === 'keo'){
                        state.ketqua = 'LOSE'
                    }
                    if(computer.name === 'bua'){
                        state.ketqua = 'WIN'
                        state.soLanThang +=1
                    }
                    if(computer.name === 'bao'){
                        state.ketqua = 'TIE'
                    }
                }break;

            }

            return{...state}
        }

        default: return state;
    }


}


export default GameReducer