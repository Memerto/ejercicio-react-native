import Api from './Api'

export const GetPlatos = ()=>{
    Api.get('/platos.json').then( resp => {
        console.log(resp)
    }).catch( err => {
        console.log("error al traer datos: "+ err)
    })
}