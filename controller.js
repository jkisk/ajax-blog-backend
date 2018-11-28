const model = require('./model.js')



// create

function create(req, res, next) {
    const result = model.create(req.body.title, req.body.content)

    if (result.errors) {
        return next({ status: 400, message: `Could not create blog post`, errors: result.errors })
    }
    return res.status(201).json({ result })
}

// get all

function getAll(req, res, next) {
    const result = model.getAll()

    if (result.errors)
        return next({ status: 400, message: `Server failed to deliver posts`, errors: result.errors })

    return res.status(200).json({ result })
}

// update

function update(req, res, next) {
    const result = model.update(req.params.id, req.body.title, req.body.content)

    if (result.errors)
        return next({ status: 400, message: "Post not updated" })
    return res.status(200).json({ result })

}

//delete post

function remove(req, res, next) {
    const result = model.remove(req.params.id)

    if (result.errors)
        return next({ status: 404, message: "Post not deleted, not found" })
    return res.status(201).json({ result })

}


module.exports = { create, getAll, update, remove }