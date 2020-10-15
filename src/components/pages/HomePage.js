import React from 'react';
import { Spinner } from 'react-bootstrap';
import './HomePage.css';
import SearchBar from '../homepage-components/SearchBar';
import SearchFilter from '../homepage-components/SearchFilter';
import SearchButton from '../homepage-components/SearchButton';
import SearchResults from '../homepage-components/SearchResults';
import http from '../../utils/http';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isLoading: false,
      dateFilter: null,
      categoryFilter: null,
      sortFilter: null,
      searchResult: null,
    };

    this.onSearchButtonClick = () => {
      if (!this.state.inputValue) {
        window.alert('Please type at least a keyword');
        return;
      }

      if (this.state.isLoading) {
        return;
      }

      this.setState({
        isLoading: true,
      });

      http
        .get(`/search/${this.state.inputValue}`)
        .then((res) => {
          let result = res.data;
          console.log(res.data);

          if (!result.evidences) {
            this.setState({
              searchResult: result,
            });
            return;
          }

          if (this.state.dateFilter) {
            const targetYear = new Date(this.state.dateFilter).getFullYear();

            result.evidences = result.evidences.filter(
              (item) => new Date(item.EvidenceDate).getFullYear() === targetYear
            );
          }

          if (this.state.sortFilter) {
            result.evidences = result.evidences.sort((a, b) => {
              switch (this.state.sortFilter) {
                case 'Author':
                  return a.EvidenceAuthor.localeCompare(b.EvidenceAuthor);

                case 'Title':
                  return a.EvidenceTitle.localeCompare(b.EvidenceTitle);
              }
            });
          }

          this.setState({
            searchResult: result,
          });
        })
        .catch((err) => {
          window.alert('Error: ' + err.message);
        })
        .finally(() => {
          this.setState({
            isLoading: false,
          });
        });
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

        <div className="results-container">
          {this.state.isLoading && (
            <div className="loading-spinner">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          )}

          {this.state.searchResult && (
            <SearchResults result={this.state.searchResult} />
          )}
        </div>
      </div>
    );
  }
}
export default HomePage;
