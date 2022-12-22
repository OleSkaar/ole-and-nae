// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/index.tsx";
import * as $1 from "./routes/invitation/[id].tsx";
import * as $2 from "./routes/response.tsx";
import * as $3 from "./routes/save-the-date.tsx";
import * as $4 from "./routes/thanks.tsx";
import * as $$0 from "./islands/LanguageButton.tsx";

const manifest = {
  routes: {
    "./routes/index.tsx": $0,
    "./routes/invitation/[id].tsx": $1,
    "./routes/response.tsx": $2,
    "./routes/save-the-date.tsx": $3,
    "./routes/thanks.tsx": $4,
  },
  islands: {
    "./islands/LanguageButton.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
