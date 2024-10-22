import React, { FC } from "react";
import dynamic from 'next/dynamic';
import Layout from "@/components/layout/Layout";
import { getAllPosts } from "../../lib/api";
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Динамическая загрузка компонентов
const HomePage = dynamic(() => import('@/components/pages/HomePage'));
const Features = dynamic(() => import('@/components/pages/Features'));
const HeadAnimate = dynamic(() => import('@/components/pages/HeadAnimate'));
const Home = dynamic(() => import('@/components/pages/Home'));

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

// Вставляем функцию getStaticProps для получения данных с Contentful
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const posts = await getAllPosts(true, locale || 'en-US'); // Передаём локаль в запрос
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
      {/* Добавляем переключение языков */}
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
          <Layout key={post.slug} metatitle={post.metatitle} metadescription={post.metadescription} logo={post.logo.url}>
            <div>{post.metatitle}</div>
            <Home
              programaretitle={post.programaretitle}
              programaredescription={post.programaredescription}
            />
            <Features
              programaretitle={post.programaretitle}
              programaredescription={post.programaredescription}
            />
            <HeadAnimate
              programaretitle={post.programaretitle}
              programaredescription={post.programaredescription}
            />
          </Layout>
        ))
      ) : (
        <p>No posts found with the specified tag.</p>
      )}
    </>
  );
};

export default Index;
