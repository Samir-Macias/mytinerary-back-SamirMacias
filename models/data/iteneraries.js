import "dotenv/config.js"
import '../../config/database.js'
import Itenerary from "../Itenerary.js"

const itineraries = [
    // Seoul
    {
        name: "Gyeongbokgung Palace Tour",
        image: "https://robohash.org/200?set=set5",
        price: 3,
        duration: "3 hours",
        likes: "150",
        hashtags: "#palace #Seoul #history",
        city: "671811a2dbf52dc4988b1a56"
    },
    {
        name: "Explore Gangnam District",
        image: "https://robohash.org/201?set=set5",
        price: 4,
        duration: "4 hours",
        likes: "180",
        hashtags: "#Gangnam #Seoul #fashion",
        city: "671811a2dbf52dc4988b1a56"
    },
    {
        name: "Namdaemun Market Tour",
        image: "https://robohash.org/290?set=set5",
        price: 2,
        duration: "3 hours",
        likes: "120",
        hashtags: "#market #Seoul #shopping",
        city: "671811a2dbf52dc4988b1a56"
    },
    {
        name: "https://robohash.org/250?set=set5",
        image: "image_url_seoul4.jpg",
        price: 5,
        duration: "5 hours",
        likes: "160",
        hashtags: "#food #Seoul #gastronomy",
        city: "671811a2dbf52dc4988b1a56"
    },

    // Monaco
    {
        name: "Monte Carlo Tour",
        image: "https://robohash.org/503?set=set5",
        price: 5,
        duration: "2 hours",
        likes: "140",
        hashtags: "#MonteCarlo #Monaco #luxury",
        city: "671811a2dbf52dc4988b1a57"
    },
    {
        name: "Visit the Prince's Palace",
        image: "https://robohash.org/523?set=set5",
        price: 3,
        duration: "3 hours",
        likes: "110",
        hashtags: "#palace #Monaco #history",
        city: "671811a2dbf52dc4988b1a57"
    },
    {
        name: "Monte Carlo Casino",
        image: "https://robohash.org/533?set=set5",
        price: 4,
        duration: "1 hour",
        likes: "200",
        hashtags: "#casino #Monaco #gambling",
        city: "671811a2dbf52dc4988b1a57"
    },
    {
        name: "Monaco Harbor Tour",
        image: "https://robohash.org/543?set=set5",
        price: 2,
        duration: "2 hours",
        likes: "130",
        hashtags: "#harbor #Monaco #yachts",
        city: "671811a2dbf52dc4988b1a57"
    },

    // Paris
    {
        name: "Eiffel Tower Tour",
        image: "https://robohash.org/403?set=set5",
        price: 4,
        duration: "2 hours",
        likes: "230",
        hashtags: "#EiffelTower #Paris #iconic",
        city: "671811a2dbf52dc4988b1a58"
    },
    {
        name: "Louvre Museum Visit",
        image: "https://robohash.org/423?set=set5",
        price: 5,
        duration: "4 hours",
        likes: "210",
        hashtags: "#Louvre #Paris #art",
        city: "671811a2dbf52dc4988b1a58"
    },
    {
        name: "Montmartre Walk",
        image: "https://robohash.org/463?set=set5",
        price: 2,
        duration: "3 hours",
        likes: "170",
        hashtags: "#Montmartre #Paris #bohemian",
        city: "671811a2dbf52dc4988b1a58"
    },
    {
        name: "Seine River Cruise",
        image: "https://robohash.org/437?set=set5",
        price: 3,
        duration: "2 hours",
        likes: "160",
        hashtags: "#Seine #Paris #romance",
        city: "671811a2dbf52dc4988b1a58"
    },

    // Tokyo
    {
        name: "Senso-ji Temple Tour",
        image: "https://robohash.org/317?set=set5",
        price: 2,
        duration: "2 hours",
        likes: "140",
        hashtags: "#temple #Tokyo #culture",
        city: "671811a2dbf52dc4988b1a59"
    },
    {
        name: "Akihabara Electronics District",
        image: "https://robohash.org/370?set=set5",
        price: 4,
        duration: "3 hours",
        likes: "200",
        hashtags: "#Akihabara #Tokyo #tech",
        city: "671811a2dbf52dc4988b1a59"
    },
    {
        name: "Tokyo Bay Cruise",
        image: "https://robohash.org/396?set=set5",
        price: 3,
        duration: "2 hours",
        likes: "170",
        hashtags: "#bay #Tokyo #cruise",
        city: "671811a2dbf52dc4988b1a59"
    },
    {
        name: "Shibuya and Harajuku Exploration",
        image: "https://robohash.org/328?set=set5",
        price: 5,
        duration: "4 hours",
        likes: "180",
        hashtags: "#Shibuya #Harajuku #Tokyo",
        city: "671811a2dbf52dc4988b1a59"
    },

    // New York
    {
        name: "Central Park Tour",
        image: "https://robohash.org/197?set=set5",
        price: 3,
        duration: "3 hours",
        likes: "190",
        hashtags: "#CentralPark #NewYork #nature",
        city: "671811a2dbf52dc4988b1a5a"
    },
    {
        name: "Metropolitan Museum of Art",
        image: "https://robohash.org/175?set=set5",
        price: 5,
        duration: "4 hours",
        likes: "220",
        hashtags: "#Met #NewYork #art",
        city: "671811a2dbf52dc4988b1a5a"
    },
    {
        name: "Empire State Building View",
        image: "https://robohash.org/119?set=set5",
        price: 4,
        duration: "2 hours",
        likes: "210",
        hashtags: "#EmpireState #NewYork #view",
        city: "671811a2dbf52dc4988b1a5a"
    },
    {
        name: "Times Square Tour",
        image: "https://robohash.org/172?set=set5",
        price: 2,
        duration: "1.5 hours",
        likes: "230",
        hashtags: "#TimesSquare #NewYork #lights",
        city: "671811a2dbf52dc4988b1a5a"
    },

    // Moscow
    {
        name: "Red Square and Kremlin Tour",
        image: "https://robohash.org/92?set=set5",
        price: 4,
        duration: "3 hours",
        likes: "170",
        hashtags: "#Kremlin #Moscow #history",
        city: "671919badbab801bdc8b0ab4"
    },
    {
        name: "St. Basil's Cathedral",
        image: "https://robohash.org/94?set=set5",
        price: 2,
        duration: "1.5 hours",
        likes: "150",
        hashtags: "#StBasils #Moscow #iconic",
        city: "671919badbab801bdc8b0ab4"
    },
    {
        name: "Moscow Metro Tour",
        image: "https://robohash.org/96?set=set5",
        price: 1,
        duration: "2 hours",
        likes: "140",
        hashtags: "#metro #Moscow #architecture",
        city: "671919badbab801bdc8b0ab4"
    },
    {
        name: "State History Museum",
        image: "https://robohash.org/98?set=set5",
        price: 3,
        duration: "2 hours",
        likes: "130",
        hashtags: "#museum #Moscow #culture",
        city: "671919badbab801bdc8b0ab4"
    },
    // Madrid
    {
        name: "Royal Palace Tour",
        image: "https://robohash.org/725?set=set5",
        price: 4,
        duration: "3 hours",
        likes: "150",
        hashtags: "#RoyalPalace #Madrid #history",
        city: "672552f274f2ba229f75a896"
    },
    {
        name: "Prado Museum Visit",
        image: "https://robohash.org/688?set=set5",
        price: 5,
        duration: "4 hours",
        likes: "180",
        hashtags: "#PradoMuseum #Madrid #art",
        city: "672552f274f2ba229f75a896"
    },
    {
        name: "Tapas Tasting in La Latina",
        image: "https://robohash.org/917?set=set5",
        price: 3,
        duration: "2 hours",
        likes: "120",
        hashtags: "#tapas #Madrid #food",
        city: "672552f274f2ba229f75a896"
    },
    {
        name: "Retiro Park Walk",
        image: "https://robohash.org/642?set=set5",
        price: 2,
        duration: "2 hours",
        likes: "140",
        hashtags: "#RetiroPark #Madrid #nature",
        city: "672552f274f2ba229f75a896"
    },

    // Bangkok
    {
        name: "Grand Palace Tour",
        image: "https://robohash.org/712?set=set5",
        price: 4,
        duration: "3 hours",
        likes: "190",
        hashtags: "#GrandPalace #Bangkok #temple",
        city: "671811a2dbf52dc4988b1a4d"
    },
    {
        name: "Floating Market Experience",
        image: "https://robohash.org/844?set=set5",
        price: 3,
        duration: "4 hours",
        likes: "210",
        hashtags: "#FloatingMarket #Bangkok #culture",
        city: "671811a2dbf52dc4988b1a4d"
    },
    {
        name: "Street Food Tour",
        image: "https://robohash.org/679?set=set5",
        price: 2,
        duration: "2 hours",
        likes: "180",
        hashtags: "#streetfood #Bangkok #food",
        city: "671811a2dbf52dc4988b1a4d"
    },
    {
        name: "Temple of Dawn Visit",
        image: "https://robohash.org/970?set=set5",
        price: 5,
        duration: "2 hours",
        likes: "220",
        hashtags: "#TempleOfDawn #Bangkok #history",
        city: "671811a2dbf52dc4988b1a4d"
    },

    // Istanbul
    {
        name: "Hagia Sophia Tour",
        image: "https://robohash.org/890?set=set5",
        price: 4,
        duration: "2 hours",
        likes: "200",
        hashtags: "#HagiaSophia #Istanbul #architecture",
        city: "671811a2dbf52dc4988b1a4e"
    },
    {
        name: "Bosphorus Cruise",
        image: "https://robohash.org/601?set=set5",
        price: 5,
        duration: "3 hours",
        likes: "220",
        hashtags: "#Bosphorus #Istanbul #cruise",
        city: "671811a2dbf52dc4988b1a4e"
    },
    {
        name: "Grand Bazaar Shopping",
        image: "https://robohash.org/738?set=set5",
        price: 2,
        duration: "2 hours",
        likes: "150",
        hashtags: "#GrandBazaar #Istanbul #shopping",
        city: "671811a2dbf52dc4988b1a4e"
    },
    {
        name: "Topkapi Palace Tour",
        image: "https://robohash.org/869?set=set5",
        price: 3,
        duration: "3 hours",
        likes: "180",
        hashtags: "#TopkapiPalace #Istanbul #history",
        city: "671811a2dbf52dc4988b1a4e"
    },

    // Toronto
    {
        name: "CN Tower Observation Deck",
        image: "https://robohash.org/953?set=set5",
        price: 4,
        duration: "1.5 hours",
        likes: "210",
        hashtags: "#CNTower #Toronto #views",
        city: "671811a2dbf52dc4988b1a4f"
    },
    {
        name: "Royal Ontario Museum Visit",
        image: "https://robohash.org/677?set=set5",
        price: 3,
        duration: "3 hours",
        likes: "170",
        hashtags: "#RoyalOntarioMuseum #Toronto #culture",
        city: "671811a2dbf52dc4988b1a4f"
    },
    {
        name: "Distillery District Walk",
        image: "https://robohash.org/845?set=set5",
        price: 2,
        duration: "2 hours",
        likes: "140",
        hashtags: "#DistilleryDistrict #Toronto #heritage",
        city: "671811a2dbf52dc4988b1a4f"
    },
    {
        name: "Toronto Islands Ferry",
        image: "https://robohash.org/903?set=set5",
        price: 5,
        duration: "3 hours",
        likes: "190",
        hashtags: "#TorontoIslands #Toronto #nature",
        city: "671811a2dbf52dc4988b1a4f"
    },

    // Los Angeles
    {
        name: "Hollywood Sign Hike",
        image: "https://robohash.org/668?set=set5",
        price: 3,
        duration: "2 hours",
        likes: "210",
        hashtags: "#HollywoodSign #LosAngeles #hiking",
        city: "671811a2dbf52dc4988b1a51"
    },
    {
        name: "Venice Beach Skate Park",
        image: "https://robohash.org/932?set=set5",
        price: 2,
        duration: "1.5 hours",
        likes: "160",
        hashtags: "#VeniceBeach #LosAngeles #skatepark",
        city: "671811a2dbf52dc4988b1a51"
    },
    {
        name: "Griffith Observatory Tour",
        image: "https://robohash.org/703?set=set5",
        price: 4,
        duration: "2 hours",
        likes: "230",
        hashtags: "#GriffithObservatory #LosAngeles #views",
        city: "671811a2dbf52dc4988b1a51"
    },
    {
        name: "Rodeo Drive Walk",
        image: "https://robohash.org/817?set=set5",
        price: 5,
        duration: "1.5 hours",
        likes: "150",
        hashtags: "#RodeoDrive #LosAngeles #luxury",
        city: "671811a2dbf52dc4988b1a51"
    },

    // Lisbon
    {
        name: "Belem Tower Tour",
        image: "https://robohash.org/787?set=set5",
        price: 3,
        duration: "1.5 hours",
        likes: "180",
        hashtags: "#BelemTower #Lisbon #history",
        city: "671811a2dbf52dc4988b1a52"
    },
    {
        name: "Alfama District Walk",
        image: "https://robohash.org/626?set=set5",
        price: 2,
        duration: "2 hours",
        likes: "160",
        hashtags: "#Alfama #Lisbon #culture",
        city: "671811a2dbf52dc4988b1a52"
    },
    {
        name: "Tram 28 City Tour",
        image: "https://robohash.org/975?set=set5",
        price: 4,
        duration: "2 hours",
        likes: "190",
        hashtags: "#Tram28 #Lisbon #sightseeing",
        city: "671811a2dbf52dc4988b1a52"
    },
    {
        name: "Jerónimos Monastery Visit",
        image: "https://robohash.org/743?set=set5",
        price: 5,
        duration: "2 hours",
        likes: "170",
        hashtags: "#JeronimosMonastery #Lisbon #heritage",
        city: "671811a2dbf52dc4988b1a52"
    }
];


Itenerary.insertMany(itineraries)