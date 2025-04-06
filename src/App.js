import { useState } from "react";
import UploadResume from "./components/UploadResume";
import JobDescriptionInput from "./components/JobDescriptionInput";
import AnalysisResult from "./components/AnalysisResult";
import { extractTextFromPDF } from "./utils/pdfParser";
import { analyzeResume } from "./utils/analyzer";

function App() {
  const [resumeText, setResumeText] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState(null);

  const handleFile = async (file) => {
    const text = await extractTextFromPDF(file);
    setResumeText(text);
  };

  const analyze = () => {
    if (resumeText && jobDesc) {
      const analysis = analyzeResume(resumeText, jobDesc);
      setResult(analysis);
    } else {
      alert("Please upload a resume and enter a job description.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Smart Resume Analyzer
        </h1>

        <UploadResume onFileSelect={handleFile} />

        <div className="mt-6">
          <JobDescriptionInput onChange={setJobDesc} />
        </div>

        <div className="text-center mt-6">
          <button
            onClick={analyze}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Analyze
          </button>
        </div>

        {result && (
          <div className="mt-8">
            <AnalysisResult result={result} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
