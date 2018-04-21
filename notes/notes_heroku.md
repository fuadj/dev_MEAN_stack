# Updating heroku
Heroku links your projects based on the heroku git remote. To add your Heroku remote as a remote in your current repository, use the following command:

$ heroku login
$ git remote add heroku https://git.heroku.com/pure-chamber-33545.git

more info: 
    https://dashboard.heroku.com/apps/pure-chamber-33545/deploy/heroku-git
    https://stackoverflow.com/a/5129733/5753416


# Linking with mLab

Connection String:
    mongodb://dev:abcdabcd@ds151169.mlab.com:51169/dev_mean_stack

$ heroku config:set MONGOLAB_URI=mongodb://dev:abcdabcd@ds151169.mlab.com:51169/dev_mean_stack

// to check if the connection string is correctly set-up

$ heroku config:get MONGOLAB_URI

# Pushing local data
There are 4 steps to push local data
    1) Create tmp directory to hold data dump
    2) Dump the data into the tmp folder
    3) Restore the data to your live database
    4) Test the live database


# Step 1) Create tmp directory to hold data dump
$ mkdir -p ~/tmp/mongodump

# Step 2) Dump the data into the tmp folder
// use the mongodump command
$ mongodump -h localhost:27017 -d Loc8r -o ~/tmp/mongodump

# Step 3) Restore the data to your live database
// use the mongorestore

$ mongorestore -h ds151169.mlab.com:51169 -d dev_mean_stack -u dev -p abcdabcd ~/tmp/mongodump/Loc8r

# Step 4) Test the live database
// to connect with a remote mongo database, you use
$ mongo hostname:port/database_name -u username -p password

// in our case
$ mongo ds151169.mlab.com:51169/dev_mean_stack -u dev -p abcdabcd

# Making the application choose between development and production connection strings
// Use NODE_ENV to handle switching between the two environments

$ heroku config:set NODE_ENV=production

# To read the current environment from code
>process.env.NODE_ENV

# Launch `nodemon` and setting environment
$ NODE_ENV=production nodemon

// launching by also updating `MONGOLAB_URI`
$ NODE_ENV=production MONGOLAB_URI=mongodb://dev:abcdabcd@ds151169.mlab.com:51169/dev_mean_stack nodemon start