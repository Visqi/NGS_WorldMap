import React, {useEffect, useRef, Fragment} from 'react';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "./style.scss";
import FromJSON from './markers/fromJSON.jsx';

const boundNorth = 0; 
const boundEast = 12288/6;
const boundWest = 0;
const boundSouth = -12288/6;
//          boundNorth
//
//boundWest             boundEast
//
//          boundSouth

const bounds = [[boundSouth, boundWest], [boundNorth, boundEast]];
const maxbounds = [[boundSouth-100, boundWest], [boundSouth/2+250, boundEast]];
const center = [boundSouth/4*3, boundEast/2];

const Map = () => {
    const leafmap = useRef();
    useEffect(() => {
        console.log("map/index.jsx")
        window.gamemap = L.map(leafmap.current, {
            zoom: 0,
            minZoom: 0,
            maxZoom: 3,
            crs: L.CRS.Simple,
            maxBounds: maxbounds,
            center: center,
            zoomControl: false,
            attributionControl: false,
            keyboard: false,
            maxBoundsViscosity: 0.5,
            doubleClickZoom: false,
            layers: [
                L.tileLayer("./assets/images/tiles/{z}/{y}-{x}.png", {
                    bounds: bounds,
                    tileSize: 1024,
                    noWrap: true
                })
            ]
        });
    },[])
    return (
        <Fragment>
            <map ref={leafmap}/>
            <FromJSON/>
        </Fragment>
    );
};

export default Map;