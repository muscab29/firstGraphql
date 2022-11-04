const demoResolvers = require('./demo')
const userResolvers = require('./user')
const purchaseResolvers = require('./purchases')
const { Mutation } = require('./demo')

module.exports = {
    Query :{
        ...demoResolvers.Query,
    },
    Mutation  :{
        ...demoResolvers.Mutation,
        ...userResolvers.Mutation,
        ...purchaseResolvers.Mutation

    }
}