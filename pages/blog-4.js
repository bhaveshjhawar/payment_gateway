import Banner from "@/components/blogFour/Banner";
import LatestPosts from "@/components/blogFour/LatestPosts";
import PopularPosts from "@/components/blogFour/PopularPosts";
import TrendingPosts from "@/components/blogFour/TrendingPosts";

export default function BlogFour() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Popular Posts section */}
      <PopularPosts />

      {/* Trending Posts section */}
      <TrendingPosts />

      {/* Latest Posts section */}
      <LatestPosts />
    </>
  );
}
