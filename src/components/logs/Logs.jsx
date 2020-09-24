import { logActions } from 'actions';
import { LogItem, PreLoader } from 'components';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function Logs({ log: { logs, loading }, getLogs }) {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show ...</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
}

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  log: state.log,
});

const mapDispatchToProps = {
  getLogs: logActions.getLogs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logs);
