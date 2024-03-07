import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import { TCard } from '../../mock/types';
import 'leaflet/dist/leaflet.css';
import { Marker, layerGroup } from 'leaflet';

type MapProps = {
  className?: string;
  cards: TCard[];
}

function Map({className = 'cities__map', cards}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      cards.forEach((card) => {
        const marker = new Marker({
          lat: card.location.latitude,
          lng: card.location.longitude
        });
        marker.addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }

  }, [map, cards]);

  return (
    <section className={`${className} map`} ref={mapRef}></section>
  );
}

export default Map;
