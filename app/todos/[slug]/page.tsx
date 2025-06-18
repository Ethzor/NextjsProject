import GetTodoSlug from "@/lib/posts";

const Page = async ({ params }: { params: any }) => {
   const param = await params;
   console.log(param);
   const { content, frontmatter }: any = await GetTodoSlug({
      slug: param.slug,
   });

   return (
      <section className="flex flex-col items-center justify-center p">
         <div className="m-5 mx-auto p-1 bg-blue-300 rounded-lg shadow-md w-1/2">
            <p> Title: {frontmatter.title}</p>
            <p> Author: {frontmatter.author}</p>
            <p> Date: {frontmatter.date} </p>
            <br />
            <div>{content}</div>
         </div>
      </section>
   );
};

export default Page;
