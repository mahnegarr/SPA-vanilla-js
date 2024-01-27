let eyeToEye = 0;
function bench(n, m) {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < m.length; j++) {
      if (n[i] === m[j]) {
        eyeToEye= eyeToEye+1;
      }
    }
  }
  return Math.floor(eyeToEye/10);
}

console.log(bench([0 ,0 ,0 ,1 ,1 ,1 ,0 ,1], [0 ,0 ,1 ,0 ,1 ,1 ,0 ,0]));
