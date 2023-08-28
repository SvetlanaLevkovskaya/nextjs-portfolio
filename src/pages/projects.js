import React from "react";
import Head from "next/head";
import { Layout } from "@/components/layout";
import { AnimatedText } from "@/components/animated-text";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import randomButton from "../../public/images/projects/random-button.png";
import authPosts from "../../public/images/projects/auth-posts.png";
import educationalApp from "../../public/images/projects/educational-app.png";

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid
    border-dark bg-light shadow-2xl p-12 relative
    ">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark" />
      <Link href={link} target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-x1">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
          ">
            Visit Project</Link>
        </div>
      </div>

    </article>
  );
};

const Project = ({title, type, img, link, github}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative
    ">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark" />
      <Link href={link} target="_blank"
            className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-x1">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank" className="text-lg font-semibold underline
          ">Visit</Link>
          <Link href={github} target="_blank" className="w-8"><GithubIcon /></Link>

        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className="!text-6xl mb-16" />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Random Icon Button"
                img={randomButton}
                summary="The Random Icon Button app is a simple Angular application that allows users to display a random icon.
              By clicking the 'Show Random Icon' button, a random icon will be generated from a predefined set of icons."
                link="https://svetlanalevkovskaya.github.io/angular-docusketch/"
                github="https://github.com/SvetlanaLevkovskaya/angular-docusketch"
                type="Featured Project"
              />


            </div>

            <div className="col-span-6">
              <Project
                title="Random Icon Button"
                img={randomButton}
                link="https://svetlanalevkovskaya.github.io/angular-docusketch/"
                github="https://github.com/SvetlanaLevkovskaya/angular-docusketch"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Auth Posts App"
                img={authPosts}
                link="https://svetlanalevkovskaya.github.io/auth-posts-app/posts"
                github="https://github.com/SvetlanaLevkovskaya/auth-posts-app"
                type="Featured Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Educational App"
                img={educationalApp}
                summary="A cutting-edge application designed to revolutionize the learning experience. This app offers
                a seamless and user-friendly interface, allowing you to effortlessly create custom packs of question-answer
                cards in various formats, including text and images. Alternatively, you can explore a vast library of packs
                curated by fellow users."
                link="https://al1erego.github.io/educational-app/#/auth/sign-in"
                github="https://github.com/SvetlanaLevkovskaya/educational-app"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Random Icon Button"
                img={randomButton}
                link="https://svetlanalevkovskaya.github.io/angular-docusketch/"
                github="https://github.com/SvetlanaLevkovskaya/angular-docusketch"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Random Icon Button"
                img={randomButton}
                link="https://svetlanalevkovskaya.github.io/angular-docusketch/"
                github="https://github.com/SvetlanaLevkovskaya/angular-docusketch"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
