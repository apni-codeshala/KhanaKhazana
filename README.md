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

## Tommorow start learning config deiven UI concept.

In a traditional world, data is driven by the backend and the UI is driven by each client (web, iOS, and Android). As an example, let’s take Airbnb’s listing page. To show our users a listing, we might request listing data from the backend. Upon receiving this listing data, the client transforms that data into UI.

This comes with a few issues. First, there’s listing-specific logic built on each client to transform and render the listing data. This logic becomes complicated quickly and is inflexible if we make changes to how listings are displayed down the road.

Second, each client has to maintain parity with each other. As mentioned, the logic for this screen gets complicated quickly and each client has their own intricacies and specific implementations for handling state, displaying UI, etc. It’s easy for clients to quickly diverge from one another.

Finally, mobile has a versioning problem. Each time we need to add new features to our listing page, we need to release a new version of our mobile apps for users to get the latest experience. Until users update, we have few ways to determine if users are using or responding well to these new features.

### The Case for System Driven UI

What if clients didn’t need to know they were even displaying a listing? What if we could pass the UI directly to the client and skip the idea of listing data entirely? That’s essentially what SDUI does — we pass both the UI and the data together, and the client displays it agnostic of the data it contains.

Airbnb’s specific SDUI implementation enables our backend to control the data and how that data is displayed across all clients at the same time. Everything from the screen’s layout, how sections are arranged in that layout, the data displayed in each section, and even the actions taken when users interact with sections is controlled by a single backend response across our web, iOS, and Android apps.

For full understanding of system drviem UI [Click Here](https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5)

### Path children will only render usind the use of outlet