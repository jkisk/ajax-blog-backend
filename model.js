const shortid = require('short-id')
const fs = require('fs')
let blogJSON = fs.readFileSync('./data.json')
const blogPosts = JSON.parse(blogJSON)

// create

const create = (title, content) => {

    const errors = []

    if (!title || !content) {
        response.push(errors)
        response = { errors }
    }

    const post = {
        id: shortid.generate(),
        title,
        content,
    }

    blogPosts.unshift(post)

    blogJSON = JSON.stringify(blogPosts)
    fs.writeFileSync('./data.json', blogJSON)

    response = blogPosts

    return response
}

// get all

const getAll = () => {

    return blogPosts
}

// update

const update = (id, title, content) => {

    const errors = []

    if (!id) {
        response.push(errors)
        response = { errors }
    }

    const updatingPost = blogPosts.findIndex(p => (p.id === id))
    blogPosts[updatingPost] = { id: id, title: title, content: content }

    blogJSON = JSON.stringify(blogPosts)
    fs.writeFileSync('./data.json', blogJSON)

    response = blogPosts[updatingPost]

    return response

}

// delete

const remove = (id) => {

    const errors = []

    if (!id) {
        response.push(errors)
        response = { errors }
    }

    const removingPost = blogPosts.findIndex(p => (p.id === id))
    blogPosts.splice(removingPost, 1)

    blogJSON = JSON.stringify(blogPosts)
    fs.writeFileSync('./data.json', blogJSON)

    response = blogPosts

    return response

}


module.exports = { create, getAll, update, remove }