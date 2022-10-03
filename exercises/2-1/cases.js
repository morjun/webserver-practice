const factorial = (n) => {
  if (n < 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

const permutation = (n, r) => {
  if (n < r) {
    return 0;
  }
  else {
  return factorial(n) / factorial(n - r);
  }
};

const combination = (n, r) => {
  if (n < r) {
    return 0;
  }

  else {
  return factorial(n) / (factorial(n - r) * factorial(r));
  }
};

const multiPermutation = (n, r) => {
    if (n < r) {
        return 0;
    }
    else {
    return Math.pow(n, r);
    }
};

const multiCombination = (n, r) => {
    if (n < r) {
        return 0;
    }
    else   {
        return combination(n+r-1, r);
    }
}

module.exports = {
  permutation,
  combination,
  multiPermutation,
  multiCombination,
};
