import React, { FC } from "react";
import Image from "next/image";
interface ServiceProps {
	programaretitle: string;
	programaredescription:string;
}
const HeadAnimate: FC<ServiceProps> = ({programaretitle, programaredescription}) => {
	return (
		<>
			<section id="features" className="scroll-mt-17 overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5">
  <div className="mx-auto max-w-[1222px] px-4 sm:px-8 xl:px-0">
    <div className="wow fadeInUp relative z-10 mb-16 text-center">
      <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium">
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
        <span className="hero-subtitle-text">Main Features</span>
      </span>
      <h2 className="mb-4.5 text-2xl font-extrabold text-white sm:text-4xl xl:text-heading-2">
        Key Features of AI Tool
      </h2>
      <p className="mx-auto max-w-[714px] font-medium">
        A Complete Solution for AI SaaS Startups
      </p>
    </div>

    <div className="relative">
      <div className="features-row-border absolute left-1/2 top-1/2 hidden h-[1px] w-1/2 -translate-y-1/2 rotate-90 lg:left-1/4 lg:block lg:-translate-x-1/3"></div>
      <div className="features-row-border absolute right-1/2 top-1/2 hidden h-[1px] w-1/2 -translate-y-1/2 rotate-90 lg:right-[8.3%] lg:block"></div>

      <div className="flex flex-wrap justify-center">
        {/* Feature 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="group relative overflow-hidden px-4 py-8 text-center sm:py-10 lg:px-8 xl:px-13 xl:py-15">
            <span className="features-bg absolute left-0 top-0 -z-1 h-full w-full opacity-0 group-hover:opacity-100"></span>
            <span className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
            <Image
        className="max-w-none"
         priority={true}
         width={32}
         height={32}
         style={{ color: "transparent" }}
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
  src="https://ai-tool.nextjstemplates.com/images/features/icon-01.svg"
  alt="Profesor Doctor Radulescu Luminita - Specialist Otorinolaringolog (ORL)"
              />
            </span>
            <h3 className="mb-4 text-lg font-semibold text-white">
              OpenAI Integration
            </h3>
            <p className="font-medium">
              Our AI writing tool analyzes your content, suggests improvements
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="group relative overflow-hidden px-4 py-8 text-center sm:py-10 lg:px-8 xl:px-13 xl:py-15">
            <span className="features-bg absolute left-0 top-0 -z-1 h-full w-full opacity-0 group-hover:opacity-100"></span>
            <span className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
            <Image
        className="max-w-none"
         priority={true}
         width={32}
         height={32}
         style={{ color: "transparent" }}
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
  src="https://ai-tool.nextjstemplates.com/images/features/icon-01.svg"
  alt="Profesor Doctor Radulescu Luminita - Specialist Otorinolaringolog (ORL)"
              />
 
            </span>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Next.js 13, React 18, TS
            </h3>
            <p className="font-medium">
              Say goodbye to embarrassing typos and grammar mistakes
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="group relative overflow-hidden px-4 py-8 text-center sm:py-10 lg:px-8 xl:px-13 xl:py-15">
            <span className="features-bg absolute left-0 top-0 -z-1 h-full w-full opacity-0 group-hover:opacity-100"></span>
            <span className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
            <Image
        className="max-w-none"
         priority={true}
         width={32}
         height={32}
         style={{ color: "transparent" }}
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
  src="https://ai-tool.nextjstemplates.com/images/features/icon-01.svg"
  alt="Profesor Doctor Radulescu Luminita - Specialist Otorinolaringolog (ORL)"
              />
            </span>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Auth, DB, Sanity Blog
            </h3>
            <p className="font-medium">
              Originality is key, and our AI writing tool helps you maintain it
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="group relative overflow-hidden px-4 py-8 text-center sm:py-10 lg:px-8 xl:px-13 xl:py-15">
            <span className="features-bg absolute left-0 top-0 -z-1 h-full w-full opacity-0 group-hover:opacity-100 rotate-180"></span>
            <span className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
            <Image
        className="max-w-none"
         priority={true}
         width={32}
         height={32}
         style={{ color: "transparent" }}
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
  src="https://ai-tool.nextjstemplates.com/images/features/icon-01.svg"
  alt="Profesor Doctor Radulescu Luminita - Specialist Otorinolaringolog (ORL)"
              />
            </span>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Cutting-edge Technologies
            </h3>
            <p className="font-medium">
              Transform your spoken words into written text easily & effortlessly
            </p>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="group relative overflow-hidden px-4 py-8 text-center sm:py-10 lg:px-8 xl:px-13 xl:py-15">
            <span className="features-bg absolute left-0 top-0 -z-1 h-full w-full opacity-0 group-hover:opacity-100 rotate-180"></span>
            <span className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
            <Image
        className="max-w-none"
         priority={true}
         width={32}
         height={32}
         style={{ color: "transparent" }}
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
  src="https://ai-tool.nextjstemplates.com/images/features/icon-01.svg"
  alt="Profesor Doctor Radulescu Luminita - Specialist Otorinolaringolog (ORL)"
              />
            </span>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Pre-made AI Examples
            </h3>
            <p className="font-medium">
              Whether you need a professional, or positive tone it has everyone
            </p>
          </div>
        </div>

        {/* Feature 6 */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="group relative overflow-hidden px-4 py-8 text-center sm:py-10 lg:px-8 xl:px-13 xl:py-15">
            <span className="features-bg absolute left-0 top-0 -z-1 h-full w-full opacity-0 group-hover:opacity-100 rotate-180"></span>
            <span className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
            <Image
        className="max-w-none"
         priority={true}
         width={32}
         height={32}
         style={{ color: "transparent" }}
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
  src="https://ai-tool.nextjstemplates.com/images/features/icon-01.svg"
  alt="Profesor Doctor Radulescu Luminita - Specialist Otorinolaringolog (ORL)"
              />
              
             
            </span>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Rich Documentation
            </h3>
            <p className="font-medium">
              Need inspiration or assistance with generating content?
            </p>
          </div>
        </div>
      </div>

      <div className="features-row-border h-[1px] w-full"></div>
    </div>
  </div>
</section>
		</>
	);
};
export default HeadAnimate;