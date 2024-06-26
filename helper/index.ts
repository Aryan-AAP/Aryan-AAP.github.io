export const handleCopy = () => {
  // "use server"
  const text = 'hsu@jsmastery.pro'
  navigator.clipboard.writeText(text)
}
