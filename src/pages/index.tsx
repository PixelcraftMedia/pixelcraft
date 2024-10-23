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
          <Layout key={post.slug} metatitle={post.metatitle} metadescription={post.metadescription} logo={post.slug}>
       
       
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
         
             
           
         
        
            <Features
              programaretitle={post.slug}
              programaredescription={post.slug}
            />
            <HeadAnimate
              programaretitle={post.slug}
              programaredescription={post.slug}
            />

<Link href={`/posts/${post.slug}`} passHref>  
           
           <h2>{post.slug}dddd</h2>
            </Link>


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