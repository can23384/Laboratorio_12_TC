const sortByKey = key => xs =>
  xs.slice() 
    .sort((a, b) => {
      const av = a[key], bv = b[key];
      return (typeof av === 'string' && typeof bv === 'string')
        ? av.localeCompare(bv)
        : (av > bv) - (av < bv);
    });

const data = [
  { make: 'Nokia',   model: 216, color: 'Black' },
  { make: 'Mi Max',  model:   2, color: 'Gold'  },
  { make: 'Samsung', model:   7, color: 'Blue'  }
];

const byModel = sortByKey('model');
console.log(byModel(data));