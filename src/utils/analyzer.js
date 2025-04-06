export const analyzeResume = (resumeText, jobDesc) => {
  const resumeWords = new Set(resumeText.toLowerCase().split(/\W+/));
  const jobWords = jobDesc.toLowerCase().split(/\W+/);

  const matched = jobWords.filter((word) => resumeWords.has(word));
  const matchPercentage = (matched.length / jobWords.length) * 100;

  return {
    matchPercentage: matchPercentage.toFixed(2),
    matchedWords: matched,
    missingWords: jobWords.filter((word) => !resumeWords.has(word)),
  };
};
