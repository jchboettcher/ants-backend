const User = require('../../models/User')

const recentUsersBy2 = async (obj, { game, level, limit, time }, context) => {
  try {
    const date = (new Date(Date.now()-time)).toISOString()
    const knexFormatDate = date.substring(0,10)+" "+date.substring(11,23)+"000+00"
    const users = await User.query()
      .where({game, level})
      .where('createdAt', '>', knexFormatDate)
      .orderBy('score2','ASC')
      .orderBy('score1','ASC')
      .orderBy('createdAt','ASC')
      .limit(limit)
    return users
  } catch (error) {
    console.warn(error)
    throw new Error('failed to get recent users by score2')
  }
}
const resolver = {
  Query: { recentUsersBy2 },
}

module.exports = resolver
