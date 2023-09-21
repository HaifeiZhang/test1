import axios from "axios"

//redux-thunk写法
// function getCinemasList(){

//     return (dispatch)=> {
//         axios({
//             url:"https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=7435960",
//             method:"get",
//             headers:{
//                 'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16944592327189015044292609"}',
//                 'X-Host':'mall.film-ticket.cinema.list'
//             }

//         }).then(res=>{
//             //console.log(res.data.data.cinemas)
//             dispatch({
//                 type:"Change-List",
//                 payload:res.data.data.cinemas
//             })
            
//         }).catch(err=>{console.log(err)})
//     }

// }


//redux-promise 写法
function getCinemasList(){

    return axios({
        url:"https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=7435960",
        method:"get",
        headers:{
            'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16944592327189015044292609"}',
            'X-Host':'mall.film-ticket.cinema.list'
        }

    }).then(res=>{
        //console.log(res.data.data.cinemas)
        return{
            type:"Change-List",
            payload:res.data.data.cinemas
        }
        
    }).catch(err=>{console.log(err)})

}
export default getCinemasList