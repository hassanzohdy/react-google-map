# Google Map

A simple wrapper for Google maps in React.

## Installation

```bash
yarn add @mongez/react-google-map
```

> Package requires react 18 or higher

## Usage

First off, let's set the base configuration for the map. You can do this in your entry file, or in any other place that is executed before the map is used.

```tsx
import { setGoogleMapConfigurations } from '@mongez/react-google-map';

setGoogleMapConfigurations({
    apiKey: "", // required
});
```

All you need to set for basic google map rendering is the `api key`, now you're ready to go, but here are all the available configurations:

```tsx
import { setGoogleMapConfigurations } from '@mongez/react-google-map';
import { Loader } from './Loader';
import { LocationComponent } from './LocationComponent';

setGoogleMapConfigurations({
    apiKey: "", // required
    defaultCenter: {
    lat: 0,
    lng: 0,
    }, // optional
    height: 500, // default to 500
    width: "100%", // default to 100%
    libraries: ["drawing", "geometry", "localContext", "places", "visualization"],
    defaultZoom: 15,
    loadingComponent: Loader,
    locationComponent: LocationComponent,
    currentLocaleCode() {
        return "en";
    },
});
```

Now, let's render the map:

```tsx
import { GoogleMap } from '@mongez/react-google-map';

export function ContactUs() {
    return (
        <GoogleMap center={{
            lat: 31.205753,
            lng: 29.924526,
        }} />
    )
}
```

## Setting Multiple locations

You can set multiple locations on the map by passing an array of locations to the `locations` prop:

```tsx
import { GoogleMap } from '@mongez/react-google-map';

export function ContactUs() {
    return (
        <GoogleMap
            center={{
                lat: 31.205753,
                lng: 29.924526,
            }}
            locations={[
                {
                    lat: 31.205753,
                    lng: 29.924526,
                },
                {
                    lat: 31.205753,
                    lng: 29.924526,
                },
            ]}
        />
    )
}
```

## Rendering Custom Location Component

You can render a custom component for each location by passing a component to the `locationComponent` prop:

```tsx
import { GoogleMap } from '@mongez/react-google-map';
import { LocationComponent } from './LocationComponent';

export function ContactUs() {
    return (
        <GoogleMap
            center={{
                lat: 31.205753,
                lng: 29.924526,
            }}
            locations={[
                {
                    lat: 31.205753,
                    lng: 29.924526,
                },
                {
                    lat: 31.205753,
                    lng: 29.924526,
                },
            ]}
            locationComponent={LocationComponent}
        />
    )
}
```

The component receives a single prop `location` which is the location object.
