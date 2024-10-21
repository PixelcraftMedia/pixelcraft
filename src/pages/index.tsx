import React, { FC } from "react";
import dynamic from 'next/dynamic';
import Layout from "@/components/layout/Layout";
import { getAllPosts } from "../../lib/api";
import { GetStaticProps } from 'next';
import Image from "next/image";
// Динамическая загрузка компонентов
const HomePage = dynamic(() => import('@/components/pages/HomePage'));
const AboutPage = dynamic(() => import('@/components/pages/AboutPage'));
const Service = dynamic(() => import('@/components/pages/Service'), { ssr: false }); // Отключаем SSR для этого компонента
const ContactPage = dynamic(() => import('@/components/pages/ContactPage'));

interface Post {
  programaredescription: string;
  programaretitle: string;
  metadescription: string;
  metatitle: string;
  logo: {
    url: string;
  };
  rightimg: {
    url: string;
  };
  h1: string;
  videoId: string;
  slug: string;
  title: string;
  youtubedescription: string;
  coverImage: {
    url: string;
  };
  tags: { [key: string]: string };
}

interface Props {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPosts(true);
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
  const heroPost = posts[0];

  // Пример фильтрации постов по тегу "homepage"
  const filteredPosts = filterPostsByTag(posts, "homepage");

  return (
    <>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post: Post) => (
          <Layout key={post.slug} metatitle={post.metatitle} metadescription={post.metadescription} logo={post.logo.url}>
         
        




<section className="relative z-20 scroll-mt-17 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5">
  <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
    
    <div className="relative top-18">
      <div className="pointer-events-none absolute inset-0 -z-10 -my-55 overflow-hidden">
        <div className="absolute left-1/2 top-0 mx-auto aspect-square w-full max-w-[925px] -translate-x-1/2">
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
  src="https://ai-tool.nextjstemplates.com/images/blur/blur-13.svg"
  alt="Profesor Doctor Radulescu Luminita - Specialist Otorinolaringolog (ORL)"
              />
          <div className="absolute left-1/2 top-0 mx-auto aspect-square w-full max-w-[778px] -translate-x-1/2">
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
  src="https://ai-tool.nextjstemplates.com/images/blur/blur-14.svg"
  alt="Profesor Doctor Radulescu Luminita - Specialist Otorinolaringolog (ORL)"
              />
          </div>
          <div className="absolute left-1/2 top-0 mx-auto aspect-square w-full max-w-[584px] -translate-x-1/2">
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
  src="https://ai-tool.nextjstemplates.com/images/blur/blur-15.svg"
  alt="Profesor Doctor Radulescu Luminita - Specialist Otorinolaringolog (ORL)"
              />
          </div>

        </div>
      </div>
   
    <div className="pricing-circle absolute left-1/2 top-0 h-[830px] w-full max-w-[830px] -translate-x-1/2 rounded-full bg-dark"></div>
    <div className="absolute -top-30 left-1/2 -z-1 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden">
      <div className="stars"></div>
      <div className="stars2"></div>
    </div>
    </div>
    <div className="relative -z-1 flex justify-center gap-7.5">
        <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
        <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
        <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
        <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
        <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
        <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
        <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
        <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
      </div>
  </div>
</section>














            
          
         
          </Layout>
        ))
      ) : (
        <p>No posts found with the specified tag.</p>
      )}
    </>
  );
};

export default Index;
