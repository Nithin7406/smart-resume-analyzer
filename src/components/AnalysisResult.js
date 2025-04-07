const AnalysisResult = ({ result }) => (
  <div className="bg-gray-50 p-6 rounded-lg border shadow-sm">
    <h2 className="text-xl font-semibold mb-4 text-blue-600">
      Match Score: {result.matchPercentage}%
    </h2>
    <div className="mb-2">
      <strong>Matched Keywords:</strong>
      <p className="text-green-600">{result.matchedWords.join(", ")}</p>
    </div>
    <div>
      <strong>Missing Keywords:</strong>
      <p className="text-red-600">{result.missingWords.join(", ")}</p>
    </div>
  </div>
);

export default AnalysisResult;
