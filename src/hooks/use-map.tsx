import { useState, useRef, MutableRefObject, useEffect } from 'react';
import { Map, TileLayer } from 'leaflet';
import { MAP_ATTRIBUTION, MAP_URL } from '../const';

const city = {
  name: 'Amsterdam',
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 10
  }
};

function useMap(mapRef: MutableRefObject<HTMLElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const mapInstance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });

      const layer = new TileLayer(
        MAP_URL,
        {
          attribution: MAP_ATTRIBUTION
        }
      );

      mapInstance.addLayer(layer);

      setMap(mapInstance);
      isRenderedRef.current = true;
    }
  }, [mapRef]);

  return map;
}

export default useMap;
