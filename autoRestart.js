var AWS = require('aws-sdk');

AWS.config.update({    
    accessKeyId: 'YOUR_AWS_ACCESS_KEY',    
    secretAccessKey: 'YOUR_AWS_SECRET_KEY',    
    region: 'YOUR_AWS_REGION'
});

var elasticbeanstalk = new AWS.ElasticBeanstalk();
var params = { EnvironmentId: 'YOUR_ENVIROMENT_ID',    EnvironmentName: 'YOUR_ENVIROMENT_NAME'};


elasticbeanstalk.restartAppServer(params,(err,data)=>{
        if (err) console.log(err, err.stack);         
        else console.log(data);              
})

