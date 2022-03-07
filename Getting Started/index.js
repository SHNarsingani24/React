
 /* -------------------------- Hello World in React -------------------------- */
// because of cdn scripts in HTML file we will have a global object "ReactDOM" through which we can render 
// things at different places.
// this line of code is working similar to appending a child node to root div.
// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));

// Challange - render unordered list using ReactDOM.
// ReactDOM.render(<ul>
//     <li>Eat</li>
//     <li>Sleep</li>
//     <li>Code</li>
//     <li>Repeat</li>
// </ul>, document.getElementById('root'));


/* ---------------------------- Why to use React ---------------------------- */
// Challenge Create custom component and render it.
function MainComponent(){
    // NOTE: function's name should start with capital letter otherwise it won't work!!
    return (
        <h3>My name is Sagar, I am learning REACTJS.</h3>
    );
}
// in this way we can make many custom components and using those components we can make the whole page.
// this property is known as Composability - from small components making large things.
// ReactDOM.render(<div> <MainComponent/> </div>, document.getElementById('root'));

// as we can see these four lines are used to make only one single element on the page.
// what if we want to make multiple elements? --- It can be head-ache right?
// const newElement = document.createElement('h1');
// newElement.textContent = 'Example of Imperative Way!';
// newElement.className = "header";
// document.getElementById('root').appendChild(newElement);

// using React we can do same task in just one single line.
// ReactDOM.render(<h1 className='header'>Example of Declarative Way!</h1>, document.getElementById('root'));

/* ------------------------------- What is JSX ------------------------------ */
// as we can see in previous sections we are using HTML in render function,
// but... isn't this JavaScript File 🤔???
// Actually it is something known as JSX (JavaScript Flavour Somewhat similar to XML).
// we we write JSX, it kind of work as a function and returns an JavaScript Object.
// We can see that by this example.

// const page = (
//     <div>
//         <h1> My name is Sagar. </h1>
//         <p> I am learning React. </p>
//     </div>
// );

// console.log(page);
// will log an object.

// NOTE: when we select any HTML element using querySelector or anything, 
// it will remain as HTML and not as object.

// Challange -- Create a navbar.
// This is JSX.
const navbar = (
    <nav>
        <h1>SagarSpace</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById('root'));