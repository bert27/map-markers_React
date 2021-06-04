import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./styles.sass";

import { MarkerComponent } from "../../components/Marker";
import { StandaloneSearchBoxComponent } from "../../components/StandaloneSearchBox";
import { apiKey } from "../../keyGoogleMaps";
import { useSelector } from "react-redux";
export const Map = () => {
  const levelZoomStart = 7;
  const CoordinateStart = { lat: 38.932749, lng: -0.186515 };
  const [markersView, setmarkersView] = useState(undefined);
  //markers of store
  const markers = useSelector((state) => state.markers.value);

  //Options Google Map:
  const defaultOptions = {
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
  };

  // show makers
  //Si se desea que todos los componentes esten en la vista, cambiar a true o false
  // {makersview && <><MarkerComponent .../></>}
  useEffect(() => {
    if (markers.length > 0) {
      setmarkersView(
        markers.map((marker, index) => (
          <div key={index}>
            <MarkerComponent
              index={index}
              name={marker?.name}
              lat={marker?.lat}
              lng={marker?.lng}
              marker={marker}
            />
          </div>
        ))
      );
    }
  }, [markers]);

  return (
    <div className="page1">
      <div className="title_page1">Prueba Front End</div>
      <div className="contentMap">
        <LoadScript
          id="script-loader"
          googleMapsApiKey={apiKey}
          libraries={["places"]}
        >
          <div className="MapPage1">
            <GoogleMap
              zoom={levelZoomStart}
              center={CoordinateStart}
              id="map"
              mapContainerStyle={{
                height: "72vh",
                width: "90%",
                margin: "auto",
              }}
              options={defaultOptions}
            >
              <StandaloneSearchBoxComponent />
              {markersView}
            </GoogleMap>
          </div>
        </LoadScript>
      </div>
    </div>
  );
};
