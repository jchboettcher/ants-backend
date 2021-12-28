module.exports = `
  type Mutation {
    addUser(input: AddUser!): User!
  }

  type Query {
    allUsersBy1(game: String!, level: Int!): [User!]!
    allUsersBy2(game: String!, level: Int!): [User!]!
    usersBy1(game: String!, level: Int!, limit: Int!): [User!]!
    usersBy2(game: String!, level: Int!, limit: Int!): [User!]!
    recentUsersBy1(game: String!, level: Int!, limit: Int!, time: Int!): [User!]!
    recentUsersBy2(game: String!, level: Int!, limit: Int!, time: Int!): [User!]!
    userByName1(game: String!, level: Int!, name: String!, limit: Int!): [User!]!
    userByName2(game: String!, level: Int!, name: String!, limit: Int!): [User!]!
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