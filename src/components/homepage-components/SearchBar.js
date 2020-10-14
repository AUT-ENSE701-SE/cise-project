import React from 'react';
import { Form } from 'react-bootstrap';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 id="heading">SEER</h1>

        <div className="px-4">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Search"
              value={this.props.value}
              onChange={(event) => this.props.onChange(event.target.value)}
            />
          </Form.Group>
        </div>
      </div>
    );
  }
}
export default SearchBar;
