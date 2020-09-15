import { logsAPI } from 'api';
import React, { useEffect, useState } from 'react';

function Logs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    //es-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const data = await logsAPI.getLogs();
    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Loadding logs...</h4>;
  }

  return (
    <ul className='collection-with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show ...</p>
      ) : (
        logs.map((log) => <li key={log.id}>{log.message}</li>)
      )}
    </ul>
  );
}

export default Logs;
