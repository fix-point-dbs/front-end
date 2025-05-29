import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

export default function RoutingMachine({ map, from, to, name, notelp, id, onRouteFound }) {
  useEffect(() => {
    if (!map || !from || !to) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
      lineOptions: { styles: [{ color: "#007bff", weight: 5 }] },
      show: false,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      createMarker: () => null,
    }).addTo(map);

    routingControl.on("routesfound", function (e) {
      const route = e.routes[0];
      const distance = (route.summary.totalDistance / 1000).toFixed(2);
      const duration = Math.ceil(route.summary.totalTime / 60);
      const nama = name;
      const nohp = notelp;
      const idService = id;
      onRouteFound({ distance, duration, nama, nohp, idService });
    });

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, from, to]);

  return null;
}
