var storage = {
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value))
    },
    get(key) {
      JSON.parse(localStorage.getItem(key)) 
    },
    remove(key) {
      localStorage.remove(key)
    }
}

export default storage