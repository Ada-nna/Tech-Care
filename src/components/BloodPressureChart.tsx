import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChevronDown } from "lucide-react";
import type { Patient } from "../../types/Patient";
import VitalsCard from "./VitalsCard";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

interface Props {
  patient: Patient;
}

const BloodPressureChart: React.FC<Props> = ({ patient }) => {
  const diagnosis = [...patient.diagnosis_history]
    .sort((a, b) => {
      const dateA = new Date(`${a.month} 1, ${a.year}`);
      const dateB = new Date(`${b.month} 1, ${b.year}`);
      return dateA.getTime() - dateB.getTime();
    })
    .slice(-6);

  const latest = diagnosis.at(-1);

  const labels = diagnosis.map((entry) => {
    const date = new Date(`${entry.month} 1, ${entry.year}`);
    return date.toLocaleString("en-US", { month: "short", year: "2-digit" });
  });

  const systolicValues = diagnosis.map(
    (entry) => entry.blood_pressure.systolic.value
  );
  const diastolicValues = diagnosis.map(
    (entry) => entry.blood_pressure.diastolic.value
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicValues,
        borderColor: "#DB50E7",
        backgroundColor: "#DB50E7",
        tension: 0.4,
        fill: false,
        pointRadius: 5,
      },
      {
        label: "Diastolic",
        data: diastolicValues,
        borderColor: "#9272FF",
        backgroundColor: "#9272FF",
        tension: 0.4,
        fill: false,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <section>
      <div className="bg-[#F4F0FE] rounded-xl p-6 mt-8 flex flex-col md:flex-row gap-9">
        <div className="flex-1">
          {" "}
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-[#072635] text-[24px]">
              Blood Pressure
            </h2>
            <p className="text-sm text-gray-600">Last 6 months ▾</p>
          </div>
          <Line data={data} options={options} />
        </div>

        <div className="md:w-[180px] flex-shrink-0 flex flex-col gap-6 mt-6 md:mt-0">
          <div className="text-[#072635] font-semibold">
            <div className="flex items-center gap-1">
              <button className="bg-[#E66FD2] h-[14px] w-[14px] rounded-full"></button>
              <p>Systolic</p>
            </div>
            <h1 className="text-3xl my-2">{systolicValues.at(-1)}</h1>
            <button className="text-sm text-[#072635] flex items-center gap-[2px]">
              <ChevronDown size={16} />
              {diagnosis.at(-1)?.blood_pressure.systolic.levels}
            </button>
          </div>

          <div>
            <hr className="w-[160px] border border-gray-300" />
          </div>
          <div className="text-[#072635] font-semibold">
            <div className="flex items-center gap-1">
              <button className="bg-[#8C6FE6] h-[14px] w-[14px] rounded-full"></button>
              <p>Diastolic</p>
            </div>
            <h1 className="text-3xl text-[#072635] my-2">
              {diastolicValues.at(-1)}
            </h1>
            <button className="text-sm text-[#072635] flex items-center gap-[2px]">
              <ChevronDown size={16} />
              <span>{diagnosis.at(-1)?.blood_pressure.diastolic.levels}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <VitalsCard
          iconSrc="/respiratory.png"
          title="Respiratory Rate"
          value={latest?.respiratory_rate?.value.toString() || "--"}
          unit="bpm"
          status={latest?.respiratory_rate?.levels || "Unknown"}
          color="bg-[#E0F3FA]"
        />
        <VitalsCard
          iconSrc="/temperature.png"
          title="Temperature"
          value={latest?.temperature?.value.toString() || "--"}
          unit="°F"
          status={latest?.temperature?.levels || "Unknown"}
          color="bg-[#FFE6E9]"
        />
        <VitalsCard
          iconSrc="/HeartBPM.png"
          title="Heart Rate"
          value={latest?.heart_rate?.value.toString() || "--"}
          unit="bpm"
          status={latest?.heart_rate?.levels || "Unknown"}
          color="bg-[#FFE6F1]"
        />
      </div>
    </section>
  );
};

export default BloodPressureChart;
