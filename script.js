function router() {
  const paths = [
    { path: "/", view: () => console.log("dashboard page") },
    { path: "/posts", view: () => console.log("posts page") },
    { path: "/products", view: () => console.log("products page") },
  ];

  const potentialPaths = paths.map((item) => {
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  });

  let match = potentialPaths.find((route) => route.isMatch);

  if (!match) {
    match = {
      route: { path: "/not-found", view: () => console.log("not found page") },
    };
  }

  console.log(match.route.view());
}
function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches([data - link])) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
