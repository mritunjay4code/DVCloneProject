import React from "react";
import Header from "../cantaner/Header";
import Footer from "../cantaner/Footer";
import "./Exhibitor.css";

const Exhibitor = () => {
  return (
    <>
      <Header />
      <div className="bg-neutral-300 md:pt-[200px]">
        <section className="lg:grid lg:gap-8 md:grid-cols-2 md:items-center p-4">
          <div class="container mt-20">
            <img
              src="https://static.wixstatic.com/media/708ac9175fde4664aafefb4480ac7c22.jpg/v1/fill/w_473,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Vineyard%203.jpg"
              alt="Nature"
              className="h-96  w-full lg:block relative"
            />
          </div>
          <div class="text-block lg:mt-20 ml-80 w-[200px] lg:w-auto  lg:mr-60 p-10 h-36 lg:overflow-hidden overflow-scroll lg:h-96 absolute top-[350px] md:top-[560px]">
            <h4 className="lg:text-4xl text-[15px] p-5 text-[#f59e0b]">
              {" "}
              Exhibitors Profile
            </h4>
            <p className="text-justify lg:text-2xl text-[#f59e0b]">
              Our expo features a diverse array of exhibitors, ranging from
              estabpshed industry giants to innovative startups. Explore a
              curated selection of breweries, wineries, equipment manufacturers,
              and supppers showcasing their products and services. Connect with
              experts and discover the latest advancements that are shaping the
              future of the craft beverage industry.
            </p>
          </div>
        </section>
        <div>
          <h1 className="text-justify text-[#5D504B] text-Left  dark:text-gray-400 text-3xl p-5 mt-20 mx-20">
            Exhibitor Profile
          </h1>
          <div className="text-justify text-[#5D504B] text-Left  dark:text-gray-400 text-xl p-5 mt-10 lg:mx-20">
            <p> Alcobev Brands</p>
            <p>Automation, Robotics & Control Systems</p>
            <p>Flavours / Hops / Malts / Chemicals / Extracts</p>
            <p>
              Glassware, Crockeries, Bar Refrigeration, Dispensing Equipment,
              Tools & Supppes
            </p>
            <p>Laboratory Equipment & Analytical Systems</p>
            <p>
              Manufacturers of Equipment, Technologies and Services for Alcohol
              Production
            </p>
            <p>POS, Apps & Inventory Management Softwares</p>
            <p>
              Industry Associations, Embassies, Training Institutes & Academia
            </p>
            <p>Warehouse, Distribution & Logistics</p>
            <p>
              Manufacturers of Equipment, Technologies and Services for Filpng &
              Packaging
            </p>
          </div>
          ​
        </div>
        <div class="container">
          <img
            src="https://static.wixstatic.com/media/11062b_6f6ff1983e2e42e392a63d61bc67bf12~mv2.jpeg/v1/fill/w_879,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Technology%20Expo.jpeg"
            alt="Nature"
            className="w-full h-96"
          />
          <div
            class="text-block text-[#f59e0b] h-80 left-0 p-20 w-full"
            id="p1"
          >
            <h4 className="p-10  text-[#ffbb09] text-center   dark:text-gray-400 text-3xl  mx-2">
              " Market Scenario "
            </h4>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Exhibitor;
