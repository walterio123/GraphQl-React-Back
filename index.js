import { gql } from 'apollo-server'
import { ApolloServer } from 'apollo-server-express'
const persons = [
    {
        name: "walterio",
        phone:"87236234924",
        street: "lima 112",
        city: "Lujan",
        id: "234h-92nd-dfs5-3842-90sd"
    },
    {
        name: "emi",
        phone:"0087236234924",
        street: "roca 12",
        city: "Lujan de Cuyo",
        id: "234h-92nd-dfs5-43842-50sd"
    },
    {
        name: "naty",
        phone:"879346234924",
        street: "limolaa 18912",
        city: "G.C",
        id: "23sd-32nd-dfs5-3842-90sd"
    }

]
//descripcion de datos
const typeDefs= gql ` 
    type Person {
        name: String!
        phone: String
        street: String!
        city: String!
        id: ID!
    }
   
    type Query {
        personCount: Int!
        allPersons: [Person]!
    }
`
//de donde salen los datos
const resolvers={
    Query:{
        personCount:()=> persons.length,
        allPersons:()=> persons
    }
}
 //creando el servidor apollo
 const server=new ApolloServer({
     typeDefs,
     resolvers
    })

 //iniciando el servidor
 server.listen().then(( { url })=>{
     console.log('Server ready ')
 })