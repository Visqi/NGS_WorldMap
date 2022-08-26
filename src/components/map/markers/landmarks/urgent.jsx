import React, { useState, Fragment, useEffect, useRef } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Popup} from "react-leaflet";

export default function Urgent(){
    const {t} = useTranslation();
    const popupRef = useRef();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    const [tier,setTier] = useState(0);
    const handleSelectChange=(e)=>setTier(e.target.value);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark.urgent));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("//raw.githubusercontent.com/kosnag/NGS_WorldMap/master/public/assets/data/urgents.json").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return(marker ? (data.map((x=>
        <Marker icon={iconLib.urgent} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t("urgents:"+x.id+".title")}</span>
                </header>
                <content>
                    {t("items:landmark.urgent.title")}
                    <id>ID: {x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
            <Popup ref={popupRef}><popupwindow>
                <header>
                    <span><menuicon/> {t("items:landmark.urgent.title")}</span><closebutton onClick={()=>popupRef.current._source._map._popup._closeButton.click()}/>
                </header>
                <content>
                    <select onChange={handleSelectChange}>
                        {(()=>{
                            const jsx = [];
                            for (var i=0; i<x.ranks.length; i++){jsx.push(
                                <option value={i}>{t("ui:Map.rank")} {i+1}</option>
                            )}
                            return jsx;
                        })()}
                    </select>
                    <br/><br/>
                    <name>{t("urgents:"+x.id+".title")}</name>
                    <br/>
                    <info>
                        <div>
                            <level>
                                <span>{t("ui:Map.maxPlayers")}</span>
                                <border/>
                                <value>{x.players}</value>
                            </level>
                            <level>
                                <span>{t("ui:Map.requiredBP")}</span>
                                <border/>
                                <value>
                                    {x.ranks[tier] != null ? <>{x.ranks[tier].minBP}</> : <Fragment/>}
                                </value>
                            </level>
                            <level>
                                <span>{t("ui:Map.enemyLv")}</span>
                                <border/>
                                <value>
                                    {x.ranks[tier] != null ? <>{x.ranks[tier].enemyLv}</> : <Fragment/>}
                                </value>
                            </level>
                        </div>
                    </info>
                    <cont>
                        <img src={"./assets/images/banners/urgents/"+x.id+".png"} alt="" />
                        {(()=>{
                            const jsx = [];
                            for (var i=0; i<x.ranks.length; i++){// eslint-disable-next-line
                                jsx.push(<>{(()=>{
                                    if(x.ranks[tier] != null){return (// eslint-disable-next-line
                                        <info className={tier == i ? "" : "hidden"}>
                                            <span>{t("ui:Map.rewards.firstTime")}</span>
                                            <border/>
                                            <rewards>
                                                {(x.firstRewards.map((y=>
                                                    <div>
                                                        <l>{t(y.item)}</l>
                                                        <r>
                                                            {(()=>{switch (y.item){
                                                                case "rewards:value.meseta":
                                                                case "rewards:value.seasonalpoints":
                                                                case "rewards:value.experience":
                                                                    return (<>{y.count}</>)
                                                                default:
                                                                    return (<>x{y.count}</>)
                                                            }})()}
                                                        </r>
                                                    </div>
                                                )))}
                                            </rewards>
                                            <br/>
                                            <span>{t("ui:Map.rewards.guaranteed")}</span>
                                            <border/>
                                            <rewards>
                                                {(x.ranks[i].rewards.map((y=>
                                                    <div>
                                                        <l>{t(y.item)}</l>
                                                        <r>
                                                            {(()=>{switch (y.item){
                                                                case "rewards:value.meseta":
                                                                case "rewards:value.seasonalpoints":
                                                                case "rewards:value.experience":
                                                                    return (<>{y.count}</>)
                                                                default:
                                                                    return (<>x{y.count}</>)
                                                            }})()}
                                                        </r>
                                                    </div>
                                                )))}
                                            </rewards>
                                        </info>
                                    )}
                                })()}</>)
                            }
                            return jsx;
                        })()}
                    </cont>
                    <span>{t("ui:Map.description")}</span>
                    <border/>
                    {t("urgents:"+x.id+".description")}
                    <br/><br/>
                    <span>{t("ui:Map.clearCondition")}</span>
                    <border/>
                    {t("urgents:"+x.id+".clearCondition")}
                </content>
            </popupwindow></Popup>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}