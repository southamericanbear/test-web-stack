const { ApolloServer, gql } = require("apollo-server");

const users = [
  {
    name: "Alan",
    position: "Full Stack",
  },
  {
    name: "Charles",
    position: "Backend",
  },
];

const typeDefs = gql`
  type User {
    name: String
    position: String
  }

  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    users: () => users,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
