function router() {
  const paths = [
    { path: "/", view: () => console.log("dashboard page") },
    { path: "/posts", view: () => console.log("posts page") },
    { path: "/products", view: () => console.log("products page") },
  ];

  const potentialPaths = paths.map(item=>{
    return{
        route:item,
        isMatch: location.pathname === item.path
    }
  })

  let match = potentialPaths.find(route=>route.isMatch);

  if(!match){
    match={
        route: {path:"/not-found",view:()=>console.log("not found page")}
    }
  }

  console.log(match.route.view());
}

document.addEventListener("DOMContentLoaded",()=>{
    router()
})
