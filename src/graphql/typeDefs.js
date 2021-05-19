module.exports = `
  type Mutation {
    addUser(input: AddUser!): User!
  }

  type Query {
    usersBy1(game: String!, level: Int!, limit: Int!): [User!]!
    usersBy2(game: String!, level: Int!, limit: Int!): [User!]!
    recentUsersBy1(game: String!, level: Int!, limit: Int!, time: Int!): [User!]!
    recentUsersBy2(game: String!, level: Int!, limit: Int!, time: Int!): [User!]!
  }

  type User {
    id: ID!
    name: String!
    game: String!
    level: Int!
    score1: Int!
    score2: Int!
    createdAt: String!
  }

  input AddUser {
    name: String!
    game: String!
    level: Int!
    score1: Int!
    score2: Int!
  }
`