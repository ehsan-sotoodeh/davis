import React, {
    Component
} from 'react'
import LeafletComponent from './LeafletComponent'
import countries from '../assets/countries.json'
import continents from '../assets/continents.json'
import {
    Map,
    CircleMarker,
    Popup,
    Marker,
    TileLayer,
    Circle,
    GeoJSON
} from "react-leaflet";

export default class main extends Component {

    render() {
        const layers = [ 
            // {
            //     type: 'tileLayer',
            //     name: 'osm',
            // },
            {
                type: 'googleMap',
                name: 'googleMap',
                key: 'googleMap',
                metaData : {
                    key : 'AIzaSyCak0akXB2qLj1QKmAs2WsWnETgrmX6CrE',
                    type : 'satellite'

                }
            },
            
            {
                type: 'geoJson',
                name: 'countries',
                data : countries.features,
                style : []
            },

            {
                type: 'geoJson',
                name: 'continents',
                data : continents.features,
                style : []
            }

        ]
        // const tempLayers = [ < GeoJSON key = 'countries' data = {countries } style = {this.geoJSONStyleCountries}
        //     onEachFeature = { this.onEachFeature  } />
        //     , < GeoJSON key = 'continents' data = { continents}   style = {this.geoJSONStyleContinents }
        // onEachFeature = { this.onEachFeature } />
        //];
    return ( 
        <div > 
            <LeafletComponent layers = { layers } > </LeafletComponent>  
        </div>
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
}