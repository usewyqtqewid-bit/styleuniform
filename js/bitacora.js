// bitacora.js — guarda eventos en localStorage
window.logEvent = async function(type, payload){
  const evt = { type, payload, ts: new Date().toISOString() };
  const arr = JSON.parse(localStorage.getItem("bitacora") || "[]");
  arr.push(evt);
  localStorage.setItem("bitacora", JSON.stringify(arr));
  return evt;
};