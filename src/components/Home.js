import React from "react";
import "./Home.css";
import Footer from "../cantaner/Footer";
import Header from "../cantaner/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <img
          src="https://static.wixstatic.com/media/11062b_c05e98dbb23e4505b987bdd9ad83b329~mv2.jpg/v1/fill/w_805,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_c05e98dbb23e4505b987bdd9ad83b329~mv2.jpg"
          className="w-full"
        />
      </div>

      <div className="bg-neutral-300">
        <h1 className="text-4xl text-center italic text-">About the Event</h1>

        <p className="text-justify text-gray-500 dark:text-gray-400 text-2xl md:p-10 mx-6 p-7 md:mx-20">
          Indulge your senses at the Brews and Wines Expo, a captivating
          celebration of craftsmanship and flavor. Embark on a journey that
          transcends borders, as we bring together the finest breweries and
          wineries to showcase their artistry and innovation. Whether you're a
          seasoned aficionado or a curious newcomer, our expo promises an
          immersive experience where you can savor the diverse and exquisite
          world of craft beverages.
          <br />
          Join us for an unforgettable weekend filled with tastings, workshops,
          and interactive activities. From the latest market trends to live
          demonstrations and expert-led sessions, the Brews and Wines Expo is
          the ultimate destination for those who appreciate the finer nuances of
          brewing and winemaking.
        </p>

        <div className=" flex flex-col lg:w-[80%] lg:ml-40">
          <div className=" flex flex-col  bg-[#5d504b] " id="pp">
            <div className="text-center text-[#ffbb09] text-4xl mt-10 p-10 hline">
              Highlights of Event
            </div>

            <div class="text-[#FFFFFF] p-10 mt-5 hline text-xl">
              Highlights of Event Witness live demonstrations of cutting-edge
              equipment and technologies that shape the future of the industry.
              Engage in exclusive product launches and take advantage of special
              event discounts. Connect with industry leaders and professionals
              during networking sessions that promise to spark new
              collaborations and partnerships.
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-10 p-10 bg-[#5d504b] italic text-2xl text-center text-[#ffbb09]">
            <div>
              <h2>Hosted Buyers Program</h2>
            </div>
            <div>
              <h2>Masterclasses and Workshops</h2>
            </div>
            <div>
              <h2>Hosted Buyers Program</h2>
            </div>
          </div>

          <div className="  p-10 bg-[#5d504b] italic text-2xl text-center text-[#ffbb09]">
            <div></div>
            <div>
              <button
                type="button"
                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-[150px] dark:focus:ring-yellow-900"
              >
                find out more
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <h1 className="text-center text-[#5d504b] text-8xl">
          BREWS & WINES EXPO
        </h1>
        <p className="text-center text-[#1a56db] text-2xl">Organized By</p>

        <div class="flex justify-center items-center h-40">
          <img
            src="https://static.wixstatic.com/media/a4e552_382dc67157774995859d1f724780558f~mv2.png/v1/fill/w_196,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Social%20Post-06.png"
            alt="alternate text"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
