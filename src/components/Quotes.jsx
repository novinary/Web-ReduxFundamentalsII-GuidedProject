import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { shape, string, arrayOf, func } from 'prop-types';
import Quote from './Quote';
import { deleteQuote, makeQuoteOfTheDay } from '../App';


export class Quotes extends React.Component {
  render() {
    return (
      <div>
        <h3>My Favorite Quotes</h3>
        <div>
          {
            // is <Quote /> getting everything it needs?
            this.props.quotes.map(quote => (
              <Quote
                key={quote.id}
                quote={quote}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Quotes.propTypes = {
  // data from state:
  quotes: arrayOf(shape({
    id: string.isRequired,
    author: string.isRequired,
    text: string.isRequired,
  })).isRequired,
  quoteOfTheDay: string,
  // functions that change state:
  makeQuoteOfTheDay: func,
  deleteQuote: func,
};

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
    quoteOfTheDay: state.quoteOfTheDay,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteQuote,
    makeQuoteOfTheDay,
    // there are 2 keys missing here!
    // look at the propTypes for hints
    // (or imports at the top)
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
