const User = require('../../models/User')

const usersBy1 = async (obj, { game, level, limit }, context) => {
  try {
    const users = await User.query()
      .where({game, level})
      .orderBy('score1','ASC')
      .orderBy('score2','ASC')
      .orderBy('createdAt','ASC')
      .limit(limit)
    return users
  } catch (error) {
    console.warn(error)
    throw new Error('failed to get users by score1')
  }
}
const resolver = {
  Query: { usersBy1 },
}

module.exports = resolver
