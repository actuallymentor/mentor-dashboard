import get from './get.js'

if ( process.env.NODE_ENV == 'test' ) require('dotenv').config()

const headers = {}

const getuv = ( lat, lng ) => get( 'http://api.airvisual.com/v2/nearest_city', headers, { key: process.env.airapi, lat: lat, lng: lng } )
							.then( res => JSON.parse( res ).data )

export default getuv