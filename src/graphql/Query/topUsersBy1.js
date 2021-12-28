const User = require('../../models/User')

const topUsersBy1 = async (obj, { game, level, limit }, context) => {
  try {
    const users = await User.query()
      .where({game, level})
      .orderBy('score1','ASC')
      .orderBy('score2','ASC')
      .orderBy('createdAt','ASC')
    const newusers = []
    const names = {}
    let count = 0
    for (let user of users) {
      if (count >= limit) {
        break
      }
      const name = user.name.trim()
      if (!(name in names)) {
        names[name] = 1
        newusers.push({...user,name})
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
  Query: { topUsersBy1 },
}

module.exports = resolver
