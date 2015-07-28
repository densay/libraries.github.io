L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';

//creates a map(initializes)
var map = L.mapbox.map('map', 'examples.map-20v6611k')
  .setView([38.12367, -76.81229], 9);

//intializing the feature layer
var myLayer = L.mapbox.featureLayer().addTo(map);

//collection of map points 
var geojson = {
    type: 'FeatureCollection',


    // This is an array of Map Point objects
    features: [
    
    {
        type: 'Feature',
        properties: {
            title: 'Pico Branch Library',
            description: '2201 Pico Blvd Santa Monica, CA',
            'marker-color': '#f0f8ff',
            'marker-size': 'large',
            'marker-symbol': 'library',
        },
        geometry: {
            type: 'Point',
            coordinates: [-118.467354, 34.021102]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Santa Monica Public Library',
            description: '601 Santa Monica Blvd Santa Monica, CA',
            'marker-color': '#ffff00',
            'marker-size': 'large',
            'marker-symbol': 'library',
        },
        geometry: {
            type: 'Point',
            coordinates: [-118.493359, 34.018530]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Montana Ave Branch Library',
            description: '1704 Montana Ave Santa Monica, CA ',
            'marker-color': '#d8bfd8',
            'marker-size': 'large',
            'marker-symbol': 'library',
        },
        geometry: {
            type: 'Point',
            coordinates: [-118.492001, 34.034480]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Ocean Park Branch Library',
            description: '2601 Main St, Santa Monica, CA 90405',
            'marker-color': '#ffb6c1',
            'marker-size': 'large',
            'marker-symbol': 'library',
        },
        geometry: {
            type: 'Point',
            coordinates: [-118.483601, 34.002758]
        }
    },
        {
        type: 'Feature',
        properties: {
            title: 'Mar Vista Branch Library',
            description: '12006 Venice Blvd Los Angeles, CA ',
            'marker-color': '#ff3030',
            'marker-size': 'large',
            'marker-symbol': 'library',
        },
        geometry: {
            type: 'Point',
            coordinates: [-118.429086, 34.005774]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'West Los Angeles Regional Library',
            description: '11360 Santa Monica Blvd Los Angeles, CA',
            'marker-color': '#ffec8b',
            'marker-size': 'large',
            'marker-symbol': 'library',
        },
        geometry: {
            type: 'Point',
            coordinates: [-118.450121, 34.045777]
        },
    },
	{
		type: 'Feature',
		properties: {
			title: 'Brentwood Branch Library',
			description: '11820 San Vicente Blvd Los Angeles, CA ',
			'marker-color': '#9aff9a',
			'marker-size': 'large',
			'marker-symbol':'library',
		},
		geometry:{
			type: 'Point',
			coordinates: [-118.468705,34.052698]
		},
	},
	{
		type:'Feature',
		properties:{
			title: 'Palms-Rancho Park Branch Library',
			description: '2920 Overland Ave Los Angeles, CA',
			'marker-color': '#ffa54f',
			'marker-size': 'large',
			'marker-symbol':'library',
		},
		geometry:{
			type: 'Point',
			coordinates: [-118.418237, 34.033639]
		},
	},
	{
		type: 'Feature',
		properties:{
			title: 'Playa Vista Library',
			description: '6400 Playa Vista Dr Playa Vista, CA',
			'marker-color': '#008b45',
			'marker-size':'large',
			'marker-symbol':'library',
			
		},
		geometry:{
			type: 'Point',
			coordinates:[-118.425597,33.970205]
		},
		
	},
	{
		type: 'Feature',
		properties:{
			title: 'Venice-Abbot Kinney Library',
			description: '501 Venice Way Venice, CA',
			'marker-color': '#eedc82',
			'marker-size':'large',
			'marker-symbol':'library',
			
		},
		geometry:{
			type: 'Point',
			coordinates:[-118.467558,33.986980]
		},
		
	},
	{	
		type: 'Feature',
		properties:{
			title: 'Fairview Branch Library',
			description: '2101 Ocean Park Blvd Santa Monica, CA',
			'marker-color': '#cc0066',
			'marker-size':'large',
			'marker-symbol':'library',
			
		},
		geometry:{
			type: 'Point',
			coordinates:[-118.463652,34.014654]
		},
		
	},

    ]
};

myLayer.setGeoJSON(geojson); // Adds all of the markers to the map

map.on('ready', function() {
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(myLayer.getBounds());
});

















