import { useRouter } from "next/router";

const About = () => {
  const navigate = useRouter();
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => navigate.push("/")}>Home</button>
    </div>
  );
};

export default About;
