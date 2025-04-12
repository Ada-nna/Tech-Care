import React from "react";
import { Download } from "lucide-react";

const results = [
  "Blood Tests",
  "CT Scans",
  "Radiology Reports",
  "X-Rays",
  "Urine Test",
];

const LabResults: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md max-h-[310px] overflow-y-auto custom-scroll">
      <h2 className="text-[#072635] font-bold text-[20px] mb-4">Lab Results</h2>

      <ul className="flex flex-col gap-2 text-[#072635] text-[15px]">
        {results.map((result, idx) => (
          <li
            key={result}
            className={`flex items-center justify-between px-4 py-[10px] rounded-lg cursor-pointer ${
              idx === 1 ? "bg-[#F6F7F8]" : "hover:bg-[#F6F7F8] transition-all"
            }`}
          >
            <span>{result}</span>
            <Download size={18} strokeWidth={2} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;
