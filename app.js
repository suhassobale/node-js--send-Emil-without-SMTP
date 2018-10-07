var sendmail = require('sendmail')();
sendmail({
    from: 'no-reply@abc.com',
    to: '< Receiver Email Address>',
    subject: 'test sendmail',
    html: 'Mail of test sendmail ',

}, function (err, reply) {
    console.log(err);
});