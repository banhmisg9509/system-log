import { logsAPI } from 'api';
import { LogItem, PreLoader } from 'components';
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
        logs.map((log) => <LogItem key={log.id} log={log}/>)
      )}
    </ul>
  );
}

export default Logs;
