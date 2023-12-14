/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/gray.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a Software Engineer Student at le Mans engineering school. I am passionate about solving problems in new creative ways to drive innovation. By coding skills I continually look for new and better ways to make tech accessible by all, and learn new technologies";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Architecture et design patterns: programmation Orienté Objets, MVC,Flutter.",
  "Langages : JAVA, PHP5, Python, Dart, C.",
  "Ingénierie du Web : HTML, CSS, XML,Node.js.",
  "Outils d’industrialisation : Git ,Maven, JUnit.",
  "Système d’exploitation : Linux(Ubuntu),Windows",
  "SGBD : MySQL, SQL Server, PostgreSQL,MoongoDB",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Currently i'm looking for an internship in software development staring from 1st of July 2023 until 31 august. I am open to any opportunity that will help me to improve my skills and gain more experience.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
