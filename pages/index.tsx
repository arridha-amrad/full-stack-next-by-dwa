import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const Home: NextPage = () => {
  const navigate = useRouter();
  const [name, setName] = useState("");
  const getName = async () => {
    const { data } = await axios.get("/api/hello");
    setName(data.name);
  };
  useEffect(() => {
    getName();
  }, []);
  return (
    <div>
      <h1>Coba Deploy next app</h1>
      <h2>Nama : {name}</h2>
      <button onClick={() => navigate.push("/about")}>About</button>
    </div>
  );
};

export default Home;
