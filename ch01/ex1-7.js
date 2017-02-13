// Special DOM attributes

// COUNTEREXAMPLE
// this doesn't work
React.DOM.h1(
    {
	class: "pretty",
	for: "me"
    },
    "Hello world!"
);

// PROPER EXAMPLE
// this works
React.DOM.h1(
    {
	className: "pretty",
	htmlFor: "me"
    },
    "Hello world!"
);




// COUNTEREXAMPLE
// this doesn't work
React.DOM.h1(
    {
	style: "background: black; color: white; font-family: Verdana"
    },
    "Hello world!"
);

// PROPER EXAMPLE
// this works
React.DOM.h1(
    {
	style: {
	    background: "black",
	    color: "white",
	    fontFamily: "Verdana"
	}
    },
    "Hello world!"
);
