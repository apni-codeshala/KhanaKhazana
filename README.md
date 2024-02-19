## Virtual Dom

Virtual DOM is not a concept just inside react it is a sodtware engineering concept.

Virtual DOM is a concept. We keep a represenation of DOM with us which is known as virtual DOM.

When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element in the application is a node in this tree. So, whenever there is a change in the state of any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again.

## Why we have to give unique key for childs inside any element

Suppose, we have one `<Parent>` tag inside which we have four `<div>`'s now if we make change in one div out of them, so react will get confused in which `<div>` I have to re-render. So we provide a unique key for child elements inside div.

Before React 16 DIFF algorithm is used to get the change in new Virtua DOM with respect to previous Virtual DOM after finding out the difference. In actual DOM it just re-render only that element that was changed.

After React 16 react uses react-fibre in place of diff algorithm.

- Using index as a key is a bad practice.
- Always use something unique key.

## Why using index as key is bad practice.

Let me explain, a key is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the key is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.

[For full explanation](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)


# Tommorow start with one way data binding concept in React