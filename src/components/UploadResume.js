import { useDropzone } from "react-dropzone";

const UploadResume = ({ onFileSelect }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf",
    onDrop: (acceptedFiles) => onFileSelect(acceptedFiles[0]),
  });

  return (
    <div
      {...getRootProps()}
      className="p-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:bg-gray-50"
    >
      <input {...getInputProps()} />
      <p className="text-gray-600">
        Drag & drop your resume here, or click to upload (.pdf)
      </p>
    </div>
  );
};

export default UploadResume;
