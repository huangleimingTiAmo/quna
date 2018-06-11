import * as types from './mutations-types'
const mutations = {
    [types.SET_LETTER](state,letter){
        state.letter = letter
    },
    [types.SET_CITY](state,city){
        state.city = city
        try{
            localStorage.city = city
        }catch(e){}
    }
}
export default mutations