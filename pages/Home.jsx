import React from "react";
import MainContent from "../components/mainContent";
import SideNav from "../components/SideNav";
import { trending } from "../lib/ApiCalls";

export async function getServerSideProps(context) {
  const data = await trending(context.query.id);
  // console.log(data);
  return {
    props: { ...data }, // will be passed to the page component as props
  };
}

export default function main(props) {
  return (
    <div className="min-h-screen flex min-w-full bg-[#191919] text-[#666666]">
      <SideNav />
      <MainContent mainPage={props} />
    </div>
  );
}
