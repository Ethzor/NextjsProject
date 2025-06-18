import Link from "next/link";
import GetAllPosts from "@/lib/posts";

const Page = async () => {
   const posts: any[] = await GetAllPosts();

   return (
      <div>
         <ul>
            {posts.map((post: any) => {
               return (
                  <li key={post.frontmatter.title}>
                     <Link href={`/todos/${post.slug}`}>
                        {" "}
                        <h4>{post.frontmatter.title}</h4>
                     </Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default Page;
