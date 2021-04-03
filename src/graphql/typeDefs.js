// const { gql } = require('apollo-boost')

module.exports = `
  type Mutation {
    addUser(input: AddUser!): User!
  }

  type Query {
    usersBySteps(level: Int!): [User!]!
    usersByCrumbs(level: Int!): [User!]!
  }

  type User {
    id: ID!
    name: String!
    level: Int!
    steps: Int!
    crumbs: Int!
    createdAt: String!
  }

  input AddUser {
    name: String!
    level: Int!
    steps: Int!
    crumbs: Int!
  }
`