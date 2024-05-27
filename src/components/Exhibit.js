import React from "react";
import "./Exhibit.css";
import Header from "../cantaner/Header";
import Footer from "../cantaner/Footer";

const Exhibit = () => {
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
          <div class="text-block lg:mt-20 ml-80 w-[200px] lg:w-auto  lg:mr-60 p-10 h-44 lg:overflow-hidden overflow-scroll lg:h-96 absolute top-[350px] md:top-[560px]">
            <h4 className="lg:text-4xl text-xl p-5 text-[#f59e0b]">
              {" "}
              Why Exhibit?
            </h4>
            <p className="text-justify lg:text-2xl text-[#f59e0b]">
              For exhibitors, the Brews and Wines Expo provides a unique
              platform to showcase your brand, products, and innovations to a
              targeted audience. Network with industry professionals, build
              brand awareness, and forge partnerships that can elevate your
              business to new heights. Join us and be a part of the vibrant
              community that defines the world of craft beverages.
            </p>
          </div>
        </section>
        <div className="bg-neutral-300 ">
          <h1 className="text-4xl text-center italic mt-20 p-10">
            Unlocking Opportunities at Brews and Wines Expo & Conference
          </h1>

          <p className="text-justify text-gray-500 dark:text-gray-400 text-2xl p-3 mx-5 lg:mx-20">
            Participating as an exhibitor in the Brews and Wines Expo &
            Conference opens the door to a world of opportunities for breweries,
            wineries, equipment manufacturers, and suppliers. Here's why you
            should showcase your brand at this premier event:
          </p>
          <p className="text-justify text-gray-500 dark:text-gray-400 text-2xl p-3 mx-5 lg:mx-20">
            Targeted Exposure: Gain direct access to a highly targeted audience
            of craft beverage enthusiasts, industry professionals, and potential
            business partners. Showcase your products and innovations to a
            diverse group of individuals who are passionate about the art of
            brewing and winemaking.
          </p>
          <p className="text-justify text-gray-500 dark:text-gray-400 text-2xl p-3 mx-5 lg:mx-20">
            Brand Visibility: Elevate your brand's visibility within the craft
            beverage community. Benefit from extensive marketing and promotional
            efforts leading up to the event, ensuring that your brand is
            recognized and remembered by a wide audience.
          </p>
          <p className="text-justify text-gray-500 dark:text-gray-400 text-2xl p-3 mx-5 lg:mx-20">
            Networking Opportunities: Forge valuable connections with industry
            leaders, distributors, retailers, and fellow exhibitors. The Brews
            and Wines Expo & Conference provides a conducive environment for
            networking, allowing you to establish meaningful relationships that
            can lead to collaborations, partnerships, and business growth.
          </p>
          <p className="text-justify text-gray-500 dark:text-gray-400 text-2xl p-3 lg:mx-20">
            Product Launch Platform: Unveil your latest products, innovations,
            and special releases to an engaged and curious audience. The expo is
            the perfect platform to generate excitement, gather feedback, and
            create buzz around your brand, setting the stage for successful
            product launches.
          </p>
          <p className="text-justify text-gray-500 dark:text-gray-400 text-2xl p-10 mx-20"></p>
          <p className="text-justify text-gray-500 dark:text-gray-400 text-2xl p-10 mx-20"></p>
        </div>

        <div class="container">
          <img
            src="https://static.wixstatic.com/media/39d917d4113c48398c9fe12e2c15a6f2.jpg/v1/fill/w_879,h_295,fp_0.39_0.28,q_80,usm_0.66_1.00_0.01,enc_auto/Networking%20Event.jpg"
            alt="Nature"
            className="w-full h-96"
          />
          <div
            class="text-block h-80 p-20 ml-6 overflow-scroll lg:overflow-hidden"
            id="p3"
          >
            <h4 className="text-4xl text-center text-[#f59e0b]">
              Hosted Buyer Program
            </h4>
            <p className="p-10 text-[#f59e0b] text-justify  text-xl  mx-2 ">
              The Hosted Buyer Program at the Brews and Wine Expo is designed to
              connect exhibitors with qualified buyers, providing a targeted
              approach to business expansion. This exclusive initiative ensures
              that exhibitors engage with individuals who have a genuine
              interest in their products, fostering meaningful connections that
              can lead to long-term partnerships.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Exhibit;
