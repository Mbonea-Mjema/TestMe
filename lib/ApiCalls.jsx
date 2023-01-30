import React from "react";

const apiKey = "e542e5e9c5f014dd493e1a65710bbd18";
const BaseUrl = "https://api.themoviedb.org/3";
export const multiSearch = async (querry) => {
  const Url = `${BaseUrl}/search/multi?api_key=${apiKey}&language=en-US&query=${querry}&page=1&include_adult=false`;

  let data = await fetch(Url);
  data = await data.json();
  return data;
};

export const pageMeta = async (_id, type = "movie") => {
  const Url = `${BaseUrl}/${type}/${_id}?append_to_response=similar,release_dates,credits,lists,videos&api_key=${apiKey}`;
  let data = await fetch(Url);
  data = await data.json();
  return data;
};

export const trending = async (_id, type = "movie") => {
  const top = `${BaseUrl}/tv/top_rated?api_key=${apiKey}`;
  const Url = `${BaseUrl}/trending/all/week?api_key=${apiKey}`;

  let [weeklyResults, topResults] = await Promise.all([fetch(Url), fetch(top)]);

  let data = Promise.all([weeklyResults.json(), topResults.json()]);
  return data;
};
