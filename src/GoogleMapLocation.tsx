import { InfoWindow, Marker } from "@react-google-maps/api";
import React, { useState } from "react";
import { Location } from "./types";

export function GoogleMapLocation({
  Component,
  location,
}: {
  location: Location;
  Component: React.ComponentType<{ location: Location }>;
}) {
  const [opened, toggleOpen] = useState();

  return (
    <Marker onClick={() => toggleOpen(!opened)} position={location.location}>
      {opened && (
        <InfoWindow position={location.location}>
          <Component location={location} />
        </InfoWindow>
      )}
    </Marker>
  );
}
