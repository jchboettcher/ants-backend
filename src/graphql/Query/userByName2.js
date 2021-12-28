const User = require('../../models/User')

const userByName2 = async (obj, { game, level, name }, context) => {
  try {
    const users = await User.query()
      .where({game, level, name})
      .orderBy('score2','ASC')
      .orderBy('score1','ASC')
      .orderBy('createdAt','ASC')
    return users
  } catch (error) {
    console.warn(error)
    throw new Error('failed to get users by score1')
  }
}
const resolver = {
  Query: { userByName2 },
}

module.exports = resolver
