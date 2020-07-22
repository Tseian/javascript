let kPromise: any = {};
let cachess: any = {};
async function getWithCache(key) {
  if (cachess[key]) {
    console.log("jjjjj");
    return cachess[key];
  } else {
    if (kPromise[key]) {
      try {
        await kPromise[key];
      } catch (error) {
        kPromise[key] = null;
        throw error;
      }
      console.log("dddd");
      return cachess[key];
    }
    console.log("gggggg");
    kPromise[key] = get();

    let data: any;
    try {
      data = await kPromise[key];
    } catch (error) {
      kPromise[key] = null;
      throw error;
    }

    console.log("eeee");
    kPromise[key] = null;
    cachess[key] = data;
    return cachess[key];
  }
}

let i = 0;
function get() {
  return new Promise((resolve, re) => {
    setTimeout(() => {
      if (i % 2 === 0) {
        resolve(++i);
      } else {
        re(new Error("ddd"));
      }
    }, 1000);
  });
}

for (let i = 0; i < 100; i++) {
  getWithCache("key")
    .then((res) => {
      console.log(res);
    })
    .catch((r) => {});
}

setTimeout(() => {
  getWithCache("key")
    .then((res) => {
      console.log(res);
    })
    .catch((r) => {});
}, 5000);

setTimeout(() => {
  cachess["key"] = null;
  for (let i = 0; i < 10; i++) {
    getWithCache("key")
      .then((res) => {
        console.log(res);
      })
      .catch((r) => {});
  }
}, 6000);
