const User = require('../../models/User')

const topUsersBy2 = async (obj, { game, level, limit }, context) => {
  try {
    const users = await User.query()
      .where({game, level})
      .orderBy('score2','ASC')
      .orderBy('score1','ASC')
      .orderBy('createdAt','ASC')
    const newusers = []
    const names = {}
    let count = 0
    for (let user of users) {
      if (count >= limit) {
        break
      }
      if (!(user.name in names)) {
        names[user.name] = 1
        newusers.push(user)
        count++
      }
    }
    return newusers
  } catch (error) {
    console.warn(error)
    throw new Error('failed to get all users by score1')
  }
}
const resolver = {
  Query: { topUsersBy2 },
}

module.exports = resolver
