import { useState, useRef, MutableRefObject, useEffect } from 'react';
import { Map, TileLayer } from 'leaflet';

const CITY = {
  name: 'Amsterdam',
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  }
};

function useMap(mapRef: MutableRefObject<HTMLElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const mapInstance = new Map(mapRef.current, {
        center: {
          lat: CITY.location.latitude,
          lng: CITY.location.longitude
        },
        zoom: CITY.location.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
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
