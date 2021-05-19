const User = require('../../models/User')

const usersBy2 = async (obj, { game, level, limit }, context) => {
  try {
    const users = await User.query()
      .where({game, level})
      .orderBy('score2','ASC')
      .orderBy('score1','ASC')
      .orderBy('createdAt','ASC')
      .limit(limit)
    return users
  } catch (error) {
    console.warn(error)
    throw new Error('failed to get users by score1')
  }
}
const resolver = {
  Query: { usersBy2 },
}

module.exports = resolver
