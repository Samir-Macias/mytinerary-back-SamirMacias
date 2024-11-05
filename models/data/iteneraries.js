import "dotenv/config.js"
import '../../config/database.js'
import Itenerary from "../Itenerary.js"

const itineraries = [
    // New York
    {
        name: "Statue of Liberty Tour",
        userImage: "https://robohash.org/647?set=set5",
        image: "https://www.statueoflibertytour.com/wp-content/uploads/2021/04/vlcsnap-2016-10-18-16h34m28s692-1.jpg",
        price: 5,
        duration: "3 hours",
        likes: "300",
        hashtags: "#StatueOfLiberty #NewYork #landmark",
        city: "671811a2dbf52dc4988b1a5a",
        userName: "MichaelSmith"
    },
    {
        name: "Central Park Bike Ride",
        userImage: "https://robohash.org/789?set=set5",
        image: "https://centralparkbikerental.nyc/content/uploads/attractions/central_park_path.jpg",
        price: 4,
        duration: "2 hours",
        likes: "250",
        hashtags: "#CentralPark #NewYork #biking",
        city: "671811a2dbf52dc4988b1a5a",
        userName: "JessicaJohnson"
    },
    {
        name: "Broadway Show Experience",
        userImage: "https://robohash.org/817?set=set5",
        image: "https://www.winspireme.com/wp-content/uploads/2023/09/Hamilton-and-Ensemble-2048x1366.jpg",
        price: 5,
        duration: "3 hours",
        likes: "350",
        hashtags: "#Broadway #NewYork #theater",
        city: "671811a2dbf52dc4988b1a5a",
        userName: "ChristopherJones"
    },
    {
        name: "Metropolitan Museum of Art Visit",
        userImage: "https://robohash.org/940?set=set5",
        image: "https://media.timeout.com/images/105813641/image.jpg",
        price: 4,
        duration: "2 hours",
        likes: "220",
        hashtags: "#MetMuseum #NewYork #art",
        city: "671811a2dbf52dc4988b1a5a",
        userName: "EmilyWilliams"
    },

    // Tokyo
    {
        name: "Shibuya Crossing Experience",
        userImage: "https://robohash.org/846?set=set5",
        image: "https://a3.cdn.japantravel.com/photo/3016-194379/800x400!/tokyo-shibuya-crossing-194379.jpg",
        price: 3,
        duration: "1 hour",
        likes: "200",
        hashtags: "#ShibuyaCrossing #Tokyo #culture",
        city: "671811a2dbf52dc4988b1a59",
        userName: "DanielBrown"
    },
    {
        name: "Senso-ji Temple Visit",
        userImage: "https://robohash.org/929?set=set5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUknPwdbZlzfDkLY_BB4THVLDIUYkXbS1jHg&s",
        price: 4,
        duration: "2 hours",
        likes: "230",
        hashtags: "#Sensoji #Tokyo #history",
        city: "671811a2dbf52dc4988b1a59",
        userName: "SophiaClark"
    },
    {
        name: "Tsukiji Fish Market Tour",
        userImage: "https://robohash.org/688?set=set5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9WK_zo6yTGLnXaK_YYjdXWxldyd2X-lzmQg&s",
        price: 5,
        duration: "2 hours",
        likes: "270",
        hashtags: "#Tsukiji #Tokyo #food",
        city: "671811a2dbf52dc4988b1a59",
        userName: "AlexanderRoberts"
    },
    {
        name: "Tokyo Skytree Observation Deck",
        userImage: "https://robohash.org/892?set=set5",
        image: "https://media.timeout.com/images/105270330/750/562/image.jpg",
        price: 5,
        duration: "1.5 hours",
        likes: "300",
        hashtags: "#TokyoSkytree #Tokyo #views",
        city: "671811a2dbf52dc4988b1a59",
        userName: "MiaAdams"
    },

    // Moscow
    {
        name: "Red Square Tour",
        userImage: "https://robohash.org/766?set=set5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiqLD446Nh6aauVt0Gaf3-JK87AYA4xH4wQ&s",
        price: 4,
        duration: "2 hours",
        likes: "180",
        hashtags: "#RedSquare #Moscow #landmark",
        city: "671919badbab801bdc8b0ab4",
        userName: "LiamHall"
    },
    {
        name: "Kremlin Visit",
        userImage: "https://robohash.org/903?set=set5",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/6d/3f/20/kremlin.jpg?w=700&h=500&s=1",
        price: 5,
        duration: "3 hours",
        likes: "200",
        hashtags: "#Kremlin #Moscow #history",
        city: "671919badbab801bdc8b0ab4",
        userName: "OliviaGonzalez"
    },
    {
        name: "Bolshoi Theatre Experience",
        userImage: "https://robohash.org/613?set=set5",
        image: "https://ek85dihi96k.exactdn.com/wp-content/uploads/2020/01/bolshoi-theater.jpg",
        price: 4,
        duration: "2 hours",
        likes: "160",
        hashtags: "#Bolshoi #Moscow #theater",
        city: "671919badbab801bdc8b0ab4",
        userName: "IsabellaNelson"
    },
    {
        name: "Gorky Park Walk",
        userImage: "https://robohash.org/737?set=set5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFZcKBiM1oDqIzS34OehhgWxR4B1n0ZrHtA&s",
        price: 3,
        duration: "1.5 hours",
        likes: "140",
        hashtags: "#GorkyPark #Moscow #nature",
        city: "671919badbab801bdc8b0ab4",
        userName: "EthanHernandez"
    },

    // Seoul
    {
        name: "Gyeongbokgung Palace Tour",
        userImage: "https://robohash.org/786?set=set5",
        image: "https://www.agoda.com/wp-content/uploads/2019/05/Gyeongbokgung-palace-Seoul-architecture-view.jpg",
        price: 4,
        duration: "2 hours",
        likes: "190",
        hashtags: "#Gyeongbokgung #Seoul #history",
        city: "671811a2dbf52dc4988b1a56",
        userName: "SophiaWright"
    },
    {
        name: "Namsan Tower Visit",
        userImage: "https://robohash.org/988?set=set5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWDbhqTkjqyyZbpd49gCs5xNzBc72VqZP6w&s",
        price: 5,
        duration: "1.5 hours",
        likes: "220",
        hashtags: "#NamsanTower #Seoul #views",
        city: "671811a2dbf52dc4988b1a56",
        userName: "WilliamKing"
    },
    {
        name: "Bukchon Hanok Village Walk",
        userImage: "https://robohash.org/675?set=set5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMSnJXEZEkLaeOrP471XkJ3Qo_zTZEBW1AQ&s",
        price: 3,
        duration: "2 hours",
        likes: "160",
        hashtags: "#Bukchon #Seoul #culture",
        city: "671811a2dbf52dc4988b1a56",
        userName: "EmmaCarter"
    },
    {
        name: "Dongdaemun Design Plaza Visit",
        userImage: "https://robohash.org/704?set=set5",
        image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/250000/250604-Dongdaemun-Design-Plaza.jpg",
        price: 2,
        duration: "1.5 hours",
        likes: "140",
        hashtags: "#Dongdaemun #Seoul #design",
        city: "671811a2dbf52dc4988b1a56",
        userName: "JamesLee"
    },

    // Buenos Aires
    {
        name: "Tango Show Experience",
        userImage: "https://robohash.org/612?set=set5",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/1c/c5/9d.jpg",
        price: 5,
        duration: "3 hours",
        likes: "300",
        hashtags: "#Tango #BuenosAires #dance",
        city: "671811a2dbf52dc4988b1a54",
        userName: "SophieAnderson"
    },
    {
        name: "Recoleta Cemetery Tour",
        userImage: "https://robohash.org/902?set=set5",
        image: "https://www.buenosairesfreewalks.com/wp-content/uploads/2024/03/entradas-cementerio-recoleta.jpg",
        price: 4,
        duration: "2 hours",
        likes: "250",
        hashtags: "#RecoletaCemetery #BuenosAires #history",
        city: "671811a2dbf52dc4988b1a54",
        userName: "DanielThompson"
    },
    {
        name: "San Telmo Market Tour",
        userImage: "https://robohash.org/439?set=set5",
        image: "https://turismo.buenosaires.gob.ar/sites/turismo/files/mercado_san_telmo_1200_pasillo.jpg",
        price: 3,
        duration: "2 hours",
        likes: "180",
        hashtags: "#SanTelmo #BuenosAires #food",
        city: "671811a2dbf52dc4988b1a54",
        userName: "MiaClark"
    },
    {
        name: "Buenos Aires City Tour",
        userImage: "https://robohash.org/666?set=set5",
        image: "https://buenosairescitybus.com/resources/img/fotos/carousel/BUS01.webp",
        price: 4,
        duration: "3 hours",
        likes: "200",
        hashtags: "#BuenosAires #CityTour #sightseeing",
        city: "671811a2dbf52dc4988b1a54",
        userName: "LiamScott"
    },

    // Santorini
    {
        name: "Santorini Sunset Cruise",
        userImage: "https://robohash.org/754?set=set5",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/48/ab/42/ralaxing-on-lagoon-560.jpg?w=1200&h=-1&s=1",
        price: 5,
        duration: "3 hours",
        likes: "310",
        hashtags: "#Santorini #SunsetCruise #romance",
        city: "671811a2dbf52dc4988b1a55",
        userName: "EmilyEvans"
    },
    {
        name: "Oia Village Tour",
        userImage: "https://robohash.org/988?set=set5",
        image: "https://es.ncl.com/sites/default/files/JTR_54_1920X1080%20LG1.jpg",
        price: 4,
        duration: "2 hours",
        likes: "260",
        hashtags: "#Oia #Santorini #exploration",
        city: "671811a2dbf52dc4988b1a55",
        userName: "AlexanderHughes"
    },
    {
        name: "Fira Cable Car Ride",
        userImage: "https://robohash.org/905?set=set5",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/32/4f/be/the-cable-car-tram.jpg?w=1200&h=1200&s=1",
        price: 3,
        duration: "1 hour",
        likes: "150",
        hashtags: "#Fira #Santorini #adventure",
        city: "671811a2dbf52dc4988b1a55",
        userName: "SamanthaDiaz"
    },
    {
        name: "Wine Tasting Tour",
        userImage: "https://robohash.org/840?set=set5",
        image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_750,q_75,w_1000,x_1944,y_1367/v1/clients/napavalley/Hess_Persson_ATV_tour_2c2a841c-4280-4e9b-b862-4b3ecbb60f60.jpg",
        price: 4,
        duration: "2 hours",
        likes: "220",
        hashtags: "#WineTasting #Santorini #culinary",
        city: "671811a2dbf52dc4988b1a55",
        userName: "JacobMartin"
    },
     // Madrid
     {
        name: "Royal Palace Tour",
        userImage: "https://robohash.org/725?set=set5",
        image: "https://cdn-imgix.headout.com/media/images/b5974b0051884e8f9c811f81d32d5a5e-24185-GuidedTourofRoyalPalaceofMadridwithPriorityAccess-008.jpg?auto=format&w=900&h=562.5&q=90&ar=16%3A10&crop=faces%2Ccenter&fit=crop",
        price: 4,
        duration: "3 hours",
        likes: "150",
        hashtags: "#RoyalPalace #Madrid #history",
        city: "672552f274f2ba229f75a896",
        userName: "JohnDoe"
    },
    {
        name: "Prado Museum Visit",
        userImage: "https://robohash.org/688?set=set5",
        image: "https://cdn.britannica.com/34/194834-131-8ECCF05C/Prado-Museum-Madrid.jpg?w=840&h=460&c=crop",
        price: 5,
        duration: "4 hours",
        likes: "180",
        hashtags: "#PradoMuseum #Madrid #art",
        city: "672552f274f2ba229f75a896",
        userName: "JaneSmith"
    },
    {
        name: "Tapas Tasting in La Latina",
        userImage: "https://robohash.org/917?set=set5",
        image: "https://magazine.smartrental.com/wp-content/uploads/2016/04/tapas-la-latina-1.jpg",
        price: 3,
        duration: "2 hours",
        likes: "120",
        hashtags: "#tapas #Madrid #food",
        city: "672552f274f2ba229f75a896",
        userName: "AlexJohnson"
    },
    {
        name: "Retiro Park Walk",
        userImage: "https://robohash.org/642?set=set5",
        image: "https://www.gpsmycity.com/img/gd_cover/1942.jpg",
        price: 2,
        duration: "2 hours",
        likes: "140",
        hashtags: "#RetiroPark #Madrid #nature",
        city: "672552f274f2ba229f75a896",
        userName: "EmilyDavis"
    },

    // Bangkok
    {
        name: "Grand Palace Tour",
        userImage: "https://robohash.org/712?set=set5",
        image: "https://cdn.getyourguide.com/img/tour/5aef851420cb9.jpeg/97.jpg",
        price: 4,
        duration: "3 hours",
        likes: "190",
        hashtags: "#GrandPalace #Bangkok #temple",
        city: "671811a2dbf52dc4988b1a4d",
        userName: "MichaelBrown"
    },
    {
        name: "Floating Market Experience",
        userImage: "https://robohash.org/844?set=set5",
        image: "https://thaiunikatravel.com/wp-content/uploads/2023/06/Tha-Kha-Floating-Market-Experience.jpg",
        price: 3,
        duration: "4 hours",
        likes: "210",
        hashtags: "#FloatingMarket #Bangkok #culture",
        city: "671811a2dbf52dc4988b1a4d",
        userName: "SarahWilson"
    },
    {
        name: "Street Food Tour",
        userImage: "https://robohash.org/679?set=set5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsGyjtw2wy4otFECTWVLaYqCVJFTSUIBSGA&s",
        price: 2,
        duration: "2 hours",
        likes: "180",
        hashtags: "#streetfood #Bangkok #food",
        city: "671811a2dbf52dc4988b1a4d",
        userName: "DavidMartinez"
    },
    {
        name: "Temple of Dawn Visit",
        userImage: "https://robohash.org/970?set=set5",
        image: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/62/2016/11/07083634/Destination-Temple-of-the-Dawn.jpg",
        price: 5,
        duration: "2 hours",
        likes: "220",
        hashtags: "#TempleOfDawn #Bangkok #history",
        city: "671811a2dbf52dc4988b1a4d",
        userName: "LisaGarcia"
    },

    // Istanbul
    {
        name: "Hagia Sophia Tour",
        userImage: "https://robohash.org/890?set=set5",
        image: "https://hagiasophiaturkey.com/wp-content/uploads/2020/04/Hagia-Sophia-Tours.jpg",
        price: 4,
        duration: "2 hours",
        likes: "200",
        hashtags: "#HagiaSophia #Istanbul #architecture",
        city: "671811a2dbf52dc4988b1a4e",
        userName: "JamesMiller"
    },
    {
        name: "Bosphorus Cruise",
        userImage: "https://robohash.org/601?set=set5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6P4vUdN35i9-rPZnIqiPhpK0Qj797gCog5Q&s",
        price: 5,
        duration: "3 hours",
        likes: "220",
        hashtags: "#Bosphorus #Istanbul #cruise",
        city: "671811a2dbf52dc4988b1a4e",
        userName: "SophiaMartinez"
    },
    {
        name: "Grand Bazaar Shopping",
        userImage: "https://robohash.org/738?set=set5",
        image: "https://cms.througheternity.com/upload/CONF83/20230906/lamps.jpg",
        price: 2,
        duration: "2 hours",
        likes: "150",
        hashtags: "#GrandBazaar #Istanbul #shopping",
        city: "671811a2dbf52dc4988b1a4e",
        userName: "ChristopherLee"
    },
    {
        name: "Topkapi Palace Tour",
        userImage: "https://robohash.org/869?set=set5",
        image: "https://cdn-imgix.headout.com/tour/25825/TOUR-IMAGE/a0821904-cab2-4d87-9f9f-c98d55fe5c38-13472-istanbul-skip-the-line-guided-tour-of-topkapi-palace-06.jpg?auto=format&w=702.4499999999999&h=401.4&q=90&fit=crop&ar=7%3A4&crop=faces",
        price: 3,
        duration: "3 hours",
        likes: "180",
        hashtags: "#TopkapiPalace #Istanbul #history",
        city: "671811a2dbf52dc4988b1a4e",
        userName: "OliviaHarris"
    },

    // Toronto
    {
        name: "CN Tower Observation Deck",
        userImage: "https://robohash.org/953?set=set5",
        image: "https://images.squarespace-cdn.com/content/v1/571e5fe9b6aa6027c8694149/bec0d269-52d2-46b4-84ab-37faf56ceef2/MWcntowerRviewA5s.jpg",
        price: 4,
        duration: "1.5 hours",
        likes: "210",
        hashtags: "#CNTower #Toronto #views",
        city: "671811a2dbf52dc4988b1a4f",
        userName: "DanielClark"
    },
    {
        name: "Royal Ontario Museum Visit",
        userImage: "https://robohash.org/677?set=set5",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/d1/cc/b1/canada-s-most-visited.jpg?w=1200&h=1200&s=1",
        price: 3,
        duration: "3 hours",
        likes: "170",
        hashtags: "#RoyalOntarioMuseum #Toronto #culture",
        city: "671811a2dbf52dc4988b1a4f",
        userName: "IsabellaLopez"
    },
    {
        name: "Distillery District Walk",
        userImage: "https://robohash.org/845?set=set5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbcWlvKDxHxChNrixqZO8vBCs6h9uHdMHQaQ&s",
        price: 2,
        duration: "2 hours",
        likes: "140",
        hashtags: "#DistilleryDistrict #Toronto #heritage",
        city: "671811a2dbf52dc4988b1a4f",
        userName: "MatthewHernandez"
    },
    {
        name: "Toronto Islands Ferry",
        userImage: "https://robohash.org/903?set=set5",
        image: "https://www.torontoisland.com/images/toronto-island-ferry.jpg",
        price: 5,
        duration: "3 hours",
        likes: "190",
        hashtags: "#TorontoIslands #Toronto #nature",
        city: "671811a2dbf52dc4988b1a4f",
        userName: "CharlotteRoberts"
    },

    // Los Angeles
    {
        name: "Hollywood Sign Hike",
        userImage: "https://robohash.org/668?set=set5",
        image: "https://www.travellingwithnikki.com/wp-content/uploads/2020/08/Hollywood-Sign-Hike.jpg",
        price: 3,
        duration: "2 hours",
        likes: "210",
        hashtags: "#HollywoodSign #LosAngeles #hiking",
        city: "671811a2dbf52dc4988b1a51",
        userName: "AidenWalker"
    },
    {
        name: "Venice Beach Skate Park",
        userImage: "https://robohash.org/932?set=set5",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Pool_%2832100805326%29.jpg",
        price: 2,
        duration: "1.5 hours",
        likes: "160",
        hashtags: "#VeniceBeach #LosAngeles #skatepark",
        city: "671811a2dbf52dc4988b1a51",
        userName: "EmmaYoung"
    },
    {
        name: "Griffith Observatory Tour",
        userImage: "https://robohash.org/703?set=set5",
        image: "https://griffithobservatory.org/wp-content/uploads/2021/03/cameron-venti-PiqHSHYO3Uw-unsplash_noCautionTape_web-1600x800-1638571193.jpg",
        price: 4,
        duration: "2 hours",
        likes: "230",
        hashtags: "#GriffithObservatory #LosAngeles #views",
        city: "671811a2dbf52dc4988b1a51",
        userName: "LucasKing"
    },
    {
        name: "Rodeo Drive Walk",
        userImage: "https://robohash.org/817?set=set5",
        image: "https://images.squarespace-cdn.com/content/v1/51662207e4b0d24816798eb0/1610663423944-PGGKOKBEEOJ2WZJE1Y39/Rodeo+Drive_Stop13_03.jpg",
        price: 5,
        duration: "1.5 hours",
        likes: "150",
        hashtags: "#RodeoDrive #LosAngeles #luxury",
        city: "671811a2dbf52dc4988b1a51",
        userName: "MiaScott"
    },

    // Lisbon
    {
        name: "Belem Tower Tour",
        userImage: "https://robohash.org/787?set=set5",
        image: "https://images.prismic.io/mystique/ac92412b-dd1f-45e6-8aeb-86102399ac3a_4848b33c-0499-457a-970e-a12a1ff1bbdc-17655-lisbon-bele-m-tower-skip-the-line-ticket-02+%282%29.jpeg?auto=compress,format",
        price: 3,
        duration: "1.5 hours",
        likes: "160",
        hashtags: "#BelemTower #Lisbon #history",
        city: "671811a2dbf52dc4988b1a52",
        userName: "NoahPerez"
    },
    {
        name: "Alfama District Walk",
        userImage: "https://robohash.org/712?set=set5",
        image: "https://wowiwalkers.com/wp-content/uploads/2021/03/14.Alfama_MiradourodeSantaLuzia_BestthingstodoLisbon-1024x683.jpg",
        price: 4,
        duration: "2 hours",
        likes: "170",
        hashtags: "#Alfama #Lisbon #culture",
        city: "671811a2dbf52dc4988b1a52",
        userName: "ZoeBennett"
    },
    {
        name: "Lisbon Oceanarium Visit",
        userImage: "https://robohash.org/940?set=set5",
        image: "https://cdn-imgix.headout.com/tour/30792/TOUR-IMAGE/45d95207-7811-4cd8-b467-0f0f8ee97a85-16423-lisbon-lisbon-walking-tour---entry-ticket-to-lisbon-oceanarium-05.jpg",
        price: 5,
        duration: "3 hours",
        likes: "190",
        hashtags: "#Oceanarium #Lisbon #familyfun",
        city: "671811a2dbf52dc4988b1a52",
        userName: "LiamCarter"
    },
    {
        name: "Fado Music Experience",
        userImage: "https://robohash.org/605?set=set5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUM_iXJ7PcOMqdHaIkvAhZNeWn-mGQiBEjQ&s",
        price: 2,
        duration: "2 hours",
        likes: "130",
        hashtags: "#Fado #Lisbon #music",
        city: "671811a2dbf52dc4988b1a52",
        userName: "EmmaReed"
    }
];


Itenerary.insertMany(itineraries)