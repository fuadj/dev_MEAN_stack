var mongoose = require( 'mongoose' );

var openingTimeSchema = new mongoose.Schema({
    days: {type: String, required: true},
    opening: String,
    closing: String,
    closed: {type: Boolean, required: true}
});

var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {type: Number, required: true, min: 0, max: 5},
    reviewText: String,
    createdOn: {type: Date, "default": Date.now}
});

var locationSchema = new mongoose.Schema({
    name: { type:String, required: true },
    address: String,
    rating: { type: Number, "default": 0, min: 0, max: 5 },
    facilities: [String],                               // a string array
    coords: {type: [Number], index: '2dsphere'},        // GeoJSON type. Stores Longitude + Latitude
    openingTimes: [openingTimeSchema],                  // nested schema
    reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema, 'Locations');