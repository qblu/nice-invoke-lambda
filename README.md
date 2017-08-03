# nice-invoke-lambda

A nice way to invoke AWS Lambda functions

## invoke(lambdaFunction, lambdaEvent)

Returns a promise that will invokes a Lambda function synchronously,
automatically serializing and deserializing the event and response payloads.
Resolves to the successful function response, or rejects if there is a failure
at any level, including when an error string is returned by the Lambda function
handler callback. If a returned error string is JSON, it will also be
automatically deserialized.

`lambdaFunction` is a string of the function name or ARN, and either style
may be qualified with a version or alias.

`lambdaEvent` is the event object intended for the Lambda handler to receive.

### Example:
```
const invoke = require('nice-invoke-lambda').invoke;

invoke('AddNumbers', { a: 1, b: 3 })
  .then(result => {
    console.log(`1 + 3 = ${result}`);
  })
  .catch(error => {
    console.error(error);
  });
```

