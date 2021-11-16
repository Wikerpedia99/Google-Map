let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.8988814, lng: -80.1841695 },
    zoom: 17,
    styles:
[
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f5ea2c"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#110f0f"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c0b9b9"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#2d2929"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eebe46"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#080707"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3f518c"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#84afa3"
            },
            {
                "lightness": 52
            }
        ]
    }
]
  });


const willisonCoords = [
{ lat: 39.897538998708136, lng: -80.18620531789718 },
{ lat: 39.897541056479255, lng: -80.18638502589995 },
{ lat: 39.89711509654142, lng: -80.18639307252694 },
{ lat: 39.89711509654142, lng: -80.18621604673316 },
{ lat: 39.897538998708136, lng: -80.18620531789718 }
];
const willisonpolygon = new google.maps.Polygon({
  paths: willisonCoords,
  strokeColor: "#000000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#c16c18",
  fillOpacity: 1.35,
});

willisonpolygon.setMap(map);

const GpacCoords = [
    { lat: 39.90003, lng: -80.18801},
    { lat: 39.90002, lng: -80.18771},
    { lat: 39.89980, lng: -80.18772},
    { lat: 39.89981, lng: -80.18802},
    { lat: 39.90003, lng: -80.18801} ];

    const GpacPolygon = new google.maps.Polygon({
        paths: GpacCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.35,
    });
    GpacPolygon.setMap(map);

 

const ThayerCoords = [
    { lat: 39.89980, lng: -80.18429},
    { lat: 39.89979, lng: -80.18416},
    { lat: 39.89947, lng: -80.18416},
    { lat: 39.89947, lng: -80.18415},
    { lat: 39.89940, lng: -80.18415},
    { lat: 39.89939, lng: -80.18409},
    { lat: 39.89922, lng: -80.18409},
    { lat: 39.89922, lng: -80.18430},
    { lat: 39.89980, lng: -80.18429} ];

const ThayerPolygon = new google.maps.Polygon({
        paths: ThayerCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.35,
    });
        ThayerPolygon.setMap(map);

        const stewartCoords = [
    { lat: 39.89820313942542, lng: -80.18674222997413 },
    { lat: 39.898196966171525, lng: -80.1864800440406 },
    { lat: 39.8977313983387, lng: -80.1864981489516 },
    { lat: 39.89773808607581, lng: -80.18675966433287 },
    { lat: 39.89820313942542, lng: -80.18674222997413 },
  ];
  // Construct the polygon.
  const stewartpolygon = new google.maps.Polygon({
    paths: stewartCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  stewartpolygon.setMap(map);

  const southCoords = [
    { lat: 39.90036605487646, lng: -80.18613153937626 },
    { lat: 39.90036296834702, lng: -80.18572786691594 },
    { lat: 39.90022304553257, lng: -80.18572786691594 },
    { lat: 39.90022407437784, lng: -80.18613556268981 },
    { lat: 39.90036605487646, lng: -80.18613153937626 },
  ];
  // Construct the polygon.
  const southpolygon = new google.maps.Polygon({
    paths: southCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  southpolygon.setMap(map);

const westCoords = [
    { lat: 39.90053787146326, lng: -80.18560984971823 },
    { lat: 39.90053787146326, lng: -80.18542477729457 },
    { lat: 39.900227082463, lng: -80.18542305089767 },
    { lat: 39.90022503189161, lng: -80.1856048100907 },
    { lat: 39.90053787146326, lng: -80.18560984971823 },
  ];
  // Construct the polygon.
  const westpolygon = new google.maps.Polygon({
    paths: westCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  westpolygon.setMap(map);

    const hannaCoords = [
    { lat: 39.899575902129406, lng: -80.18715171790629 },
    { lat: 39.89957230113685, lng: -80.18694183506034 },
    { lat: 39.89937424625455, lng: -80.18694787003034 },
    { lat: 39.89937784725752, lng: -80.18715708232408 },
    { lat: 39.899575902129406, lng: -80.18715171790629 }
  ];

const hannaPolygon = new google.maps.Polygon({
    paths: hannaCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

    hannaPolygon.setMap(map);

    const rudyCoords = [
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    { lat: 39.89821720506465, lng: -80.18727432259585 },
    { lat: 39.89798540909532, lng: -80.18727609987678 },
    { lat: 39.89798677260331, lng: -80.18785904802633 },
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    ];

const rudyPolygon = new google.maps.Polygon({
    paths: rudyCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

    rudyPolygon.setMap(map);

    const CREDCoords = [
    { lat: 39.89820789567786, lng: -80.1863954019053 },
    { lat: 39.898204677891705, lng:  -80.18609970550332 },
    { lat: 39.89802287272942, lng:  -80.18610389977852 },
    { lat: 39.89802930831865,  lng:  -80.18640588759332 },
    { lat: 39.89820789567786, lng: -80.1863954019053 }
  ];
  const CREDPolygon = new google.maps.Polygon({
    paths: CREDCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  CREDPolygon.setMap(map);

  const theNest = [
    {lat: 39.8982031743014, lng: -80.18528256249408},
    {lat: 39.89803340961704, lng: -80.1852906091205},
    {lat: 39.89803958288567, lng: -80.18549915085532},
    {lat: 39.89820883311696, lng: -80.18549512754211}

  ];

    const nestPolygon = new google.maps.Polygon({
    paths: theNest,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  nestPolygon.setMap(map);

      const csiCoords = [
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    { lat: 39.90030229555674, lng: -80.18875312061515 },
    { lat: 39.900303838822865, lng: -80.1890005543931 },
    { lat: 39.90038357419121, lng: -80.18899988384086 },
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    ];
    const csiHouse = new google.maps.Polygon({
        paths: csiCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.35,
    });
    csiHouse.setMap(map);

    const chapelCoords = [
    { lat: 39.90094412190922, lng: -80.18730816171713 },
    { lat: 39.900937434485016, lng:-80.18702518866414  },
    { lat:39.90050687827982 , lng:-80.18703994081373  },
    { lat: 39.90051099364375, lng: -80.18732090220995 },
    { lat: 39.90094412190922, lng: -80.18730816171713 }
    ];

const chapelPolygon = new google.maps.Polygon({
    paths: chapelCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

 chapelPolygon.setMap(map);

 const WILEYCoords = [
    { lat: 39.893254519482745, lng: -80.18153607900841 }, 
    { lat: 39.893179400851224, lng: -80.181416094374 }, 
    { lat: 39.89309323526072, lng: -80.18151016232737 },  
    { lat: 39.89316909044439, lng: -80.18162822720764 },
    { lat: 39.893253783025976, lng: -80.18153770943769 }, 
  ];
  // Construct the polygon.
  const WILEYpolygon = new google.maps.Polygon({
    paths: WILEYCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  WILEYpolygon.setMap(map);

  const buhlCoords = [
  { lat: 39.89950878796206,  lng: -80.18562837849694},
  { lat: 39.899509816818046, lng: -80.18551304351189},
  { lat: 39.89954891333424,  lng: -80.18551304351189},
  { lat: 39.899546855623434, lng: -80.18537356864626},
  { lat: 39.89950055711358,  lng: -80.18537222754178},
  { lat: 39.899497470545185, lng: -80.18525689255674},
  { lat: 39.899184697556294, lng: -80.18526091587017},
  { lat: 39.899188812999625, lng: -80.18564178954172},
  { lat: 39.89950878796206,  lng: -80.18562837849694}
];

 const buhlPolygon = new google.maps.Polygon({
    paths: buhlCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

 buhlPolygon.setMap(map);

 const millerCoords = [

{ lat: 39.89939727765804, lng: -80.1877995788888},
{ lat: 39.89939419108494, lng: -80.18761718866978},
{ lat: 39.89937772935947, lng: -80.18761718866978},
{ lat: 39.89937515721452, lng: -80.18760713038564},
{ lat: 39.899367955208106, lng: -80.1876057892811},
{ lat: 39.89936744077903, lng: -80.1874254107189},
{ lat: 39.89937515721452, lng: -80.1874227285098},
{ lat: 39.899376186072516, lng: -80.18741602298704},
{ lat: 39.89939933537334, lng: -80.18741535243477},
{ lat: 39.89939984980218, lng: -80.1872289389021},
{ lat: 39.89955932254984, lng: -80.18723229166346},
{ lat: 39.89956343797066, lng: -80.18743748065987},
{ lat: 39.899593274764335, lng: -80.18743748065987},
{ lat: 39.89959481804641, lng: -80.18759103713101},
{ lat: 39.8995618946879, lng: -80.18759304878785},
{ lat: 39.89956086583266, lng: -80.18779555557518},
{ lat: 39.89939727765804, lng: -80.1877995788888}
];

const millerPolygon = new google.maps.Polygon({
paths: millerCoords,
strokeColor: "#000000",
strokeOpacity: 0.8,
strokeWeight: 2,
fillColor: "#c16c18",
fillOpacity: 1.35,
});

millerPolygon.setMap(map);


   const eastCoords = [
    { lat: 39.900556198377956, lng: -80.1864066888825 },
    { lat: 39.90055312253561, lng: -80.1862209202955 },
    { lat: 39.900233234177925, lng: -80.18622893908343 },
    { lat: 39.90023425946349, lng: -80.18641337120577 },
    { lat: 39.900556198377956, lng: -80.1864066888825 },
  ];
  // Construct the polygon.
  const eastpolygon = new google.maps.Polygon({
    paths: eastCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  eastpolygon.setMap(map);



const Buhl = new google.maps.Marker({
  position: { lat: 39.89936289262082, lng: -80.18544996352534 },
  map,
  title: "Buhl Hall",
  icon: "https://i.imgur.com/nwzNaCG.png",

});

const Miller = new google.maps.Marker({
  position: { lat: 39.899482885604996, lng: -80.18751984422785 },
  map,
  title: "Miller Hall",
  icon: "https://i.imgur.com/nwzNaCG.png",

});

const CRED = new google.maps.Marker({
  position: { lat: 39.89811885587007, lng: -80.18625551906159 },
  map,
  title: "CRED Building",
  icon: "https://i.imgur.com/nwzNaCG.png",

});

const Willison = new google.maps.Marker({
  position: { lat: 39.89731650920259, lng: -80.18630897463571 },
  map,
  title: "Willison Hall",
  icon: "https://i.imgur.com/6OkWbb4.png",

});

const Nest = new google.maps.Marker({
  position: { lat: 39.898124000254214, lng: -80.18540391773973 },
  map,
  title: "The Nest",
  icon: "https://i.imgur.com/nwzNaCG.png",

});

const Wiley = new google.maps.Marker({
  position: { lat: 39.89317045787235, lng: -80.18152108637544 },
  map,
  title: "Wiley Stadium",
  icon: "https://i.imgur.com/l44G1BJ.png",

});

const Hanna = new google.maps.Marker({
  position: { lat: 39.899474192237605, lng: -80.18705357971481 },
  map,
  title: "Hanna Hall",
  icon: "https://i.imgur.com/nwzNaCG.png",

});

const Stewart = new google.maps.Marker({
  position: { lat: 39.897973331327805, lng: -80.18662643791127 },
  map,
  title: "Stewart Hall",
  icon: "https://i.imgur.com/nwzNaCG.png",

});

const East = new google.maps.Marker({
  position: { lat: 39.90038261763993, lng: -80.18551331350264},
  map,
  title: "East Hall",
  icon: "https://i.imgur.com/6OkWbb4.png",

});

const South = new google.maps.Marker({
  position: { lat: 39.90028693518544, lng: -80.18593307919356},
  map,
  title: "South Hall",
  icon: "https://i.imgur.com/6OkWbb4.png",

});

const Rudy = new google.maps.Marker({
  position: { lat: 39.898105750481974, lng: -80.18757727331474 },
  map,
  title: "Rudy Marisa Fieldhouse",
  icon: "https://i.imgur.com/GMd2xDU.png",

});

const West = new google.maps.Marker({
  position: { lat: 39.900391894472385, lng: -80.18632260274094 },
  map,
  title: "West Hall",
  icon: "https://i.imgur.com/6OkWbb4.png",

});

const Thayer = new google.maps.Marker({
  position: { lat: 39.89947636112761, lng: -80.1842246668759},
  map,
  title: "Thayer Hall",
  icon: "https://i.imgur.com/6OkWbb4.png",

});

const Chapel = new google.maps.Marker({
  position: { lat: 39.90066282360884, lng: -80.18716777056058},
  map,
  title: "Roberts Chapel",
  icon: "https://i.imgur.com/jqwRF82.png",

});

const GPAC = new google.maps.Marker({
  position: { lat: 39.899927199998196, lng: -80.18786514491028},
  map,
  title: "GPAC Auditorium",
  icon: "https://i.imgur.com/kwPv6q0.png",

});

const CSIHouse = new google.maps.Marker({
  position: { lat: 39.900344654504366, lng:  -80.18888170212895 },
  map,
  title: "CSI House",
  icon: "https://i.imgur.com/nwzNaCG.png",

});

const Buhlinfowindow = new google.maps.InfoWindow({
  content: "Buhl Hall houses houses the departments of Communication, Criminal Justice, English and Human Studies. The University’s radio, television, student newspaper, and yearbook facilities are also here.",
});

Buhl.addListener("click", () => {
  Buhlinfowindow.open({
    anchor: Buhl,
    map,
    shouldFocus: false,
  });
});

const Millerinfowindow = new google.maps.InfoWindow({
  content: "Miller Hall houses administrative offices, Education Department offices and classrooms, two conference rooms, and the Paul R. Stewart Museum.",
});

Miller.addListener("click", () => {
  Millerinfowindow.open({
    anchor: Miller,
    map,
    shouldFocus: false,
  });
});

const CREDinfowindow = new google.maps.InfoWindow({
  content: "The Center for Research and Economic Development (CRED) is a resource for business and industry. The CRED is part of the Waynesburg Keystone Innovation Zone (WKIZ) that assists start-ups and young businesses.",
});

CRED.addListener("click", () => {
  CREDinfowindow.open({
    anchor: CRED,
    map,
    shouldFocus: false,
  });
});

const Willisoninfowindow = new google.maps.InfoWindow({
  content: "Willison Hall is an upperclassmen dormitory for male students. The six-story suite-style structure was opened in 2008.",
});

Willison.addListener("click", () => {
  Willisoninfowindow.open({
    anchor: Willison,
    map,
    shouldFocus: false,
  });
});

const Westinfowindow = new google.maps.InfoWindow({
  content: "West Hall is an upperclassmen dormitory for female students. It can house up to 154 female students.",
});

West.addListener("click", () => {
  Westinfowindow.open({
    anchor: West,
    map,
    shouldFocus: false,
  });
});

const Wileyinfowindow = new google.maps.InfoWindow({
  content: "John F. Wiley Stadium is the athletic stadium, which honors Dr. Wiley, a 1940 alumnus. The field was upgraded to a turf surface in 2007.",
});

Wiley.addListener("click", () => {
  Wileyinfowindow.open({
    anchor: Wiley,
    map,
    shouldFocus: false,
  });
});

const Hannainfowindow = new google.maps.InfoWindow({
  content: "Hanna Hall was the first original Waynesburg University building completed in 1851. Hanna Hall has classrooms and offices for the Department of Business Administration.",
});

Hanna.addListener("click", () => {
  Hannainfowindow.open({
    anchor: Hanna,
    map,
    shouldFocus: false,
  });
});

const Stewartinfowindow = new google.maps.InfoWindow({
  content: "Stewart Hall houses the departments of Biology, Chemistry, Computer Science, Mathematics, and Nursing. Stewart Hall is named in honor of Paul R. Stewart, who was Waynesburg’s president for forty-two years.",
});

Stewart.addListener("click", () => {
  Stewartinfowindow.open({
    anchor: Stewart,
    map,
    shouldFocus: false,
  });
});

const Eastinfowindow = new google.maps.InfoWindow({
  content: "East Hall is an upperclassmen dormitory for female students. It can house up to 154 female students.",
});

East.addListener("click", () => {
  Eastinfowindow.open({
    anchor: East,
    map,
    shouldFocus: false,
  });
});

const Southinfowindow = new google.maps.InfoWindow({
  content: "South Hall is an upperclassmen dormitory for female students. It can house up to 154 female students.",
});

South.addListener("click", () => {
  Southinfowindow.open({
    anchor: South,
    map,
    shouldFocus: false,
  });
});

const Rudyinfowindow = new google.maps.InfoWindow({
  content: "The Rudy Marisa Field House contains basketball courts, a wrestling room, a weight room, men’s and women’s locker rooms, and other facilities. It also houses the Athletic Training Program offices and facilities, the Athletic Department, and meeting rooms for various student organizations.",
});

Rudy.addListener("click", () => {
  Rudyinfowindow.open({
    anchor: Rudy,
    map,
    shouldFocus: false,
  });
});

const Chapelinfowindow = new google.maps.InfoWindow({
  content: "Roberts Chapel is located on North Washington Street on the north side of the campus. Roberts Chapel can seat up to 650 people and has been a focal point on campus for over 160 years. ",
});

Chapel.addListener("click", () => {
  Chapelinfowindow.open({
    anchor: Chapel,
    map,
    shouldFocus: false,
  });
});

const Thayerinfowindow = new google.maps.InfoWindow({
  content: "Thayer Hall is an underclassmen dormitory for male students. The three-story structure was completed in 1958 and can house up to 126 male students.",
});

Thayer.addListener("click", () => {
  Thayerinfowindow.open({
    anchor: Thayer,
    map,
    shouldFocus: false,
  });
});

const GPACinfowindow = new google.maps.InfoWindow({
  content: "The Goodwin Performing Arts Center (GPAC) houses the University drama and music programs. The GPAC can seat up to 250 people.",
});
GPAC.addListener("click", () => {
  GPACinfowindow.open({
    anchor: GPAC,
    map,
    shouldFocus: false,
  });
});

const CSIHouseinfowindow = new google.maps.InfoWindow({
  content: "The CSI House is operated under the University Criminal Justice department. The CSI House hosts the annual CSI Camp each summer.",
});

CSIHouse.addListener("click", () => {
  CSIHouseinfowindow.open({
    anchor: CSIHouse,
    map,
    shouldFocus: false,
  });
});

const Nestinfowindow = new google.maps.InfoWindow({
  content: "The Nest, introduced in the fall of 2021, is the newest building on capmus. The Nest has the University bookstore and the Rudy's Place arcade.",
});

Nest.addListener("click", () => {
  Nestinfowindow.open({
    anchor: TheNest,
    map,
    shouldFocus: false,
  });
});
}