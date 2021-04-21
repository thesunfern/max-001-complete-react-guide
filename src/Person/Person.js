import React, { Component } from "react";
import "./Person.css";

import styled from "styled-components";

// const person = (props) => {
//     return(
//         <div>
//             <div>I'm {props.name}. I'm {props.age} years old.</div>
//         </div>
//     )
// }

const StyledDiv = styled.div`
  width: 60%;
  margin: 10px auto;
  border: 1px solid #104326;
  box-shadow: 0 2px 3px #ccc;
  padding: 15px;
  text-align: center;
  background-color: #a3c2a3;
`;

class person extends Component {
  render() {
    return (
      <StyledDiv>
        <div onClick={this.props.click}>
          I'm {this.props.name}. I'm {this.props.age} years old.{" "}
          {this.props.children}
        </div>
        <div>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </StyledDiv>
    );
  }
}

export default person;
