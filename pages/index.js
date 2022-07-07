import React from "react";
import { getSession } from "next-auth/react";

const Home = () => {
  return <div>Home</div>;
};

export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
