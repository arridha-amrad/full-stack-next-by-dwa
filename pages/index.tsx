import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const navigate = useRouter();
  return (
    <div>
      <h1>Coba Deploy next app</h1>
      <button onClick={() => navigate.push("/about")}>About</button>
    </div>
  );
};

export default Home;
