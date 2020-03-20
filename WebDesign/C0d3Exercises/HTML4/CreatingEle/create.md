CREATING ELEMENTS

Rather than setting a container's innerHTML to an empty string.
There's a more efficient way to add content:

document.createElement('tagName')
- We can create an element with the given tag's name and return the created element 

element.appendElement(element)
- After creating an element, you must append it to its new parent element. 
- You can also use prepend to put the element at the beginning of the parent.
