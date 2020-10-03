export const getTechs = async () => {
  const res = await fetch('/techs');
  const data = await res.json();
  return data;
};

export const addTech = async (tech) => {
  const res = await fetch('/techs', {
    method: 'POST',
    body: JSON.stringify(tech),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  return data;
};

export const deleteTech = async (id) => {
  const res = await fetch(`/techs/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  return data;
};