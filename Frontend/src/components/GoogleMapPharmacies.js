/* eslint-disable no-unused-vars */
// class inspired by: https://www.npmjs.com/package/google-maps-react
// great tutorial: https://www.youtube.com/watch?v=h_d4HNwEleo
import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// taken from https://www.npmjs.com/package/react-places-autocomplete
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

// Map for hospitals

//note: code formatted for ES6 here
export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: '',
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            // Montreal
            mapCenter: {
                lat: 45.5048,
                lng: -73.6132,
            },
        };
    }

    onMarkerClick = ((props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        }));

    onMapClicked = ((props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
            });
        }
    });

  labels = "The looked for location.";

  locationsAllPharmacies = [
    { lat: 45.507890, lng: -73.625630 }, //#1
    { lat: 45.502320, lng: -73.638240 },
    { lat: 45.500110, lng: -73.629890 },//3
    { lat: 45.509320, lng: -73.630320 },
    { lat: 45.494400, lng: -73.638570 },
    { lat: 45.492073753, lng: -73.6534384449 },
    { lat: 45.501904, lng: -73.573933 },
    { lat: 45.494718, lng: -73.578409 },
  ];

    //Added for autocomplete module
    handleChange = (address) => {
        this.setState({ address });
    };

    handleSelect = (address) => {
        // eslint-disable-next-line no-undef
        geocodeByAddress(address)
            // eslint-disable-next-line no-undef
            .then((results) => getLatLng(results[0]))
            .then((latLng) => {
                console.log('Success', latLng);
                this.setState({ address });
                this.setState({ mapCenter: latLng });
            })
            .catch((error) => console.error('Error', error));
    };

    // centered
    StyleMap = {
        height: '80%',
        width: '70%',
        left: '15%',
        top: '2%',
    };

    InputStyle = {
        width: '50%',
        'margin-left': '25%',
        'margin-top': '2%',
    };

    Centered = {
        'margin-left': '25%',
    };

  render() {
    return (
      <div id="GoogleMap">
        <h1 style={{'text-align': 'center'}}>Medical Stores</h1>
        {/* autocomplete */}
        {/* <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })
              }
              style={this.InputStyle}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div style={this.Centered}>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          </PlacesAutocomplete> */}
        {/*The map*/}
        <Map style={this.StyleMap} google={this.props.google}
            onClick={this.onMapClicked}
            initialCenter={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }}
            center={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }}
            >
          <Marker onClick={this.onMarkerClick}
                  name={'Your are here!'}
                  // Polytechnique Montreal location
                  position={{
                    lat: 45.5048,
                    lng: -73.6132 
                  }} 
                  />
          {/* very bad but we have to go forward */}
          <Marker
                  
                  onClick={this.onMarkerClick}
                  name={this.labels}
                  //location
                  position={{
                    lat: this.locationsAllPharmacies[0].lat,
                    lng: this.locationsAllPharmacies[0].lng 
                  }}
                  //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                  icon= {{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}} 
                  />
          <Marker
                  
                  onClick={this.onMarkerClick}
                  name={this.labels}
                  //location
                  position={{
                    lat: this.locationsAllPharmacies[1].lat,
                    lng: this.locationsAllPharmacies[1].lng
                  }}
                  icon= {{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}} 
                  />
          <Marker
                  
                  onClick={this.onMarkerClick}
                  name={this.labels}
                  //location
                  position={{
                    lat: this.locationsAllPharmacies[2].lat,
                    lng: this.locationsAllPharmacies[2].lng
                  }}
                  icon= {{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}} 
                  />
          <Marker
                  
                  onClick={this.onMarkerClick}
                  name={this.labels}
                  //location
                  position={{
                    lat: this.locationsAllPharmacies[3].lat,
                    lng: this.locationsAllPharmacies[3].lng
                  }}
                  icon= {{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}} 
                  />
          <Marker
                  
                  onClick={this.onMarkerClick}
                  name={this.labels}
                  //location
                  position={{
                    lat: this.locationsAllPharmacies[4].lat,
                    lng: this.locationsAllPharmacies[4].lng
                  }}
                  icon= {{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}} 
                  />
          <Marker
                  
                  onClick={this.onMarkerClick}
                  name={this.labels}
                  //location
                  position={{
                    lat: this.locationsAllPharmacies[5].lat,
                    lng: this.locationsAllPharmacies[5].lng 
                  }}
                  icon= {{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}} 
                  />
          <Marker
                  
                  onClick={this.onMarkerClick}
                  name={this.labels}
                  //location
                  position={{
                    lat: this.locationsAllPharmacies[7].lat,
                    lng: this.locationsAllPharmacies[7].lng 
                  }}
                  //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                  icon= {{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}
                  />
          {/* end of markers */}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAL2_MdRg6rQyrcBpXVWhzN_g10Qb-AEXQ',
})(MapContainer);

/*
export class MapContainer extends React.Component {
render() {
    return (
    <div>
      <Map google={this.props.google}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={15}
          onClick={this.onMapClicked}>
  
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
  
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    </div>
    );
  }

}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyAL2_MdRg6rQyrcBpXVWhzN_g10Qb-AEXQ")
  })(MapContainer)
  */
