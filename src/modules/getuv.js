import get from './get.js'

if ( process.env.NODE_ENV == 'test' ) require('dotenv').config()

const headers = { 
	'content-type': 'application/json',
	'x-access-token': process.env.uvapi
}

const getuv = ( lat, lng ) => get( 'https://api.openuv.io/api/v1/uv', headers, { lat: lat, lng: lng } ).then( res => JSON.parse( res ).result )

export default getuv