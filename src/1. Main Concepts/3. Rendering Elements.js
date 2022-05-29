// --- Rendering Elements ---

// Elements are the smallest building blocks of React apps.

// An element describes what you want to see on the screen:
const element = <h1>Hello, world</h1>;

// Unlike browser DOM elements, React elements are plain objects, and are cheap to create.
// React DOM takes care of updating the DOM to match the React elements.

// --- Rendering an Element into the DOM ---

// Let's say there is a "<div>" somewhere in your HTML file:
<div id="root"></div>;
// This is called a "root" DOM node because everything inside it will be managed by React DOM.

// Applications built with just React usually have a single root DOM node.
// If React is being integrated into an existing app, there may be as many isolated root DOM nodes as wanted.

// To render a React element, first pass the DOM element to "ReactDOM.createRoot()",
// then pass the React element to "root.render()":
const root = ReactDOM.createRoot(document.getElementById("root"));
element = <h1>Hello, world</h1>;
root.render(element);

// --- Updating the Rendered Element ---

// React elements are immutable. Once an element is created, it, its children or attributes cannot be changed.
// An e