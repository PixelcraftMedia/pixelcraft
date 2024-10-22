import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostAndMorePosts, getAllPosts } from '../../../lib/api';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import React from 'react';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; // Импорт рендерера
import { BLOCKS, Document } from '@contentful/rich-text-types'; // Импорт правильного типа Document
// Здесь добавляем интерфейс Post
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
  content: {
    json: Document;
    links: any;
  };
  excerpt: string;
}

interface PostPageProps {
  post: Post;
  morePosts: Post[];
}

// Теперь код с использованием этого интерфейса будет работать корректно
export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params!;
  const data = await getPostAndMorePosts(slug as string, false, locale || 'en-US');

  return {
    props: {
      post: data.post,
      morePosts: data.morePosts || [],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ['en-US', 'ro-RO']; // Локали
  const posts = await getAllPosts(false, 'en-US'); // Получаем посты

  const paths = posts.flatMap((post: Post) =>
    locales.map((locale) => ({
      params: { slug: post.slug },
      locale,
    }))
  );

  return {
    paths,
    fallback: 'blocking',
  };
};

const PostPage: React.FC<PostPageProps> = ({ post, morePosts }) => {
  const { locale, push, asPath } = useRouter();

  if (!post) {
    return <div>Loading...</div>;
  }

  // Функция для переключения языка
  const switchLanguage = (lang: string) => {
    push(asPath, asPath, { locale: lang });
  };

  // Настройки рендеринга для Rich Text
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p>{children}</p>,
      [BLOCKS.HEADING_2]: (node: any, children: any) => <h2>{children}</h2>,
    },
  };

  return (
    <Layout metatitle={post.metatitle} metadescription={post.metadescription} logo={post.logo.url}>
      <article>
        <h1>{post.title}</h1>
        <img src={post.coverImage.url} alt={post.title} />
        <div>{post.programaredescription}</div>

        {/* Рендеринг Rich Text контента */}
        <div>
          {documentToReactComponents(post.content.json, options)}
        </div>

        {/* Переключение языков */}
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => switchLanguage('en-US')} style={{ marginRight: '10px' }}>
            English
          </button>
          <button onClick={() => switchLanguage('ro-RO')}>
            Română
          </button>
        </div>

        {/* Другие посты */}
        {morePosts.length > 0 && (
          <div>
            <h3>More Posts</h3>
            {morePosts.map((morePost: Post) => (
              <div key={morePost.slug}>
                <h4>{morePost.title}</h4>
                <p>{morePost.excerpt}</p>
              </div>
            ))}
          </div>
        )}
      </article>
    </Layout>
  );
};

export default PostPage;
