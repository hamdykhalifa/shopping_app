var Product = require("../models/product");

var mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

var products = [
  new Product({
    imagePath:
      "https://s3.gamihttps://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/game-info/ac1_nakedbox_mobile_164648.jpgng-cdn.com/images/products/2468/271x377/call-of-duty-black-ops-4-cover.jpg",
    title: "Assassin's Creed",
    text: "Classic game you have to play",
    price: 17,
  }),
  new Product({
    imagePath:
      "https://s3.gaming-https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg.com/images/products/2468/271x377/call-of-duty-black-ops-4-cover.jpg",
    title: "God of War IV",
    text: "Spartan Rage",
    price: 18,
  }),
  new Product({
    imagePath:
      "https://s3.gaming-cdhttps://upload.wikimedia.org/wikipedia/en/0/00/Batman_Arkham_City_Game_Cover.jpgn.com/images/products/2468/271x377/call-of-duty-black-ops-4-cover.jpg",
    title: "Batman Arkham City",
    text: "The Dark Knight is here",
    price: 15,
  }),
  new Product({
    imagePath:
      "https://s3.gaming-cdn.com/images/products/2468/271x377/call-of-duty-black-ops-4-cover.jpg",
    title: "Call of Duty BlackOps 4",
    text: "Ego shooter",
    price: 25,
  }),
  new Product({
    imagePath:
      "https://s3.gaming-cdn.com/images/products/2468/271x377/call-of-duty-black-https://media.gamestop.com/i/gamestop/10131620/Marvels-Spider-Man-4-cover.jpg",
    title: "Spiderman 4",
    text: "Game of the year edition",
    price: 22,
  }),
  new Product({
    imagePath:
      "https://s3.gaming-cdn.com/images/products/2468/271x377/call-of-duty-black-https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png-4-cover.jpg",
    title: "Gothic",
    text: "Most successful German rpg",
    price: 12,
  }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save((err, result) => {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
