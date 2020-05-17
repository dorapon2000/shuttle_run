export function deepCopyJSON (object) {
  return JSON.parse(JSON.stringify(object))
}
