const casual = require('casual')

casual.define('user', () => ({
  name: casual.name,
  level: casual.integer(1, 10),
  steps: casual.integer(1, 20),
  crumbs: casual.integer(1, 20),
}))

const usersData = []

for (let i = 0; i < 10; ++i) {
  usersData.push(casual.user)
}

module.exports = usersData
