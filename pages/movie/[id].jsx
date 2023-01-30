import React from "react";
import MovieContent from "../../components/movieContent";
import SideNav from "../../components/SideNav";

import { pageMeta } from "../../lib/ApiCalls";

export async function getServerSideProps(context) {
  const data = await pageMeta(context.query.id);
  // console.log(data);
  return {
    props: { ...data }, // will be passed to the page component as props
  };
}

export default function movie(props) {
  return (
    <div className="min-h-screen flex min-w-full bg-[#191919] text-[#666666]">
      <SideNav />
      <MovieContent pageDetails={props} />
    </div>
  );
}
