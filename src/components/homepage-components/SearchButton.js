import React from 'react';
import { Button } from 'react-bootstrap';
import './SearchButton.css';

class SearchButton extends React.Component {
  render() {
    return (
      <div>
        <Button className="button-style" variant="success" {...this.props}>
          Search
        </Button>
      </div>
    );
  }
}

export default SearchButton;
