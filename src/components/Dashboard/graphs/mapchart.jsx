import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// URL to fetch GeoJSON data for India's states
const geoUrl = "/india.json"; // Update this path if needed

// Example user data with state-wise user count and color customization
const userCount = [
  { state: "Andhra Pradesh", count: 100, color: "#f982c6" },
  { state: "Telangana", count: 200, color: "#f47c75" },
  { state: "Maharashtra", count: 300, color: "#9cbfde" },
  { state: "Karnataka", count: 150, color: "#eed67b" },
  { state: "Tamil Nadu", count: 250, color: "#7bd1d9" },
  { state: "Uttar Pradesh", count: 500, color: "#F6C8A5" },
  { state: "Bihar", count: 400, color: "#C2C5D6" },
  // Add other states and their colors here
];

const MapChart = () => {
  return (
    <div style={{ width: "100%", height: "500px" }}> {/* Increased container height */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000, // Increased scale for a larger map
          center: [78.9629, 22.5937], // Center on India's coordinates
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName = geo.properties.name || "Unknown State"; // Handle missing state names
              const data = userCount.find(
                (item) =>
                  item.state?.toLowerCase() === stateName?.toLowerCase() // Match state names case-insensitively
              );
              const fillColor = data ? data.color : "#d3d3d3"; // Default grey color for unmatched states

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fillColor}
                  style={{
                    default: {
                        outline: "white", // White outline for all states
                        outlineWidth: "1px",
                    },
                    hover: { fill: "#FFD700", outline: "none" }, // Highlight on hover
                    pressed: { outline: "none" },
                  }}
                  onMouseEnter={() => {
                    console.log(`State: ${stateName}, Count: ${data?.count || 0}`);
                  }}
                  onMouseLeave={() => {
                    console.log("Mouse left");
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
