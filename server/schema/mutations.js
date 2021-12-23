const graphql = require("graphql");
const { GraphQLString, GraphQLID, GraphQLObjectType } = graphql;
const mongoose = require("mongoose");
const User = mongoose.model("user");
const UserType = require("./user_type");

const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        dob: { type: GraphQLString },
        adress: { type: GraphQLString },
        description: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
      },
      resolve(_, { id, name, dob, adress, description, createdAt, updatedAt }) {
        return new User({
          id,
          name,
          dob,
          adress,
          description,
          createdAt,
          updatedAt,
        }).save();
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        adress: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(_, { id, name, adress, description }) {
        return User.findOneAndUpdate(
          id,
          {
            name,
            adress,
            description,
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = mutations;
