import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import About from "../components/Ui/About";
import React from "react";
import { GetServerSideProps } from "next";
import NewArticles from "../components/Ui/NewArticles";

const Home: NextPage = ({ data }: any) => {
  const artData = data
//  console.log(data)
  return (
    <Container fluid className="px-0">
      <About />
      <NewArticles datax={data} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const res = await fetch(`https://62a28042cd2e8da9b008d372.mockapi.io/navBar`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default Home;
