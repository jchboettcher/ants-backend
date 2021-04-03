const casual = require('casual')

casual.define('user', () => ({
  name: casual.name,
  level: casual.integer(1, 3),
  steps: casual.integer(1, 5),
  crumbs: casual.integer(1, 5),
}))

const usersData = []

for (let i = 0; i < 10; ++i) {
  usersData.push(casual.user)
}

module.exports = usersData
