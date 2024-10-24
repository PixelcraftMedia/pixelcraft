import React, { FC } from "react";
import dynamic from 'next/dynamic';
import Layout from "@/components/layout/Layout";
import { getAllPosts } from "../../lib/api";
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Features = dynamic(() => import('@/components/pages/Features'));
const HeadAnimate = dynamic(() => import('@/components/pages/HeadAnimate'));
const Home = dynamic(() => import('@/components/pages/Home'));

interface Post {
  worktextCollection: {
    items: {
      worktext: string;         // Поле worktext (строка)
      workdescription: string;  // Поле workdescription (строка)
      workimage: {
        url: string;
        title: string;
      };      // Поле workimage (строка)
    }[]; // Массив объектов с worktext, workdescription и workimage
  };
  imggradient1:{
    url:string;
  }
  imggradient2:{
    url:string;
  }
  imggradient3:{
    url:string;
  }
  homedescription:string;
  hometitle:string;
  homebuttonstar: {
    url:string;
    title: string;
  }
  homedecoration: {
    url:string;
    title: string;
  }
  homeimage: {
    url: string;
   title:string;
  }
  metadescription: string;
  metatitle: string;
  homebuttontext:string;

  
  slug: string;

  
  tags: { [key: string]: string };
}

interface Props {
  posts: Post[];
}

// Вставляем функцию getStaticProps для получения данных с Contentful
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  console.log('Current locale:', locale);
 
  const posts = await getAllPosts(true, locale || 'en-US'); // Передаём локаль в запрос
  console.log('Fetched posts:', posts);
  return {
    props: {
      posts,
    },
  };
};

// Функция для фильтрации постов по тегу
const filterPostsByTag = (posts: Post[], tagName: string): Post[] => {
  return posts.filter((post) => {
    const tagsArray = Object.values(post.tags || {});
    return tagsArray.some(tag => tag === tagName);
  });
};

const Index: FC<Props> = ({ posts }) => {
  const { locale } = useRouter(); // Получаем текущую локаль

  // Фильтрация постов по тегу "homepage"
  const filteredPosts = filterPostsByTag(posts, "homepage");

  return (
    <>
      
      <div>
      <Link href="/" locale="en-US" style={{ marginRight: '10px' }}>
    English
  </Link>
  <Link href="/" locale="ro-RO">
    Română
  </Link>
      </div>

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post: Post) => (
          <Layout key={post.slug} metatitle={post.metatitle} metadescription={post.metadescription}>
       
       
            <Home
           
            homebuttontext={post.homebuttontext}
            homedecorationsalt={post.homedecoration.title}
            homedecorationurl={post.homedecoration.url}
            homebuttonstaralt={post.homebuttonstar.title}
            homebuttonstarurl={post.homebuttonstar.url}
            hometitle={post.hometitle}
            homedescription={post.homedescription}
            homeimage={post.homeimage.url}
            homeimagetitle={post.homeimage.title}
           post={post.slug}
            />
          <HeadAnimate
          imggradient1={post.imggradient1.url}
          imggradient2={post.imggradient2.url}
          imggradient3={post.imggradient3.url}
           wortext={post.worktextCollection?.items}
              programaretitle={post.slug}
              programaredescription={post.slug}
            />
             
           
             <section id="support" className="scroll-mt-17">
  <div className="mx-auto max-w-[1104px] px-4 sm:px-8 xl:px-0">
    <div className="relative z-999 overflow-hidden rounded-[30px] bg-dark px-4 pt-25 sm:px-20 lg:px-27.5">
      
      {/* Decorative grid elements */}
      <div className="absolute -top-[16%] left-1/2 -z-1 flex w-full max-w-[690px] -translate-x-1/2 justify-center gap-7.5 opacity-40">
        {[...Array(9)].map((_, i) => (
          <div key={i} className={`pricing-grid pricing-grid-border relative bottom-${i % 4 === 0 ? '12' : i % 3 === 0 ? '8' : '3'} h-[250px] w-full max-w-[50px]`}></div>
        ))}
      </div>

      {/* Decorative background elements */}
      <div className="absolute -top-30 left-1/2 -z-1 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
      </div>
    
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <span className="absolute left-1/2 top-0 -z-1 h-full w-full -translate-x-1/2">
  <span
    className="absolute left-1/2 top-[-1.5%] h-[906px] w-[906px] -translate-x-1/2 rounded-full bg-[#8646F4] opacity-25 blur-[250px]"
  ></span>
</span>

        <span className="absolute left-1/2 top-0 -z-1 aspect-[1170/592] w-full -translate-x-1/2">
  <span className="max-w-none absolute h-full w-full left-0 top-0 bg-[#5B21B6] opacity-25 blur-[137px] rounded-full"></span>
</span>

<span className="absolute left-1/2 top-0 -z-1 mx-auto aspect-[530/254] w-full max-w-[530px] -translate-x-1/2">
  <span
    className="absolute h-[224px] w-[224px] top-[-39%] left-1/2 -translate-x-1/2 bg-white opacity-20 blur-[76.5px] rounded-full"
  ></span>
</span>
      </div>

      {/* Content Section */}
      <div className="wow fadeInUp relative z-10 mb-16 text-center">
        <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium">
          <img alt="icon" loading="lazy" width="16" height="16" src="/images/hero/icon-title.svg" />
          <span className="hero-subtitle-text">Need Any Help?</span>
        </span>
        <h2 className="mb-4.5 text-2xl font-extrabold text-white sm:text-4xl xl:text-heading-2">Contact With Us</h2>
        <p className="mx-auto max-w-[714px] font-medium">
          Build SaaS AI applications using OpenAI and Next.js. This kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup.
        </p>
      </div>

      {/* Form Section */}
      <div className="form-box-gradient relative overflow-hidden rounded-[25px] bg-dark p-6 sm:p-8 xl:p-15">
        <form className="relative z-10" action="https://formbold.com/s/unique_form_id" method="POST">
          <div className="-mx-4 flex flex-wrap xl:-mx-10">
            
            <div className="w-full px-4 md:w-1/2 xl:px-5">
              <div className="mb-9.5">
                <label htmlFor="name" className="mb-2.5 block font-medium text-white">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your Name"
                  required
                  className="w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-none focus:border-purple"
                  name="name"
                />
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 xl:px-5">
              <div className="mb-9.5">
                <label htmlFor="email" className="mb-2.5 block font-medium text-white">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  required
                  className="w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-none focus:border-purple"
                  name="email"
                />
              </div>
            </div>

            <div className="w-full px-4 xl:px-5">
              <div className="mb-10">
                <label htmlFor="message" className="mb-2.5 block font-medium text-white">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message"
                  rows="6"
                  required
                  className="w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-5 outline-none focus:border-purple"
                ></textarea>
              </div>
            </div>

            <div className="w-full px-4 xl:px-5">
              <div className="text-center">
                <button type="submit" className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80">
                  Send Message
                </button>
              </div>
            </div>

          </div>
        </form>
      </div>

    </div>
  </div>
</section>

        
          {/**  <Features
              programaretitle={post.slug}
              programaredescription={post.slug}
            /> */}
           

  {/**<Link href={`/posts/${post.slug}`} passHref>  
           
           <h2>{post.slug}dddd</h2>
            </Link> */}


          </Layout>
          
        ))
      ) : (
        <p>No posts found with the specified tag.</p>
      )}
    </>
  );
};

export default Index;
  /*  
  
  slag to posts and can use to pages
  

  */