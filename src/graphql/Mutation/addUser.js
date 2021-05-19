const User = require('../../models/User')

const addUser = async (obj, { input }, context) => {
  try {
    const user = await User.query().insert(input).returning('*')
    return user
  } catch (error) {
    console.warn(error)
    throw new Error('failed to insert user')
  }
}

const resolver = {
  Mutation: {
    addUser,
  },
}

module.exports = resolver
