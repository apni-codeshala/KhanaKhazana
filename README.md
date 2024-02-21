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


## One way data binding concept in React

One-way means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That’s why it is referred to as one-way data binding.

React achieves one-way data binding by using state and props.

    * Props

    Props (short for properties) are the mechanism by which data is passed from a parent component to its children. They are read-only, meaning that child components cannot modify the data received from their parent components.

    Now since the data is read-only, the child component can’t update it. This is one-way data binding.

    * State

    Components in React can have dynamic behavior by representing their internal data using state, which can be managed in both class and function components.


## Two-way data binding

Two-way data binding allows bidirectional data flow, meaning that changes in the UI automatically update the component’s state, and changes in the state automatically update the UI. In React, two-way data binding is achieved using controlled components.

    * Controlled components

    Controlled components are form elements whose values are controlled by the state. They maintain a consistent, bidirectional data flow between the UI components and the data models.

![Image](https://handsontable.com/blog/wp-content/uploads/2023/04/image10.png)

#### For full reference of one way and two way data binding in react [Click Here](https://handsontable.com/blog/understanding-data-binding-in-react)

#### After wards focus on Advance data binding concepts in react
    * Lifting State up

    Lifting state up is a technique where the state is moved to a common ancestor component, enabling sibling components to share and synchronize data. This approach allows for better communication between components and promotes a unidirectional data flow.

    * Compound components

    Compound components are a technique to create more flexible and composable components by grouping multiple components together and managing their shared state.

All data binding cocept is available inside referece with example

# Tommorow start learning config deiven UI concept.