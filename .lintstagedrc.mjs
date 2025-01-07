import { relative } from "path";

const excludedFolder = "src/components/ui/";

const buildEslintCommand = (filenames) =>
  `next lint --fix --max-warnings 0 --file ${filenames
    .filter((f) => !f.includes(excludedFolder))
    .map((f) => relative(process.cwd(), f))
    .join(" --file ")}`;

const lintStaged = {
  "src/**/*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "**/*": "prettier --write --ignore-unknown",
};

export default lintStaged;
