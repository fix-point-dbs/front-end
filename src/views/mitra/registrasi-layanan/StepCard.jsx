import React from "react";

const StepCard = ({ activeStep = 1, className = "" }) => {
  const steps = [
    { label: "Detail Kontak" },
    { label: "Informasi Umum" },
    { label: "Layanan" },
    { label: "Foto - Foto" },
    { label: "Review Registrasi" },
  ];

  return (
    <div
      className={`w-full md:w-64 px-4 py-6 shadow-md bg-white rounded-xl self-start ${className}`}
    >
      <h4 className="pb-2 mb-2 text-sm font-bold">Proses Registrasi</h4>
      <div className="space-y-5">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < activeStep;
          const isActive = stepNumber === activeStep;

          return (
            <div key={index} className="flex items-start space-x-3">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                  ${
                    isActive
                      ? "bg-biru text-white"
                      : isCompleted
                      ? "bg-biru text-white"
                      : "bg-gray-300 text-white"
                  }
                `}
              >
                {stepNumber}
              </div>
              <div
                className={`${
                  isActive
                    ? "text-biru font-semibold"
                    : isCompleted
                    ? "text-biru font-semibold"
                    : "text-gray-400"
                } text-sm`}
              >
                {step.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepCard;
