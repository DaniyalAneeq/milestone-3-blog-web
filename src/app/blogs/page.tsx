import { urlFor } from '@/sanity/lib/image';
import { client } from '../../sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 10;

export interface IPost {
  slug: string,
  title: string,
  summary: string,
  image: string;
  date: string;
  author: string | null;
}

export default async function BlogPage() {

  const query = `*[_type == 'post'] | order(_createdAt asc) {
    summary,
    title,
    "image": image.asset->url,
    "slug": slug.current,
    date,
    "author": author->name 
  }`;
  

  const posts: IPost[] = await client.fetch(query);

  return (
    <>
      <div className="container mx-auto px-4 py-12 ">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground hover:scale-105 hover:cursor-pointer underline">
          Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post:IPost) => (
            <Link 
              href={`/blogpost/${post.slug}`} 
              key={post.slug}
              className="group"
            >
              <article className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={urlFor(post.image).url()}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <time dateTime={post.date}>
                    {post.date
                     ? new Date(post.date).toLocaleDateString('en-US', {
                     year: 'numeric',
                     month: 'long',
                     day: 'numeric',
                      })
                      : '2024-12-24'}
                  </time>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}