const modules = import.meta.glob('./**/*.vue', { eager: true })
console.log(modules)

for (const path in modules) {
  console.log(modules[path].default)
}
