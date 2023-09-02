import React, { Component } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

class MapComponent extends Component {
  componentDidMount() {
    // Inisialisasi peta hanya jika peta belum ada
    if (!this.map) {
      this.map = L.map("map").setView([51.505, -0.09], 13);

      // Tambahkan peta dasar
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      // Geokoding alamat ke koordinat
      const address =
        "Jl. Pangeran Limboro, Dusun III Kalipagu, Ketenger, Kec. Baturaden, Kabupaten Banyumas, Jawa Tengah 53152";
      this.geocodeAddress(address);
    }
  }

  geocodeAddress(address) {
    // Gunakan Google Geocoding API atau layanan geokoding lainnya untuk mengambil koordinat
    // Contoh penggunaan Google Geocoding API:
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=YOUR_API_KEY`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          const location = data.results[0].geometry.location;
          // Tambahkan marker ke lokasi yang ditemukan
          L.marker([location.lat, location.lng])
            .addTo(this.map)
            .bindPopup("Alamat: " + address)
            .openPopup();
        } else {
          console.log("Alamat tidak ditemukan");
        }
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  }

  render() {
    return <div id="map" style={{ height: "500px" }}></div>;
  }
}

export default MapComponent;
