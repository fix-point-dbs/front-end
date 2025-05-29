export function formatTanggal(isoString) {
  const tanggal = new Date(isoString);
  return tanggal.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function formatWaktu(isoString) {
  const waktu = new Date(isoString);
  return waktu
    .toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(".", ":");
}

export function formatJam(jamString) {
    if (!jamString) return "";
    const [jam, menit] = jamString.split(":");
    return `${jam}.${menit}`;
  }

export function formatTanggalDanWaktu(isoString) {
  return `${formatTanggal(isoString)}, ${formatWaktu(isoString)}`;
}
