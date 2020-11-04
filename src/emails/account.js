const sgMail = require('@sendgrid/mail')
const User = require('../models/user')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aviv27400@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the Task app, ${name}. Let me know if you are getting along with the app.` 
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aviv27400@gmail.com',
        subject: 'Your account has been deleted',
        text: `Goodbye, ${name} . please tell us what was the fucking problem`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}