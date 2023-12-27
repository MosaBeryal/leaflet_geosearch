import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents, useMap, Popup } from "react-leaflet";
import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";

export default function Leaflet() {
  const [map, setMap] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  console.log(selectedLocation)

  useEffect(() => {
    if (map) {
      map.setView([0, 0], 2); // Centered on the world with zoom level 2
    }
  }, [map]);

  const position = [0, 0];

  const CustomGeoSearchControl = () => {
    const map = useMap();

    useEffect(() => {
      const provider = new OpenStreetMapProvider();
      const searchControl = new GeoSearchControl({
        provider,
        style: "bar",
        autoComplete: true,
        autoCompleteDelay: 250,
        showMarker: true,
        showPopup: true,
        marker: {
          icon: new L.Icon.Default(),
          draggable: false,
        },
        maxMarkers: 1,
        retainZoomLevel: false,
        animateZoom: true,
      });

      // Check if the control already exists before adding it to the map
      const existingControl = map.getContainer().querySelector(".geosearch");
      if (!existingControl) {
        map.addControl(searchControl);
      }
    }, [map]);

    return null;
  };

  const handleClick = (e) => {
    setSelectedLocation(e.latlng);
  };

  const LocationMarker = () => {
    useMapEvents({
      click: handleClick,
    });

    return selectedLocation === null ? null : (
      <Marker position={selectedLocation}>
        <Popup>
          Latitude: {selectedLocation.lat.toFixed(4)}, Longitude:{" "}
          {selectedLocation.lng.toFixed(4)}
        </Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      center={position}
      zoom={2}
      style={{ height: "50vh", width: "50vw" }}
      whenCreated={setMap}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <CustomGeoSearchControl />
      <LocationMarker />
    </MapContainer>
  );
}
