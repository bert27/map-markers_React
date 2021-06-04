import { render, screen } from "@testing-library/react";
import { Map } from "../pages/page1/Map";
import * as axios from "axios";
import { MapsService } from "../services/MapsController.service";
import { apiKey } from "../keyGoogleMaps";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });


it("Check google Coordinates endPoint Barcelona", async () => {
 const idBarcelona = "ChIJ5TCOcRaYpBIRCmZHTz37sEQ";
 const data={
  lat: 41.3850639,
  lng: 2.1734035,
  };

 
  return MapsService.getCoordinates(idBarcelona, apiKey).then(resp => 
  expect(resp).toEqual(data)
    );
});
