const Pet = ({ name, animal, bread }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, bread),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      bread: "Havanese",
      key: 1,
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      bread: "Cockatiel",
      key: 2,
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
