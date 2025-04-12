import { Calendar, Phone, ShieldCheck, Venus } from "lucide-react";

interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
}

interface PatientInformationProps {
  patient: Patient;
}

const PatientInformation: React.FC<PatientInformationProps> = ({ patient }) => {
  return (
    <div className="text-[#072635]">
      <div className="flex flex-col items-center justify-center mt-8">
        <img
          src={patient.profile_picture}
          alt={`${patient.name} profile image`}
          className="w-[200px] h-[200px] rounded-full object-cover"
        />
        <h1 className="text-[24px] mt-6 font-bold">{patient.name}</h1>
      </div>

      <div className="flex flex-col gap-6 mt-8 px-5">
        <PatientInfoItem
          label="Date Of Birth"
          value={formatDate(patient.date_of_birth)}
          icon={<Calendar size={20} />}
        />
        <PatientInfoItem
          label="Gender"
          value={patient.gender}
          icon={<Venus size={20} />}
        />
        <PatientInfoItem
          label="Contact Info."
          value={patient.phone_number}
          icon={<Phone size={20} />}
        />
        <PatientInfoItem
          label="Emergency Contact"
          value={patient.emergency_contact}
          icon={<Phone size={20} />}
        />
        <PatientInfoItem
          label="Insurance Provider"
          value={patient.insurance_type}
          icon={<ShieldCheck size={20} />}
        />
      </div>

      <div className="my-11 flex items-center justify-center">
        <button
          type="button"
          className="bg-[#01F0D0] hover:bg-[#00dbc0] active:bg-[#00bfa9] transition-all duration-200 rounded-full px-10 py-[11px] font-semibold text-[14px] cursor-pointer"
        >
          Show All Information
        </button>
      </div>
    </div>
  );
};

const PatientInfoItem = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-center gap-4">
    <div className="p-3 rounded-full bg-gray-100 flex items-center justify-center">
      {icon}
    </div>
    <div className="flex flex-col gap-[2px] text-[14px]">
      <p className="font-medium text-[15px]">{label}</p>
      <h1 className="font-bold xl:text-base">{value}</h1>
    </div>
  </div>
);

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default PatientInformation;
