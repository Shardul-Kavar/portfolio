import { execSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";

const BLOG_DIR = ".blog";
const REPO_URL = process.env.BLOG_REPO_URL || "<REPO_URL>";

if (existsSync(BLOG_DIR)) {
  console.log(`Removing existing ${BLOG_DIR} directory...`);
  rmSync(BLOG_DIR, { recursive: true, force: true });
}

console.log(`Cloning blog repository from ${REPO_URL}...`);
try {
  execSync(`git clone --depth 1 ${REPO_URL} ${BLOG_DIR}`, {
    stdio: "inherit",
  });
  console.log("Blog repository cloned successfully.");
} catch (error) {
  console.error("Failed to clone blog repository:", error.message);
  process.exit(1);
}

