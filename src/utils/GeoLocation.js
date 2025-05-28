export function getCurrentPosition(callbackSuccess, callbackError) {
  if (!navigator.geolocation) {
    alert("Geolocation tidak didukung oleh browser ini.");
    return;
  }

  if ("permissions" in navigator) {
    navigator.permissions
      .query({ name: "geolocation" })
      .then((permissionStatus) => {
        if (
          permissionStatus.state === "granted" ||
          permissionStatus.state === "prompt"
        ) {
          navigator.geolocation.getCurrentPosition(callbackSuccess, callbackError);
        } else if (permissionStatus.state === "denied") {
          alert(
            "Akses lokasi ditolak. Silakan aktifkan izin lokasi di pengaturan browser."
          );
        }

        permissionStatus.onchange = () => {
          console.log("Permission berubah jadi:", permissionStatus.state);
        };
      });
  } else {
    navigator.geolocation.getCurrentPosition(callbackSuccess, callbackError);
  }
}
