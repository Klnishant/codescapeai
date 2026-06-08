"use client";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import Link from "next/link";
import { sanityClient } from "@/sanity/lib/sanityClient";
import { useEffect, useMemo, useState } from "react";
import { set } from "sanity";
interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

type Blog = {
  _id: string;
  title: string;
  date?: string;
  imageUrl?: string;
  tags?: string[];
  excerpt?: string;
  slug?: string;
  content?: {
    _key: string;
    _type: string;
    children?: { _key: string; text?: string }[];
    style?: string;
  }[];
};

const formatDate = (iso?: string | null) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

const renderBlocks = (blocks: Blog["content"]) => {
  if (!blocks || !Array.isArray(blocks)) return null;

  return blocks.map((block) => {
    if (block._type !== "block") return null;
    const text = (block.children || [])
      .map((child) => child.text || "")
      .join("")
      .trim();

    if (!text) return null;

    if (block.style === "h2") {
      return (
        <h2
          key={block._key}
          className="mt-10 mb-4 font-sora text-[28px] md:text-[32px] font-semibold text-[#1E293B]"
        >
          {text}
        </h2>
      );
    }

    if (block.style === "h3") {
      return (
        <h3
          key={block._key}
          className="mt-8 mb-3 font-sora text-[22px] md:text-[24px] font-semibold text-[#1E293B]"
        >
          {text}
        </h3>
      );
    }

    return (
      <p
        key={block._key}
        className="mb-6 font-inter text-[16px] md:text-[18px] leading-[32px] text-[#505050]"
      >
        {text}
      </p>
    );
  });
};

const RelatedArticleCard = ({ blog }: { blog: any }) => {
  const { title, date, imageUrl, tags = [], excerpt, slug } = blog;

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-[#FAF9F8]">
      <div className="px-5 pt-5">
        <div className="relative w-full overflow-hidden rounded-lg bg-[#CDCDCD] pt-[54%]">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 pb-5 pt-6">
        <div className="flex items-center gap-4 text-xs text-[#505050]">
          <span className="text-[11px] text-[#505050]">{formatDate(date)}</span>
        </div>

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 text-[11px]">
            {tags?.map((tag: string) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-[#64748B] px-3 py-1 text-[#64748B]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-sora text-[20px] font-semibold leading-[30px] text-[#1E293B]">
          {title}
        </h3>

        <p className="font-inter text-[14px] leading-[24px] text-[#505050]">
          {excerpt}
        </p>

        <div className="mt-4 h-[2px] w-full rounded-full bg-[#E2E8F0]" />

        <div className="mt-3 flex items-center justify-between">
          {slug ? (
            <Link
              href={`/blogs/${slug}`}
              className="inline-flex items-center gap-2 rounded-[36px] border border-[#D62828] px-6 py-2 text-[14px] font-normal text-[#D62828]"
            >
              Read More
            </Link>
          ) : (
            <button className="inline-flex items-center gap-2 rounded-[36px] border border-[#D62828] px-6 py-2 text-[14px] font-normal text-[#D62828]">
              Read More
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

const ArticlePage = ({ params }: ArticlePageProps) => {
  const [article, setArticle] = useState<Blog | null>(null);
  const [related, setRelated] = useState<Blog[]>([]);
  const [isLiked, setIsLiked] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [likedCount, setLikedCount] = useState(0);
  const [commentData, setCommentData] = useState({ comment: "" });
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [nestedComments, setNestedComments] = useState<Comment[]>([]);
  const [isReplying, setIsReplying] = useState(false);
  const [visibleRelated, setVisibleRelated] = useState<Blog[]>([]);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        setLoading(true);
        setError("");

        const { slug } = await params;
        const res = await fetch(`/api/blogs/${slug}`);
        if (!res.ok) {
          throw new Error("Failed to load blogs");
        }

        const data = await res.json();
        console.log("Fetched blog data:", data);
        if (!mounted) return;
        setArticle(data?.blog || null);
        setRelated(Array.isArray(data?.related) ? data?.related : []);
        
      } catch (e: any) {
        if (!mounted) return;
        setError(e?.message ?? "Failed to load blogs");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    void load();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const visible = related.slice(0, 3);
    setVisibleRelated(visible);
  },[article]);

  const handleAll = () => {
    setVisibleRelated(related);
  };

//   const handleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     const data = {
//       sanityArticleId: article?._id,
//       articleName: article?.title,
//       reaction: isLiked ? "dislike" : "like",
//     };
//     let Res;
//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}articles/like`,
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         }
//       );
//       if (!res?.ok) {
//         throw new Error("Failed to like or dislike");
//       }
//       Res = await res.json();
//       if (res.ok) {
//         if (isLiked) {
//           setIsLiked(false);
//           setLikedCount((prev) => prev - 1);
//         } else {
//           setIsLiked(true);
//           setLikedCount((prev) => prev + 1);
//         }
//       } else {
//       }
//     } catch (error: any) {
//       setError(error?.message ?? "Failed to send like or dislike");
//       toast.error(error?.message ?? "Failed to send like or dislike");
//     }
//   };

//   useEffect(() => {
//     const fetchLikedCount = async () => {
//       if(!token) return
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}articles/like?sanityArticleId=${article?._id}`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     if (res.ok) {
//       const data = await res.json();

//       setLikedCount(data?.data?.likeCount);
//       setIsLiked(data?.data?.usersWhoLiked?.includes(Number(userId)));
//     }
//   };
//   fetchLikedCount();
//   },[token, article]);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setCommentData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };



//   const handleComment = (
//     e: React.FormEvent<HTMLFormElement>,
//     reply: string,
//     parentCommentId?: number
//   ) => {
//     if ( !token) return;
//     e.preventDefault();
  
//     dispatch(
//       postComment({
//         articleId: article?._id ?? "",
//         token,
//         comment: reply,
//         parentCommentId, // undefined = root comment
//       })
//     );
//   };

//    const handleReply = (
//     e: React.FormEvent<HTMLFormElement>,
//     reply: string,
//     parentCommentId?: number
//   ) => {
//     if ( !token) return;
//     e.preventDefault();
  
//     dispatch(
//       postComment({
//         articleId: article?._id ?? "",
//         token,
//         comment: reply,
//         parentCommentId, // undefined = root comment
//       })
//     );
//     setCommentData({ comment: "" });
//   };
//   const fallbackShare = (url: string) => {
//     navigator.clipboard.writeText(url);
//     alert("Link copied to clipboard");
//   };

//   const handleShare = async () => {
//     const shareData = {
//       title: article?.title,
//       url: window.location.href,
//     };

//     try {
//       if (navigator.share) {
//         await navigator.share(shareData);
//       } else {
//         fallbackShare(shareData.url!);
//       }
//     } catch (err) {
//       console.error("Share cancelled", err);
//     }
//   };

//   useEffect(() => {
//     const fetchSaved = async () => {
//       if(!token) return
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}articles/getSavedUsersFrArticles?sanityArticleId=${article?._id}`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (res.ok) {
//       const data = await res.json();
//       setIsSaved(
//         data?.data?.some(
//           (item: { savedBy: { userId: number } }) =>
//             item?.savedBy.userId === Number(userId)
//         )
//       );
//     }
//   };
//   fetchSaved();
//   },[token,article]);
//   const handleSave = async () => {
//     try {
//       const body = {
//         sanityArticleId: article?._id,
//       };

//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}articles/save`,
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(body),
//         }
//       );

//       if (res.ok) {
//         setIsSaved(!isSaved);
//       } else {
//         console.log(res);
//       }
//     } catch (error: any) {
//       console.log(error?.message, "Failed to Save podcast");
//     }
//   };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FAF9F8]">
        <Navbar />
        <div className="mx-auto max-w-4xl px-4 py-24 text-center font-inter text-[#64748B]">
          Loading article...
        </div>
        <Footer />
      </main>
    );
  }

  if (error && !article) {
    return (
      <main className="min-h-screen bg-[#FAF9F8]">
        <Navbar />
        <div className="mx-auto max-w-4xl px-4 py-24 text-center font-inter text-red-600">
          {error}
        </div>
        <Footer />
      </main>
    );
  }

  if (!article) {
    return (
      <main className="min-h-screen bg-[#FAF9F8]">
        <Navbar />
        <div className="mx-auto max-w-4xl px-4 py-24 text-center font-inter text-[#1E293B]">
          Article not found.
        </div>
        <Footer />
      </main>
    );
  }

  const {
    title,
    date,
    imageUrl,
    tags = [],
    excerpt,
    content,
  } = article;

  return (
    <main className="min-h-screen bg-[#FAF9F8]">
      <Navbar />

      {/* Breadcrumb */}
      <section className="w-full pt-8">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between rounded-[20px] border border-[#E2E8F0] bg-white px-5 py-4 text-sm text-[#1E293B]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-inter text-[14px] text-[#1E293B]">
                Home
              </span>
              <span className="text-[#1E293B]">/</span>
              <span className="font-inter text-[14px] text-[#1E293B]">
                Articles
              </span>
              <span className="text-[#1E293B]">/</span>
              <span className="font-inter text-[14px] text-[#1E293B]">
                {title}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="w-full pb-20 pt-10 md:pb-24 md:pt-12 lg:pb-28">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col gap-10">
            {/* Title + meta */}
            <div className="flex flex-col gap-6">
              <h1 className="font-sora text-[32px] md:text-[42px] lg:text-[56px] font-semibold leading-[1.25] text-[#1E293B]">
                {title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="font-inter text-[14px] text-[#505050]">
                  {formatDate(date)}
                </span>
              </div>

              {tags?.length > 0 && (
                <div className="flex flex-wrap items-center gap-3">
                  {tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-[#64748B] px-4 py-2 font-inter text-[14px] text-[#64748B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Hero image */}
            {imageUrl && (
              <div className="overflow-hidden rounded-[32px] bg-[#CDCDCD]">
                <img
                  src={imageUrl}
                  alt={title}
                  className="h-[580px] w-full object-cover"
                />
              </div>
            )}

            {/* Intro / excerpt */}
            {excerpt && (
              <p className="font-inter text-[16px] md:text-[18px] leading-[32px] text-[#505050]">
                {excerpt}
              </p>
            )}

            {/* Main body blocks */}
            <div className="flex flex-col">{renderBlocks(content)}</div>

            {/* Related articles */}
            {related && related.length > 0 && (
              <div className="mt-8 flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-3 text-center">
                  <h2 className="font-sora text-[32px] md:text-[36px] font-bold leading-[45px] text-[#000000]">
                    Related Articles &amp; Interviews
                  </h2>
                  {/* <p className="max-w-[700px] font-inter text-[16px] md:text-[18px] leading-[22px] text-[#505050]">
                    Nam vulputate faucibus urna non mollis. Vivamus a vulputate
                    turpis. Aenean efficitur aliquam dui a elementum.
                  </p> */}
                </div>

                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {visibleRelated.map((a) => (
                    <RelatedArticleCard key={a._id} blog={a} />
                  ))}
                </div>

                <button 
                onClick={handleAll}
                className="inline-flex items-center justify-center gap-3 rounded-[36px] bg-[#023047] px-10 py-3 text-[16px] text-white">
                  Discover all
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ArticlePage;
