SELECTING BY

There are many ways to select an element in the

<style> tag to apply CSS properties to it.

Element - <h1> element
h1 {
  color: rgba(255, 0, 0, 1);
}

Attribute - [type="text"]
[type="text"] {
  color: rgba(255, 0, 0, 1);
}

Class - .title2
.title2 {
  color: rgba(255, 0, 0, 1);
}

Children - div > h1
div > h1 {
  color: rgba(255, 0, 0, 1);
}


COMBINING SELECTORS

All <h1> elements with the class .title2 will have 
the font-size property.

h1.title2 {
  font-size: 2rem;
}

All <h1> elements and all elements with class .title2 will
have the color property.

h1, .title2 {
  color: rgba(255, 0, 0, 1);
  }


SELECTION COLLISIONS

<h1 class="hello">Welcome</h1>
<style>
h1 {
 color: rgba(255, 0, 0, 1);
}
.hello {
  color: rgba(0, 255, 0, 1);
}

The h1 element should be green because the class value overwrites
the HTML element.

Heirarchy
1. inline styling 
2. Class
3. id
4. attribute/children

1. inline style attribute
2. ID
3. Class, pseudo-class, attribute
4. HTML Elements

