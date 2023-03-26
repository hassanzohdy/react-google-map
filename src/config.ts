import React from "react";
import { Location } from "./types";

export type GoogleMapConfigurations = {
  apiKey: string;
  defaultCenter?: {
    lat: number;
    lng: number;
  };
  height?: number;
  width?: string | number;
  libraries?: string[];
  defaultZoom?: number;
  currentLocaleCode?: () => string;
  locationComponent?: React.FC<{
    location: Location;
  }>;
  loadingComponent?: React.FC;
};

let googleMapConfigurations: GoogleMapConfigurations = {
  defaultCenter: {
    lat: 0,
    lng: 0,
  },
  height: 500,
  width: "100%",
  apiKey: "",
  libraries: ["drawing", "geometry", "localContext", "places", "visualization"],
  defaultZoom: 15,
  currentLocaleCode() {
    return "en";
  },
};

export function setGoogleMapConfigurations(
  configurations: GoogleMapConfigurations
) {
  googleMapConfigurations = { ...googleMapConfigurations, ...configurations };
}

export function getGoogleMapConfig(key: keyof GoogleMapConfigurations) {
  return googleMapConfigurations[key];
}
