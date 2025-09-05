/ capitán_guardian.js

export async function capitanObserva() {
  const res = await fetch("guardianes_depato.json");
  const data = await res.json();

  const guardianesActivos = data.guardianes.filter(g => g.estado === "activo");
  const totalEventos = data.eventos.length;
  const eventosPorModulo = {};

  data.eventos.forEach(e => {
    const mod = e.modulo || "sin_modulo";
    eventosPorModulo[mod] = (eventosPorModulo[mod] || 0) + 1;
  });

  const eventoCapitan = {
    modulo: "capitán_guardian",
    accion: "observación del sistema",
    estado: "exitoso",
    fecha: new Date().toISOString(),
    detalle: {
      guardianes_activos: guardianesActivos.map(g => g.nombre),
      total_eventos: totalEventos,
      eventos_por_modulo: eventosPorModulo
    }
  };

  console.log("🧭 Observación registrada por capitán_guardian:", eventoCapitan);

  // Simulación: guardar en localStorage
  const eventos = JSON.parse(localStorage.getItem("mi_guardian_eventos") || "[]");
  eventos.push(eventoCapitan);
  localStorage.setItem("mi_guardian_eventos", JSON.stringify(eventos));
}

