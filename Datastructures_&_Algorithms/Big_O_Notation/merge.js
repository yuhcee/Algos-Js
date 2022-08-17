function merge(root) {
  for (var i = 1; i < arguments.length; i++)
    for (var key in arguments[i]) root[key] = arguments[i][key];
  return root;
}

var merged = merge({ name: 'John' }, { city: 'Boston' });
console.log(merged);