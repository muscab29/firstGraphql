const { gql } = require('apollo-server');

module.exports = gql`
  type Demo {
    
    firstName: String
    bookingDate: String
    companyName: String
    phoneNumber: Int
    email :String
    id:ID
    
  }
 
  type User {
    id: ID!
    email: String!
    token: String!
    username: String
  }

  type Purchases {
    id:ID!
    creditInfo:String
    purchaseItem:String
    amount:Int

  }

  type Query {
    getDemos: [Demo]
   
  }

  input createDemoInput {
    firstName: String!
    companyName: String!
    phoneNumber: Int
    email :String
  }

  type User {
    id: ID
    email: String
    token: String
    firstName: String
  }
  input RegisterInput {
    username: String
    password: String!
    email: String!
  }

  input RegisterInputPurchase{
    amount:Int
    purchaseItem:String
    creditInfo:String
  }

  type Mutation {
    createDemo (demoInput: createDemoInput) : Demo 
    registerUser(registerInput:RegisterInput): User
    login(username: String!, password: String!): User!
    registerPurchase(purchaseInput:RegisterInputPurchase):Purchases
  }

`;