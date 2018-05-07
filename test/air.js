// Get the expect functionality
import { expect } from 'chai'

// Import testble function
import airquality from '../src/modules/getairq.js'

// Places
const amsterdam = { 
	lat: 52.379189,
	lng: 4.899431
}

describe( 'Air quality retrieval', f => {
	it( 'grabs valid data', function() { 
		return airquality( amsterdam.lat, amsterdam.lng )
		.then( res => { 
			expect( res ).to.be.an( 'object' )
			expect( res.city ).to.be.a( 'string' )
		 } )
	 } )
} )