const casual = require('casual')

casual.define('user', () => ({
  name: casual.name,
  game: casual.word,
  level: casual.integer(1, 3),
  score1: casual.integer(1, 5),
  score2: casual.integer(1, 5),
}))

const usersData = []

for (let i = 0; i < 10; ++i) {
  usersData.push(casual.user)
}

module.exports = usersData
