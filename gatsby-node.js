/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
// exports.createPages = async ({ actions }) => {
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // const { createPage } = actions
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })

  // Dynamic Query for blogs
  // ------------------------------------------------------------------------------------
  const {
    data: {
      gcms: { blogs },
    },
  } = await graphql(`
    {
      gcms {
        blogs(first: 100, stage: PUBLISHED, orderBy: createdAt_ASC) {
          id
          slug
        }
      }
    }
  `)

  // Dynamic Query to generate Blogs
  // ------------------------------------------------------------------------------------
  // Dynamicaly create all the blog pages from query above
  // Pass the ID to find that blog article when doing the gcms query on that page for its content
  blogs.forEach(blog => {
    createPage({
      path: `/${blog.slug}`,
      component: require.resolve(`./src/templates/blogArticle.js`),
      context: {
        id: blog.id,
      },
    })
  })
}
