var optionsList = [
    {"category":"Containers"},
    {"table":"container__red","text":"Red Container"},

    {"hr":""},

    {"category":"Minerals"},
    {"table":"mineral__dualomite","text":"Dualomite"},
    {"table":"mineral__monotite","text":"Monotite"},
    {"table":"mineral__photonchunk","text":"Photon Chunk"},
    {"table":"mineral__photonquartz","text":"Photon Quartz"},
    {"table":"mineral__photonscale","text":"Photon Scale"},
    {"table":"mineral__tetracite","text":"Tetracite"},
    {"table":"mineral__trinite","text":"Trinite"},
    {"table":"mineral__pentalite","text":"Pentalite"},
    {"table":"mineral__blizzardium","text":"Blizzardium"},
    {"table":"mineral__randomite", "text":"Randomite"},
    {"table":"mineral__hexakite","text":"Hexakite"},
    {"table":"mineral__inferium", "text":"Inefernium"},

    {"hr":""},

    {"category":"Food"},
    {"table":"food__aelio_apple","text":"Rich Aelio Apple"},
    {"table":"food__aelio_banana","text":"Robust Aelio Banana"},
    {"table":"food__aelio_peach","text":"Light Aelio Peach"},
    {"table":"food__aelio_pear","text":"Crisp Aelio Pear"},
    {"table":"food__retem_carambola","text":"Crisp Retem Carambola"},
    {"table":"food__retem_cherries","text":"Rich Retem Cherry"},
    {"table":"food__retem_mango","text":"Light Retem Mango"},
    {"table":"food__retem_strawberry","text":"Robust Retem Strawberry"},
    {"table":"food__kvaris_persimmon","text":"Rich Kvaris Persimmon"},
    {"table":"food__kvaris_persimmonnotable","text":"Notable Kvaris Persimmon"},
    {"table":"food__kvaris_plum","text":"Light Kvaris Plum"},
    {"table":"food__kvaris_guava","text":"Crisp Kvaris Guava"},
    {"table":"food__kvaris_akebia","text":"Robust Kvaris Akebia"},
    {"table":"food__stia_banana","text":"Rich Stia Banana"},
    {"table":"food__stia_apple","text":"Light Stia Apple"},
    {"table":"food__stia_carambola","text":"Famous Stia Carambola"},
    {"table":"food__stia_mango","text":"Crisp Stia Mango"},
    {"table":"food__stia_plum","text":"Robust Stia Plum"},

    {"table":"food__aelio_clam","text":"Rich Aelio Clam"},
    {"table":"food__aelio_crab","text":"Crisp Aelio Crab"},
    {"table":"food__aelio_lobster","text":"Robust Aelio Lobster"},
    {"table":"food__aelio_turbanshell","text":"Light Aelio Turban Shell"},
    {"table":"food__retem_hermitcrab","text":"Robust Retem Hermit Crab"},
    {"table":"food__retem_scallop","text":"Rich Retem Scallop"},
    {"table":"food__retem_seaslug","text":"Light Retem Sea Slug"},
    {"table":"food__retem_urchin","text":"Crisp Retem Sea Urchin"},
    {"table":"food__kvaris_snail","text":"Rich Kvaris Snail"},
    {"table":"food__kvaris_octopus","text":"Light Kvaris Octopus"},
    {"table":"food__kvaris_squid","text":"Crisp Kvaris Squid"},
    {"table":"food__kvaris_squidnotable","text":"Notable Kvaris Squid"},
    {"table":"food__kvaris_crayfish","text":"Robust Kvaris Crayfish"},
    {"table":"food__stia_hermitcrab","text":"Rich Stia Hermit Crab"},
    {"table":"food__stia_crab","text":"Famous Stia Crab"},
    {"table":"food__stia_seaslug","text":"Light Stia Sea Slug"},
    {"table":"food__stia_octopus","text":"Crisp Stia Octopus"},
    {"table":"food__stia_turbanshell","text":"Robust Stia Turban Shell"},

    {"table":"food__aelio_herb","text":"Rich Aelio Herb"},
    {"table":"food__aelio_mushroom","text":"Light Aelio Mushroom"},
    {"table":"food__aelio_tomato","text":"Crisp Aelio Tomato"},
    {"table":"food__aelio_turnip","text":"Robust Aelio Turnip"},
    {"table":"food__retem_cauliflower","text":"Robust Retem Cauliflower"},
    {"table":"food__retem_cranberries","text":"Light Retem Cranberries"},
    {"table":"food__retem_eggplant","text":"Rich Retem Round Eggplant"},
    {"table":"food__retem_mushroom","text":"Crisp Retem Mushroom"},
    {"table":"food__kvaris_carrot","text":"Rich Kvaris Carrot"},
    {"table":"food__kvaris_cabbage","text":"Light Kvaris Cabbage"},
    {"table":"food__kvaris_mushroom","text":"Crisp Kvaris Mushroom"},
    {"table":"food__kvaris_onion","text":"Robust Kvaris Onion"},
    {"table":"food__stia_herb","text":"Rich Stia Herb"},
    {"table":"food__stia_tomato","text":"Light Stia Tomato"},
    {"table":"food__stia_cauliflower","text":"Crisp Stia Cauliflower"},
    {"table":"food__stia_mushroom","text":"Famous Stia Mushrooms"},
    {"table":"food__stia_cabbage","text":"Robust Stia Cabbage"},

    {"hr":""},

    {"category":"Other"},
    {"table":"other__alphareactor","text":"Alpha Reactor"},
    {"table":"other__snoal","text":"Snoal"},
    {"table":"other__datapod","text":"Datapod"},
    {"table":"other__veteran","text":"Veteran"},
    {"table":"other__stellargrace","text":"Stellar Grace"},
    {"table":"other__musicplace","text":"BGM Easter Egg"},
    {"table":"other__mischief","text":"Mischief Symbol"}
];

function openPopup(e) {
    popup = L.popup()
    popup.setLatLng(e.latlng),
    popup.setContent(popup_window),
    popup.openOn(map);

    lat_variable = e.latlng.lat;
    lng_variable = e.latlng.lng;
    popup_window_content_latlng_lat.innerHTML = "<l>Lat:</l><r>"+lat_variable+"</r>";
    popup_window_content_latlng_lng.innerHTML = "<l>Lng:</l><r>"+lng_variable+"</r>";
};
map.on('click', openPopup);

var popup_window = document.createElement("window");

var popup_window_header = document.createElement("header");
var popup_window_header_span = document.createElement("span")
    popup_window_header_span.innerHTML = "<menuicon></menuicon> Place marker";

var popup_window_header_closebutton = document.createElement("closebutton")
    popup_window_header_closebutton.addEventListener("click",()=>{map.closePopup()});

var popup_window_content = document.createElement("content");

var popup_window_content_latlng = document.createElement("latlng");

var popup_window_content_latlng_lat = document.createElement("div");

var popup_window_content_latlng_lng = document.createElement("div");

var popup_window_content_border1 = document.createElement("border");

var popup_window_content_form = document.createElement("form");

var popup_window_content_form_divMain = document.createElement("div");

var popup_window_content_form_select = document.createElement("select")
    popup_window_content_form_select.setAttribute("required","")
    popup_window_content_form_select.setAttribute("autocomplete","hidden")
    popup_window_content_form_select.addEventListener("change",(e)=>{
        switch (e.target.value) {
            case "other__veteran":
            case "other__datapod":
            case "other__musicplace":
                popup_window_content_form_selectSub.style.display = "none"
                popup_window_content_form_inputSub.style.display = "initial"
                break;
            case "other__stellarGrace":
                popup_window_content_form_inputSub.style.display = "none"
                popup_window_content_form_selectSub.style.display = "initial"
                break;
            default:
                popup_window_content_form_selectSub.style.display = "none"
                popup_window_content_form_inputSub.style.display = "none"
                break;
        }
        switch(e.target.value){
            case "other__stellarGrace":
                while(popup_window_content_form_selectSub.firstChild){popup_window_content_form_selectSub.removeChild(popup_window_content_form_selectSub.firstChild)}
                subList = [
                    {"type":"gold","text":"Gold"},
                    {"type":"silver","text":"Silver"},
                    {"type":"default","text":"Standard"}
                ];
                for (i=0;i<subList.length;i++){
                    e = document.createElement("option")
                    e.setAttribute("value",subList[i]["type"])
                    e.innerHTML=subList[i]["text"]
                    popup_window_content_form_selectSub.appendChild(e)
                }
                break;
            default:
                subList = [];
                break;
        }
    });

var popup_window_content_form_divSub = document.createElement("div");

var popup_window_content_form_selectSub = document.createElement("select")
    popup_window_content_form_selectSub.setAttribute("autocomplete","hidden")
    popup_window_content_form_selectSub.style.marginTop = "10px";
    popup_window_content_form_selectSub.style.display = "none"

var popup_window_content_form_inputSub = document.createElement("input")
    popup_window_content_form_inputSub.setAttribute("autocomplete","hidden")
    popup_window_content_form_inputSub.setAttribute("type","text")
    popup_window_content_form_inputSub.style.display = "none";

var popup_window_content_border2 = document.createElement("border");

var popup_window_content_form_button_latlng = document.createElement("a")
    popup_window_content_form_button_latlng.innerHTML="Copy LatLng"
    popup_window_content_form_button_latlng.style.marginBottom = "5px"
    popup_window_content_form_button_latlng.setAttribute("href","#")
    popup_window_content_form_button_latlng.addEventListener("click",()=>{console.log('"lat":'+lat_variable+', "lng":'+lng_variable)});
    popup_window_content_form_button_latlng.addEventListener("click",()=>{navigator.clipboard.writeText('"lat":'+lat_variable+', "lng":'+lng_variable)});

var popup_window_content_form_button_submit = document.createElement("button")
    popup_window_content_form_button_submit.setAttribute("type","submit")
    popup_window_content_form_button_submit.addEventListener("click",()=>{map.closePopup()});
    popup_window_content_form_button_submit.addEventListener("click",()=>{console.log('Marker placed on '+lat_variable+','+lng_variable)});
    popup_window_content_form_button_submit.innerHTML="Place marker";


popup_window.appendChild(popup_window_header)
    popup_window_header.appendChild(popup_window_header_span)
    popup_window_header.appendChild(popup_window_header_closebutton)
popup_window.appendChild(popup_window_content)
    popup_window_content.appendChild(popup_window_content_latlng)
        popup_window_content_latlng.appendChild(popup_window_content_latlng_lat)
        popup_window_content_latlng.appendChild(popup_window_content_latlng_lng)
        popup_window_content_latlng.appendChild(popup_window_content_border1)
    popup_window_content.appendChild(popup_window_content_form)
        popup_window_content_form.appendChild(popup_window_content_form_divMain)
        popup_window_content_form.appendChild(popup_window_content_form_select)
            for (let i = 0; i < optionsList.length; i++){
                var e = document.createElement("option")
                if (optionsList[i]["hr"] != null){
                    e.setAttribute("disabled","disabled")
                    e.style.fontWeight = "bold"
                    e.style.color = "gray"
                    e.innerHTML=""
                } else if (optionsList[i]["category"] != null){
                    e.setAttribute("disabled","disabled")
                    e.style.color = "gray"
                    e.style.fontWeight = "bold"
                    e.innerHTML=optionsList[i]["category"]
                } else {
                    e.setAttribute("value",optionsList[i]["table"])
                    e.innerHTML=optionsList[i]["text"]
                }
                popup_window_content_form_select.appendChild(e)
            }
        popup_window_content_form.appendChild(popup_window_content_form_divSub)
        popup_window_content_form.appendChild(popup_window_content_form_selectSub)  
            
        popup_window_content_form.appendChild(popup_window_content_form_inputSub)
        popup_window_content_form.appendChild(popup_window_content_border2)
        popup_window_content_form.appendChild(popup_window_content_form_button_latlng)
        popup_window_content_form.appendChild(popup_window_content_form_button_submit);

popup_window_content_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const markerData = {
        "table": popup_window_content_form_select.value,
        "lat": lat_variable,
        "lng": lng_variable,
        "string": popup_window_content_form_inputSub.value || popup_window_content_form_selectSub.value
    }
    const xhr = new XMLHttpRequest;
    xhr.open("POST","../../api/record.php");
    xhr.send(JSON.stringify(markerData));
});