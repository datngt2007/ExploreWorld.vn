const data = [
  {
    id: "1",
    location: "kyoto, japan",
    imageLink: "https://i.pinimg.com/originals/47/fc/8b/47fc8b501611e727ad2f7c56585b1893.jpg",
    imageLink1: "https://i.ytimg.com/vi/78VJNcYvNOo/maxresdefault.jpg",
    imageLink2: "https://japanstartshere.com/wp-content/uploads/2019/01/Fushimi-Inari-Night-1.jpg",
    imageLink3: "https://1.bp.blogspot.com/-zt7c7T9hmiQ/YE7yypgZc0I/AAAAAAAAob0/J8_GiSwKrsA3SXLx8nliAoqgBUlR69NcACLcBGAsYHQ/s1920/6.jpg",
    price: "USD 300",
    sale: "USD 100",
    name: "fushimi inari shrine",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Fushimi Inari Shrine is famous for its thousands of vermilion torii gates, creating a mesmerizing path.",
  },
  {
    id: "2",
    location: "grand canyon, USA",
    imageLink: "https://blog.mystart.com/wp-content/uploads/IN_Canyons_5f3adf6604abd18a7e5dcc3a.jpeg",
    imageLink1: "https://greensmarteco.com/wp-content/uploads/2020/07/grand-canyon-national-park-horseshoe-bend-travel-usa.jpg",
    imageLink2: "https://wallpapercave.com/wp/wp2211531.jpg",
    imageLink3: "https://lp-cms-production.imgix.net/2019-06/838daa46b9ecb52a51c47c3b03709816be272412020683bbe09ce5a3f84eb5ed.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4",
    price: "USD 600",
    sale: "USD 300",
    name: "Grand Canyon National Park",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "One of the most breathtaking natural wonders, the Grand Canyon offers stunning panoramic views.",
  },
  {
    id: "3",
    location: "Barcelona, Spain",
    imageLink: "https://www.infoescola.com/wp-content/uploads/2020/06/sagrada-familia-580081957.jpg",
    imageLink1: "https://images.adsttc.com/media/images/5254/43b3/e8e4/4ecb/1700/066a/large_jpg/2002.jpg?1381254039 ",
    imageLink2: "https://wallpapercave.com/wp/wp6921038.jpg",
    imageLink3: "https://i.pinimg.com/originals/27/11/bd/2711bde1692b43f64836f6d95558c162.jpg",
    price: "USD 200",
    sale: "USD 100",
    name: "Sagrada Familia",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Sagrada Familia is an iconic basilica in Barcelona, known for its unique architecture.",
  },
  {
    id: "4",
    location: "Rio de Janeiro, Brazil",
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD48TiRkDMI5BHPb0e32xfjANQqJEQ6VLPSg&s",
    imageLink1: "https://www.exoticca.com/_next/image?url=https%3A%2F%2Fuploads.exoticca.com%2Fglobal%2Fdestination%2Fpoi%2Frio-de-janeiro.png&w=3840&q=75",
    imageLink2: "https://images.pexels.com/photos/2818895/pexels-photo-2818895.jpeg?cs=srgb&dl=christ-the-redeemer-brazil-2818895.jpg&fm=jpg",
    imageLink3: "https://www.iheartbrazil.com/wp-content/uploads/2021/05/moon-christ-the-redeemer-rio-de-janeiro-brazil.jpg",
    price: "USD 300",
    sale: "USD 225",
    name: "Christ the Redeemer",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Christ the Redeemer is a famous statue overlooking the vibrant city of Rio de Janeiro.",
  },
  {
    id: "5",
    location: "Sydney, Australia",
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CyfmDWy3iK2C9HmVbTYwaFOqL0HtmxKGHg&s",
    imageLink1: "http://upload.wikimedia.org/wikipedia/commons/a/a1/Sydney_Opera_House_Night.jpg",
    imageLink2: "http://www.getsready.com/wp-content/uploads/2016/07/Opera-House-botanical-garden.jpg",
    imageLink3: "https://www.lightstalking.com/wp-content/uploads/trevor-mckinnon-7nqSMKHHIP8-unsplash.jpg",
    price: "USD 500",
    sale: "USD 499",
    name: "Sydney Opera House",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> ",
    description:
      "The Sydney Opera House is a masterpiece of modern architecture and a symbol of Australia.",
  },
  {
    id: "6",
    location: "Marrakech, Morocco",
    imageLink: "https://i.pinimg.com/originals/90/4b/a5/904ba598943c4b660e141cf6a3595401.jpg",
    imageLink1: "https://i0.wp.com/www.annieanywhere.com/wp-content/uploads/2018/08/visiter-jardin-majorelle-marrakech.jpg?fit=1200%2C900&ssl=1",
    imageLink2: "https://www.seezon.es/wp-content/uploads/sites/16/2022/12/Medium-Majorelle-Garden-1.jpeg ",
    imageLink3: "https://www.riadmehdi.net/wp-content/uploads/2018/04/Le_jardin_des_majorelle_40.jpg",
    price: "USD 400",
    sale: "USD 300",
    name: "Jardin Majorelle",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Jardin Majorelle is a vibrant garden in Marrakech, known for its blue buildings and exotic plants.",
  },
  {
    id: "7",
    location: "Hanoi, Vietnam",
    imageLink: "https://static.vinwonders.com/production/Hoan-Kiem-Lake-thumb-1.jpg",
    imageLink1: "https://viajareavietnam.com/wp-content/uploads/2020/07/hoan-kiem-lake-1000x671.jpg",
    imageLink2: "https://d13jio720g7qcs.cloudfront.net/images/destinations/origin/5ca2cf06984b1.png",
    imageLink3: "https://1.bp.blogspot.com/-XkJ_TRk1YmQ/U2n4WAEDquI/AAAAAAAACBs/P9ly9SUrTZM/s1600/Hoan+Kiem+Lake+at+night.jpg",
    price: "USD 800",
    sale: "USD 500",
    name: "Hoan Kiem Lake",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Hoan Kiem Lake in the heart of Hanoi is a peaceful oasis with the iconic Turtle Tower and Ngoc Son Temple.",
  },
  {
    id: "8",
    location: "Hoi An, Vietnam",
    imageLink: "https://www.uncovervietnam.com/wp-content/uploads/2017/11/Hoi-An-Ancient-Town-at-Night.jpg",
    imageLink1: "https://d13jio720g7qcs.cloudfront.net/images/destinations/origin/5f052dca0e42d.jpg",
    imageLink2: "https://vietnam.travel/sites/default/files/styles/top_banner/public/2021-12/shutterstock_1506184586_resize_0.jpg?itok=eUC22DbS",
    imageLink3: "https://img.locationscout.net/images/2020-03/hoi-an-ancient-town-at-night-vietnam_l.jpeg",
    price: "USD 400",
    sale: "USD 399",
    name: "Ancient Town",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> ",
    description:
      "Hoi An Ancient Town is a well-preserved trading port with charming architecture, lantern-lit streets, and riverside views.",
  },
  {
    id: "9",
    location: "Ha Long Bay, Vietnam",
    imageLink: "https://www.tripsavvy.com/thmb/Swh_8mfDkh8XofEUiclncMBS2og=/2122x1415/filters:fill(auto,1)/GettyImages-537320635-57432cf35f9b58723debf16a.jpg",
    imageLink1: "http://www.travelmarbles.com/wp-content/uploads/2016/04/HALONG.jpg",
    imageLink2: "https://wallpapercave.com/wp/wp4190472.jpg",
    imageLink3: "https://www.worldatlas.com/upload/c8/80/c3/shutterstock-1443887954.jpg",
    price: "USD 500",
    sale: "USD 499",
    name: "Ha Long Bay",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Ha Long Bay, known for its emerald waters and thousands of towering limestone islands topped with rainforests, is a UNESCO World Heritage Site.",
  },
  {
    id: "10",
    location: "Bangkok, Thailand",
    imageLink: "https://tse1.mm.bing.net/th?id=OIP.T2IHNDmVK5WNU6mfP05CdwHaE8&pid=Api&P=0&h=180",
    imageLink1: "https://wallpapers-all.com/uploads/posts/2017-04/1_wat_arun_temple.jpg",
    imageLink2: "https://content.phuket101.net/wp-content/uploads/20191130215006/wat-arun-temple-of-dawn-bangkok.jpg",
    imageLink3: "https://cdn.tripways.com/2021/04/28013149/wat-arun-3-1536x1433.jpg",
    price: "USD 170",
    sale: "USD 150",
    name: "Wat Arun",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Wat Arun, also known as the Temple of Dawn, is a stunning Buddhist temple on the Chao Phraya River.",
  },
  {
    id: "11",
    location: "Cape Town, South Africa",
    imageLink: "https://cdn.audleytravel.com/-/-/79/191131230031038223167223013030229200159166102137.jpg",
    imageLink1: "http://1.bp.blogspot.com/-cHuLNupG624/TkmlKix_1AI/AAAAAAAAAK8/-EWEcA3Y_3c/s1600/5.jpg",
    imageLink2: "https://www.roadaffair.com/wp-content/uploads/2017/10/table-mountain-sunset-south-africa-shutterstock_506610490.jpg",
    imageLink3: "https://timbuktutravel.imgix.net/experiences/kodak_images/000/000/226/original/cape-town-city-bowl-table-mountain-south-africa-timbuktu-travel.JPG?w=1420&h=946&auto=format&crop=fit&fit=min&dpr=1&q=50",
    price: "USD 300",
    sale: "USD 200",
    name: "Table Mountain",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Table Mountain in Cape Town offers breathtaking views of the city and the surrounding coastline.",
  },
  {
    id: "12",
    location: "Reykjavik, Iceland",
    imageLink: "https://www.extremeiceland.is/media/9156/blue-lagoon-bryan-ledgard-wikimedia-1.jpg",
    imageLink1: "https://www.adventurouskate.com/wp-content/uploads/2012/06/Iceland-Blue-Lagoon.jpg",
    imageLink2: "http://travellingmoods.com/wp-content/uploads/2015/05/The-Blue-Lagoon.jpg",
    imageLink3: "https://cdn.discover-the-world.com/app/uploads/2018/05/iceland-south-west-blue-lagoon-winter-adstk.jpg",
    price: "USD 150",
    sale: "USD 100",
    name: "Blue Lagoon",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "The Blue Lagoon is a geothermal spa in Iceland known for its mineral-rich waters and stunning surroundings.",
  },
  {
    id: "13",
    location: "Machu Picchu, Peru",
    imageLink: "https://media.cntraveler.com/photos/5818a486b6f3d25e7b5c6a3e/master/pass/GettyImages-573103543.jpg",
    imageLink1: "https://cdn.tourradar.com/s3/serp/original/215920_qnelkEda.jpg",
    imageLink2: "http://betterlivingthroughbeowulf.com/wp-content/uploads/2015/06/Machu-Picchu.jpg",
    imageLink3: "https://www.godsavethepoints.com/wp-content/uploads/2019/01/69537192_m.jpg",
    price: "USD 300",
    sale: "USD 200",
    name: "Machu Picchu",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Machu Picchu is an ancient Inca citadel located in the Andes, offering a glimpse into the past.",
  },
  {
    id: "14",
    location: "Dubrovnik, Croatia",
    imageLink: "https://tse1.mm.bing.net/th?id=OIP.-_ZXy683L7RhF1yrEptfVAHaFV&pid=Api&P=0&h=180",
    imageLink1: "https://www.adriaticdmc.hr/storage/upload/atrakcije/dubrovnik_porat__124235.jpg",
    imageLink2: "https://walkindubrovnik.com/wp-content/uploads/2022/03/Dubrovnik-Old-Town.jpg",
    imageLink3: "https://i.pinimg.com/originals/bb/54/53/bb54538124d56fdc3435fcb1089f711e.jpg",
    price: "USD 450",
    sale: "USD 400",
    name: "Old Town Dubrovnik",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Old Town Dubrovnik is a UNESCO World Heritage Site with well-preserved medieval architecture.",
  },
  {
    id: "15",
    location: "Banff National Park, Canada",
    imageLink: "http://travellingmoods.com/wp-content/uploads/2015/02/Lake-Louise1.jpg",
    imageLink1: "https://lp-cms-production.imgix.net/2019-06/a3d313780d6fb109d840e8c623d7b6e8-lake-louise.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
    imageLink2: "https://www.tripsavvy.com/thmb/8hSyNm0dUTXbzbhgqZD0vS2NO2Y=/2121x1414/filters:fill(auto,1)/LakeLouise_GettyImages-6b1e83ecabbb423c9cc66ea024c0e6bf.jpg",
    imageLink3: "https://images.creativemarket.com/0.1.0/ps/5059499/1820/1216/m1/fpnw/wm1/zpyzkt692feaeeeezopypc8myd4z08pitvayur7nlxzwmq2gbdouwhxjrrba3yrx-.jpg?1537132378&s=72c6025268cd3699b9570e560bb146d9",
    price: "USD 700",
    sale: "USD 600",
    name: "Lake Louise",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> ",
    description:
      "Lake Louise in Banff National Park is famous for its stunning turquoise waters and mountainous surroundings.",
  },
  {
    id: "16",
    location: "Queenstown, New Zealand",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Queenstown_1_%288168013172%29.jpg/800px-Queenstown_1_%288168013172%29.jpg",
    imageLink1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/aa/b3/ae/caption.jpg?w=1200&h=-1&s=1",
    imageLink2: "https://media.gq.com/photos/5ba1680236b2d004cdd843cd/16:9/w_2560%2Cc_limit/new-zealand-queenstown-travel-guide-gq.jpg",
    imageLink3: "https://i.natgeofe.com/n/e5014cbf-170c-45ab-840c-16a7ecda5fac/street-queenstown-newzealand_2x1.jpg",
    price: "USD 700",
    sale: "USD 600",
    name: "Milford Sound",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Milford Sound is a breathtaking fjord in New Zealand known for its scenic beauty and wildlife.",
  },
  {
    id: "17",
    location: "Cappadocia, Turkey",
    imageLink: "https://static.independent.co.uk/2023/08/31/12/iStock-1484200613.jpg",
    imageLink1: "https://tourscanner.com/blog/wp-content/uploads/choses-a-faire-en-Cappadoce.jpeg",
    imageLink2: "https://eatlivetraveldrink.com/wp-content/uploads/2019/03/cappadoca-hot-air-balloon-1440x905.jpg",
    imageLink3: "https://i.pinimg.com/originals/cc/53/a6/cc53a60974e5e5a3d1155e8c5464ebd8.jpg",
    price: "USD 600",
    sale: "USD 500",
    name: "Hot Air Balloon Ride",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Experience the magical landscapes of Cappadocia with a hot air balloon ride over its unique rock formations.",
  },
  {
    id: "18",
    location: "Bora Bora, French Polynesia",
    imageLink: "https://www.tahititourisme.ca/app/uploads/iris-images/23893/cg.v-bora-dscf2511b-hi-scaled-4-1600x800-f50_50.jpg",
    imageLink1: "https://img.washingtonpost.com/rw/2010-2019/WashingtonPost/2017/08/17/Travel/Images/TAHITI.jpg?uuid=dtQn7oOCEeeQKiqfLYCElg",
    imageLink2: "http://s3.r29static.com/bin/entry/f9d/x,80/1566905/opener.jpg",
    imageLink3: "https://media.cntraveler.com/photos/5874fc77bd204e983ba94864/master/pass/Overwater-Jamaica-1-cr-Steven-drescher.jpg",
    price: "USD 500",
    sale: "USd 400",
    name: "Overwater Bungalows",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> ",
    description:
      "Bora Bora is renowned for its luxurious overwater bungalows with stunning views of crystal-clear turquoise waters.",
  },
  {
    id: "19",
    location: "Great Barrier Reef, Australia",
    imageLink: "https://1.bp.blogspot.com/-4ZVk_vknRvQ/U_BEDvc6QfI/AAAAAAAAAAg/XLR3ki9qGZo/s1600/great-barrier-reef-australia-blue-water.jpg",
    imageLink1: "http://www.sbs.com.au/news/sites/sbs.com.au.news/files/20150922001180115827-original_0.jpg",
    imageLink2: "https://greatbarrierreeftourscairns.com/wp-content/uploads/2020/09/green-island-half-day-tour-5.jpg",
    imageLink3: "https://i.pinimg.com/originals/a5/b9/54/a5b95460389f4f648e56bbf18ca70b9a.jpg",
    price: "USD 500",
    sale: "USD 390",
    name: "Snorkeling Adventure",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Explore the vibrant marine life of the Great Barrier Reef with an unforgettable snorkeling adventure.",
  },
  {
    id: "20",
    location: "Marrakesh, Morocco",
    imageLink: "https://oddviser.com/photo/place/1600/811.jpg?1495105530",
    imageLink1: "http://www.seanfitzgerald.com/wp-content/uploads/140918_1337.jpg",
    imageLink2: "https://images.squarespace-cdn.com/content/v1/5cc1b3f1e1fe1400019cb83e/1646078850636-L80YLZVD9Z2VIO4FOTZ8/Depositphotos_181973474_XL.JPG",
    imageLink3: "http://www.alovelyworld.com/photos/webmaroc/gimage/mar297.jpg",
    price: "USD 600",
    sale: "USD 499",
    name: "Jemaa el-Fnaa",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Jemaa el-Fnaa is the main square in Marrakesh's medina and a vibrant hub of cultural and culinary activities.",
  },
  {
    id: "21",
    location: "Santorini, Greece",
    imageLink: "https://i.pinimg.com/originals/7a/94/68/7a9468a17e1291f36bdcb07d99fddd9e.jpg",
    imageLink1: "https://www.kivotoshotels.com/wp-content/uploads/2021/10/oia-sunset-scaled.jpg",
    imageLink2: "https://images.fineartamerica.com/images-medium-large-5/oia-sunset-midori-chan.jpg",
    imageLink3: "https://img2.juzaphoto.com/001/shared_files/uploads/975113_l.jpg",
    price: "USD 500",
    sale: "USd 400",
    name: "Oia Sunset",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Witness the breathtaking sunset over the charming town of Oia in Santorini, known for its white-washed buildings.",
  },
  {
    id: "22",
    location: "Yellowstone National Park, USA",
    imageLink: "https://www.yellowstonepark.com/wp-content/uploads/2020/04/Old-Faithful-Aerial_NPSJimPeaco_2400.jpg",
    imageLink1: "https://handluggageonly.co.uk/wp-content/uploads/2017/01/old-faithful-2-s.jpg",
    imageLink2: "http://faculty.ucmerced.edu/bilan/pics/Yellowstone/OldFaithful.jpg",
    imageLink3: "https://strangesounds.org/wp-content/uploads/2014/06/Old-Faithful-geyser-and-rainbow.jpg",
    price: "USD 600",
    sale: "USD 500",
    name: "Old Faithful",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Old Faithful is a famous geyser in Yellowstone National Park, erupting approximately every 90 minutes.",
  },
  {
    id: "23",
    location: "Amsterdam, Netherlands",
    imageLink: "https://traveladdicts.net/wp-content/uploads/2018/04/Keukenhof-gardens-Netherlands-hyacinths-tulips-sculpture.jpg",
    imageLink1: "https://www.petalrepublic.com/wp-content/uploads/2020/05/Keukenhof-Tulip-Gardens-scaled.jpg",
    imageLink2: "https://www.mywanderlustylife.com/wp-content/uploads/2022/01/amsterdam-to-keukenhof-park-guide-FEATURED.jpg",
    imageLink3: "https://www.lelongweekend.com/wp-content/uploads/2021/12/LLW-Keukenhof-Gardens-Holland-Netherlands-scaled.jpeg",
    price: "USD 600",
    sale: "USD 500",
    name: "Keukenhof Gardens",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Keukenhof Gardens in Amsterdam is one of the world's largest flower gardens, known for its stunning tulip displays.",
  },
  {
    id: "24",
    location: "Banff National Park, Canada",
    imageLink: "https://cdn.photographylife.com/wp-content/uploads/2015/07/DSC_0977.jpg",
    imageLink1: "https://images.discerningassets.com/image/upload/c_fill,h_1000,w_1000/c_fit,fl_relative,h_1.0,o_100,w_1.0/c_fill,w_5477,h_5477/v1562187563/Moraine_Lake_June_30_2019_Print_jvx8tm.jpg",
    imageLink2: "https://images.squarespace-cdn.com/content/v1/560dbc25e4b0969564758eb5/1538277937052-EHM1P6F96QOGFCZO93OU/Moraine+Lake+%23Banff+%23Canada+%23nationalpark",
    imageLink3: "https://i.redd.it/xyvptnbljyg11.jpg",
    price: "USD 601",
    sale: "USD 600",
    name: "Moraine Lake",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Moraine Lake is a glacially-fed lake in Banff National Park, surrounded by snow-capped mountains.",
  },
  {
    id: "25",
    location: "Bangkok, Thailand",
    imageLink: "https://www.tripsavvy.com/thmb/8ZvQjzLoXGk6jt1Fr3oKNYjKvkg=/6016x4016/filters:no_upscale():max_bytes(150000):strip_icc()/bangkok-grand-palace-5aadb03e8e1b6e0037023644.jpg",
    imageLink1: "https://madmonkeyhostels.com/wp-content/uploads/2016/03/Grand_Palace_Bangkok_Thailand.jpg",
    imageLink2: "https://a.cdn-hotels.com/gdcs/production88/d1534/da0c22f3-443f-4b20-b38c-ee6d2ba97962.jpg",
    imageLink3: "https://thecreativeadventurer.com/wp-content/uploads/2020/04/Bangkok-Grand-Palace07.jpg",
    price: "USD 500",
    sale: "USd 400",
    name: "Grand Palace",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "The Grand Palace in Bangkok is a magnificent complex featuring stunning architecture and intricate details.",
  },
  {
    id: "26",
    location: "Bali, Indonesia",
    imageLink: "https://media.cntraveler.com/photos/5c190d40e223c55afc3e3b6c/16:9/w_2560%2Cc_limit/GettyImages-520702054.jpg",
    imageLink1: "http://traveldigg.com/wp-content/uploads/2016/08/Ubud-Monkey-Forest-Photo.jpg",
    imageLink2: "https://traveldigg.com/wp-content/uploads/2016/08/Ubud-Monkey-Forest-Bali.jpg",
    imageLink3: "https://i.pinimg.com/originals/b5/b8/3b/b5b83b16c3fa91fed0bd9455adee8a0f.jpg",
    price: "USD 600",
    sale: "USD 500",
    name: "Ubud Monkey Forest",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> ",
    description:
      "Ubud Monkey Forest in Bali is a sacred sanctuary where visitors can observe playful monkeys in their natural habitat.",
  },
  {
    id: "27",
    location: "Marrakech, Morocco",
    imageLink: "https://tse1.mm.bing.net/th?id=OIP.Y4KcffMvQJnlqPQ0zboWgwHaE5&pid=Api&P=0&h=180",
    imageLink1: "http://2.bp.blogspot.com/-jHPr1D7iACM/URotvzb2wkI/AAAAAAAAPqQ/6FCmWXBjdMY/s1600/tomb.jpg",
    imageLink2: "https://thumbs.dreamstime.com/z/saadian-tombs-marrakech-morocco-tomb-mausoleum-175611052.jpg",
    imageLink3: "https://thumbs.dreamstime.com/z/saadian-tombs-marrakech-morocco-tomb-mausoleum-175611052.jpg",
    price: "USD 300",
    sale: "USD 200",
    name: "Saadian Tombs",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> ",
    description:
      "The Saadian Tombs in Marrakech are historic tombs dating back to the 16th century, featuring intricate decorations and architecture.",
  },
  {
    id: "28",
    location: "Bariloche, Argentina",
    imageLink:
      "https://lp-cms-production.imgix.net/2019-06/GettyImages-178737180_super.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4",
    imageLink1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/83/12/71/vista-panoramica-360o.jpg?w=1200&h=900&s=1",
    imageLink2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a8/5c/5a/cerro-campanario.jpg?w=1200&h=1200&s=1",
    imageLink3: "https://www.nerdsviajantes.com/wp-content/uploads/2012/07/MG_8228.jpg",
    price: "USD 500",
    sale: "USD 400",
    name: "Cerro Campanario",
    star: "<span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>",
    description:
      "Cerro Campanario in Bariloche offers panoramic views of the Andes and Nahuel Huapi Lake, making it a popular viewpoint.",
  },
];

let product_div = document.getElementById("main");

function loadProducts(products) {
  for (let i = 0; i < products.length; i++) {
    var productElement = document.createElement("div");
    productElement.classList.add('siuu')
    productElement.style.cssText = "width: 300px; margin: 0px 10px;"
    let output = ` 
    <div class="ma"
        style=" height: 400px; width: 330px; border: 3px solid black; margin-top: 30px; margin-bottom: 30px; border-radius: 10px; ">
        <img src="${products[i].imageLink}" , alt=""
            style="width: 327px; height: 201px; border-radius: 10px 10px 0px 0px; " id="img" />
        <h2 class="mu" style="font-size: 20px; margin-top: 15px; margin-right: 10px; ">${products[i].location}</h2>
        <h3 class="mu" style="font-size: 20px; margin-top: 15px; margin-right: 10px; ">${products[i].name}</h3>
        <div class="star" style="display: flex;  margin-top: 10px; margin-right: 10px;">
            ${products[i].star}
        </div>
        <button id='cat' style="margin-left: 120px; margin-top: 20px;">See more</button>
    </div>
    `;
    productElement.addEventListener("click", function (event) {
      var productId = event.currentTarget.getAttribute("data-product-id");
      window.location.href = `productweb.html?id=${products[i].id}`;
    });
    productElement.setAttribute("data-product-id", products[i].id);
    product_div.appendChild(productElement);
    productElement.innerHTML += output;
  }
}


loadProducts(data);

function searchProduct() {
  let search_input = document.getElementById("search-input").value;
  search_input = search_input.toLowerCase();
  let products = document.getElementsByClassName("ma");
  let products_title = document.getElementsByClassName("mu");
  for (let i = 0; i < products_title.length; i++) {
    if (!products_title[i].innerHTML.includes(search_input)) {
      products[i].classList.add("hide");
    } else {
      products[i].classList.remove("hide");
    }
  }
}
