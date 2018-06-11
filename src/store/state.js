let defaultCity = '广州'
try{
    if(localStorage.city){
        defaultCity = localStorage.city
    }
}catch(e){}
const state = {
    letter:[],
    city:defaultCity
}
export default state