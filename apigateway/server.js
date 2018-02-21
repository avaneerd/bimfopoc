let {
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema
} = require('graphql');

const express = require('express');
const graphqlHTTP = require('express-graphql');
const axios = require('axios');

const app = express();

var ArticleType = new GraphQLObjectType({
    name: 'article',
    description: 'BIMfo Article',
    fields: {
        id: {
            type: GraphQLInt,
            description: 'The id of the BIMfo article.'
        },
        name: {
            type: GraphQLString,
            description: 'The name of the BIMfo article'
        },
        content: {
            type: GraphQLString,
            description: 'The content of the BIMfo article.'
        }
    }
});

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: () => ({
            allArticles: {
                type: new GraphQLList(ArticleType),
                description: 'Get all BIMfo articles',
                resolve: root => {
                    return axios
                        .get('http://localhost:8081')
                        .then(resp => resp.data);
                }
            },
            article: {
                type: ArticleType,
                description: 'Get an BIMfo article by id',
                args: {
                    'id': {
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve: (root, args) => {
                    return axios
                        .get(`http://localhost:8081/${args.id}`)
                        .then(resp => resp.data);
                }
            }
        })
    })
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true
    })
);

app.listen(80);