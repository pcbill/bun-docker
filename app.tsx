import { renderToReadableStream } from "react-dom/server";
import Pokemon from "./src/components/Pokemon";
import SlotMachine from "./src/components/SlotMachine";
import React from "react";

const PORT: number = +(process.env.PORT || 8081);
const NODE_ENV = process.env.NODE_ENV ?? "development";


const server = Bun.serve({
  port: PORT,
  async fetch() {
    const stream = await renderToReadableStream(<SlotMachine />);
    return new Response(stream, {
      // headers: { "Content-Type": "text/html" },
      headers: { "Content-Type": "text/html;charset=UTF-8" },
    });
  },
});

console.log(`[${NODE_ENV}] Listening on port ${server.port}`);
