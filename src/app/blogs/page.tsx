import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import BlogsHeroSection from "@/components/blogs/BlogHeroSection";
import BlogsListSection from "@/components/blogs/BlogListSection";

const BlogsPage = () => {
  return (
    <main className="min-h-screen bg-[#FAF9F8]">
      <Navbar />
      <BlogsHeroSection />
      <div id="articles-list">
        <BlogsListSection />
      </div>
      <Footer />
    </main>
  );
};

export default BlogsPage;
