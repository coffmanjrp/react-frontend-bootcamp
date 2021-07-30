import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Contact = () => {
  const [lng, setLng] = useState(-121.5850597683934);
  const [lat, setLat] = useState(38.7034065849573);
  const [zoom, setZoom] = useState(12);
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) {
      return;
    }

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom,
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    // eslint-disable-next-line
  }, []);

  return (
    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location</span>10th st Sacramento
                CA
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Phone:</span> (555)
                555-5555
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone:</span> (333) 333-3333
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Email:</span> (555)
                enroll@frontendbc.test
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Email:</span>
                student@frontendbc.test
              </li>
            </ul>
          </div>
          <div className="col-md position-relative">
            <div className="m-1 py-1 px-2 text-light rounded-1 sidebar">
              Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
