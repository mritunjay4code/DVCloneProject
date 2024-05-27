import React from "react";
import Header from "../cantaner/Header";
import Footer from "../cantaner/Footer";

const Visitor = () => {
  return (
    <>
      <Header />
      <div className="bg-neutral-300 md:pt-[200px] ">
        <section className="lg:grid lg:gap-8 md:grid-cols-2 md:items-center p-4">
          <div class="container mt-20">
            <img
              src="https://static.wixstatic.com/media/708ac9175fde4664aafefb4480ac7c22.jpg/v1/fill/w_473,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Vineyard%203.jpg"
              alt="Nature"
              className="h-96  w-full relative"
            />
          </div>
          <div class="text-block lg:mt-20 ml-80 w-[200px] lg:w-auto  lg:mr-60 p-10 h-44 lg:overflow-hidden overflow-scroll lg:h-96 absolute top-[350px] md:top-[560px]">
            <h4 className="lg:text-4xl text-xl p-5 text-[#f59e0b]">Visitor</h4>
            <p className="text-justify lg:text-2xl text-[#f59e0b]">
              Our event attracts a diverse audience of beverage enthusiasts,
              industry professionals, and curious individuals eager to explore
              the world of brews and wines. Whether you're a brewer, winemaker,
              distributor, or a passionate consumer, there's something for
              everyone at the Brews and Wines Expo.
            </p>
          </div>
        </section>
        <div className="bg-neutral-300 ">
          <h1 className="text-4xl italic mt-20 p-10 mx-20 text-[#352620]">
            Visitor Profile
          </h1>
        </div>
        <div className="text-justify text-Left text-gray-500 dark:text-gray-400 text-xl p-5 mt-10 lg:mx-20">
          <p>Brand Owners / Pubs / Clubs /Restaurants</p>
          <p>Breweries</p>
          <p>Brewers</p>
          <p>Catering Institutes</p>
          <p>Distilleries</p>
          <p>Distillers</p>
          <p>Distributors</p>
          <p>F & B Professionals</p>
          <p>Government, Regulators and Excise Departments</p>
          <p>Hospitality Industry</p>
          <p>Importers</p>
          <p>Industry Associations</p>
          <p>Media (Indian and International)</p>
          <p>National and Regional Chains</p>
          <p>Product Designers</p>
          <p>Research Institutes / Training Institutes</p>
          <p>Resellers</p>
          <p>Retailers</p>
          <p>Sommeliers</p>
          <p>Traders – Beer & Distilled Spirits (Cellar to Seller)</p>
          <p>Vineyard Owners</p>
          <p>Wine Clubs</p>
          <p>Wine Makers</p>
          <p>Wineries</p>
        </div>
        <div class="container">
          <img
            src="https://static.wixstatic.com/media/11062b_5dc9b5ba60114bf49222531bcbe39ee4~mv2.jpg/v1/fill/w_595,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Wine%20Corks.jpg"
            alt="Nature"
            className="w-full h-96"
          />
          <div
            class="text-block h-80 p-20 ml-6  overflow-scroll lg:overflow-hidden"
            id="p1"
          >
            <h4 className="text-4xl text-center text-[#f59e0b]">
              " Market Scenario "
            </h4>
            <p className="p-10 text-[#f59e0b] text-justify  text-xl  mx-2 ">
              Discover the latest trends and innovations in the brewing and
              winemaking industries. Gain insights into the market dynamics,
              emerging technologies, and consumer preferences. The Brews and
              Wines Expo provides a comprehensive overview of the current market
              scenario, making it an invaluable resource for industry
              professionals and enthusiasts alike.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Visitor;
