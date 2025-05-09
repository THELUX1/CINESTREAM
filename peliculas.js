// videos.js
const peliculasDisponibles = {
"1104845": {
        "title": "Plankton: La Película",
        "360p": "https://v2.fiestareel.com/mov/2025/1104845-156766/480/480p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3",
        "720p": "https://v2.fiestareel.com/mov/2025/1104845-156766/720/720p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3",
        "1080p": "https://v2.fiestareel.com/mov/2025/1104845-156766/720/720p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3"
    },
"1356039": {
        "title": "Counterstrike",
        "360p": "https://v2.fiestareel.com/mov/2025/1356039-156661/480/480p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3",
        "720p": "https://v2.fiestareel.com/mov/2025/1356039-156661/720/720p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3",
        "1080p": "https://v2.fiestareel.com/mov/2025/1356039-156661/720/720p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3"
    },
"1124620": {
        "title": "El Mono",
        "360p": "https://v2.fiestareel.com/mov/2025/1124620-156659/480/480p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3",
        "720p": "https://v2.fiestareel.com/mov/2025/1124620-156659/720/720p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3",
        "1080p": "https://v2.fiestareel.com/mov/2025/1124620-156659/720/720p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3"
    },
"799766": {
        "title": "Better Man",
        "360p": "https://v2.fiestareel.com/mov/2024/799766-156545/480/480p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3",
        "720p": "https://v2.fiestareel.com/mov/2024/799766-156545/720/720p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3",
        "1080p": "https://v2.fiestareel.com/mov/2024/799766-156545/720/720p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3"
    },
"1140535": {
        "title": "Presencia",
        "360p": "https://v3.fiestareel.com/mov/2025/1140535-156646/480/480p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "720p": "https://v3.fiestareel.com/mov/2025/1140535-156646/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "1080p": "https://v3.fiestareel.com/mov/2025/1140535-156646/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3"
    },
"1418522": {
        "title": "Delicia",
        "360p": "https://v2.fiestareel.com/mov/2025/1418522-156739/480/480p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3",
        "720p": "https://v2.fiestareel.com/mov/2025/1418522-156739/720/720p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3",
        "1080p": "https://v2.fiestareel.com/mov/2025/1418522-156739/720/720p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3"
    },
"777443": {
        "title": "Estado Eléctrico",
        "360p": "https://v2.fiestareel.com/mov/2025/777443-156785/480/480p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3",
        "720p": "https://v2.fiestareel.com/mov/2025/777443-156785/720/720p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3",
        "1080p": "https://v2.fiestareel.com/mov/2025/777443-156785/720/720p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3"
    },
"426063": {
        "title": "Nosferatu",
        "360p": "https://v2.fiestareel.com/mov/2024/426063-156552/480/480p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3",
        "720p": "https://v2.fiestareel.com/mov/2024/426063-156552/720/720p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3",
        "1080p": "https://v2.fiestareel.com/mov/2024/426063-156552/720/720p.m3u8?did=XVzwN5etnKWL0z9T39Xda&dt=3"
    },
    "696506": {
        "title": "Mickey 17",
        "360p": "https://v2.fiestareel.com/mov/2025/696506-156750/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2025/696506-156750/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2025/696506-156750/720/720p.m3u8"
    },
    "1357633": {
        "title": "Solo Leveling: Segundo Despertar",
        "360p": "https://v2.fiestareel.com/mov/2024/1357633-156148/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/1357633-156148/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/1357633-156148/720/720p.m3u8"
    },
    "1352774": {
        "title": "Piglet",
        "360p": "https://v3.fiestareel.com/mov/2025/1352774-156565/480/480p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "720p": "https://v3.fiestareel.com/mov/2025/1352774-156565/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "1080p": "https://v3.fiestareel.com/mov/2025/1352774-156565/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3"
    },
    "1405338": {
        "title": "Oni-Goroshi: Ciudad de los demonios",
        "360p": "https://v2.fiestareel.com/mov/2025/1405338-156658/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2025/1405338-156658/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2025/1405338-156658/720/720p.m3u8"
    },
    "1272149": {
        "title": "Bridget Jones: Loca Por Él",
        "360p": "https://v3.fiestareel.com/mov/2025/1272149-92982/480/480p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "720p": "https://v3.fiestareel.com/mov/2025/1272149-92982/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "1080p": "https://v3.fiestareel.com/mov/2025/1272149-92982/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3"
    },        
    "933260": {
        "title": "La sustancia",
        "360p": "https://v2.fiestareel.com/mov/2024/933260-156010/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/933260-156010/720/720p.m3u8",
        "1080p": "https://xyve3dzn2w.guardstorage.net/hls_3/7pvQIdsxe6FabtJ2nwp5Ou_fnvf2zyBlv-EAkd1AdqKDVg3KutMW5bUKACBU6TOBffNnDAcmwbiQmlnyrCfWQuXLMdw8oXe9b6c-9qcm9dxen3g9lVg3L829S98JfuxrDrDyl1jLssUpb5zIWAzxd3mV17WOMypZ7dFcHhXlEWBDolJuPTsF-DsvlTpBLDHr6Gdma3JnkJYi8LuJzV5ofA/index-f3-v1-a1.m3u8?sig=fyxlCU31aBHUd2CWgLZDig&expires=1741169323"
    },
    "823219": {
        "title": "Flow",
        "360p": "https://v3.fiestareel.com/mov/2024/823219-155485/480/480p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "720p": "https://v3.fiestareel.com/mov/2024/823219-155485/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "1080p": "https://v3.fiestareel.com/mov/2024/823219-155485/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3"
    },
    "1064213": {
        "title": "Anora",
        "360p": "https://v2.fiestareel.com/mov/2024/1064213-156537/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/1064213-156537/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/1064213-156537/720/720p.m3u8"
    },
    "549509": {
        "title": "El brutalista",
        "360p": "https://hfs296.serversicuro.cc/hls/dnzpemdh5pg4a3gyvakh5klvtwdikblg2flfctdiobfv5qqv4xfy4btjxqwq/index-v1-a1.m3u8",
        "720p": "https://hfs296.serversicuro.cc/hls/dnzpemdh5pg4a3gyvakh5klvtwdikblg2flfctdiobfv5qqv4xfy4btjxqwq/index-v1-a1.m3u8",
        "1080p": "https://hfs296.serversicuro.cc/hls/dnzpemdh5pg4a3gyvakh5klvtwdikblg2flfctdiobfv5qqv4xfy4btjxqwq/index-v1-a1.m3u8"
    },
    "974576": {
        "title": "Cónclave",
        "360p": "https://v2.fiestareel.com/mov/2024/974576-156443/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/974576-156443/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/974576-156443/720/720p.m3u8"
    },
    "1035048": {
        "title": "Criaturas: Línea de extinción",
        "360p": "https://v2.fiestareel.com/mov/2024/1035048-156466/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/1035048-156466/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/1035048-156466/720/720p.m3u8"
    },
"1201012": {
        "title": "Dhoom Dhaam",
        "360p": "https://v2.fiestareel.com/mov/2025/1201012-156638/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2025/1201012-156638/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2025/1201012-156638/720/720p.m3u8"
    },
"558449": {
        "title": "Gladiador II",
        "360p": "https://v2.fiestareel.com/mov/2024/558449-156225/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/558449-156225/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/558449-156225/720/720p.m3u8"
    },
"1138749": {
        "title": "The Island",
        "360p": "https://v2.fiestareel.com/mov/2023/1138749-156583/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2023/1138749-156583/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2023/1138749-156583/720/720p.m3u8"
    },
"1247019": {
        "title": "Thi Yot 2: Susurros Mortales",
        "360p": "https://v2.fiestareel.com/mov/2024/1247019-156535/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/1247019-156535/480/480p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/1247019-156535/480/480p.m3u8"
    },
"912649": {
        "title": "Venom: El último baile",
        "360p": "https://v2.fiestareel.com/mov/2024/912649-156049/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/912649-156049/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/912649-156049/720/720p.m3u8"
    },
"516729": {
        "title": "Paddington: Aventura en la selva",
        "360p": "https://v3.fiestareel.com/mov/2024/516729-92646/480/480p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "720p": "https://v3.fiestareel.com/mov/2024/516729-92646/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "1080p": "https://v3.fiestareel.com/mov/2024/516729-92646/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3"
    },
"774370": {
        "title": "Las aventuras de Dog Man",
        "360p": "https://v2.fiestareel.com/mov/2025/774370-156686/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2025/774370-156686/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2025/774370-156686/720/720p.m3u8"
    },
"1294203": {
        "title": "Culpa Mía: Londres",
        "360p": "https://v2.fiestareel.com/mov/2025/1294203-156644/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2025/1294203-156644/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2025/1294203-156644/720/720p.m3u8"
    },
"539972": {
        "title": "Kraven el cazador",
        "360p": "https://v2.fiestareel.com/mov/2024/539972-156367/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/539972-156367/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/539972-156367/720/720p.m3u8"
    },
"822119": {
        "title": "Capitán América: Un nuevo mundo",
        "360p": "https://v3.fiestareel.com/mov/2025/822119-93800/480/480p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "720p": "https://v3.fiestareel.com/mov/2025/822119-93800/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "1080p": "https://v3.fiestareel.com/mov/2025/822119-93800/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3"
    },
"1084199": {
        "title": "Compañera Perfecta",
        "360p": "https://v2.fiestareel.com/mov/2025/1084199-156685/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2025/1084199-156685/720/720p.m3u8",
        "1080p": ""
    },
"1241982": {
        "title": "Moana 2",
        "360p": "https://v3.fiestareel.com/mov/2024/1241982-156362/480/480p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "720p": "https://v3.fiestareel.com/mov/2024/1241982-156362/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "1080p": "https://v3.fiestareel.com/mov/2024/1241982-156362/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3"
    },
"1126166": {
        "title": "Amenaza En El Aire",
        "360p": "https://v2.fiestareel.com/mov/2025/1126166-156540/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2025/1126166-156540/720/720p.m3u8",
        "1080p": ""
    },
    "762509": {
        "title": "Mufasa El Rey León",
        "360p": "https://v2.fiestareel.com/mov/2024/762509-156193/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/762509-156193/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/762509-156193/720/720p.m3u8"
    },
    "950396": {
        "title": "El Abismo Secreto",
        "360p": "https://v3.fiestareel.com/mov/2025/950396-156617/480/480p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "720p": "https://v3.fiestareel.com/mov/2025/950396-156617/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3",
        "1080p": "https://v3.fiestareel.com/mov/2025/950396-156617/720/720p.m3u8?did=Ur3a-ToHk81RdltNWN5Js&dt=3"
    },
    "939243": {
        "title": "Sonic 3",
        "360p": "https://v2.fiestareel.com/mov/2024/939243-156549/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2024/939243-156549/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2024/939243-156549/720/720p.m3u8"
    }, 
    "710295": {
        "title": "Hombre Lobo",
        "360p": "https://v2.fiestareel.com/mov/2025/710295-156575/480/480p.m3u8",
        "720p": "https://v2.fiestareel.com/mov/2025/710295-156575/720/720p.m3u8",
        "1080p": "https://v2.fiestareel.com/mov/2025/710295-156575/720/720p.m3u8"
    }
    // Más películas...
};
