import {
  GoogleMap as BaseGoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import React, { useMemo } from "react";
import { getGoogleMapConfig } from "./config";
import { getGoogleMapApiKey } from "./google-map-services";
import { GoogleMapLocation } from "./GoogleMapLocation";
import type { GoogleMapProps } from "./types";

const DefaultComponent = ({ location }: { location: Location }) => null;

const LocationComponent =
  getGoogleMapConfig("locationComponent") || DefaultComponent;

export function GoogleMap({
  apiKey = getGoogleMapApiKey(),
  locations = [],
  center = getGoogleMapConfig("defaultCenter"),
  id = "google-map",
  zoom = getGoogleMapConfig("defaultZoom"),
  height = getGoogleMapConfig("height"),
  width = getGoogleMapConfig("width"),
  styles = {},
  locationComponent = LocationComponent,
  loadingComponent: LoadingComponent = getGoogleMapConfig("loadingComponent") ||
    (() => null),
}: GoogleMapProps) {
  // initializing google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: String(apiKey),
    libraries: getGoogleMapConfig("libraries"),
  });

  const markers = useMemo(() => {
    if (locations?.length > 0) return locations;

    return [center];
  }, [locations, center]);

  if (!isLoaded) {
    return <LoadingComponent />;
  }

  return (
    <>
      <BaseGoogleMap
        id={id}
        zoom={zoom}
        mapContainerStyle={{
          height,
          width,
          ...(styles.container || {}),
        }}
        center={center}
      >
        {markers.map((location, index) => (
          <GoogleMapLocation
            Component={locationComponent}
            key={index}
            location={location}
          />
        ))}
      </BaseGoogleMap>
    </>
  );
}
