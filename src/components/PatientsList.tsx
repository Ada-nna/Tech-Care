import React from "react";
import { Search } from "lucide-react";
import { Ellipsis } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import type { Patient } from "../../types/Patient";

interface PatientsListProps {
  patients: Patient[];
  selected: Patient | null;
  onSelect: Dispatch<SetStateAction<Patient | null>>;
}

const PatientsList: React.FC<PatientsListProps> = ({
  patients,
  selected,
  onSelect,
}) => {
  return (
    <div className="flex flex-col py-5 h-full ">
      <div className="flex items-center justify-between px-5">
        <h1 className="text-[24px] font-bold tracking-tight">Patients</h1>
        <button aria-label="Search">
          <Search size={20} color="#072635" />
        </button>
      </div>

      <ul className="mt-9 overflow-y-auto flex-grow pr-2 custom-scroll">
        {patients.map((patient) => (
          <li
            key={patient.name}
            onClick={() => onSelect(patient)}
            className={`flex items-center justify-between gap-4 mb-4 py-[10px] px-5 cursor-pointer ${
              selected?.name === patient.name ? "bg-[#D8FCF7]" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-[#072635]">{patient.name}</h1>
                <p className="text-[14px] text-gray-400">
                  {`${patient.gender}, ${patient.age}`}
                </p>
              </div>
            </div>
            <button aria-label="More options">
              <Ellipsis size={18} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientsList;
