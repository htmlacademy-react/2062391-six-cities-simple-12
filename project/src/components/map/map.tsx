import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';

import useMap from '../../hooks/useMap';
import { City, Point } from '../../types/types';

import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../constants/constants';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  city: City;
  points: Point[];
  selectedPoint: Point | undefined;
  isMain: boolean;
}


const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map ({city, points, selectedPoint, isMain}: MapProps): JSX.Element{
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker.setIcon(
          selectedPoint !== undefined && point.title === selectedPoint.title
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return(
    <section className={`${isMain ? 'cities__map map' : 'property__map map'}`} ref={mapRef} ></section>
  );
}

export default Map;
