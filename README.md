
# leaflet_geosearch


```markdown
# Vite React Leaflet Starter

This project serves as a starter template for creating React applications with Vite and integrating Leaflet for interactive maps. It provides a quick and efficient setup for developers to kickstart their projects that involve mapping functionalities.

## Features

- **Vite**: A fast and efficient build tool for modern web development.
- **React**: A JavaScript library for building user interfaces.
- **Leaflet**: An open-source JavaScript library for interactive maps.
- **leaflet-geosearch**: A plugin for Leaflet to enable geocoding and geosearch functionality.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/MosaBeryal/leaflet_geosearch.git
```

2. Navigate to the project directory:



3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit [http://localhost:5173](http://localhost:5173) to see the app in action.

## Usage

This project includes a simple React component (`MapComponent.jsx`) that integrates a Leaflet map with additional features such as geolocation search and marker placement.

### Map Configuration

- The map is initially centered at coordinates `[0, 0]` with a zoom level of `2`. You can customize the initial view by modifying the `center` and `zoom` properties in the `MapContainer` component.

```jsx
// Example: Set initial center and zoom level
<MapContainer center={[0, 0]} zoom={2}>
  {/* ... */}
</MapContainer>
```

### GeoSearch Control

The project utilizes the `leaflet-geosearch` library to enable a search control for geocoding. The `CustomGeoSearchControl` component is responsible for adding this control to the map.

```jsx

// Example: Customize geosearch control
const CustomGeoSearchControl = () => {
  // ...
};
```

### Marker Placement

Markers can be placed on the map by clicking on a location. The `LocationMarker` component handles the click events and displays a popup with the selected coordinates.

```jsx
// Example: Handle click events to place markers
const LocationMarker = () => {
  // ...
};
```

Feel free to explore and expand upon these components based on your project requirements.

