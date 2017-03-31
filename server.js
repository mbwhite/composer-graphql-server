'use strict';

var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

const LandRegistry = require('./landRegistry.js');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`

  type LandTitle {
   titleId: String
   information: String
   forSale: Boolean
   owner: Person
  }

  type Person {
    personId: String
    firstName :  String
    lastName : String
  }

  type Query {
    getLandTitles : [LandTitle]
    getLandTitle(titleId : String): LandTitle
  }
`);

class LandTitle {
  constructor() {
      this.titleId = 1234;
      this.information = 'small house';
      this.forSale = true;
  }
}


// The root provides the top-level API endpoints
var root = {

  getLandTitles: function() {
    return LandRegistry.listCmd();

  },
  getLandTitle: function({titleId}){
    return new LandTitle();
  }

}

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
