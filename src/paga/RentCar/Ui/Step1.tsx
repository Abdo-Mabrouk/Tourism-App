import RadioInput from "@/components/inputs/RadioInput";
import type { FormikProps } from "formik";
interface Step1FormValues {
  PickDateAndTime: string;
  Location: string;
  TypeOfTrip: string;
  ReturnDate: string;
}
interface Step1Props {
  formik: FormikProps<Step1FormValues>;
}

export default function Step1({ formik }: Step1Props) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-12">
        <p className="text-[#A5A5A5] font-medium text-xl">Type of Trip?</p>
        <RadioInput
          name="RoundTrip"
          value="oneWay"
          id="oneWay"
          label="one way"
          checked={formik.values.TypeOfTrip === "oneWay"}
          onChange={(v) => formik.setFieldValue("TypeOfTrip", v)}
        />
        <RadioInput
          name="RoundTrip"
          value="RoundTrip"
          id="RoundTrip"
          label="Round Trip"
          checked={formik.values.TypeOfTrip === "RoundTrip"}
          onChange={(v) => formik.setFieldValue("TypeOfTrip", v)}
        />
      </div>
      <form action="" className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="form-labole" htmlFor="">
              Pick up Date and Time
            </label>
            <input
              value={formik.values.PickDateAndTime}
              onChange={formik.handleChange}
              type="date"
              name="PickDateAndTime"
              className="form-control"
              placeholder="Choose the time and date for Pick Up"
              id=""
            />
            {formik.errors.PickDateAndTime && (
              <>
                <p className="text-red-500">{formik.errors.PickDateAndTime}</p>
              </>
            )}
          </div>
          <div className="space-y-3">
            <label className="form-labole" htmlFor="">
              Pick-Up Location
            </label>
            <select
              value={formik.values.Location}
              onChange={formik.handleChange}
              name="Location"
              className="form-control"
              id=""
            >
              <option value="">Choose Pick-Up Location</option>
              <option value="1">date 1</option>
              <option value="2">date 2</option>
              <option value="3">date 3</option>
            </select>
            {formik.errors.Location && (
              <>
                <p className="text-red-500">{formik.errors.Location}</p>
              </>
            )}
          </div>
        </div>
        <div className="space-y-3">
          <label className="form-labole" htmlFor="">
            Return Date and Time
          </label>
          <input
            value={formik.values.ReturnDate}
            onChange={formik.handleChange}
            type="date"
            name="ReturnDate"
            className="form-control"
            placeholder="Choose the time and date for Return"
            id=""
          />
          {formik.errors.ReturnDate && (
            <>
              <p className="text-red-500">{formik.errors.ReturnDate}</p>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
