//function to invoke lambda SES email sending function

var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1'

function callLambda(){
    var lambda = new AWS.Lambda();
    var params = {
        FunctionName: 'WildRydes_Subscription_Email',
        Payload: '{"key1" : "kylepetrie@my.unt.edu"}'
    };
    lambda.invoke(params, function(err, data) {
        if (err) console.log(err, err.stack);
        else     console.log(data);
    });
}
callLambda();