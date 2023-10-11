import Image from "next/image";
import Social from "../social/Social";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import SidebarArea from "./SidebarArea";
import eth_blog from "/public/img/eth-blog.png";
import facebook from "/public/img/facebook.png";
import instagram from "/public/img/instagram.png";
import linkedin from "/public/img/linkedin.png";
import share_icon from "/public/img/share-icon.png";
import twitter from "/public/img/twitter.png";

const BlogSingleBody = () => {
  return (
    <section className="blog-single latest-articles latest">
      <div className="overlay pb-120">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="sub-heading">
                <span className="crypto">Crypto</span>
                <span className="date">July 21, 2021</span>
              </div>
              <div className="section-header">
                <h2 className="title">
                  What are NFTs and why are some selling for millions of
                  dollars?
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                  ut congue varius congue aliquet leo. Netus neque nibh semper
                  in diam viverra nibh. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="row cus-mar">
              <div className="col-lg-8">
                <div className="single-content">
                  <h4 className="title-area">What are NFT tokens?</h4>
                  <p>
                    Convallis posuere morbi leo urna. Tellus cras adipiscing
                    enim eu. Interdum velit laoreet id donec ultrices tincidunt
                    arcu.
                    <span>Velit laoreet id</span> donec ultrices. Ornare arcu
                    dui vivamus arcu felis bibendum. Pharetra vel turpis nunc
                    eget. Vestibulum sed arcu non odio.
                  </p>
                </div>
                <div className="quotation">
                  <p className="xlr">
                    “Nulla facilisi etiam dignissim diam quis enim. Euismod
                    elementum nisi quis eleifend quam adipiscing vitae.”
                  </p>
                </div>
                <div className="single-content">
                  <h5 className="title-area">Should I invest in NFTs?</h5>
                  <p>
                    Odio tempor orci dapibus ultrices in iaculis nunc sed.
                    Iaculis eu non diam phasellus vestibulum. Eu sem integer
                    vitae justo eget magna fermentum. Tristique senectus et
                    netus et malesuada fames.
                  </p>
                </div>
                <div className="single-content">
                  <h5 className="title-area">
                    What cryptocurrency do I need to buy NFTs?
                  </h5>
                  <p>
                    Turpis egestas sed tempus urna et. Elementum eu facilisis
                    sed odio morbi quis. Urna nec tincidunt praesent semper
                    feugiat nibh sed pulvinar. In aliquam sem fringilla ut morbi
                    tincidunt augue interdum. Vestibulum mattis ullamcorper
                    velit sed.
                  </p>
                  <ul>
                    <li>
                      — Blandit dignissim nulla varius tristique a sed integer
                      ut tempor.
                    </li>
                    <li>— Augue interdum semper bibendum amet sed.</li>
                    <li>— Dis in at ultricies tortor sit tellus.</li>
                    <li>— Habitant ornare aenean maecenas pretium</li>
                  </ul>
                </div>
                <div className="single-content">
                  <div className="img-block text-center">
                    <Image src={eth_blog} alt="image" />
                    <p className="xlr">
                      Nisi quis eleifend quam adipiscing vitae.
                    </p>
                  </div>
                </div>
                <div className="single-content">
                  <h5 className="title-area">Are NFTs a good investment?</h5>
                  <p>
                    Turpis egestas sed tempus urna et. Elementum eu facilisis
                    sed odio morbi quis. Urna nec tincidunt praesent semper
                    feugiat nibh sed pulvinar. In aliquam sem fringilla ut morbi
                    tincidunt augue interdum. Vestibulum mattis ullamcorper
                    velit sed.
                  </p>
                  <ul>
                    <li>
                      — Blandit dignissim nulla varius tristique a sed integer
                      ut tempor.
                    </li>
                    <li>— Augue interdum semper bibendum amet sed.</li>
                    <li>— Dis in at ultricies tortor sit tellus.</li>
                    <li>— Habitant ornare aenean maecenas pretium</li>
                  </ul>
                </div>
                <div className="single-content">
                  <h5 className="title-area">
                    Are NFTs legal in all countries?
                  </h5>
                  <p>
                    Proin sed libero enim sed faucibus turpis in eu mi.
                    Dignissim cras tincidunt lobortis feugiat. Vitae purus
                    faucibus ornare suspendisse. Quis viverra nibh cras pulvinar
                    mattis nunc sed blandit libero.
                  </p>
                </div>
                <div className="bottom-content d-flex justify-content-between">
                  <div className="left-area">
                    <span>NFT</span>
                    <span>Payment Methods</span>
                  </div>
                  <div className="right-area d-flex align-items-center">
                    <div className="share-icon">
                      <Image src={share_icon} alt="image" />
                    </div>
                    <div className="social">
                      <ul className="d-flex">
                        {/* Social links */}
                        <Social
                          items={[
                            [facebook, "/"],
                            [twitter, "/"],
                            [instagram, "/"],
                            [linkedin, "/"],
                          ]}
                        />
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="comment-area">
                  <h4>COMMENTS</h4>
                  {/* Comment */}
                  <Comment />
                </div>
                <div className="leave-comment">
                  <h4>LEAVE COMMENT</h4>
                  <div className="form-area">
                    {/* Comment Form */}
                    <CommentForm />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                {/* Sidebar Area */}
                <SidebarArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingleBody;
