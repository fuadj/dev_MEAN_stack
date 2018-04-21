bootstrap has 12 columns
# breakpoints for different screen sizes
Breakpoint name     | CSS reference | Example Device | Width in pixels
Extra-small devices   xs            Phones             Less than 768
Small devices         sm            Tablets            768 or more
Medium devices        md            Laptops            992 or more
Large devices         lg            External monitors  1,200 or more

// to define width of an element, you combine CSS reference with the num of columns

e.g:
    // make an element to take up 6 columns on screen of size sm and larger
    col-sm-6
    col         // denotes that this element will act as a column
        sm      // minimum target break point
           6    // number of columns to take up

// you can conbime them
<div class="col-xs-12 col-sm-6"></div>