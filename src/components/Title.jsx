import React from 'react';
import PropTypes from 'prop-types';

const Title = class extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
};
Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
