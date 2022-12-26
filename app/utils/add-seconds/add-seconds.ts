const addSeconds = (date: Date, seconds: number) => {
  return new Date(date.getTime() + seconds * 1000);
}

export default addSeconds
