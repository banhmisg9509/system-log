export const getLogs = async () => {
  const res = await fetch('/logs');
  const data = await res.json();
  return data;
};
