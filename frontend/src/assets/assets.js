import logo from "./px695_C_Programming_Language.png";
import search_icon from "./icons8-search-50.png";
import profile_icon from "./icons8-person-48.png";
import cart_icon from "./icons8-cart-96.png";
import menu_icon from "./icons8-menu-128.png";
import hero_img from "./LadieTop1.jpg";
import exchange_icon from "./icons8-exchange-50.png";
import qual_icon from "./icons8-quality-50.png";
import support_icon from "./icons8-support-50.png";
import dropdown_icon from "./icons8-dropdown-50.png";

import kidtop from "./KidTop.jpg";
import kidbtm from "./KidBottom.jpg";
import mentop from "./MenTop.jpg";
import menbtm from "./MenBottom.jpg";
import wmntop from "./LadieTop.jpg";
import wmnbtm from "./LadieBottom.jpg";

export const assets = {
  logo,
  search_icon,
  profile_icon,
  cart_icon,
  menu_icon,
  hero_img,
  exchange_icon,
  qual_icon,
  support_icon,
  dropdown_icon,
};

export const products = [
  {
    _id: "aaaa",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, ussually knitted, pullover shirt, close-fitting and with soft texture",
    price: 100,
    image: [wmntop],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: false,
  },
  {
    _id: "bbbb",
    name: "Women Denim Cotton Bottom",
    description:
      "A lightweight, ussually knitted, pullover shirt, close-fitting and with soft texture",
    price: 200,
    image: [wmnbtm],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 1716734345448,
    bestseller: true,
  },
  {
    _id: "cccc",
    name: "Men Round Neck Top",
    description:
      "A lightweight, ussually knitted, pullover shirt, close-fitting and with soft texture",
    price: 120,
    image: [mentop],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1712634345448,
    bestseller: true,
  },
  {
    _id: "dddd",
    name: "Men Round Cotton Pant",
    description:
      "A lightweight, ussually knitted, pullover shirt, close-fitting and with soft texture",
    price: 180,
    image: [menbtm],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 1616634345448,
    bestseller: false,
  },
  {
    _id: "eeee",
    name: "Kid Round Neck Cotton Top",
    description:
      "A lightweight, ussually knitted, pullover shirt, close-fitting and with soft texture",
    price: 210,
    image: [kidtop],
    category: "Kid",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345428,
    bestseller: true,
  },
  {
    _id: "ffff",
    name: "Kid Round Jute Jeans",
    description:
      "A lightweight, knitted, pullover shirt, close-fitting and with soft texture",
    price: 85,
    image: [kidbtm],
    category: "Kid",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 1716674345448,
    bestseller: false,
  },
  {
    _id: "gggg",
    name: "Women Square Cotton Top",
    description:
      "A lightweight, ussually knitted, shirt, close-fitting and with soft texture",
    price: 250,
    image: [hero_img],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716664345448,
    bestseller: true,
  },
  {
    _id: "hhhh",
    name: "Women Elipse Cotton Top",
    description:
      "A lightweight, ussually knitted, pullover shirt, fitting and with soft texture",
    price: 140,
    image: [mentop],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345548,
    bestseller: false,
  },
];
