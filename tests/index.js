'use strict';

const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const { invoke } = require('../index');

/*
 * Any of these function name styles should work:
 *  invoke('arn:aws:lambda:us-east-1:############:function:AddNumbers:1', { a: 1, b: 3 })
 *  invoke('arn:aws:lambda:us-east-1:############:function:AddNumbers:beta', { a: 1, b: 3 })
 *  invoke('arn:aws:lambda:us-east-1:############:function:AddNumbers', { a: 1, b: 3 })
 *  invoke('AddNumbers:1', { a: 1, b: 3 })
 *  invoke('AddNumbers:beta', { a: 1, b: 3 })'
 */
invoke('AddNumbers', { a: 1, b: 3 })
	.then((response) => {
		console.log('Response:');
		console.log(response);
		console.log('Stringified:');
		console.log(JSON.stringify(response, null, 2));
	})
	.catch((error) => {
		console.error('Error:');
		console.error(error);
		console.error('Stringified:');
		console.error(JSON.stringify(error, null, 2));
	});

