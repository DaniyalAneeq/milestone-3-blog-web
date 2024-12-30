import Comments from "@/app/components/Comments";
import { client } from "@/sanity/lib/client";
import { PortableText, PortableTextBlock } from "next-sanity";


export const revalidate = 10;

interface Ipost {
    title: string;
    summary: string;
    content: PortableTextBlock[];
    date: string;
    author: {
        name: string;
    }
}

export default async function Blog({params}:{params:{slug:string}})   {
    
    const query = `*[_type == 'post' && slug.current == '${params.slug}']{
    title,summary,content,
    author->{name},
    date
    }[0]`

    const post: Ipost = await client.fetch(query)

    

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">
                {post.title}
            </h1>
            <p className="text-md text-muted-foreground mb-2 border-l-4 border-gray-500 pl-4 italic">{post.summary}</p>
            <div className="flex gap-2">
                <p className="text-sm text-gray-500 mb-4 italic">By {post.author.name}</p>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            </div>
            <div>
              {post.summary}
            </div>
            <section>
            <PortableText
               value={post.content}/>
            </section>
            <Comments/>
        </div>
    )
}