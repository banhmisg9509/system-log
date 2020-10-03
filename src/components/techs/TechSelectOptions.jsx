import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

function TechSelectOptions({ tech: { techs } }) {
  return (
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName + ' ' + t.lastName}
      </option>
    ))
  );
}

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps)(TechSelectOptions);
