export const getLogs = async () => {
  const res = await fetch('/logs');
  const data = await res.json();
  return data;
};

export const addLog = async (log) => {
  const res = await fetch('/logs', {
    method: 'POST',
    body: JSON.stringify(log),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  return data;
};

export const deleteLog = async (id) => {
  const res = await fetch(`/logs/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  return data;
};
