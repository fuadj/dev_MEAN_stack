148 (171 of 442)


# What is Mongoose
Mongoose is a MongoDB Object-Document Modeler(ODM) for Node applications.
Benefits:
    -You can mananage your data model from within your application
    -You don't have to mess around directly with databases or external frameworks

# Naming conventions
    - In MongoDB, each entry in a database is called a `document`
    - A collection of `document`s is called a `collection`(think table in relational schema)
    - The definition of a `document` is called a `schema`
    - Each individual data entity defined in a `schema` is called a `path`

// so, the structure is
`Path`:     each path can have multiple defining properties
    firstname: {
        type: String, 
        required: true
    }
`Schema`:   made up of a number of paths
`Document`: contains data, the structure of which is defined by a schema
`Collection`: contains many documents

`Path` ==>> `Schema` ==>> `Document` ==>> `Collection`

# What is a `model`
A `model` is the compiled version of a `schema`
All data interactions using Mongoose go through the model

# Example: `Document` and `Schema`
// document
{
    "firstname" : "Simon",
    "surname" : "Holmes",
    _id : ObjectId("52279effc62ca8b0c1000007")
}
an `_id` is automatically added to `EVERY` document created
// corresponding schema
{
    firstname : String,
    surname : String
}
# The 8 types allowed
String:     Any string, UTF-8 encoded
Number:     Mongoose doesn’t support long or double numbers, but it can be
            extended to do so using Mongoose plugins; the default support is enough for
            most cases
Date:       Typically returned from MongoDB as an ISODate object
Boolean:    True or false
Buffer:     For binary information such as images
Mixed:      Any data type
Array:      Can either be an array of the same data type, or an array of nested sub- documents
ObjectId:   For a unique ID in a path other than _id; typically used to reference _id paths in other documents

# sub-documents
Subdocuments are defined in Mongoose by using nested schemas. They MUST be defined before the parent schema


#
# Compiling Mongoose schemas into models
#
An application doesn’t interact with the schema directly when working with data; data interaction is done through models.
                        $ mongoose.model('Location', locationSchema, 'Locations');
Connection Name           mongoose
Name of the model                        'Location'
The schema to use                                    locationSchema
MongoDB collection name(optional)                                    'Locations'


# installing mongoose
// it shouldn't be installed globally, but directly to the project
$ npm install --save mongoose

# setting up the connection file
Setting up the connection file is a two-part process: 
    1) creating the file and 
    2) requiring it into the application so that it can be used

// requiring the file
$ var mongoose = require('mongoose');

# creating the mongoose connection
pass to Mongoose's connect method the URI of your database

                    mongodb://username:password@localhost:27027/database
MongoDB protocol:   mongodb
Server addresss:                                localhost
Port:                                                     27027
Database name:                                                 database

// username, password and port are OPTIONAL
// so on your local machine, it is simplified as 

$ var dbURI = 'mongodb://localhost/dev_MEAN_stack';
$ mongoose.connect(dbURI);

# montoring Mongoose connection through event hooks


# restarting mongo service
$ sudo service mongod restart

> show dbs
> show collections

> db.<collection>.find()
> db.<collection>.find().pretty()       // pritty print

// save a document in a collection
> db.<collection>.save({})

// starting using a database
> use Loc8r

# creating collections
** very important **
the default collection name is a lowercase pluralized version of the model name



# updating a document
// update a document to add a sub-document, you can also include the sub-document on the initial document creation

update syntax
> db.<collection>.update(
    {},     // query to find the correct document to update
    {
        $push: {        // when document is found, push a subdocument into the specified path
        }
    }
)

e.g: 
