import React from "react";

export type Location = {
  location: {
    lat: number;
    lng: number;
  };
  [key: string]: any;
};

export type GoogleMapProps = {
  apiKey?: string;
  locations?: Location[];
  zoom?: number;
  center?: {
    lat: number;
    lng: number;
  };
  id?: string;
  height?: string;
  width?: string;
  styles?: {
    container?: React.CSSProperties;
  };
  locationComponent?: React.FC<{
    location: Location;
  }>;
  loadingComponent?: React.FC;
};
