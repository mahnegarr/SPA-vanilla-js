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
