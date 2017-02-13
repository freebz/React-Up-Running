// CHAPTER 2 The life of a component

// Bare minimum

var MyComponent = React.createClass({
  /* specs */
});

var Component = React.createClass({
  render: function() {
    return React.DOM.span(null, "I'm so custom");
  }
});

React.render(
  React.createElement(Component),
  document.getElementById("app")
);
