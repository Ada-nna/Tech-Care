import React from "react";
import type { Patient } from "../../types/Patient";

interface Props {
  diagnosticList: Patient["diagnostic_list"];
}

const DiagnosticTable: React.FC<Props> = ({ diagnosticList }) => {
  return (
    <div className="bg-white rounded-xl p-6 mt-6 shadow-md">
      <h2 className="text-[#072635] font-bold text-[20px] mb-4">
        Diagnostic List
      </h2>

      <div className="overflow-x-auto max-h-[280px] overflow-y-auto custom-scroll">
        <table className="min-w-full text-sm text-left text-[#072635]">
          <thead className="bg-[#F6F7F8] text-[#072635] text-[14px] font-semibold rounded-xl">
            <tr>
              <th className="py-3 px-4 rounded-l-xl">Problem/Diagnosis</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4 rounded-r-xl">Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnosticList?.map((item, index: number) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-3 px-4 whitespace-nowrap">{item.name}</td>
                <td className="py-3 px-4">{item.description}</td>
                <td className="py-3 px-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticTable;
