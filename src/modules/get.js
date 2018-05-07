import request from 'request'

const get = ( url, headers, querystring ) => {
	return new Promise( ( resolve, reject ) => {
		// Set the options
		const options = {
			method: 'GET',
			url: url,
			headers: headers,
			qs: querystring
		}
		// Make a request to the url
		request( options, ( err, response, body ) => {
			// If debugging is enabled be verbose
			if ( process.env.debug || process.env.verbose ) console.log( ( response ? response.statusCode : '000' ) + ': ' + url )
			// If an error is returned reject with the info
			if ( err ) return reject( { url: url, err: err } )
			// If no response was given at all reject and return that status code ( or 000 if none is given )
			if ( !response ) return reject( { url: url, err: response.statusCode || '000' } )
			// If the status code is 200 resolve
			response.statusCode == 200 ? resolve( body ) : reject( { url: url, err: response.statusCode || '000' } )
		} )	
	} )
}

export default get