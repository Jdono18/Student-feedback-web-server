const express = require('express')  // imports express
const router = express.Router()  // figures out what code to run in response to a request - typically based on the URL and the method: GET, POST...

router.get('/', function(req, res, next) {  // get request, response to the homepage
    res.render('index', {
        title: 'Feedback Application',
        author: 'Jim',
        timePageLoadedAt: new Date(),
    })  // name of Handlebars file - name of a template, optional object with data
})

router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form')
})

router.post('/submit-feedback', function(req, res, next) {
    // access form data
    // const formData = req.query - for a GET request -read the URL query
    const formData = req.body
    console.log(formData)

    //todo - save to a database
    // automatically email someone when feedback was submitted
    // automatically summarize data and send data to a certain user each day

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student?']
    })
})

module.exports = router // return router object back to server.js as necessary - this line must be the last line in the file



