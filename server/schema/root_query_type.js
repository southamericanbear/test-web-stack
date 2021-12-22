const mongoose = require("mongoose");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt,
} = graphql;

const UserType = require("./user_type");
const User = mongoose.model("user");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      args: {
        first: {
          name: "first",
          type: GraphQLInt,
        },
        skip: {
          name: "skip",
          type: GraphQLInt,
        },
      },
      resolve(parentValues, { first }) {
        return User.find({}).limit(first);
      },
    },
    user: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(_, { id }) {
        return User.findById(id);
      },
    },
  }),
});

module.exports = RootQuery;
