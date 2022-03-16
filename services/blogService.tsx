import { BlogSummary } from "../types/BlogSummary";

const blogs: BlogSummary[] = [];

const getBlogs = (): Promise<BlogSummary[]> => {
    return Promise.resolve(blogs);
}
