import React, { Component, useState } from "react";
import "./App.css";
import Radium from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 101, name: "Sunny", age: 26 },
      { id: 102, name: "Anil", age: 26 },
      { id: 103, name: "Abhi", age: 27 },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((item) => {
      return item.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const personsCopy = [...this.state.persons];
    personsCopy[personIndex] = person;

    this.setState({ persons: personsCopy });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const styleVar = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "ipx solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let showPersonsTemplate = null;

    if (this.state.showPersons) {
      showPersonsTemplate = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                key={person.id}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
            click={this.switchNameHandler.bind(this, "Anil!")}
          >
            I'm an Idiot!
            <p>Also trying this out</p>
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );
      styleVar.backgroundColor = "red";
      styleVar[":hover"] = {
        backgroundColor: "pink",
        color: "black",
      };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <p className={classes.join(" ")}>This is actually working!!</p>
        <button style={styleVar} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {showPersonsTemplate}
      </div>
    );
  }
}

// const App = (props) => {
//   const [personsState, setPersonsState] = useState([
//     { name: "Sunny", age: 26 },
//     { name: "Anil", age: 26 },
//     { name: "Abhi", age: 27 },
//   ]);

//   const switchNameHandler = () => {
//     setPersonsState([
//       { name: "Sunny Fernandes", age: 26 },
//       { name: "Anil Naidu", age: 26 },
//       { name: "Abhishek Jilla", age: 27 },
//     ]);
//   };

//   return (
//     <div className="App">
//       <h1>I'm a React App</h1>
//       <p> This is actually working!!</p>
//       <button onClick={switchNameHandler}>Change Name</button>
//       <Person name={personsState[0].name} age={personsState[0].age} />
//       <Person
//         name={personsState[1].name}
//         age={personsState[1].age}
//       >
//         I'm an Idiot!
//         <p>Also trying this out</p>
//       </Person>
//       <Person name={personsState[2].name} age={personsState[2].age} />
//     </div>
//   );
// };

export default Radium(App);
