import { Pencil } from "lucide-react";

interface Step1Values {
  PickDateAndTime: string;
  Location: string;
  TypeOfTrip: string;
  ReturnDate: string;
}

interface Step2Values {
  FillName: string;
  Email: string;
  Phone: string;
  Nationality: string;
  Adults: number;
  Children: number;
  Infants: number;
}

interface Step3Props {
  step1Values: Step1Values;
  step2Values: Step2Values;
  onEdit: () => void;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "—";
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
  }
  return dateStr;
}

function InfoRow({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string | number | boolean;
  className?: string;
}) {
  const display =
    typeof value === "boolean"
      ? value
        ? "yes"
        : "no"
      : value !== "" && value !== undefined
        ? String(value)
        : "—";
  return (
    <div
      className={`border-s-3 h-fit border-[#E3E3E3]  ps-4 flex flex-col gap-3 ${className}`}
    >
      <p className="text-[#A5A5A5] font-normal text-base">{label}</p>
      <p className="text-[#1D1F1F] font-medium text-base">{display}</p>
    </div>
  );
}

export default function Step3({
  step1Values,
  step2Values,
  onEdit,
}: Step3Props) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium text-[#1D1F1F]">Information</h3>
        <button
          type="button"
          onClick={onEdit}
          className="btn1 flex items-center gap-3"
        >
          <Pencil className="size-4" />
          Edit
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <InfoRow label="Traveler Name" value={step2Values.FillName} />
        <InfoRow
          label="Travel Date"
          value={formatDate(step1Values.PickDateAndTime)}
        />
        <InfoRow label="Pick Up Location" value={step1Values.Location} />
        <InfoRow label="Drop off location" value={step1Values.Location} />
        <InfoRow label="Phone" value={step2Values.Phone} />
        <InfoRow label="Nationality" value={step2Values.Nationality} />
      </div>
      <div className="h-[2px] w-full bg-[#F9FAFB]" />
      <div className="w-full flex items-center justify-between">
        <p className="text-xl font-medium text-[#1D1F1F]">Total Price</p>
        <p className="text-4xl font-medium text-brand">500.00 $</p>
      </div>
    </div>
  );
}
