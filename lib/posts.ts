import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import NewsLetter from "@/app/components/Newsletter";

const RootDir = path.join(process.cwd(), "app/content");

const components = {
   NewsLetter: NewsLetter,
};

export const GetTodoSlug = async ({ slug }: { slug: string }) => {
   const realSlug = slug.replace(/\.mdx$/, "");
   const filePath = path.join(RootDir, `${realSlug}.mdx`);
   const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

   const { content, frontmatter } = await compileMDX({
      source: fileContent,
      components,
      options: { parseFrontmatter: true },
   });

   return { content, frontmatter, slug: realSlug };
};

export const GetAllPost = async () => {
   const files = fs.readdirSync(RootDir);

   const posts = [];

   for (const file of files) {
      const post = await GetTodoSlug({ slug: file });
      posts.push(post);
   }
   return posts;
};
