# nice-invoke-lambda

A nice way to invoke AWS Lambda functions from Lambda functions

## Why devDependencies?

The `aws-sdk` package is listed in devDependencies rather than dependencies
because this package was created to support a use case of invoking Lambda
functions from other Lambda functions. In the Lambda environment, `aws-sdk` is
automatically provided, so to avoid repackaging it when building our Lambda
zips, we leave `aws-sdk` out of the production dependencies. If you intend
to use this package outside of Lambda, you may need to modify or work
around that choice.

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

