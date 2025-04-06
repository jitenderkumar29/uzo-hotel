import { useStore } from "../Context/AppContext";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import SearchBar from "./_SearchBar";
// import { setUrlParam } from "../Tools/helper";

import hero1Jpg from "../Assets/images/hero111.jpg";
import hero2Jpg from "../Assets/images/hero222.jpg";
import hero3Jpg from "../Assets/images/hero333.jpg";

SwiperCore.use([Autoplay]);

const defaultPropData = {
  name: "NobleShaadi",
  banners: [hero1Jpg, hero2Jpg, hero3Jpg],
};

const Hero = ({ data = defaultPropData }) => {
  const { navigate } = useStore();

  const styleRoot = document.documentElement.style;

  const handleChange = (e) => {
    styleRoot.setProperty("--light-accent", e.target.value);
  };

  const swiperProps = {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <section className="Hero">
      <div className="background">
        <Swiper {...swiperProps} style={{ marginTop: "0px" }}>
          {data?.banners.map((i, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={i} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="container" style={{ marginBottom: "0rem" }}>
        <div className="row">
          <div className="col-lg">
            <h2>Discover premium luxury hotel in 20+ countries</h2>
            <SearchBar />
            {/* <h2>Millions found their perfect match at {data?.name} !</h2> */}
          </div>
        </div>
      </div>

      {/* <section className="form">
        <div className="container">
          <div className="row">
            <div className="form-col col-lg">
              <h5>I'm looking for a</h5>
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue={0}
                onChange={handleChange}
              >
                <option value="#781c4b">Open this select</option>
                <option value="#93159e">One</option>
                <option value="#c3127a">Two</option>
              </select>
            </div>
            <div className="form-col-group col-lg">
              <div className="form-col">
                <h5>aged</h5>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={0}
                >
                  <option value="0">Open this select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <h5 className="mx-2 mb-3">to</h5>
              <div className="form-col">
                <h5>&nbsp;</h5>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={0}
                >
                  <option value="0">Open this select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="form-col col-lg">
              <h5>of religion</h5>
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue={0}
              >
                <option value="0">Open this select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="form-col col-lg">
              <h5>and mother tongue</h5>
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue={0}
              >
                <option value="0">Open this select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="form-col col-lg">
              <button
                className="py-2 px-3"
                onClick={() => navigate(setUrlParam("modal", "register"))}
              >
                <input
                  className="border"
                  type="color"
                  defaultValue={"#781c4b"}
                  onChange={handleChange}
                />
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
};

export default Hero;
