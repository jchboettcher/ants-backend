const User = require('../../models/User')

const allUsersBy2 = async (obj, { game, level }, context) => {
  try {
    const users = await User.query()
      .where({game, level})
      .orderBy('score2','ASC')
      .orderBy('score1','ASC')
      .orderBy('createdAt','ASC')
    return users
  } catch (error) {
    console.warn(error)
    throw new Error('failed to get all users by score1')
  }
}
const resolver = {
  Query: { allUsersBy2 },
}

module.exports = resolver
