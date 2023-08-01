export function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

export function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371; // Rayon de la Terre en kilomètres

  // Conversion des coordonnées en radians
  const lat1Rad = toRadians(lat1);
  const lon1Rad = toRadians(lon1);
  const lat2Rad = toRadians(lat2);
  const lon2Rad = toRadians(lon2);

  // Différence des longitudes et latitudes
  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;

  // Formule de la distance haversine
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1Rad) *
      Math.cos(lat2Rad) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return Math.round(distance);
}
