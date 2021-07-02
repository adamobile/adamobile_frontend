const cars = require('./all.json')

exports.createPages = async ({ actions: { createPage } }) => {
    
    
    createPage({
        path: `/explore/`,
        component: require.resolve("./src/templates/explore.js"),
        context: { cars },
      });

      createPage({
        path: `/stats/`,
        component: require.resolve("./src/templates/stats.js"),
        context: { cars },
      });

    cars.forEach((car) => {
      createPage({
        path: `/explore/car/${car.id}/`,
        component: require.resolve("./src/templates/car.js"),
        context: { car },
      });
    });
  };