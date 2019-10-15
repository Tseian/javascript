let obj = { name: 'obj', __proto__: { valueOf: function () { return 'nimie' } } };

console.log('obj.valueOf', obj.valueOf())
