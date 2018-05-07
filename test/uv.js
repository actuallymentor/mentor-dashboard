// Get the expect functionality
import { expect } from 'chai'

// Import testble function
import getuv from '../src/modules/getuv.js'

// Places
const amsterdam = { 
	lat: 52.379189,
	lng: 4.899431
}

describe( 'UV index retrieval', f => {
	it( 'grabs a valid index', function() { 
		return getuv( amsterdam.lat, amsterdam.lng )
		.then( res => { 
			expect( res ).to.be.an( 'object' )
			expect( res.uv ).to.be.a( 'number' )
		 } )
	 } )
} )