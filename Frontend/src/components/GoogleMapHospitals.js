// class inspired by: https://www.npmjs.com/package/google-maps-react
// great tutorial: https://www.youtube.com/watch?v=h_d4HNwEleo
import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// taken from https://www.npmjs.com/package/react-places-autocomplete
//import /*PlacesAutocomplete, { geocodeByAddress, getLatLng }*/ from 'react-places-autocomplete';

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

    labels = 'The looked for location.';

    locationsAllHospitals = [
        { lat: 45.4948, lng: -73.624 }, //hospital#1
        { lat: 45.4411, lng: -73.6768 },
        { lat: 45.4208, lng: -73.6226 }, //3
        { lat: 45.4639, lng: -73.5636 },
        { lat: 45.5326, lng: -73.7139 },
        { lat: 45.5719, lng: -73.6499 },
        { lat: 45.4969, lng: -73.5888 },
        { lat: 45.4487, lng: -73.8334 },
        { lat: 45.498, lng: -73.6296 },
        { lat: 45.546, lng: -73.6094 },
        { lat: 45.5741, lng: -73.5585 },
        { lat: 45.5255, lng: -73.5627 },
        { lat: 45.4733, lng: -73.6016 },
        { lat: 45.5113, lng: -73.5574 },
        { lat: 45.5799, lng: -73.5717 },
        { lat: 44.231, lng: -76.4862 },
        { lat: 45.5738, lng: -73.5785 },
        { lat: 45.5133, lng: -73.5746 },
        { lat: 45.509, lng: -73.5814 },
    ];

    onMarkerClick = (props, marker) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        });

    // eslint-disable-next-line no-unused-vars
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
            });
        }
    };

    //Added for autocomplete module
    handleChange = (address) => {
        this.setState({ address });
    };
    /*
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then((latLng) => {
        console.log('Success', latLng);
        this.setState({ address });
        this.setState({ mapCenter : latLng});
      })
      .catch(error => console.error('Error', error));
  };*/

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
                <h1 style={{ 'text-align': 'center' }}>Hospitals</h1>
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
                <Map
                    style={this.StyleMap}
                    google={this.props.google}
                    onClick={this.onMapClicked}
                    initialCenter={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng,
                    }}
                    center={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng,
                    }}
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Your are here!'}
                        // Polytechnique Montreal location
                        position={{
                            lat: 45.5048,
                            lng: -73.6132,
                        }}
                    />
                    {/* very bad but we have to go forward */}
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[0].lat,
                            lng: this.locationsAllHospitals[0].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[1].lat,
                            lng: this.locationsAllHospitals[1].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[2].lat,
                            lng: this.locationsAllHospitals[2].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[3].lat,
                            lng: this.locationsAllHospitals[3].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[4].lat,
                            lng: this.locationsAllHospitals[4].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[5].lat,
                            lng: this.locationsAllHospitals[5].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[6].lat,
                            lng: this.locationsAllHospitals[6].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[7].lat,
                            lng: this.locationsAllHospitals[7].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[8].lat,
                            lng: this.locationsAllHospitals[8].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[9].lat,
                            lng: this.locationsAllHospitals[9].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[10].lat,
                            lng: this.locationsAllHospitals[10].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[11].lat,
                            lng: this.locationsAllHospitals[11].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[12].lat,
                            lng: this.locationsAllHospitals[12].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[13].lat,
                            lng: this.locationsAllHospitals[13].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[14].lat,
                            lng: this.locationsAllHospitals[14].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[15].lat,
                            lng: this.locationsAllHospitals[15].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[16].lat,
                            lng: this.locationsAllHospitals[16].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[17].lat,
                            lng: this.locationsAllHospitals[17].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.labels}
                        //location
                        position={{
                            lat: this.locationsAllHospitals[18].lat,
                            lng: this.locationsAllHospitals[18].lng,
                        }}
                        //taken from https://www.freecodecamp.org/news/how-to-change-javascript-google-map-marker-color-8a72131d1207/
                        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
                    />
                    {/* end of markers */}
                    <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
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
