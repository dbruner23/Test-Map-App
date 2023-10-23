import React from "react";
import MapComponent from "../Views/MapComponent";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SymbologyReducer, { colorSchemeState } from "../data/symbology/Reducer";
import {
  render,
  screen,
  waitFor,
  renderHook,
  act,
  configure,
} from "@testing-library/react";

const mockStore = configureStore([]);

const initialState = {
  symbology: {
    colorScheme: "YlGnBu",
  },
};

const store = mockStore(initialState);

describe("MapComponent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders MapComponent without crashing", () => {
    render(
      <Provider store={store}>
        <MapComponent />
      </Provider>
    );
  });

  it("displays a loading spinner when loading", async () => {
    render(
      <Provider store={store}>
        <MapComponent />
      </Provider>
    );
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("renders the map container after loading", async () => {
    render(
      <Provider store={store}>
        <MapComponent />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByTestId("map-container")).toBeInTheDocument();
    });
  });
});
