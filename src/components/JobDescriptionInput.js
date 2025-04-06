const JobDescriptionInput = ({ onChange }) => (
  <textarea
    placeholder="Paste job description here..."
    rows="8"
    onChange={(e) => onChange(e.target.value)}
    className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 outline-none"
  />
);

export default JobDescriptionInput;
