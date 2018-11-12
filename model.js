const shortid = require('short-id')
const fs = require('fs')
const blogJSON = fs.readFileSync('./data.json')
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

    blogPosts.push(post)

    blogJSON = JSON.stringify(blogPosts)
    fs.writeFileSync('./data.json', blogJSON)

    response = post

    return response
}

// get all

const getAll = () => {
    
    return blogPosts
}

// get one

// const getOne = (id) => {
//   return result = authors.find(b => b.id === id)
// }

// // update

// const update = (id, body) => {

//   const updateIndex = authors.findIndex(b => b.id === id)
//   const errors = []
//   const first = body.first
//   const last = body.last
//   let response

//   if (!first) {
//     errors.push('please provide first')
//     response = { errors }
//   }
//   else {
//     authors[updateIndex] = {
//       id,
//       title,
//       first,
//       last
//     }
//     response = authors[updateIndex]
//   }
//   return response
// }
// // delete

// const remove = (id) => {
//   const removeIndex = authors.findIndex(b => b.id === id)
//   return authors.splice(removeIndex, 1)
// }


module.exports = { create, getAll }