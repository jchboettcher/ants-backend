const User = require('../../models/User')

const usersByCrumbs = async (obj, { level }, context) => {
  try {
    const users = await User.query()
      .where({level})
      .orderBy('crumbs','ASC')
      .orderBy('steps','ASC')
      .orderBy('createdAt','DESC')
      .limit(5)
    return users
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    throw new Error('failed to get users by crumbs')
    // throw error
  }
}
const resolver = {
  Query: { usersByCrumbs },
}

module.exports = resolver
