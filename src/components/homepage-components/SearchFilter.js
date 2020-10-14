import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Dropdown, DropdownButton, Container } from 'react-bootstrap';
import './SearchFilter.css';

class SearchFilter extends React.Component {
  render() {
    return (
      <div className="SearchFilter">
        <Container fluid>
          <h3>Refine Search</h3>

          <div className="filters">
            {/* Date Filter */}
            <div className="date-filter">
              <div>Pick a date</div>
              <DatePicker
                selected={this.props.dateFilter}
                onChange={(date) =>
                  this.props.onFiltersChange({
                    ...this.props,
                    dateFilter: date,
                  })
                }
              />
            </div>

            {/* Category Filter */}
            <DropdownButton
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
            </DropdownButton>

            {/* Sort by Filter */}
            <DropdownButton
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
          </div>
        </Container>
      </div>
    );
  }
}
export default SearchFilter;
