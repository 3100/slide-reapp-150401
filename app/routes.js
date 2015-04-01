// reapp-routes automatically requires your components
// see: https://github.com/reapp/reapp-routes

module.exports = ({ routes, route }) =>
  routes(require,
    route('home', '/',
      route('sub2', '/'),
      route('md'),
      route('mdLoader', 'slide/:slideId'),
      route('404', { notFound: true })
    )
  );
