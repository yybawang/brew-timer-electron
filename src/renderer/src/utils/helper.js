// 模拟等待时间
export function wait(timeout){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolved')
    }, timeout);
  })
}
