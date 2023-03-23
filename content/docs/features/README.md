# Docs Overview

## Local Content

By default, `next-product-docs` will look for content in the `content` folder.
This can be configured with the `rootPath` option.

```jsx
const docsOptions = {
  rootPath: 'content',
  docsFolder: 'docs'
}
```

## Remote Fetch

`next-product-docs` can be configured to fetch content from a remote repository.
This is useful if you want to keep your documentation in a separate repository.

```jsx
const docsOptions = {
  org: 'PatrickHeneise',
  repo: 'smallstep-docs',
  tag: 'main',
  skipPathPrefix: true,
  useMDX: true,
  trailingSlash: true,
  debug: true
}
```

## Custom IDs {#hello-world}

`next-product-docs` will automatically generate IDs for headings. If you want to
use custom IDs, you can add them to the frontmatter of the markdown file.

```md
## Hello World {#custom-id}
```
