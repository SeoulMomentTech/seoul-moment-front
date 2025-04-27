const prettier = (staged) => `prettier --write ${staged.join(" ")}`;

const eslint = (staged) => `eslint --cache ${staged.join(" ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [prettier, eslint],
  "*.{ts,tsx}": [],
};
