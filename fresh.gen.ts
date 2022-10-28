// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/About.tsx";
import * as $1 from "./routes/[name].tsx";
import * as $2 from "./routes/api/joke.ts";
import * as $3 from "./routes/home.tsx";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/notfound.tsx";
import * as $6 from "./routes/table.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/RouteMenu.tsx";

const manifest = {
  routes: {
    "./routes/About.tsx": $0,
    "./routes/[name].tsx": $1,
    "./routes/api/joke.ts": $2,
    "./routes/home.tsx": $3,
    "./routes/index.tsx": $4,
    "./routes/notfound.tsx": $5,
    "./routes/table.tsx": $6,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/RouteMenu.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;