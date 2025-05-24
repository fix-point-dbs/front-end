import currentIconUrl from "../assets/icons/current-location.png";
import serviceIconUrl from "../assets/icons/service.png";
import L from "leaflet";
export const currentLocationIcon = new L.Icon({
  iconUrl: currentIconUrl,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -30],
});

export const serviceIcon = new L.Icon({
  iconUrl: serviceIconUrl,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -30],
});
