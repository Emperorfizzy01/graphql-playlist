const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb+srv://Faruk:5873@graphql.0ww5w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
// mongoose.connect("mongodb+srv://Emperorfizzy:n6eaYB8DQ6zVXeFI@fizzy-cluster.6sj9h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
// mongoose.connection.once('open', () => {
//     console.log('connected to database');
// })

connectDB()
const app = express();

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('Server is running port 3000');
})

// password:5873