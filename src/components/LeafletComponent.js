import React, { Component } from 'react'
import { Map, CircleMarker,Popup,Marker, TileLayer,Circle,GeoJSON } from "react-leaflet";
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';

import countries from '../assets/countries.json'

export default class LeafletComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            geoJson : {}
        }
    }
    
    componentWillMount() {
        fetch(
          "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
        )
          .then(response => response.json())
          .then(response => {
              console.log(response)
              console.log( response.objects.countries.geometries)
              this.setState({  geoJson: response.objects.countries.geometries })
            });
      }

      initLayers = (inputLayers) => {
      const outputLayers = inputLayers.map(layer =>{
        switch(layer.type){
          case 'geoJson':
            return (< GeoJSON key = {layer.name} data = {layer.data } onEachFeature = { this.onEachFeatureClosure(layer.style)  } />);
          break;
          case 'googleMap':
            return(
              <ReactLeafletGoogleLayer key={layer.key} googleMapsLoaderConf={{KEY: layer.metaData.key}} type={layer.metaData.type}/>
            )
          break;
          case 'tileLayer':
            return(
              <TileLayer key={'osmLayer'}
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/> 
              )
          break;
        }
      });
      console.log(outputLayers)
      return outputLayers;
    }


    render() {
        let layers = this.initLayers(this.props.layers);
        return (
          <Map style={{ height: "400px", width: "100%" }} zoom={5}  center={[51.51, -0.06]} >
            <Circle center={[51.51, -0.06]} radius={5000} />
              {layers}
          </Map>
        )
    }

    geoJSONStyleCountries() {
      return {
          color: '#0000ff',
          weight: 1,
          fillOpacity: 0.5,
          fillColor: '#fff2af'
      }
  }
  geoJSONStyleContinents() {
      return {
          color: '#ff0000',
          weight: 2,
          fillOpacity: 0.0,
          fillColor: '#ff0000'
      }
  }
    onEachFeatureClosure = (style) => {
      return function onEachFeature(feature, layer) {
        layer.options.color = '#ff0000';
        layer.options.fillOpacity= 0.1;

        const popupContent = ` <Popup><p>Customizable Popups <br />with feature information.</p><pre>Borough: <br />${feature.properties.name}</pre></Popup>`
        layer.bindPopup(popupContent)
      }
  }


      // onEachFeature(feature: Object, layer: Object) {
      //   console.log(feature,layer)
      //   const popupContent = ` <Popup><p>Customizable Popups <br />with feature information.</p><pre>Borough: <br />${feature.properties.name}</pre></Popup>`
      //   layer.bindPopup(popupContent)
      // }
}
