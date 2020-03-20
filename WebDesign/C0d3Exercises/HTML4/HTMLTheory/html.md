HTML THEORY

In the previous section, we explored a few HTML tags such as
<input/>
<button></button>
<div></div>
<h1></h1>
<script></script>

This lesson wil cover the fundamentals of web design
that you should know as a software engineer.

Inline vs Block
Every HTML that the browser display is either an inline element 
or a block element.

INLINE
Inline elements only take up the width of their inner contents.
Examples:

<input/>
<a></a>
<img></img>
<button></button>
<select></select>

The <a> (link) tag
"a" stands for anchor, meaning this tag can be used as a link
to go somewhere else or as an anchor point that other pages can
use to link to that specific place on the page.

The href="" attribute stands for "hypertext reference" and
tells the browser where to go when the link is clicked.

The text inside the tags is what gets displayed.
Ex: <a href="https://c0d3.com">Click me</a>


BLOCK 
Block elements take up 100% of the width avaiilable to them.

This is the width of their container, or of the page (body)
if they don't have a container. 

Block elements will stack up on top of each other vertically.

Examples of block elements are <div>, all headings (<h1>, <h2>) 
and <p>

block elements take up 100% of the width and stack on each other
vertically
inline elements take up on the width of their content


MULTIPLE CLASSES

The HTML class attribute allows you to specify multiple 
classes for every element. You seperate each class with a space:
<div class="block div1 section1"></div>
<div class="block div2 section1"></div>
<div class="block div3 section1"></div>
<div class="block div4 section2"></div>
<div class="block div5 section2"></div>
<div class="block div6 section2"></div>

