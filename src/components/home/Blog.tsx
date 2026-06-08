'use client';
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation';

export interface BlogType {
  _id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  tags: string[];
  date: string;
  slug: string;
}

export interface BlogProps {
 blog: BlogType
}

const formatDate = (iso: string) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

function BlogCard({ blog }: { blog: BlogType }) {
  const router = useRouter();
  return (
    <>
      <Card 
      onClick={() => router.push(`/blogs/${blog.slug}`)}
      className="bg-[oklch(0.99_0.01_25)] border-[#c10007]/15 border-1 border-solid p-0 gap-0 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="h-40 overflow-hidden">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="object-cover transition-transform duration-300 w-full h-full"
                    data-photoid="6sAl6aQ4OWI"
                    data-authorname="Fotis Fotopoulos"
                    data-authorurl="https://unsplash.com/@ffstop"
                    data-blurhash="L87^77$iAXK5KkNaxG$*1IJ7,@xG"
                  />
                </div>
                <CardContent className="flex p-4 flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold rounded-full bg-[#c10007] text-red-50 text-[10px] px-2 py-0.5">
                      {blog.tags[0]}
                    </span>
                    <span className="text-[#71717b] text-[10px]">
                      {formatDate(blog.date)}
                    </span>
                  </div>
                  <h4 className="leading-snug font-bold text-zinc-950 text-sm leading-5">
                    {blog.title}
                  </h4>
                  <p className='line-clamp-5'>{blog.excerpt}</p>
                  <a className="font-semibold text-[#c10007] text-xs leading-4 flex mt-1 items-center gap-1">
                    Read More
                    <ArrowRight className="size-3" />
                  </a>
                </CardContent>
              </Card>
    </>
  );
}

function Blog() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }

    fetchBlogs();
  }, []);
  return (
    <section className="bg-white py-16 w-full">
          <div className="mx-auto px-12">
            <div className="flex mb-10 flex-col items-center gap-2">
              {/* <span className="font-semibold uppercase text-[#c10007] text-xs leading-4 tracking-widest">
                Latest News
              </span> */}
              <h2 className="font-black text-center text-zinc-950 text-3xl leading-9 tracking-tight">
                From Our <span className="text-[#c10007]">Blog</span>
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {
                blogs && blogs.map((blog) => (
                  <BlogCard key={blog._id} blog={blog} />
                ))
              }
            </div>
          </div>
        </section>
  )
}

export default Blog