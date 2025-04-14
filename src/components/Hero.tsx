import { useEffect, useState } from "react";
import axios from "axios";
import LabResults from "./LabResults";
import PatientsList from "./PatientsList";
import DiagnosticTable from "./DiagnosticTable";
import type { Patient } from "../../types/Patient";
import PatientInformation from "./PatientInformation";
import BloodPressureChart from "./BloodPressureChart";

const Hero = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const url = import.meta.env.VITE_API_URL;
  const auth = import.meta.env.VITE_API_AUTH;

  useEffect(() => {
    console.log("URL:", url);
    console.log("AUTH:", auth);

    const fetchPatients = async () => {
      try {
        const response = await axios.get(url, {
          headers: { Authorization: auth },
        });
        setPatients(response.data);

        const jessica = response.data.find(
          (p: Patient) => p.name === "Jessica Taylor"
        );
        setSelectedPatient(jessica);
      } catch (err) {
        console.error("Error fetching patients", err);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="w-full flex flex-col xl:flex-row gap-6 mt-8">
      <div className="w-full xl:w-1/4 bg-white shadow-md rounded-[10px] h-[500px] xl:h-[calc(100vh-4rem)] overflow-hidden">
        <PatientsList
          patients={patients}
          selected={selectedPatient}
          onSelect={setSelectedPatient}
        />
      </div>

      <div className="w-full xl:w-2/4 xl:mx-6">
        <div className="p-5 bg-white shadow-md rounded-[10px]">
          <h1 className="text-[24px] font-bold tracking-tight">
            Diagnosis History
          </h1>
          {selectedPatient && <BloodPressureChart patient={selectedPatient} />}
        </div>

        <div>
          {selectedPatient && (
            <DiagnosticTable diagnosticList={selectedPatient.diagnostic_list} />
          )}
        </div>
      </div>

      <div className="w-full xl:w-1/4 flex flex-col gap-6">
        <div className="bg-white shadow-md rounded-[10px]">
          {selectedPatient && <PatientInformation patient={selectedPatient} />}
        </div>

        <div className="">{selectedPatient && <LabResults />}</div>
      </div>
    </div>
  );
};

export default Hero;
