const getRandom = (arr: Array<any>) => {
  const randomIndex = Math.floor((Math.random() * arr.length))

  return arr[randomIndex];
}

export default getRandom
