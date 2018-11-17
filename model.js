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



module.exports = { create, getAll }