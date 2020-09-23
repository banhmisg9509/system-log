import { techsAPI } from 'api';
import React, { useEffect, useState } from 'react';
import TechItem from './TechItem';

function TechListModal() {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    //es-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const data = await techsAPI.getTechs();
    setTechs(data);
    setLoading(false);
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs.map((tech) => (
              <TechItem key={tech.id} tech={tech} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default TechListModal;
