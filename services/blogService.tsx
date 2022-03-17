import { BlogSummary } from "../types/BlogSummary";

const blogs: BlogSummary[] = [
    {
        slug: 'blog_1',
        title: 'Blog 1',
    },
    {
        slug: 'blog_2',
        title: 'Blog 2',
    },
    {
        slug: 'blog_3',
        title: 'Blog 3',
    }
];

export const getBlogs = (): Promise<BlogSummary[]> => {
    return Promise.resolve(blogs);
}

export const getFilteredBlogs = (query: object): Promise<BlogSummary[]> => {
    const parsedQuery = Object.entries(query);
    const filtered = blogs.filter((blog) => {
        parsedQuery.forEach(([key, value]) => {
            if (blog[key as keyof BlogSummary] !== value) { return false; } 
        });

        return true;
    });

    return Promise.resolve(filtered);
}

export const getBlogBySlug = async (slug: string): Promise<BlogSummary|undefined> => {
    return blogs.find(b => b.slug === slug);
} 
