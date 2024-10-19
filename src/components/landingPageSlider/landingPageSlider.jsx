import { v4 as uuidV4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./LandingPageSlider.css";

let nurseryList = [
  {
    id: uuidV4(),
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1708/c339/362237370ea139219155cf9fca2448d3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOfBgpd9SdsbpVrN0LI3IT5bMV-rQDcjcD~6xv-PGI3HQ-z1SlJOGY6sCK2eSVMEgLB~JEOWFyA-eZPoULd-HfJCJ9NH06HJyk07nKSk8YqswrM91QFC5sBu09eiJikco~Cz9XH5pryCnorJ4qyY0BbUW2XZMGOpehUePpzpv4rd8NoonGchv0gqyMNmSHdSfUV5pobVkd3wOYhyuHyU~TlTXkXEqeEC0AWUg4TKMy~YYdrPP4dCdMODHxFVfPAB~zzmOWC-7HOmun~xC~uXlIgHJwEUN-j9IJ7YLPpbC6F6hjJHm9gglfaw1KI~uOeW5bcduOxMUxbxtWRPkgYRWg__",
  },
  {
    id: uuidV4(),
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5267/1e62/8375cef653c6b9ae388a7f2dda4ba454?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poRgM6pbkBqdnWsbKmfeS4UcxZkAhi2YMDifsURB-xTIfZcY-QDKhmleBzmNDh3fkjjWEfCtge~Lcr5s7BgkVPU00EZzrOgDP4AwiJpQZhLvRByGDVoDVufqT0lzgOyN9eUHZhC3wUrnOTQCDUpdFO8J0Af~FYl4246Uu-bgheR2kdA2NqkfxOmQs15LNeEsa177Q6uzc4CeEsxTi7Krr-H2F5RcU1fIufPCkvfJasBqRujHQeLQV-7OsXT9tMvK98cPscZcnrQdbTLa0XL4WQrWlaRMbK6tRpyIB7nuxyRTAUhRzeXbkOfSHHhy-wYWGJCwKeQNfn2WzbWKMJxbQA__",
  },
  {
    id: uuidV4(),
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/84ed/e8e9/935a62fb31df9354ded9299559307ae6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EkUcvN372cksGIWPwvW5owktp9ytkBrXYwKGswGcGcKTz1P5vCJ1AwDg6XEfLcuYGcNx3T1xbxpj2h0vVt2Jx~J8CqBxk5HOJ8WQGo9GtH-JwoEbw4G2si9EZQgMu95KzZzjsFsbph4Xeq5w6POOx4eZvkuWwjZmTCujut12EViAzhpxyYT8qSiL~eM0VMPp53TxbY47bk1EYpFVi2f~sc8BuMIJ9pnlkysxhWaYblRHulmELZCJcaUDO1QVDUYR6BdzNpmAmCw9xLufhKnsqamAgmGkfC0XfTfN3mxoWd6fZJKhiubj5FVj70lJp1uSwL4zggWiChoZOHe2doVWEA__",
  },
  {
    id: uuidV4(),
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/c120/4e2d/7eca96d5008198d2181b991de6f19034?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A52FjCuUbWlwRRJ5kOMbW3y-66Ka0TLI~iK-4nDzoZjb6qA1ukUSJEt~m8qs64IXzwUwhN6sjYdXNt3MJfz4a2XhqqyikLsjbZfS5Mlmxedhs7rxSrK1BwgurAatuEB33Szqkf0UdNyvZF8iiAT1C1eNJl2wN6mjmARVS8GLQXroxtZQe9gRVvHH1K85O8n6B~qNfbMdm0-83H3gnp4Lr~MjstT6BveBn4Htrcw0XdYY3mlPvdPvjNFE~nDn8NEbbOSZEr9dxVZV5m5mp6qhV-ejNZlw~NBSg0NFw8U-jhgBatLZUVqY5jRXaOdmKgnMrKhH9UHRCqBi5RdRcjNWcA__",
  },
  {
    id: uuidV4(),
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/2270/0766/ed50532940537d9d39d2626bb7a95167?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e1u59mBoYOHSu1vnubFHYBlgxelj9I23c0h6FVJu8fe99v6vjeEdd6UOgf5HTHto7xa-16CN1hOLofpqppNDJz2Oxg1tf484NGDPRM6lKLxCAZ94vesYIDXG~EjlY0mXxC0qLyFyzX4~ntpqmYvlbRUFu32C4Pr3e9DHL6To3K2q54-FoFL4hobrTij7oIpGHfxKj4eMB6q2xHjXlvJZkXmQ3Tk7snP0197a8V3CO1XvygFiFYLckqUOzhSQ0JP~4BzrS~rcb84Rbtx8Zc77A4AHVH6ZU-wr9omI~Uc8jTCmEU~A6x~78h0RCTr~cd1EsqQnDTuc-v-d7Cql-7Ytdg__",
  },
  {
    id: uuidV4(),
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1708/c339/362237370ea139219155cf9fca2448d3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOfBgpd9SdsbpVrN0LI3IT5bMV-rQDcjcD~6xv-PGI3HQ-z1SlJOGY6sCK2eSVMEgLB~JEOWFyA-eZPoULd-HfJCJ9NH06HJyk07nKSk8YqswrM91QFC5sBu09eiJikco~Cz9XH5pryCnorJ4qyY0BbUW2XZMGOpehUePpzpv4rd8NoonGchv0gqyMNmSHdSfUV5pobVkd3wOYhyuHyU~TlTXkXEqeEC0AWUg4TKMy~YYdrPP4dCdMODHxFVfPAB~zzmOWC-7HOmun~xC~uXlIgHJwEUN-j9IJ7YLPpbC6F6hjJHm9gglfaw1KI~uOeW5bcduOxMUxbxtWRPkgYRWg__",
  },
  {
    id: uuidV4(),
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/2270/0766/ed50532940537d9d39d2626bb7a95167?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e1u59mBoYOHSu1vnubFHYBlgxelj9I23c0h6FVJu8fe99v6vjeEdd6UOgf5HTHto7xa-16CN1hOLofpqppNDJz2Oxg1tf484NGDPRM6lKLxCAZ94vesYIDXG~EjlY0mXxC0qLyFyzX4~ntpqmYvlbRUFu32C4Pr3e9DHL6To3K2q54-FoFL4hobrTij7oIpGHfxKj4eMB6q2xHjXlvJZkXmQ3Tk7snP0197a8V3CO1XvygFiFYLckqUOzhSQ0JP~4BzrS~rcb84Rbtx8Zc77A4AHVH6ZU-wr9omI~Uc8jTCmEU~A6x~78h0RCTr~cd1EsqQnDTuc-v-d7Cql-7Ytdg__",
  },
  {
    id: uuidV4(),
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1708/c339/362237370ea139219155cf9fca2448d3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOfBgpd9SdsbpVrN0LI3IT5bMV-rQDcjcD~6xv-PGI3HQ-z1SlJOGY6sCK2eSVMEgLB~JEOWFyA-eZPoULd-HfJCJ9NH06HJyk07nKSk8YqswrM91QFC5sBu09eiJikco~Cz9XH5pryCnorJ4qyY0BbUW2XZMGOpehUePpzpv4rd8NoonGchv0gqyMNmSHdSfUV5pobVkd3wOYhyuHyU~TlTXkXEqeEC0AWUg4TKMy~YYdrPP4dCdMODHxFVfPAB~zzmOWC-7HOmun~xC~uXlIgHJwEUN-j9IJ7YLPpbC6F6hjJHm9gglfaw1KI~uOeW5bcduOxMUxbxtWRPkgYRWg__",
  },
  {
    id: uuidV4(),
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5267/1e62/8375cef653c6b9ae388a7f2dda4ba454?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poRgM6pbkBqdnWsbKmfeS4UcxZkAhi2YMDifsURB-xTIfZcY-QDKhmleBzmNDh3fkjjWEfCtge~Lcr5s7BgkVPU00EZzrOgDP4AwiJpQZhLvRByGDVoDVufqT0lzgOyN9eUHZhC3wUrnOTQCDUpdFO8J0Af~FYl4246Uu-bgheR2kdA2NqkfxOmQs15LNeEsa177Q6uzc4CeEsxTi7Krr-H2F5RcU1fIufPCkvfJasBqRujHQeLQV-7OsXT9tMvK98cPscZcnrQdbTLa0XL4WQrWlaRMbK6tRpyIB7nuxyRTAUhRzeXbkOfSHHhy-wYWGJCwKeQNfn2WzbWKMJxbQA__",
  },
  {
    id: uuidV4(),
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1708/c339/362237370ea139219155cf9fca2448d3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOfBgpd9SdsbpVrN0LI3IT5bMV-rQDcjcD~6xv-PGI3HQ-z1SlJOGY6sCK2eSVMEgLB~JEOWFyA-eZPoULd-HfJCJ9NH06HJyk07nKSk8YqswrM91QFC5sBu09eiJikco~Cz9XH5pryCnorJ4qyY0BbUW2XZMGOpehUePpzpv4rd8NoonGchv0gqyMNmSHdSfUV5pobVkd3wOYhyuHyU~TlTXkXEqeEC0AWUg4TKMy~YYdrPP4dCdMODHxFVfPAB~zzmOWC-7HOmun~xC~uXlIgHJwEUN-j9IJ7YLPpbC6F6hjJHm9gglfaw1KI~uOeW5bcduOxMUxbxtWRPkgYRWg__",
  },
];
function LandingPageSlider() {
  var settings = {
    dots: false,
    infinite: true, // Infinite loop sliding
    speed: 500, // Animation speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Autoplay speed
    slidesToShow: 7, // Number of slides to show
    slidesToScroll: 4, // Number of slides to scroll on each interaction
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container container-fluid mx-auto">
      <Slider {...settings}>
        {nurseryList.map((eachItem) => (
          <div key={eachItem.id} className="slickCon">
            <img
              src={eachItem.imageUrl}
              alt={eachItem.name}
              className="slickImages"
            />
            <p className="slickPara">{eachItem.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LandingPageSlider;
