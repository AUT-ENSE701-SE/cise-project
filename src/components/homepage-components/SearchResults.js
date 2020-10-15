import React from 'react';
import { Card } from 'react-bootstrap';
import './SearchResults.css';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.getResultMsg = (evidences) => {
      if (evidences && evidences.length) {
        return 'Found ' + evidences.length + ' evidence(s)';
      } else {
        return `Cannot find any evidences with given query, give try again`;
      }
    };
  }

  render() {
    const result = this.props.result;

    return (
      <div className="SearchResults">
        {result.status ? (
          <div>Result: {this.getResultMsg(result.evidences)}</div>
        ) : (
          <div>Result: {result.msg}</div>
        )}

        <div className="result-list">
          {result.evidences.map((item) => {
            return (
              <div key={item.EvidenceID} className="result-item">
                <Card>
                  <Card.Body>
                    <Card.Title>{item.EvidenceTitle}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      #{item.EvidenceID}
                    </Card.Subtitle>
                    <div className="result-content">
                      <Card.Text>
                        <span className="content-key">Volume:</span>{' '}
                        <span>{parseNull(item.EvidenceVolume)}</span>
                        <br />
                        <span className="content-key">Author:</span>{' '}
                        <span>{parseNull(item.EvidenceAuthor)}</span>
                        <br />
                        <span className="content-key">Publisher:</span>{' '}
                        <span>{parseNull(item.EvidencePublisher)}</span>
                      </Card.Text>
                      <Card.Text>
                        <span className="content-key">DOI:</span>{' '}
                        <span>{parseNull(item.EvidenceDOI)}</span>
                        <br />
                        <span className="content-key">Page Numbers:</span>{' '}
                        <span>{parseNull(item.EvidencePageNumbers)}</span>
                        <br />
                        <span className="content-key">Year:</span>{' '}
                        <span>{new Date(item.EvidenceDate).getFullYear()}</span>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function parseNull(str) {
  return str === 'NULL' || !str ? 'N/A' : str;
}

export default SearchResults;
