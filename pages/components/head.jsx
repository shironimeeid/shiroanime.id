import React from "react";
import Header from "next/head";

export default function Head() {
  return (
    <div>
      <Header>
        <title>shironime | Nonton Anime</title>
        <meta
          name="description"
          content="shironime Watch anime website based on NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Header>
    </div>
  );
}
