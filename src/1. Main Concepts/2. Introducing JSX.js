// --- Introducing JSX ---

let element = <h1>Hello, world!</h1>;

// JSX is a syntax extension to JS.
// It is recommended to be used with React to describe what the UI should look like.

// JSX produces React "elements".

// --- Embedding Expressions in JSX ---

let name = "Finn Mertens";
element = <h1>Hello, {name}</h1>; // Hello, Finn Mertens

// Any valid JS expression can be put inside the curly braces.

// In the following example, the result of calling a JS function "formatName(user)",
// is embedded into an <h1> element.

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Finn",
  lastName: "Mertens",
};

element = <h1>Hello, {formatName(user)}!</h1>; // Hello Finn Mertens!

// --- JSX is an Expression Too ---

// After compilation, JSX expressions become regular JS function calls and
// evaluate to JS objects.

// This means JSX can be used inside of "if" statements and "for" loops,
// it can be assigned to variables, accepted as arguments, and return it from functions:

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger</h1>;
}

// --- Specifying Attributes with JSX ---

// Quotes are used to specify string literals as attributes:
element = <a href="https://reactjs.org/docs/introducing-jsx.html">link</a>;

// Curly braces are also used to embed a JS expression in an attribute:
element = <img src={user.avatarUrl}></img>;

// --- Specifying Children with JSX ---

// If a tag is empty, it may be closed immediately with "/>", like XML:
element = <img src={user.avatarUrl} />;

// JSX tags may contain children:
element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

// --- JSX Prevents Injection Attacks ---

// It is safe to embed user input in JSX:
const title = response.potentiallyMaliciousInput;
// This is safe:
element = <h1>{title}</h1>;

// By default, React DOM escapes any values embedded in JSX before rendering them.
// Thus it ensures that you can never inject anything that is not explicitly written
// in your application.
// Everything is converted to a string before being rendered.
// This helps prevemt XSS (cross-site-scripting) attacks.

// --- JSX Represents Objects ---

// Babel compiles JSX down to "React.createElement()" calls.

// These two examples are identical:
// 1.
element = <h1 className="greeting">Hello, world!</h1>;
// 2.
element = React.createElement("h1", { className: "greeting" }, "Hello, world!");

// "React.createElement()" performs a few checks to help write bug-free code
// but essentially it creates an object like this:
// ~ NOTE: this structure is simplified
element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};

// These objects are calles "React elements". 
// They can be thought of as descriptions of what is wanted to be seen on the screen.
// React reads these objects and uses them to contrust the DOM and keep it up to date.
