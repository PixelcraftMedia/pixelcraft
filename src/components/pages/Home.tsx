import React, { FC } from "react";
import Image from "next/image";
interface ServiceProps {
	programaretitle: string;
	programaredescription:string;
}
const Home: FC<ServiceProps> = ({programaretitle, programaredescription}) => {
	return (
		<>
		<section id="home" className="relative z-10 overflow-hidden pt-35 md:pt-40 xl:pt-45">
  <div className="mx-auto max-w-7xl">
    <div className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden">
      <div className="-u-z-10 hero-circle-gradient absolute -top-[128%] left-1/2 -z-1 h-[1282px] w-full max-w-[1282px] -translate-x-1/2 rounded-full sm:-top-[107%] xl:-top-[73%]"></div>
      <div className="-u-z-10 hero-circle-gradient absolute -top-[112%] left-1/2 -z-1 h-[1046px] w-full max-w-[1046px] -translate-x-1/2 rounded-full sm:-top-[93%] xl:-top-[62%]"></div>
      <div className="-u-z-10 absolute left-1/2 top-0 aspect-[1204/394] w-full max-w-[1204px] -translate-x-1/2">
       
      <Image
       className="max-w-none"
         
         width={760}
         height={780}
          data-nimg="fill"
        style={{
          
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    color: 'transparent',
  }}
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
  src="https://ai-tool.nextjstemplates.com/images/blur/blur-02.svg"
  alt="blur"
              />
       
      
      </div>
      <div className="-u-z-10 absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-[url(https://ai-tool.nextjstemplates.com/images/blur/blur-01.svg)] bg-cover bg-top bg-no-repeat"></div>
    </div>
  </div>

  <div className="relative z-1 mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0">
    <div className="text-center">
      <span className="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium">
      <Image
          className="max-w-none"
         priority={true}
         width={16}
         height={16}
        style={{
         
   
    color: 'transparent',
  }}
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
  src="https://ai-tool.nextjstemplates.com/images/hero/icon-title.svg"
  alt=""
              />
        <span className="hero-subtitle-text">Launch Your AI Startup with</span>
      </span>

      <h1 className="mb-6 text-3xl font-extrabold text-white sm:text-5xl xl:text-heading-1">
        OpenAI + Next.js SaaS Boilerplate and Starter Kit
      </h1>

      <p className="mx-auto mb-9 max-w-[500px] font-medium md:text-lg">
        Ideal for developers looking to build SaaS applications using OpenAI and Next.js, this starter kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup.
      </p>

      <a
        className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
        href="/ai-examples"
      >
        Try AI Examples
      </a>
    </div>
  </div>

  <div className="relative mx-auto mt-17 aspect-[1170/411] w-full max-w-[1170px]" data-wow-delay="0.1s">
 


<Image
       className="max-w-none"
         priority={true}
         width={460}
         height={780}
        style={{
          
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    color: 'transparent',
  }}
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
  src="https://ai-tool.nextjstemplates.com/images/hero/hero.svg"
  alt="hero"

  decoding="async"
  data-nimg="fill"
              />
  </div>
</section>

		</>
	);
};
export default Home;