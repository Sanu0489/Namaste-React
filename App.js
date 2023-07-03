const heading1 = React.createElement(
  "h1",
  { id: "first", key: 1, style: { color: "red" } },
  "Namaste React"
);
const heading2 = React.createElement(
  "h2",
  { id: "second", key: 2, style: { color: "green" } },
  "This is Sanu"
);
const container = React.createElement("div", {}, [heading1, heading2]);
console.log(heading1);
console.log(heading2);
console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
