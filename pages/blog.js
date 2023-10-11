import Banner from "@/components/blog/Banner";
import LatestArticles from "@/components/blogTwo/LatestArticles";

export default function Blog() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Latest Articles section */}
      <LatestArticles cls="pt-120" />
    </>
  );
}
