// class inspired by: https://www.npmjs.com/package/google-maps-react
// great tutorial: https://www.youtube.com/watch?v=h_d4HNwEleo
import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// taken from https://www.npmjs.com/package/react-places-autocomplete
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

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

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        });

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

    handleSelect = (address) => {
        geocodeByAddress(address)
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
                {/* autocomplete */}
                <PlacesAutocomplete value={this.state.address} onChange={this.handleChange} onSelect={this.handleSelect}>
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                })}
                                style={this.InputStyle}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div style={this.Centered}>Loading...</div>}
                                {suggestions.map((suggestion) => {
                                    const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
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
                </PlacesAutocomplete>
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
