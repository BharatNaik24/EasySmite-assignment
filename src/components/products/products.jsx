import { v4 as uuidV4 } from "uuid";
import "./products.css";
import { useEffect, useState } from "react";

import { FaMinus, FaPlus } from "react-icons/fa";
import Pagination from "../pagination/pagination ";
import { TbCurrencyRupee } from "react-icons/tb";
import CartModal from "../addToCartModal/addToCartModal";

const plantData = [
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
  {
    id: uuidV4(),
    productImage:
      "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    name: "Monsterra",
    type: "Indoor Plant",
    maintenance: "Low Maintenance",
    originalPrice: 350,
    salePrice: 299,
    ratingStar:
      "https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__",
    rating: "4.9",
  },
];

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productQuantities, setProductQuantities] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFirstMount, setIsFirstMount] = useState(true); // Initialize to true

  const itemsPerPage = 12;

  const currentProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return plantData.slice(startIndex, startIndex + itemsPerPage);
  };

  const totalPages = Math.ceil(plantData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleQuantityChange = (productId, amount) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) + amount, 0),
    }));
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  useEffect(() => {
    if (isFirstMount) {
      window.scrollTo(0, 0); // Scroll to (0, 0) on first mount
      setIsFirstMount(false); // Set to false after the first mount
    } else {
      window.scrollTo(0, 500); // Scroll to (0, 500) on pagination change
    }
  }, [currentPage]);

  return (
    <div className="mainBgCon">
      <div className="products-container">
        <div>
          <p>{plantData.length} Products</p>
        </div>
        <div className="row">
          {currentProducts().map((plant) => (
            <div className="col" key={plant.id}>
              <div className="productCardContainer">
                <div className="product-card">
                  <div className="image-container">
                    <img
                      src={plant.productImage}
                      alt={plant.name}
                      className="product-image"
                    />
                  </div>
                  <button className="viewProductsBtn">View Product</button>
                </div>
                <div className="product-info">
                  <span className="product-name">{plant.name}</span>
                  <p className="product-maintenance">
                    <span className="product-type">
                      {plant.type} {plant.maintenance}
                    </span>
                  </p>
                  <div className="rating">
                    <img
                      src={plant.ratingStar}
                      alt={`${plant.rating} stars`}
                      className="rating-stars"
                    />
                    <span>{plant.rating}</span>
                  </div>
                  <div className="mainSpanCon">
                    <span className="spanCon">
                      <p className="original-price3">
                        <TbCurrencyRupee size={15} />
                        {plant.originalPrice}
                      </p>
                      <p className="salePrice">
                        <TbCurrencyRupee size={20} />
                        {plant.salePrice}
                      </p>
                    </span>
                  </div>
                  <div className="btnCon">
                    <div className="addToCartBtn">
                      <button
                        className="addBtnCustom"
                        onClick={() => handleQuantityChange(plant.id, -1)}
                      >
                        <FaMinus size={8} />
                      </button>
                      <p className="addCartText">
                        {productQuantities[plant.id] > 0 ? (
                          productQuantities[plant.id]
                        ) : (
                          <button
                            className="addtoCartAdvBtn"
                            onClick={() => handleAddToCart(plant)}
                          >
                            Add to Cart
                          </button>
                        )}
                      </p>
                      <button
                        className="addBtnCustom"
                        onClick={() => handleQuantityChange(plant.id, 1)}
                      >
                        <FaPlus size={8} />
                      </button>
                    </div>
                    {productQuantities[plant.id] > 0 ? (
                      <button
                        className="buyOnRent"
                        onClick={() => handleAddToCart(plant)}
                      >
                        Add to cart
                      </button>
                    ) : (
                      <button className="buyOnRent">Buy on Rent</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <CartModal
        show={showModal}
        onHide={() => setShowModal(false)}
        product={selectedProduct}
      />
    </div>
  );
}

export default Products;
