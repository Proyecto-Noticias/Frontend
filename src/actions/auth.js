import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";

export const startLogin = ( email, password ) => {
  
  return async( dispatch ) => {
    
    const resp = await fetchSinToken('user/login', { email, password }, 'POST');

    const body = await resp.json();

    if( resp.status === 200 ){
      localStorage.setItem('token', body.token)

      dispatch( login({
        uid:body.data.id,
        name: body.data.name,
        isAdmin: body.data.isAdmin
      }))
      console.log(body)

    }
  }
} 

const login = ( user ) => ({
  type: types.authLogin,
  payload: user
})