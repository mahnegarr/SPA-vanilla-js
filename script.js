import dashboard from "./pages/dashboard";
import posts from "./pages/posts";
import products from "./pages/products";

function router() {
  const paths = [
    { path: "/", view: dashboard },
    { path: "/posts", view: posts },
    { path: "/products", view: products },
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
  document.getElementById("app").innerHTML = match.route.view();
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
