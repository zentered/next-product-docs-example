<p align="center">
  <img src=".github/assets/opstrace-docs.png">
</p>

# Next.js Product Docs Minimal Example

This is an example repo for the Next.js Product Documentation component.

- [Read the full article about the component](https://zentered.co/articles/product-documentation-with-nextjs)
- [Check out the component repo with complete installation and usage instructions](https://github.com/zentered/next-product-docs)

## Installation

```bash
    npm install
    # or pnpm install
    # or yarn install
```

The remote repository for the docs can be configured through environment
variables in `.env`. If your repository is private, you'll need to provide a
[Personal Access Token](https://github.com/settings/tokens) with the correct
permissions as `GITHUB_TOKEN`.

## Local Development

1. Clone [next-product-docs](https://github.com/zentered/next-product-docs) to
   ./next-product-docs
2. Create a project folder in the same level as next-product-docs

```bash
  cd next-product-docs
  pnpm i
  pnpm build
  pnpm link .

  cd ../your-project-folder
  pnpm install @zentered/next-product-docs
  pnpm link @zentered/next-product-docs ../next-product-docs
```

You can continuously build & watch the component by running `pnpm watch` in the
`next-product-docs` folder.
