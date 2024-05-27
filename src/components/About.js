import React from "react";
import Header from "../cantaner/Header";
import Footer from "../cantaner/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="bg-neutral-300 md:pt-[200px]">
        <section className="lg:grid lg:gap-8 md:grid-cols-2 md:items-center p-4">
          <div class="container mt-20 flex justify-center lg:block">
            <img
              src="https://static.wixstatic.com/media/39f22954036c49cc94a9cb35c7ad49e6.jpg/v1/fill/w_421,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9f22954036c49cc94a9cb35c7ad49e6.jpg"
              alt="Nature"
              className="lg:h-96 relative"
            />
          </div>
          <div class="text-block lg:mt-20 lg:ml-80 w-[200px] lg:w-auto  lg:mr-60 p-16 h-36 lg:overflow-hidden overflow-scroll lg:h-96 absolute lg:top-[350px] md:top-[450px] top-[250px]  ">
            <h4 className="lg:text-4xl  p-5 text-[#f59e0b]"> About BWE</h4>
            <p className="lg:text-justify lg:text-2xl text-[#f59e0b]">
              Brews and Wines Expo is a premier event dedicated to showcasing
              the best in craft beverages. With a passion for quality and a
              commitment to excellence, we bring together enthusiasts, industry
              professionals, and leading brands to create an immersive and
              unforgettable experience. Our goal is to foster a community that
              appreciates the art and science of brewing and winemaking.
            </p>
          </div>
        </section>
        <div>
          <h1 className="text-3xl ml-5 text-bold  text-[#5D504B] mt-20">
            All About BWE
          </h1>
          <p className="text-justify dark:text-gray-400 text-xl lg:p-5 mx-2  text-[#5D504B]">
            At Brews and Wines Expo, we are more than just event organizers – we
            are passionate advocates for the craft beverage community. With a
            deep appreciation for the artistry and dedication that goes into
            brewing and winemaking, we founded this expo as a platform to
            celebrate, connect, and elevate the industry.
          </p>
          <p className="text-justify dark:text-gray-400 text-xl lg:p-5 mx-2  text-[#5D504B]">
            Our mission is simple: to curate an immersive experience that
            transcends the boundaries of taste and culture. We believe in
            creating a space where enthusiasts and professionals alike can come
            together to explore the rich tapestry of flavors that define the
            world of craft beverages.
          </p>
          <p className="text-justify dark:text-gray-400 text-xl lg:p-5 mx-2  text-[#5D504B]">
            ​ As organizers, we bring years of expertise in event management, a
            keen understanding of industry trends, and a genuine love for the
            craft. We are committed to fostering a community that values
            quality, innovation, and the pursuit of excellence. Through the
            Brews and Wines Expo, we aim to shine a spotlight on the remarkable
            individuals and businesses that contribute to the diversity and
            dynamism of the craft beverage landscape.
          </p>
          <p className="text-justify dark:text-gray-400 text-xl lg:p-5  text-[#5D504B] mx-2">
            Our dedication extends beyond the event itself – we strive to build
            lasting connections and provide a platform for brands to thrive. We
            understand the challenges and opportunities that exist in the
            industry, and we are driven by the desire to support and promote the
            growth of craft breweries and wineries. ​
          </p>
          <p className="text-justif dark:text-gray-400 text-xl lg:p-5  text-[#5D504B] mx-2">
            Join us at Brews and Wines Expo for an experience that goes beyond
            the ordinary. Whether you're a participant, exhibitor, or visitor,
            you are an integral part of our journey to create moments that
            linger on the palate and memories that last a lifetime. Cheers to
            the spirit of collaboration, exploration, and the shared love for
            the craft – welcome to Brews and Wines Expo, where every sip is a
            celebration!
          </p>
        </div>
        <div className="container ">
          <img
            src="https://static.wixstatic.com/media/11062b_5dc9b5ba60114bf49222531bcbe39ee4~mv2.jpg/v1/fill/w_595,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Wine%20Corks.jpg"
            alt="Nature"
            className="w-full h-96"
          />
          <div
            class="text-block h-80 p-20 ml-6 overflow-scroll lg:overflow-hidden "
            id="p2"
          >
            <h4 className="text-xl lg:text-4xl text-center text-[#f59e0b]">
              " Market Scenario "
            </h4>
            <p className="p-10 text-[#f59e0b] text-justify  lg:text-xl  lg:mx-2 ">
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

export default About;
