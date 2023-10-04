import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useStateProvider } from "../context/StateProvider";
import { darkModeColors, lightModeColors } from "../styles/colors";
import { BsArrowUpRightSquare } from "react-icons/bs";
import blog_banner from "../assets/blog.jpg";
import post1 from "../assets/post_1.jpg";

const Blog = () => {
  const [{ dark_mode }] = useStateProvider();

  return (
    <BlogContainer id="blog" mode={dark_mode}>
      <div className="blog-header">
        <h1>The Blog</h1>
        <p>
          Stay ahead in tech with our insightful blog covering emerging trends,
          innovations, and more for a competitive edge in your career.
        </p>
      </div>
      <img className="blog_banner" src={blog_banner} alt="Blog" />
      <div className="post-1">
        <div className="blog_img">
          <img src={post1} alt="" />
        </div>
        <div className="blog_content">
          <header>About Tekorse Technology</header>
          <p>
            <span className="heading">Tekorse Technology :</span>where
            innovation is not a destination but a way of life.It's the bridge
            between imagination and implementation, where creativity meets code,
            and visions turn into digital reality.
            <br />
            <br />
            Tekorse Technology is a leading-edge tech company dedicated to
            transforming innovative ideas into powerful digital solutions.It's
            the alchemist of innovation, turning ideas into digital gold.
            Picture a dynamic blend of tech wizards, creative minds, and data
            virtuosos, all under one roof, crafting extraordinary digital
            experiences...
            <Link className="read-more" to="/blog">
              Read more <BsArrowUpRightSquare />
            </Link>
          </p>
        </div>
      </div>
    </BlogContainer>
  );
};
export default Blog;

const BlogContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${(props) =>
    props.mode === "dark"
      ? darkModeColors.background
      : lightModeColors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 5rem;
  gap: 2.5rem;
  .blog-header {
    width: 80%;
    h1 {
      color: ${(props) =>
        props.mode === "dark" ? darkModeColors.accent : lightModeColors.accent};
      font-size: 60px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 2.85px;
    }
    p {
      color: ${(props) =>
        props.mode === "dark" ? darkModeColors.text : lightModeColors.text};
      width: 50%;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .blog_banner {
    border-radius: 15px;
    width: 80%;
    background-color: red;
    height: 30%;
    object-fit: cover;
  }
  .post-1 {
    width: 80%;
    height: 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      border-radius: 10px;
      height: 100%;
      width: 350px;
      object-fit: cover;
    }
    .blog_content {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      header {
        font-size: x-large;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.9px;
        color: ${(props) =>
          props.mode === "dark" ? darkModeColors.text : lightModeColors.text};
      }
      p {
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        .heading {
          font-weight: 700;
        }
        color: ${(props) =>
          props.mode === "dark" ? darkModeColors.text : lightModeColors.text};
        .read-more {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: ${(props) =>
            props.mode === "dark"
              ? darkModeColors.primary
              : lightModeColors.primary};
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .blog-header {
      h1 {
        font-size: 40px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .blog-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
      row-gap: 2rem;
      p {
        width: 80%;
      }
    }
    .blog_banner {
      /* height: 200px; */
      display: none;
    }
    height: max-content;
    .post-1 {
      width: 100%;
      flex-direction: column;
      gap: 1.5rem;
      .blog_img {
        height: 200px;
        width: 80%;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .blog_content {
        gap: 1.5rem;
        width: 80%;
        p {
          width: 100%;
        }
      }
    }
  }
`;
