import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [hello, setHello] = useState(null);
  const [name, setName] = useState(null);
  const [ano, setAno] = useState(null);
  const [pay, setPay] = useState(null);

  const fetchApi = async (api) => {
    const res = await fetch(api);
    const data = await res.json();
    if (api === "/api/hello") {
      setHello(data);
      return 1;
    }

    if (api === "/api/name") {
      setName(data);
      return 1;
    }

    if (api === "/api/razorpay") {
      setPay(data);
      return 1;
    }
    setAno(data);
  };

  return (
    <React.Fragment>
      <button onClick={() => fetchApi("/api/hello")}>
        Fetch the hello api ( /api/hello )
      </button>
      <p>{JSON.stringify(hello, null, 2)}</p>
      <button onClick={() => fetchApi("/api/name")}>
        Fetch the name api ( /api/name )
      </button>
      <p>{JSON.stringify(name, null, 2)}</p>
      <button onClick={() => fetchApi("/api/with-anonymous")}>
        Fetch the anonymous api ( /api/with-anonymous )
      </button>
      <p>{JSON.stringify(ano, null, 2)}</p>
      <button onClick={() => fetchApi("/api/razorpay")}>
        Fetch the razorpay api ( /api/razorpay )
      </button>
      <p>{JSON.stringify(pay, null, 2)}</p>
    </React.Fragment>
  );
}
