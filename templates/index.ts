function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 13,
      center: { lat: -1.22419, lng: 36.9176 }, // Centered at Anthena School
    }
  );

  // Create a legend control
  const legend = document.createElement('div');
  legend.id = 'legend';
  legend.innerHTML = `
    <h3>Legend</h3>
    <div><div class="color-box" style="background-color: #0000FF;"></div>Route 1</div>
    <div><div class="color-box" style="background-color: #00FF00;"></div>Route 2</div>
    <div><div class="color-box" style="background-color: #FF0000;"></div>Route 3</div>
    <div><div class="color-box" style="background-color: #FFFF00;"></div>Route 4</div>
    <div><div class="color-box" style="background-color: #FFA500;"></div>Route 5</div>
    <div><img class="icon" src="https://cdn-icons-png.flaticon.com/512/8074/8074788.png" alt="Stop Icon">School icon</div>

    <div><img class="icon" src="http://maps.google.com/mapfiles/ms/icons/red-dot.png" alt="Stop Icon">Student Locations</div>
    <div><img class="icon" src="https://img.icons8.com/color/48/bus.png" alt="Bus Icon">School Bus</div>
  `;

  // Add the legend to the map
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);

  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

  // Custom icon for Anthena School
  const schoolIcon = {
    url: "https://cdn-icons-png.flaticon.com/512/8074/8074788.png", // URL for the school icon
    scaledSize: new google.maps.Size(30, 30), // Size of the icon
  };

  // Route 1: Gratewall
const stopsRoute1 = [
  { lat: -1.425298, lng: 36.960770, title: "Anthena School" }, // Starting point for Route 1
  { lat: -1.4012, lng: 36.9124, title: "Gratewall Estate" },
  { lat: -1.4035, lng: 36.9182, title: "Sunrise Apartments" },
  { lat: -1.4071, lng: 36.9098, title: "Evergreen Market" },
  { lat: -1.4103, lng: 36.9155, title: "Ridgeview Heights" },
  { lat: -1.4059, lng: 36.9201, title: "St. James Academy" },
  { lat: -1.4127, lng: 36.9073, title: "Greenfield Park" },
  { lat: -1.4084, lng: 36.9251, title: "Bright Future School" },
  { lat: -1.4039, lng: 36.9058, title: "Palm Breeze Villas" },
  { lat: -1.425298, lng: 36.960770, title: "Anthena School" }, // Ending point for Route 1
];

// Route 2: Mlolongo
const stopsRoute2 = [
  { lat: -1.425298, lng: 36.960770, title: "Anthena School" }, // Starting point for Route 2
  { lat: -1.3768, lng: 36.9632, title: "Mlolongo Stage" },
  { lat: -1.3725, lng: 36.9578, title: "Weighbridge Point" },
  { lat: -1.3792, lng: 36.9551, title: "Airport View Apartments" },
  { lat: -1.3854, lng: 36.9623, title: "Hilltop Market" },
  { lat: -1.3907, lng: 36.9681, title: "Sunshine School" },
  { lat: -1.3783, lng: 36.9724, title: "Eastern Bypass Junction" },
  { lat: -1.3881, lng: 36.9597, title: "Royal Gardens Estate" },
  { lat: -1.3815, lng: 36.9699, title: "New Horizon Court" },
  { lat: -1.425298, lng: 36.960770, title: "Anthena School" }, // Ending point for Route 2
];

// Route 3: Athi River
const stopsRoute3 = [
  { lat: -1.425298, lng: 36.960770, title: "Anthena School" }, // Starting point for Route 3
  { lat: -1.4561, lng: 37.0135, title: "Athi River Stage" },
  { lat: -1.4498, lng: 37.0057, title: "Crystal Heights" },
  { lat: -1.4602, lng: 37.0203, title: "Devki Junction" },
  { lat: -1.4557, lng: 37.0259, title: "Great Oasis Apartments" },
  { lat: -1.4643, lng: 37.0171, title: "Riverside Academy" },
  { lat: -1.4482, lng: 37.0104, title: "Golden Estate" },
  { lat: -1.4709, lng: 37.0236, title: "Safari Park Villas" },
  { lat: -1.4535, lng: 37.0072, title: "Midtown Market" },
  { lat: -1.425298, lng: 36.960770, title: "Anthena School" }, // Ending point for Route 3
];

// Route 4: Kitengela
const stopsRoute4 = [
  { lat: -1.425298, lng: 36.960770, title: "Anthena School" }, // Starting point for Route 4
  { lat: -1.4642, lng: 37.0279, title: "Kitengela Stage" },
  { lat: -1.4713, lng: 37.0321, title: "Milimani Estate" },
  { lat: -1.4655, lng: 37.0382, title: "Kitengela Mall" },
  { lat: -1.4729, lng: 37.0295, title: "Acacia Junction" },
  { lat: -1.4687, lng: 37.0338, title: "Imara Academy" },
  { lat: -1.4611, lng: 37.0404, title: "Greenview Estate" },
  { lat: -1.4742, lng: 37.0367, title: "Kitengela Heights" },
  { lat: -1.4628, lng: 37.0283, title: "Sunset Apartments" },
  { lat: -1.425298, lng: 36.960770, title: "Anthena School" }, // Ending point for Route 4
];
  // New route for Route 5
  // const stopsRoute5 = [
  //   {
  //     lat: -1.22419,
  //     lng: 36.9176,
  //     title: "Anthena School",
  //     icon: schoolIcon,
  //   }, // Starting point for Route 5 (using Anthena School as stat)
  //   { lat: -1.223487, lng: 36.902212, title: "Kasarani Chief's Camp" },
  //   { lat: -1.22053, lng: 36.90278, title: "Kasarani Health Centre" },
  //   { lat: -1.22206, lng: 36.89928, title: "St. Marys Sportsview Academy" },
  //   { lat: -1.21797, lng: 36.89953, title: "Kassmatt Supermarket - Kasarani" },
  //   { lat: -1.22089, lng: 36.89647, title: "ENVIRONMENTAL LIAISON CENTRE INTERNATIONAL" },
  //   { lat: -1.22431, lng: 36.89489, title: "Gifts By Wiggi" },
  //   { lat: -1.22164, lng: 36.89522, title: "HIVE CAR TINTING" },
  //   { lat: -1.21992, lng: 36.89419, title: "KARIUKI MURIUKI & COMPANY ADVOCATES" },
  //   { lat: -1.21950, lng: 36.88208, title: "Topace Studio Apartments" },
  //   { lat: -1.21933, lng: 36.88653, title: "Roybahn Heights Apartments" },
  //   { lat: -1.21758, lng: 36.88933, title: "Fleek Car Accessories" },
  //   { lat: -1.21536, lng: 36.88614, title: "Happy Life Children's Home" },
  //   { lat: -1.21569, lng: 36.88300, title: "Rhoda Muthangya" },
  //   { lat: -1.22419, lng: 36.9176, title: "Anthena School" }, // Return to starting point
  // ];

    // Function to save routes to local storage
  function saveRoutesToLocalStorage(routes: any[]) {
    localStorage.setItem('routes', JSON.stringify(routes));
  }

  // Function to load routes from local storage
  function loadRoutesFromLocalStorage(): any[] {
    const storedRoutes = localStorage.getItem('routes');
    return storedRoutes ? JSON.parse(storedRoutes) : [];
  }

   // Load existing routes or initialize with default routes
  let allRoutes = loadRoutesFromLocalStorage();
  if (allRoutes.length === 0) {
    allRoutes = [
      { name: 'Route 1', stops: stopsRoute1, color: '#0000FF' },
      { name: 'Route 2', stops: stopsRoute2, color: '#00FF00' },
      { name: 'Route 3', stops: stopsRoute3, color: '#FF0000' },
      { name: 'Route 4', stops: stopsRoute4, color: '#FFFF00' },
      // { name: 'Route 5', stops: stopsRoute5, color: '#FFA500' }
    ];
    saveRoutesToLocalStorage(allRoutes); // Save initial routes
  }

  // Function to render a route and animate the bus
  function renderRouteAndAnimateBus(
    stops: { lat: number; lng: number; title: string; icon?: any }[], // Optional icon for stops
    busIconUrl: string,
    routeColor: string
  ) {
    // Add markers for each stop with labels (hidden initially)
    stops.forEach((stop) => {
      const marker = new google.maps.Marker({
        position: { lat: stop.lat, lng: stop.lng },
        map: map,
        icon: stop.icon || {
          // Use custom flat marker icon if provided, or fallback to default
          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Flat marker image URL

          scaledSize: new google.maps.Size(20, 20), // Adjust to fit your image size
          anchor: new google.maps.Point(12, 12), // Center the marker (half of 25x25)
        },
      });

      // Info window to display the title of the stop when clicked
      const infowindow = new google.maps.InfoWindow({
        content: stop.title,
      });

      // Add a click event listener to show the info window when the marker is clicked
      marker.addListener("click", () => {
        infowindow.open(map, marker);
      });
    });

    // Initialize Directions service and renderer
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map: map,
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: routeColor,
        strokeWeight: 4,
      },
    });

    // Define waypoints (excluding the start and end locations)
    const waypoints = stops.slice(1, -1).map((stop) => ({
      location: { lat: stop.lat, lng: stop.lng },
      stopover: true,
    }));

    // Request for the route
    directionsService.route(
      {
        origin: { lat: stops[0].lat, lng: stops[0].lng }, // Start point (Anthena School)
        destination: {
          lat: stops[stops.length - 1].lat,
          lng: stops[stops.length - 1].lng,
        }, // End point (last stop)
        waypoints: waypoints, // Intermediate stops
        travelMode: google.maps.TravelMode.DRIVING, // Travel by driving
      },
      (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(response); // Render the route on the map
          animateBus(
            response.routes[0].overview_path,
            busIconUrl,
            stops[0].lat,
            stops[0].lng
          ); // Animate the bus along the route
        } else {
          console.error("Directions request failed due to " + status);
        }
      }
    );
  }

  // Function to animate the bus along the route
  function animateBus(
    path: google.maps.LatLng[],
    busIconUrl: string,
    startLat: number,
    startLng: number
  ) {
    const busMarker = new google.maps.Marker({
      map: map,
      icon: {
        url: busIconUrl, // Custom bus icon
        scaledSize: new google.maps.Size(40, 40),
      },
      position: path[0], // Start position
    });

    let index = 0;
    const totalSteps = path.length;
    const interval = 1000; // Time between steps (milliseconds)

    function moveBus() {
      if (index < totalSteps) {
        busMarker.setPosition(path[index]); // Move the bus marker
        index++;
        setTimeout(moveBus, interval); // Continue moving
      } else {
        busMarker.setPosition({ lat: startLat, lng: startLng }); // Set position back to the start
        index = 0; // Reset index
      }
    }

    moveBus(); // Start the bus animation
  }

  // Render and animate the buses on all routes
  renderRouteAndAnimateBus(
    stopsRoute1,
    "https://img.icons8.com/color/48/bus.png",
    "#0000FF"
  ); // Route 1 (blue)
  renderRouteAndAnimateBus(
    stopsRoute2,
    "https://img.icons8.com/color/48/bus.png",
    "#00FF00"
  ); // Route 2 (green)
  renderRouteAndAnimateBus(
    stopsRoute3,
    "https://img.icons8.com/color/48/bus.png",
    "#FF0000"
  ); // Route 3 (red)
  renderRouteAndAnimateBus(
   stopsRoute4,
    "https://img.icons8.com/color/48/bus.png",
    "#FFFF00" // Yellow color for Route 4
  );
  // Render and animate the bus on Route 5
  // renderRouteAndAnimateBus(
    // stopsRoute5,
    // "https://img.icons8.com/color/48/bus.png",
    // "#FFA500" // Orange color for Route 5
  // );

}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};