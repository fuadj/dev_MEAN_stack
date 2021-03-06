$ npm install           // installs dependencies reading package.json

// to add ADDITIONAL additional packages 
$ npm install --save package-name

appendix A:
    -Node and npm
    -The Express generator installed globally
    -Git
    -Heroku

When installing express(the web framework), you can choose the following:
    -Which HTML template engine to use
    -Which CSS preprocessor to use
    -Whether to add support for sessions

DEFAULT IS: use Jade template engine, NO Css pre-processing or session support.


================
||  Jade, HTML templating engine
================
NOTE: Jade templates MUST be indented using spaces, not tabs


e.g:    // the following template compiles to the ff HTML
    
    #banner.page-header
        h1 My page
        p.lead Welcome to my page

    "COMPILES TO"
    
    <div id="banner" class="page-header">
        <h1>My page</h1>
        <p class="lead">Welcome to my page</p>
    </div>

NOTES:
    1) If no tag specified, it defaults to a <div> tag
    2) #some_text is converted to an id="some_text"
    3) .some_text is converted to a class="some_text"
================
||  END: Jade, HTML templating engine
================

================
||  creating a new Express project
================
cd into the folder and run  
$ express

to launch the app
$ npm start

if you want live-update of the app in development, 
$ nodemon


================
|| Exporting funtions in Nodejs
================
    // define (in the exporter)
    module.exports = function () {
        console.log("This is exposed to the requester");
    };

    // require (in the importer)
    require('./yourModule');

// if you want to name the exported function
    module.exports.logThis = function () {
        console.log("This is exposed to the requester");
    };

    // in the importer file
    var yourModule = require('./yourModule');
    yourModule.logThis("Hooray, it works!");


// running foreman
$ nf start


// creating a heroku app
$ heroku create

# heroku adding dynoms
$ heroku ps:scale web=1

# heroku pushing updates
$ git push heroku master

# locally installing required packages
$ npm install



#
# Populating Jade templates
#
// There are 2 methods to populate Jade templates
    1) Interpolation: inserting data into the middle of some other content
        e.g: h1 Welcome to #{pageheader.title}
        NOTE: if data has HTML, it will be escaped for security reasons
                if you want the browser to render it as HTML, do the following
                e.g: h1 Welcome to !{pageHeader.title}
    2) Buffered code: you build the string using javascript
        e.g: h1= "Welcome to " + pageHeader.title

# Looping with Jade
// to loop through an array in Jade templates

$ each <entity-name> in <array-name>
e.g:
$ each location in locations


# Running javascript inside Jade templates
// to run javascript inside Jade templates
$ prefix the line with a dash or a hyphen