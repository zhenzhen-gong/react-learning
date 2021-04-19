var storage = {
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value))
    },
    get(key) {
      localStorage.getItem(key, JSON.parse(value))
    }

}