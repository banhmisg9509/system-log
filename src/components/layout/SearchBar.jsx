import { logActions } from 'actions';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { connect } from 'react-redux';

function SearchBar({ searchLogs }) {
  const text = useRef('');
  const typingTimeoutRef = useRef(null);

  const onChange = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      searchLogs(text.current.value);
    }, 300);
  };

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              ref={text}
              onChange={onChange}
              placeholder='Search logs...'
              autoComplete='off'
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs: logActions.searchLogs })(SearchBar);
