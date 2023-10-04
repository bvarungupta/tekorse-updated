import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../context/StateProvider";
import { darkModeColors, lightModeColors } from "../styles/colors";
import blog_page_img from "../assets/blog_page_img.jpg";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { blogData } from "../utils/blogListData";

const BlogPage = () => {
  const [{ dark_mode }] = useStateProvider();
  return (
    <BlogPageContainer mode={dark_mode}>
      <div className="back_btn">
        <Link className="btn_back" to="/">
          <BiArrowBack /> Back
        </Link>
      </div>
      <div className="img_container">
        <h1>About the Tekorse Technology</h1>
        {/* <img src={blog_page_img} alt="" /> */}
      </div>
      <div className="blog_content">
        <div className="content">
          <div className="title">About</div>
          <div className="para">
            <p>
              <span>Tekorse Technology :</span> where innovation is not a
              destination but a way of life.It's the bridge between imagination
              and implementation, where creativity meets code, and visions turn
              into digital reality. Tekorse Technology is a leading-edge tech
              company dedicated to transforming innovative ideas into powerful
              digital solutions.It's the alchemist of innovation, turning ideas
              into digital gold. Picture a dynamic blend of tech wizards,
              creative minds, and data virtuosos, all under one roof, crafting
              extraordinary digital experiences. Tekorse Technology stands out
              not only for its technical proficiency but also for its commitment
              to client satisfaction. By adopting the latest technologies,
              adhering to ethical practices, and delivering exceptional customer
              experiences, Tekorse Technology has earned a reputation as a
              trusted partner for businesses aiming to achieve digital
              excellence.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="title">
            Introduction to The Corporate World of Tekorse
          </div>
          <div className="para">
            <div className="sub-title">
              What defines the cutting-edge realm of corporate training today?
            </div>
            <p>
              Corporate trainings are specialized programs designed to enhance
              the skills, knowledge, and abilities of employees within a
              company. These training sessions can cover a wide range of topics,
              including leadership development, technical skills, communication,
              team building, and more.
            </p>
          </div>
          <div className="para">
            <div className="sub-title">
              Why are these corporate trainings essential in our evolving
              generation?
            </div>
            <p>
              The goal of corporate trainings is to improve employee
              performance, productivity, and overall job satisfaction. These
              programs are often tailored to meet the specific needs of the
              organization and its employees, ensuring that they are equipped
              with the necessary tools to excel in their roles and contribute
              effectively to the company's success.
            </p>
          </div>
        </div>

        {/* we offer list */}
        <div className="content">
          <div className="title">We Offer</div>
          <div className="para">
            <div className="sub-title">
              <VscDebugBreakpointLog /> Application Development
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog /> Mobile Development
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog /> Web Development
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog /> Cloud Computing
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog /> Data Science
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog /> Machine Learning
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog /> Servers & Storages
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog />
              Business Intelligence &Data Analytics
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog /> IoT
            </div>
          </div>
        </div>
        {/* we offer list end */}

        {blogData.map(
          ({ id, subTitle, spanTitle, spanContent, description }) => (
            <div className="content" key={id}>
              <div className="para">
                <div className="sub-title">{subTitle}</div>
                <p>
                  <span>{spanTitle} : </span> {spanContent}
                  <br />
                  <br />
                  <p dangerouslySetInnerHTML={{ __html: description }}></p>
                </p>
              </div>
            </div>
          )
        )}
        <div className="content">
          <div className="title">Conclusion</div>
          <div className="para">
            <p>
              <span>A Glimpse into Excellence : </span>Nothing speaks louder
              than the words of satisfied clients. <br /> <br />
              Explore real-life success stories where businesses, big and small,
              partnered with Tekorse Technology to transform their digital
              presence. Tekorse technology isn't just keeping up with the tech
              changes – they're the ones making it happen, making our world
              smarter and more efficient for everyone. "We're not just fixing
              computer issues – We're leading the charge in making technology a
              seamless part of our lives.
            </p>
          </div>
        </div>
      </div>
      <div className="back_btn">
        <Link className="btn_back" to="/">
          <BiArrowBack /> Back
        </Link>
      </div>
    </BlogPageContainer>
  );
};

export default BlogPage;

const BlogPageContainer = styled.div`
  /* height: 100vh; */
  width: 100vw;
  padding-block: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: gray; */
  gap: 3rem;
  background: ${(props) =>
    props.mode === "dark"
      ? darkModeColors.background
      : lightModeColors.background};
  .back_btn {
    width: 80%;
    display: flex;
    justify-content: flex-start;
    .btn_back {
      display: flex;
      align-items: center;
      font-size: large;
      font-weight: 600;
    }
  }
  .img_container {
    width: 80%;
    height: 266px;
    background: url(${blog_page_img}), lightgray 0px -114.667px / 100% 323.058%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fafafa;
    font-size: xx-large;
    text-align: center;
  }
  .blog_content {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    /* justify-content: center;
    align-items: center; */
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      .title {
        font-size: 2rem;
        font-weight: 600;
        color: ${(props) =>
          props.mode === "dark"
            ? darkModeColors.accent
            : lightModeColors.accent};
      }
      .para {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .sub-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.5rem;
          font-weight: 600;
          color: ${(props) =>
            props.mode === "dark" ? darkModeColors.text : lightModeColors.text};
        }
        p {
          font-size: medium;
          font-weight: 300;
          span {
            font-weight: 600;
          }
          color: ${(props) =>
            props.mode === "dark" ? darkModeColors.text : lightModeColors.text};
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .img_container {
      height: 200px;
      font-size: x-large;
    }
    .blog_content {
      .content {
        .title {
          font-size: 1.5rem;
        }
        .para {
          .sub-title {
            font-size: 1rem;
          }
          p {
            font-size: small;
          }
        }
      }
    }
  }
  @media screen and (max-width: 426px) {
    .img_container {
      height: 150px;
      font-size: large;
    }
    .blog_content {
      .content {
        .title {
          font-size: 1.2rem;
        }
        .para {
          .sub-title {
            font-size: 1rem;
          }
          p {
            font-size: small;
          }
        }
      }
    }
  }
`;
