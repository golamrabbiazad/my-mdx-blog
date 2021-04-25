const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)

  // create paginated pages for posts
  const postsPerPage = 3
  const numPages = Math.ceil(data.allMdx.edges.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, idx) => {
    actions.createPage({
      path: idx === 0 ? `/` : `/${idx + 1}`,
      component: path.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postsPerPage,
        skip: idx * postsPerPage,
        numPages,
        currentPage: idx + 1,
      },
    })
  })
}
//   // create single blog posts
//   data.allMdx.edges.forEach(edge => {
//     const slug = edge.node.frontmatter.slug
//     const id = edge.node.id

//     actions.createPage({
//       path: slug,
//       component: path.resolve("./src/templates/singlePost.js"),
//       context: {
//         id,
//       },
//     })
//   })
// }
