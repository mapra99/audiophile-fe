const formDataToObject = (formData: FormData) => {
  const obj = {} as any
  formData.forEach((val, key) => obj[key] = val)

  return obj
}

export default formDataToObject
