import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Dropdown, DropdownButton, Container, Button } from 'react-bootstrap';
import './SearchFilter.css';

class SearchFilter extends React.Component {
  constructor(props) {
    super(props)

    this.resetFilters = () => {
      this.props.onFiltersChange({
        dateFilter: null,
        categoryFilter: null,
        sortFilter: null,
      })
    }
  }

  render() {
    return (
      <div className="SearchFilter">
        <Container fluid>
          <h4>Refine Search</h4>

          <div className="filters">
            {/* Date Filter */}
            <div className="date-filter">
              <DatePicker
                  placeholderText="Year"
                  showYearPicker
                  dateFormat="yyyy"
                  selected={this.props.dateFilter}
                  onChange={(date) =>
                    this.props.onFiltersChange({
                      ...this.props,
                      dateFilter: date,
                    })
                  }
              />
            </div>

            {/* Category Filter 
            <DropdownButton
              size="sm"
              title={
                this.props.categoryFilter
                  ? `Category: ${this.props.categoryFilter}`
                  : 'Select Category'
              }
              className="category-dropdown"
            >
              <Dropdown.Item
                onClick={() =>
                  this.props.onFiltersChange({
                    ...this.props,
                    categoryFilter: 'Research Methods',
                  })
                }
              >
                Research Methods
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  this.props.onFiltersChange({
                    ...this.props,
                    categoryFilter: 'Research Outcomes',
                  })
                }
              >
                Research Outcomes
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  this.props.onFiltersChange({
                    ...this.props,
                    categoryFilter: 'Software Engineering Methods',
                  })
                }
              >
                Software Engineering Methods
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  this.props.onFiltersChange({
                    ...this.props,
                    categoryFilter: 'Software Engineering Practices',
                  })
                }
              >
                Software Engineering Practices
              </Dropdown.Item>
            </DropdownButton>*/}

            {/* Sort by Filter */}
            <DropdownButton
              size="sm"
              title={
                this.props.sortFilter
                  ? `Sort by: ${this.props.sortFilter}`
                  : 'Sort by'
              }
              className="sort-dropdown"
            >
              <Dropdown.Item
                onClick={() =>
                  this.props.onFiltersChange({
                    ...this.props,
                    sortFilter: 'Author',
                  })
                }
              >
                Author
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  this.props.onFiltersChange({
                    ...this.props,
                    sortFilter: 'Title',
                  })
                }
              >
                Title
              </Dropdown.Item>
            </DropdownButton>

            {/* Reset Filter */}
            <div className="reset-filters-button">
              <Button size="sm" onClick={this.resetFilters}>Reset Filters</Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default SearchFilter;
