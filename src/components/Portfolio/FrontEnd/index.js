import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import projectData from "../FrontEnd/projectData";

const FrontEnd = () => {
  return (
    <section id="frontend" className="pt-36 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary dark:text-secondPrimary mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4">
              Front End Project
            </h2>
            <p className="font-medium text-md text-secondary">
              Check out some of my projects below
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {projectData.map((data) => (
              <SwiperSlide>
                <div className="flex justify-center">
                  <div key={data.id} className="mb-12 p-4 px-8 w-[80%]">
                    <div className="rounded-md bg-white shadow-md w-auto flex items-center overflow-hidden">
                      <a href={data.link} target="_blank">
                        <img
                          src={data.image}
                          alt="expense-tracker-app"
                          className="w-full"
                        />
                      </a>
                    </div>
                    <h3 className="font-semibold text-dark text-lg mt-5 mb-3">
                      {data.name}
                    </h3>
                    <p className="font-medium text-base text-secondary">
                      {data.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {projectData.map((data) => (
            <div key={data.id} className="mb-12 p-4 px-8 md:w-1/2">
              <div className="rounded-md bg-white shadow-md w-auto flex items-center overflow-hidden hover:scale-110 duration-300 transition ease-in-out">
                <a href={data.link} target="_blank">
                  <img
                    src={data.image}
                    alt="expense-tracker-app"
                    className="w-full"
                  />
                </a>
              </div>
              <h3 className="font-semibold text-dark text-lg mt-5 mb-3">
                {data.name}
              </h3>
              <p className="font-medium text-base text-secondary">
                {data.description}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default FrontEnd;
