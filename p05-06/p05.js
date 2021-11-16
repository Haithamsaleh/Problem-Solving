function primes(s, e){
    for (const i = s;i <=e;i++) {
      const p = true;
      for (const x = 2; x < i; x++) {
        if (i % x === 0) {
          p = false;
        }
      }
      if (i === 1) {
        p = false;
      }
      if (p) {
        arr[arr.length] = i;
      }
    }
    return arr.length > 0 ? arr : null;
  }
