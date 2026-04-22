import Card from "./card";

function About() {
  return (
    <Card title="ABOUT ME">
      <p>
        A dedicated IT student with a strong interest in software
        development and web technologies.
      </p>

      <img
        src="image/charie.jpg"
        alt="Profile"
        width="400"
        height="400"
      />

      <p>
        Email:{" "}
        <a href="mailto:delavictoria.chariemae08@gmail.com">
          delavictoria.chariemae08@gmail.com
        </a>
      </p>

      <p>
        Github:{" "}
        <a href="https://github.com/chazsaa" target="_blank" rel="noreferrer">
          Github
        </a>
      </p>
    </Card>
  );
}

export default About;