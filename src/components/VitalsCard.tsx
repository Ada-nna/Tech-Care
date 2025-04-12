import React from "react";

interface VitalsCardProps {
  iconSrc: string;
  title: string;
  value: string;
  unit?: string;
  status: string;
  color: string;
}

const VitalsCard: React.FC<VitalsCardProps> = ({
  iconSrc,
  title,
  value,
  unit,
  status,
  color,
}) => {
  const srcSet = `${iconSrc} 1x, ${iconSrc.replace(".png", "@2x.png")} 2x`;

  return (
    <div
      className={`rounded-xl p-5 flex flex-col items-center gap-4 ${color} w-full`}
    >
      <div className="bg-white rounded-full p-4 shadow-md">
        <img src={iconSrc} srcSet={srcSet} alt={title} className="w-[100px] h-[100px]" />
      </div>
      <div className="text-center">
        <p className="text-[14px] text-[#072635] font-medium">{title}</p>
        <h1 className="text-[24px] font-bold text-[#072635]">
          {value}
          {unit && <span className="text-sm font-normal"> {unit}</span>}
        </h1>
        <p className="text-sm text-[#072635]">{status}</p>
      </div>
    </div>
  );
};

export default VitalsCard;
