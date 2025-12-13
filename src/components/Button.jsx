import { Component } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
`;

class Button extends Component {
  render() {
    return (
        <ButtonStyled type="button" onClick={this.props.onClick}>
            Load More
        </ButtonStyled>
    );
    }
}
export default Button;
