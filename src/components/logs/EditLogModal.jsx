import { logActions } from 'actions';
import TechSelectOptions from 'components/techs/TechSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function EditLogModal({ log, updateLog }) {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (log) {
      setMessage(log.message);
      setAttention(log.attention);
      setTech(log.tech);
    }

  }, [log]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const EditedLog = {
        message,
        tech,
        attention,
        date: new Date(),
        id: log.id,
      };

      updateLog(EditedLog);
      M.toast({ html: 'Log edited' });

      // reset fields
      setMessage('');
      setAttention(false);
      setTech('');
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              placeholder='Log Message'
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
}

const modalStyle = {
  width: '75%'
};

EditLogModal.propTypes = {
  log: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log.current,
});

export default connect(mapStateToProps, { updateLog: logActions.updateLog })(
  EditLogModal
);
