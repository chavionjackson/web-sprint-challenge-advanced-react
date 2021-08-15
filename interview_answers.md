# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Stateful component has the state, keeping track of and changing the data. Functional has no render and simply accept data and display it.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount is similar to useEffect in a functional component. Will mount after the render. componentWillUpdate mounts after the componentWillMount is called or updated.

3. Define stateful logic.

Any code that usses the state

4. What are the three step of creating a successful test? What is done in each phase?

Arrange/Act/Assert - Arrange sets up the demolike testing, calling specific elements from th DOM. Act is setting up the action of what the user is doing, click, type, ETC. Assert is telling us what should be on the DOM after specific tasks are performed.
