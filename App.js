const heading = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", {id: "child"},[ React.createElement("h1", {}, "h1 inside div"), React.createElement("h2", {}, "h1 inside div")])
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);
  