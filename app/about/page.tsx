import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "About Page",
  description: "meta tag test",
  openGraph: {
    title: "About",
    description: "About is a... Wechirka",
  },
};
const About = () => {
  return <div>About</div>;
};

export default About;
