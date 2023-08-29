import React, { useRef } from "react";
import Head from "next/head";
import { Layout } from "@/components/layout";
import { AnimatedText } from "@/components/animated-text";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article4 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article5 from "../../public/images/articles/create modal component in react using react portals.png";
import article6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import article7 from "../../public/images/articles/What is Redux with easy explanation.png";
import article8 from "../../public/images/articles/What is higher order component in React.jpg";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);


  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave() {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} target="_blank"

          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
    >

      <h2 className="capitalize text-x1 font-semibold hover:underline">{title}</h2>
      <FramerImage
        style={{x: x, y: y}}
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 0.5}}}
        ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg" />
    </Link>
  );

};

const Article = ({img, title, date, link}) => {
  return (
    <motion.li
      initial={{y: 200}}
      whileInView={{y: 0, transition: {duration: 0.5, ease: "easeInOut"}}}
      viewport={{once: true}}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
    bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4
    ">
      <MovingImg title={title} link={link} img={img} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li>
  );

};

const FeaturedArticle = ({img, title, time, summary, link}) => {

  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark" />
      <Link href={link} target="_blank"
            className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
                     whileHover={{scale: 1.05}}
                     transition={{duration: 0.2}}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );

};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center mb-16 overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="!text-6xl mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch.
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/"
              img={article1}
            />

            <FeaturedArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="Learn how to create stunning loading screens in React with 3 different methods.
              Discover how to use React-Loading, React-Lottie & build a custom loading screen.
              Improve the user experience."
              time="10 min read"
              link="https://devdreaming.com/blogs/create-3-different-types-of-loading-screens-in-react"
              img={article2}
            />

          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22, 2023"
              link="https://devdreaming.com/blogs/react-form-validation-custom-hook"
              img={article3}
            />

            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              date="June 20, 2020"
              link="https://medium.com/@davidarmah2022/silky-smooth-scrolling-in-reactjs-a-step-by-step-guide-for-react-developers-7dcce944cc89"
              img={article4}
            />

            <Article
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
              date="April 22, 2023"
              link="https://upmostly.com/tutorials/modal-components-react-custom-hooks"
              img={article5}
            />

            <Article
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="April 22, 2021"
              link="https://dev.to/codebucks/build-redux-react-todo-list-app-with-animations-using-framer-motion-1mp1"
              img={article6}
            />

            <Article
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="June 20, 2020"
              link="https://medium.com/@davidarmah2022/redux-simplified-a-beginners-guide-for-web-developers-e31607e3d4ba"
              img={article7}
            />

            <Article
              title="How to Use Higher-Order Components in React"
              date="July 28, 2023"
              link="https://www.freecodecamp.org/news/higher-order-components-in-react/"
              img={article8}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;