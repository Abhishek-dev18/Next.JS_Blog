import fs from "fs"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from "@/components/onthispage"
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

export default async function Page({ params }) {

    let data = {};
    let content = "";

    const filepath = `content/${params.slug}.md`
    if (!fs.existsSync(filepath)) {
        notFound()
        return
    }
        
    const fileContent = fs.readFileSync(filepath, "utf-8")
    const result = matter(fileContent)
    content = result.content;
    data = result.data;

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypePrettyCode, {
            theme: "github-dark",
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3000,
                }),
            ],
        })

    const htmlContent = (await processor.process(content)).toString()

    return (
        <div className="max-w-5xl mx-auto p-5 bg-white shadow-lg rounded-lg dark:bg-transparent mt-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">{data.title}</h1>
            <p className="text-lg mb-2 border-l-4 border-gray-500 pl-4 italic dark:border-gray-400 dark:text-white">{`"${data.description}"`}</p>
            <div className="flex gap-2">
                <p className="text-sm text-gray-500 mb-4 italic dark:text-white">By {data.author}</p>
                <p className="text-sm text-gray-500 mb-4 dark:text-white">{data.date}</p>
            </div>
            <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: htmlContent }} ></div>
            <OnThisPage htmlContent={htmlContent} />
        </div>
    )
}