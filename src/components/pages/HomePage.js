import React from 'react';
import SearchBar from '../homepage-components/SearchBar';
import SearchFilter from '../homepage-components/SearchFilter';
import SearchButton from '../homepage-components/SearchButton';
import { Container } from 'react-bootstrap';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      dateFilter: null,
      categoryFilter: null,
      sortFilter: null,
    };

    this.onSearchButtonClick = () => {
      console.log(this.state);
    };
  }

  render() {
    return (
      <div>
        <SearchBar
          value={this.state.inputValue}
          onChange={(newVal) => this.setState({ inputValue: newVal })}
        />
        <SearchFilter
          dateFilter={this.state.dateFilter}
          categoryFilter={this.state.categoryFilter}
          sortFilter={this.state.sortFilter}
          onFiltersChange={(newVal) => this.setState(newVal)}
        />
        <SearchButton onClick={this.onSearchButtonClick} />
      </div>
    );
  }
}
export default HomePage;
