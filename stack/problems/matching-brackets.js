import Stack from "../stack";

export default function isMatch(patternString) {
  const patternArray = patternString.split("");
  const stack = new Stack(patternArray.length);

  for (let idx = 0; idx < patternArray.length; idx++) {
    if (patternArray[idx] === "[" || patternArray[idx] === "(") {
      stack.add(patternArray[idx]);
      continue;
    }

    const lastElement = stack.remove();

    if (
      (patternArray[idx] === "]" && lastElement !== "[") ||
      (patternArray[idx] === ")" && lastElement !== "(")
    ) {
      return false;
    }
  }

  return stack.isEmpty();
}
