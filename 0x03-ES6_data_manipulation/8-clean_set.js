export default function cleanSet(set, startString) {
  // If startString is empty or not provided, return an empty string
  if (!startString || typeof startString !== "string") {
    return "";
  }

  // Filter the set values that start with startString,
  // then map to the substring after startString
  const result = [...set]
    .filter(
      (value) => typeof value === "string" && value.startsWith(startString)
    )
    .map((value) => value.slice(startString.length)) // extract substring
    .join("-"); // Join with -

  return result;
}
