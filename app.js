const path = require("path");
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const events = require('./routes/api/events');
const bodyParser = require('body-parser');
const passport = require('passport');
const seeder = require('mongoose-seed');
const search = require("./routes/api/search");


require('./config/passport')(passport);



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}


mongoose
    .connect(db, {useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch( err => console.log(err));


    // seeder.connect(db, function() {
    //
    //   // Load Mongoose models
    //   seeder.loadModels([
    //     'models/Attraction.js',
    //
    //   ]);
    //
    //   // Clear specified collections
    //   seeder.clearModels(['Attractions'], function() {
    //
    //     // Callback to populate DB once collections have been cleared
    //     seeder.populateModels(data, function() {
    //       seeder.disconnect();
    //     });
    //
    //   });
    // });

    // Data array containing seed data - documents organized by Model
    // var data = [
    //     {
    //         'model': 'Attractions',
    //         'documents': [
    //             {
    //               'name': "Oakland Chinatown",
    //               'Bartobj': {name: "12th St. Oakland City Center", abbr: "12TH", lat: "37.803768", lng: "-122.271450"},
    //               'lat': "37.7986",
    //               'lng': "-122.2668",
    //               'description': "The Chinatown neighborhood in Oakland is a pan-Asian neighborhood which reflects Oakland's diverse Asian American community. Chinese were the first Asians to arrive in Oakland in the 1850s, followed by Japanese in the 1890s, Koreans in the 1900s, and Filipinos in the 1930s and 1940s. Southeast Asians began arriving in the 1970s during the Vietnam War. Many Asian languages and dialects can be heard in Chinatown due to its diverse population.",
    //               'image': 'https://s15.postimg.cc/gc1q8fgzv/Chinatown_Oakland.jpg'
    //             },
    //             {
    //               'name': "Dolores Park",
    //               'Bartobj': {name: "16th St. Mission", abbr: "16TH", lat: "37.765062", lng: "-122.419694"},
    //               'lat': "37.7596",
    //               'lng': "-122.4269",
    //               'description': "Mission Dolores Park, often abbreviated to Dolores Park, is a Leave No Trace city park in San Francisco, California. Dolores Park offers several features including many tennis courts, a basketball court, a multi-purpose court, a soccer field, a pissoir, a children's playground, and a dog play area. The southern half of the park is also notable for its views of the Mission district, downtown, the San Francisco Bay and the East Bay.",
    //               'image': 'https://s15.postimg.cc/sqoi8vitn/dolores.jpg'
    //             },
    //             {
    //               'name': "UCB Campus",
    //               'Bartobj': {name: "Downtown Berkeley", abbr: "DBRK", lat: "37.870104", lng: "-122.268133"},
    //               'lat': "37.8719",
    //               'lng': "-122.2585",
    //               'description': "The University of California, Berkeley (UC Berkeley) is a public research university in Berkeley, California. Founded in 1868, Berkeley is the flagship institution of the ten research universities affiliated with the University of California system.",
    //               'image': 'https://s15.postimg.cc/5qhuw7d6j/UCB.jpg'
    //             },
    //             {
    //               'name': "Embarcadero",
    //               'Bartobj': {name: "Embarcadero", abbr: "EMBR", lat: "37.792874", lng: "-122.397020"},
    //               'lat': "37.7993",
    //               'lng': "-122.3977",
    //               'description': "Major street in the port area of San Francisco that has become a bustling area of shops, businesses and sightseeing attractions.",
    //               'image': 'https://s15.postimg.cc/6eqpfi6uz/embarcadero.jpg'
    //             },
    //             {
    //               'name': "Lake Merritt",
    //               'Bartobj': {name: "Lake Merritt", abbr: "LAKE", lat: "37.797027", lng: "-122.265180"},
    //               'lat': "37.8012",
    //               'lng': "-122.2583",
    //               'description': "Lake Merritt is a large tidal lagoon in the center of Oakland, California, just east of Downtown. It is surrounded by parkland and city neighborhoods. It is historically significant as the United States' first official wildlife refuge, designated in 1870, and has been listed as a National Historic Landmark since 1963, and on the National Register of Historic Places since 1966. The lake features grassy shores; several artificial islands intended as bird refuges; an interpretive center called the Rotary Nature Center; a boating center where sailboats, canoes and rowboats can be rented and classes are held; and a fairy tale themed amusement park called Children's Fairyland. A popular walking and jogging path runs along its perimeter. The circumference of the lake is 3.4 miles (5.5 km) and its area is 155 acres (63 ha).",
    //               'image': 'https://s15.postimg.cc/6ss1engjf/lake_marritt.jpg'
    //             },
    //             {
    //               'name': "Union Square",
    //               'Bartobj': {name: "Powell St.", abbr: "POWL", lat: "37.784471", lng: "-122.407974"},
    //               'lat': "37.7880",
    //               'lng': "-122.4075",
    //               'description': "A shopper's paradise, this bustling square near the theater district has everything from upscale department stores and boutiques to discount houses. After a $25-million facelift in 2002, the cosmopolitan hub boasts a huge amphitheater, granite pedestals on which street entertainers perform and a tree and flower-lined environment in which to enjoy an espresso or an elegant meal.",
    //               'image': 'https://s15.postimg.cc/mr0r4xnnv/union_square.jpg'
    //             },
    //             {
    //               'name': "Paramount Theatre",
    //               'Bartobj': {name: "19th St. Oakland", abbr: "19TH", lat: "37.808350", lng: "-122.268602"},
    //               'lat': "37.8097",
    //               'lng': "-122.2682",
    //               'description': "The Paramount Theatre is a 3,040-seat Art Deco movie theater located at 2025 Broadway in downtown Oakland, California, USA. When it was built in 1931, it was the largest multi-purpose theater on the West Coast, seating 3476. Today, the Paramount is the home of the Oakland East Bay Symphony and the Oakland Ballet, it regularly plays host to R&B, jazz, blues, pop, rock, gospel, classical music, as well as ballets, plays, stand-up comedy, lecture series, special events, and screenings of classic movies from Hollywood's Golden Era.",
    //               'image': 'https://s15.postimg.cc/g0k9vf86z/paramount.jpg'
    //             },
    //             {
    //               'name': "Balmy Alley Murals",
    //               'Bartobj': {name: "24th St. Mission", abbr: "24TH", lat: "37.752470", lng: "-122.418143"},
    //               'lat': "37.7518",
    //               'lng': "-122.4124",
    //               'description': "Balmy Alley is a one-block-long alley that is home to the most concentrated collection of murals in the city of San Francisco. It is located in the south central portion of the Inner Mission District between 24th Street and Garfield Square. Since 1973, most buildings on the street have been decorated with a mural.",
    //               'image': 'https://s15.postimg.cc/doc9xzg7v/balmy_alley.jpg'
    //             },
    //             {
    //               'name': "City Hall",
    //               'Bartobj': {name: "Civic Center/UN Plaza", abbr: "CIVC", lat: "37.779732", lng: "-122.414123"},
    //               'lat': "37.7793",
    //               'lng': "-122.4193",
    //               'description': "San Francisco City Hall is the seat of government for the City and County of San Francisco, California. Re-opened in 1915 in its open space area in the city's Civic Center, it is a Beaux-Arts monument to the City Beautiful movement that epitomized the high-minded American Renaissance of the 1880s to 1917.",
    //               'image': 'https://s15.postimg.cc/mczf5jtcb/City_Hall.jpg'
    //             },
    //             {
    //               'name': "Coliseum",
    //               'Bartobj': {name: "Coliseum", abbr: "COLS", lat: "37.753661", lng: "-122.196869"},
    //               'lat': "37.7516",
    //               'lng': "-122.2005",
    //               'description': "The Oakland Coliseum is a multi-purpose stadium in Oakland, which is home to both the Oakland Athletics of Major League Baseball (MLB) and the Oakland Raiders of the National Football League (NFL). It opened in 1966 and is the only remaining stadium in the United States that is shared by professional football and baseball teams.",
    //               'image': 'https://s15.postimg.cc/jvnnybz63/Coliseum.jpg'
    //             },
    //             {
    //               'name': "Salesforce Transit Center",
    //               'Bartobj': {name: "Montgomery St.", abbr: "MONT", lat: "37.789405", lng: "-122.401066"},
    //               'lat': "37.7892",
    //               'lng': "-122.3968",
    //               'description': "Salesforce Transit Center is an intermodal transit station in downtown San Francisco. It serves as the primary bus terminal - and future rail terminal - for the San Francisco Bay Area. The 1,430-foot (440 m)-long building is located one block south of Market Street, San Francisco's primary commercial and transportation artery.",
    //               'image': 'https://s15.postimg.cc/h7y7o1j0b/salesforce.jpg'
    //             },
    //             {
    //               'name': "San Francisco International Airport",
    //               'Bartobj': {name: "San Francisco International Airport", abbr: "SFIA", lat: "37.615966", lng: "-122.392409"},
    //               'lat': "37.7749",
    //               'lng': "-122.4194",
    //               'description': "Your first or last taste of San Francisco can happen right here at the wide range of locally based restaurants. The airport is a credentialed museum, so look for intriguing and occasionally offbeat exhibitions throughout the terminals. The Aviation Museum in the International Terminal presents the past of this fascinating facility, while the San Francisco Arts Commission curates a collection of permanent art displayed throughout SFO.",
    //               'image': 'https://s15.postimg.cc/yb0zj9x1n/sfo.jpg'
    //             },
    //             {
    //               'name': "Lake Merced Golf Club",
    //               'Bartobj': {name: "Daly City", abbr: "DALY", lat: "37.706121", lng: "-122.469081"},
    //               'lat': "37.6959",
    //               'lng': "-122.4728",
    //               'description': "Lake Merced Golf Club is an 18-hole private golf club located in Daly City, an adjacent suburb south of San Francisco. Founded 96 years ago in 1922.",
    //               'image': 'https://s15.postimg.cc/x8qt0tlyz/golf.jpg'
    //             },
    //             {
    //               'name': "Sunnyside Conservatory",
    //               'Bartobj': {name: "Balboa Park", abbr: "BALB", lat: "37.721585", lng: "-122.447506"},
    //               'lat': "37.7319",
    //               'lng': "-122.4408",
    //               'description': "San Francisco’s Sunnyside Conservatory (236 Monterey Boulevard) is an extraordinary gathering space and botanic jewel, set off by a hundred-year old palm grove and the dramatic foliage of its surrounding gardens. Owned by the San Francisco Recreation and Park Department, the garden is open everyday dawn to dusk, for everyone’s enjoyment.",
    //               'image': 'https://s15.postimg.cc/szm2yo5uz/conservatory.jpg'
    //             }
    //         ]
    //     }
    // ];

app.get("/", (req, res) => res.send(" Bart App for Tourists"));
const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server is running on port ${port}`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/events", events);
app.use("/api/search", search);
app.use(passport.initialize());
