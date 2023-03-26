import { InfoWindow, MarkerF } from "@react-google-maps/api";
import React, { useState } from "react";
import { Location } from "./types";

export function GoogleMapLocation({
  Component,
  location,
}: {
  location: Location;
  Component?: React.ComponentType<{ location: Location }>;
}) {
  const [opened, toggleOpen] = useState(false);

  return (
    <MarkerF onClick={() => toggleOpen(!opened)} position={location}>
      {opened && Component && (
        <InfoWindow position={location}>
          <>
            <Component location={location} />
          </>
        </InfoWindow>
      )}
    </MarkerF>
  );
}
