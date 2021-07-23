const cars = require('./all.json')
cars.sort(() => Math.random() - 0.5)

exports.createPages = async ({ actions: { createPage } }) => {
    
    createPage({
        path: `/explore/`,
        component: require.resolve("./src/templates/explore.js"),
        context: { cars },
      })

    createPage({
        path: `/buy/`,
        component: require.resolve("./src/templates/buy.js"),
        context: { cars },
      })

    cars.forEach((car) => {
      createPage({
        path: `/explore/car/${car.id.slice(1)}/`,
        component: require.resolve("./src/templates/car.js"),
        context: { car },
      })
    })
  }