import Link from "next/link";
import { GetAllPost } from "@/lib/posts";

const Page = async () => {
   const posts: any = await GetAllPost();

   return (
      <div>
         {posts.map((post: any) => (
            <div
               key={post.slug}
               className="mx-auto border rounded w-150 p-5 m-5"
            >
               <ul>
                  <li>
                     <Link href={`/todos/${post.slug}`}>
                        {post.frontmatter.title} {post.frontmatter.author}
                     </Link>
                  </li>
               </ul>
            </div>
         ))}
      </div>
   );
};

export default Page;
