import React, { useState, useRef, useEffect, useCallback } from "react";
import Transition from "../utils/Transition";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";
import { CardGallery } from "../Components";
import lavaLampImage from "../images/lavalamp.png";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";
function Features() {
  // const [tab, setTab] = useState(1);

  // const tabs = useRef(null);

  // const heightFix = () => {
  //   if (tabs.current.children[tab]) {
  //     tabs.current.style.height =
  //       tabs.current.children[tab - 1].offsetHeight + "px";
  //   }
  // };

  // useEffect(() => {
  //   heightFix();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [tab]);

  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSeaAnemonePreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <section className="relative pb-10">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 pointer-events-none parallax-bg "
        style={{
          backgroundImage: `url(https://www.wallpaperup.com/uploads/wallpapers/2019/07/19/1330816/120d4a736dfc3cef8f7a66987a55d9ad.jpg)`,
        }}
        aria-hidden="true"
      >
        {" "}
        <Particles
          id="tsparticles"
          className="absolute z-[0] opacity-50 "
          init={particlesInit}
          options={{
            fpsLimit: 120,
            backgroundMode: {
              zIndex: 1,
            },
            background:{
                opacity:-1000
            },
            particles:{

              move: {
                
                speed: 5,
                
              },
            },
            preset: "seaAnemone",
    
            detectRetina: true,

          }
        }
        />
      </div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-white">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Explore the solutions</h1>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          <div className="flex flex-col gap-y-10">
            <CardGallery
              images={[
                {
                  src: "https://cdns-images.dzcdn.net/images/artist/6c4574118dffc45e38ef7841f625aefb/500x500.jpg",
                  alt: "anuel",
                  className: "col-span-full mx-auto",
                },
              ]}
              title="Artista Principal"
            />
            <CardGallery
              column="lg:grid-cols-2"
              columnBreak="grid-cols-1"
              images={[
                {
                  src: "https://akamai.sscdn.co/uploadfile/letras/fotos/4/2/e/0/42e065d1ca776977723cd5e7ec65a6ad.jpg",
                  alt: "anuel",
                },
                {
                  src: "https://www.neo2.com/wp-content/uploads/2022/08/Mora-Microdosis-produccion-productor-musica-urbana-foto-3.jpg",
                  alt: "anuel",
                },
                {
                  src: "https://www.el-carabobeno.com/wp-content/uploads/2022/08/Justin-Quiles.png",
                  alt: "anuel",
                },
                {
                  src: "https://images.spot.im/v1/production/cmrruouyun9zmdspnny7",
                  alt: "anuel",
                },
              ]}
              title="Artista Internacionales"
            />

            <CardGallery
              column="lg:grid-cols-2 justify-center"
              columnBreak="grid-cols-2 "
              images={[
                {
                  src: "https://puertoricoposts.com/wp-content/uploads/2022/03/Cori_Antisocial.png",
                  alt: "anuel",
                },
                {
                  src: "https://sfo2.digitaloceanspaces.com/estaticos/var/www/html/wp-content/uploads/2021/06/kj3uevtcjc7licarapwi.jpg",
                  alt: "anuel",
                },
                {
                  src: "https://yt3.ggpht.com/ytc/AMLnZu9xtUsIFbwfz-7dbwxc0Cw_d_ceKftdDgTpWNLNeQ=s900-c-k-c0x00ffffff-no-rj",
                  alt: "anuel",
                },
                {
                  src: "https://ultimasnoticias.com.ve/wp-content/uploads/2021/03/Corazon-roto-1.jpg",
                  alt: "anuel",
                },
                {
                  src: "https://supertrendy.net/wp-content/uploads/2017/10/aran.jpg",
                  alt: "anuel",
                },
                {
                  src: "https://elespectadordecaracas.com/wp-content/uploads/2022/06/Sixto-Rein.jpg",
                  alt: "anuel",
                },
              ]}
              title="Artista Nacionales"
            />
          </div>

          {/* Section content
           */}
        </div>
      </div>
    </section>
  );
}

export default Features;

/*

   <div className="md:grid md:grid-cols-12 md:gap-6">
         
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Powerful suite of tools</h3>
                <p className="text-xl text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa.
                </p>
              </div>
      
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Building the Simple ecosystem
                    </div>
                    <div className="text-gray-600">
                      Take collaboration to the next level with security and
                      administrative features built for teams.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Building the Simple ecosystem
                    </div>
                    <div className="text-gray-600">
                      Take collaboration to the next level with security and
                      administrative features built for teams.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Building the Simple ecosystem
                    </div>
                    <div className="text-gray-600">
                      Take collaboration to the next level with security and
                      administrative features built for teams.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
             
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <div className="bg-black w-full h-[300px]"></div>
                  </div>
                </Transition>

                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={FeaturesBg}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      src={FeaturesElement}
                      width="500"
                      height="44"
                      alt="Element"
                      style={{ top: "30%" }}
                    />
                  </div>
                </Transition>
      
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={FeaturesBg}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      src={FeaturesElement}
                      width="500"
                      height="44"
                      alt="Element"
                      style={{ top: "30%" }}
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
*/
