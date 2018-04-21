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