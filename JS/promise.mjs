// const a = async() => {
//   const x = await 1;
//   console.log("x",x)
//   console.log("xxxxx")
//   await null;
//   const b = await Promise.resolve(1)
//   console.log(b)
// }
// a()


const ret = () => {
  Promise.resolve(1)
  .then(a => {

  }).then(() => {

  }).then(b => {

  })
}
ret()