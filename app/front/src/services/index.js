export function getHeader() {
  return {
    "Content-Type": "application/json;charset=UTF-8",
    "token": localStorage.getItem("mdnice-plus-token")
  }
}
