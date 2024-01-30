const users = new Set();
function isRegister(username) {
  if (users.has(username)) {
    console.log("invalid username");
    return;
  } else {
    users.add(username);
    console.log("registered successfully");
    return;
  }
}
const ads = new Set();
function addAdvertise(title, username) {
  if (!isRegister(username)) {
    console.log("invalid username");
    return;
  }
  if (ads.has(title)) {
    console.log("invalid title");
  }

  ads.add(title);
  console.log("posted successfully");
}
