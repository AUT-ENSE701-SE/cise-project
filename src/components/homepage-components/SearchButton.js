import React from 'react';
import './SearchButton.css';
import { Button } from 'react-bootstrap';

class SearchButton extends React.Component {
  render() {
    return (
      <div>
        <Button className="button-style" {...this.props}>
          Search
        </Button>
      </div>
    );
  }
}

export default SearchButton;
