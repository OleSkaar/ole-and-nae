// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/emailer/[id].tsx";
import * as $1 from "./routes/index.tsx";
import * as $2 from "./routes/invitation/[id].tsx";
import * as $3 from "./routes/response.tsx";
import * as $4 from "./routes/save-the-date.tsx";
import * as $5 from "./routes/thanks.tsx";
import * as $$0 from "./islands/EmailCopyer.jsx";
import * as $$1 from "./islands/LanguageButton.tsx";

const manifest = {
  routes: {
    "./routes/emailer/[id].tsx": $0,
    "./routes/index.tsx": $1,
    "./routes/invitation/[id].tsx": $2,
    "./routes/response.tsx": $3,
    "./routes/save-the-date.tsx": $4,
    "./routes/thanks.tsx": $5,
  },
  islands: {
    "./islands/EmailCopyer.jsx": $$0,
    "./islands/LanguageButton.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
