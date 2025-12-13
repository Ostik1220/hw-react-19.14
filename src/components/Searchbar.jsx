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


class Searchbar extends Component {
  state = {
    query: "",
  };

  handleCollect = (event) => { 
    event.preventDefault();
    this.setState({ query: event.target.elements[1].value });
    event.target.elements[1].value = "";
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.props.collector(this.state.query);
    }
  }

  render() {
    return (
        <header className="searchbar">
  <form className="form" onSubmit={this.handleCollect}>
    <ButtonStyled type="submit">
      <span className="button-label">Search</span>
    </ButtonStyled>

    <input
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    );
  }
}

export default Searchbar;