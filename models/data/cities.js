import "dotenv/config.js"
import '../../config/database.js'
import City from '../City.js'

const cities = [
    {
        name: "Madrid",
        image: "https://media.timeout.com/images/105852421/750/422/image.jpg",
        description: "Madrid is the capital of Spain, known for its rich culture and historic landmarks.",
        price: "$1200",
        rating: 4.8,
        weather: "Sunny 25°C"
    },
    {
        name: "Bangkok",
        image: "https://www.vietnamstay.es/DataUpload/Attractions/201932822432-bangkok-overview-aerial-view-2.jpg",
        description: "Bangkok is famous for its vibrant street life and temples.",
        price: "$950",
        rating: 4.5,
        weather: "Cloudy 30°C"
    },
    {
        name: "Istanbul",
        image: "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2019/12/24/5fa5393804286.r_d.499-319-0.jpeg",
        description: "Istanbul straddles Europe and Asia across the Bosphorus Strait.",
        price: "$1100",
        rating: 4.7,
        weather: "Rainy 18°C"
    },
    {
        name: "Toronto",
        image: "https://d1l57x9nwbbkz.cloudfront.net/files/s3fs-public/2021-12/Toronto_CIty_Highlights.jpg",
        description: "Toronto is the largest city in Canada and a major global hub.",
        price: "$1350",
        rating: 4.6,
        weather: "Snowy -5°C"
    },
    {
        name: "Hong Kong",
        image: "https://cdn.pixabay.com/photo/2023/11/08/09/48/hong-kong-8374423_1280.jpg",
        description: "Hong Kong is a bustling metropolis known for its skyline and vibrant markets.",
        price: "$1500",
        rating: 4.9,
        weather: "Cloudy 28°C"
    },
    {
        name: "Los Angeles",
        image: "https://www.clarin.com/2018/12/26/srvVCcUrc_1256x620__1.jpg",
        description: "Los Angeles is the entertainment capital of the world.",
        price: "$1400",
        rating: 4.7,
        weather: "Sunny 22°C"
    },
    {
        name: "Lisbon",
        image: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/02/15/istock-478897762.jpeg",
        description: "Lisbon is Portugal's hilly, coastal capital city.",
        price: "$1000",
        rating: 4.4,
        weather: "Sunny 26°C"
    },
    {
        name: "Cairo",
        image: "https://www.egiptoexclusivo.com/wp-content/uploads/2023/06/panorama-cairo.jpg",
        description: "Cairo is the sprawling capital of Egypt with iconic landmarks like the Pyramids.",
        price: "$900",
        rating: 4.2,
        weather: "Hot 35°C"
    },
    {
        name: "Buenos Aires",
        image: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/03201757/Ciudades-mas-caras-de-America-Latina-Buenos-Aires.jpg",
        description: "Buenos Aires is Argentina's cosmopolitan capital known for tango and cuisine.",
        price: "$850",
        rating: 4.3,
        weather: "Mild 20°C"
    },
    {
        name: "Santorini",
        image: "https://static.cpau.org/revistanotas/contenidos/39/Santorini.jpg",
        description: "Santorini is a beautiful island in the Aegean Sea known for its white buildings.",
        price: "$1450",
        rating: 4.9,
        weather: "Sunny 28°C"
    },
    {
        name: "Seoul",
        image: "https://pohcdn.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Seoul-1.jpg",
        description: "Seoul is South Korea's vibrant capital known for modern skyscrapers.",
        price: "$1300",
        rating: 4.7,
        weather: "Cloudy 15°C"
    },
    {
        name: "Monaco",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Monte_Carlo_Port_Hercules_b.jpg",
        description: "Monaco is a luxurious city-state on the French Riviera, famous for its casino.",
        price: "$2000",
        rating: 4.9,
        weather: "Sunny 23°C"
    },
    {
        name: "Paris",
        image: "https://assets.voxcity.com/uploads/blog_images/paris-blog-updated_original.jpg",
        description: "Paris, France's capital, is known for its art, fashion, and culture.",
        price: "$1600",
        rating: 4.8,
        weather: "Cloudy 18°C"
    },
    {
        name: "Tokyo",
        image: "https://stories.weroad.es/wp-content/uploads/2022/11/que-ver-en-tokio.jpg",
        description: "Tokyo, Japan's capital, blends modern technology with traditional culture.",
        price: "$1700",
        rating: 4.9,
        weather: "Rainy 20°C"
    },
    {
        name: "New York",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg",
        description: "New York City is a global hub for business, culture, and entertainment.",
        price: "$1800",
        rating: 4.8,
        weather: "Snowy 0°C"
    }
];


City.insertMany(cities)