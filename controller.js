const model = require('./model.js')



// create

function create(req, res, next) {

    const result = model.create(req.body.title, req.body.content)

    if (result.errors) {
        return next({ status: 400, message: `Could not create blog post`, errors: result.errors })

    }

    res.status(201).json({ data: result })

}

// get all

function getAll(req, res, next) {
    const result = model.getAll(req.query.limit)
    
    if (result.errors)
        return next({ status: 400, message: `Server failed to deliver posts`, errors: result.errors })

 return res.status(200).json({ data: result })
}



module.exports = { create, getAll }