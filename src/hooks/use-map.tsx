import { useState, useRef, MutableRefObject, useEffect } from 'react';
import { Map, TileLayer } from 'leaflet';
import { MAP_ATTRIBUTION, MAP_URL } from '../const';
import { TCity } from '../mock/types';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: TCity): Map | null {
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
  }, [mapRef, city]);

  return map;
}

export default useMap;
