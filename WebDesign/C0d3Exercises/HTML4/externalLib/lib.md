You can create your own library for your other HTML files to use when you don't want to write the same code over and over again.

Software Engineers almost never write Javascript into the 
script tag directly. 
They usually write their Javascript into a file.

This file then gets compressed by a minifier 
(all the spaces in the code are removed, 
variable names are shortened, .etc)

The script tag in the HTML will have a src attribute to the
minified file.


Note:

When providing a library, you will updated and change your
code over time. If 1000 people are depending on your library,
you should not simply updated the exisitng library.

Otherwise, if you introduce bugs or change features, 1000
people will have your bug or changed feature.

For this reson, when we name libraries we usually put
a version decimal in the file name and (very rarely) 
change the file after that (lib.v2.0.1.js)
