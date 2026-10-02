#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "remotegamejobs",
  boardId: "remotegamejobs-official",
  domain: "remotegamejobs.com",
  npmName: "zc-remotegamejobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
