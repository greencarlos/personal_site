By default, most elements are rendered onto the screen
starting in the top left corner of their parent element
and going one after another down and the right.

We can use the CSS position property, along with the 
properties top, left, right and bottom, to precisely
adjust elements' placements and create all kinds of 
interesting layouts.


RELATIVE
Positions element relative to where it was supposed to be.


FIXED
Element does not occupy its default position.

No matter how small the browser window gets
the element will always be 50px from the top
of the browser and 60px from the left of the browser.

The element becomes an inline-block element, so the
width it takes up becomes like inline elements. 


ABSOLUTE
Similar to fixed; the only difference is that the 
top, bottom, left and right properties are relative to the
element's parent instead of the window.


BOX MODEL
Every HTML element display on your page follows
the box model.

This means that every element has a margin 
(distance between elements), a border inside the margin,
and padding within the border.


WIDTH
Sets the width of the content.

INLINE-BLOCK
block elements take up 100% of the width
of their parents; inline elements only
take up only the width of their content.

Sometimes, neither of these will work
- you may want your elements to take
up a certain, specified width only.

To do this, you can set the elements to 
have a display: inline-block;

You can center an inline-block element by giving it a margin: auto;



FLEXBOX
Flexbox is a display mode in CSS that lets
a container (like a div) resize its
children as needed to maximize the use of 
space along an axis (horizontal or vertical)
