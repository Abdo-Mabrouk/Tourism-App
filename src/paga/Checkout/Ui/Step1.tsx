import RadioInput from "@/components/inputs/RadioInput";
import type { FormikProps } from "formik";
interface Step1FormValues {
  From: string;
  to: string;
  WhenTraveling: string;
}
interface Step1Props {
  formik: FormikProps<Step1FormValues>;
}

export default function Step1({ formik }: Step1Props) {
  return (
    <div className="space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-12">
                <p className="text-[#A5A5A5] font-medium text-xl">
                  When will you be traveling?
                </p>
                <RadioInput
                  name="Time2"
                  value="ExactTime"
                  id="ExactTime2"
                  label="Have An Exact Time"
                  checked={formik.values.WhenTraveling === "ExactTime"}
                  onChange={(v) => formik.setFieldValue("WhenTraveling", v)}
                />
                <RadioInput
                  name="Time2"
                  value="ApproximateTime"
                  id="ApproximateTime2"
                  label="Have An Approximate Time"
                  checked={formik.values.WhenTraveling === "ApproximateTime"}
                  onChange={(v) => formik.setFieldValue("WhenTraveling", v)}
                />
                <RadioInput
                  name="Time2"
                  value="NotSureYet"
                  id="NotSureYet2"
                  label="Not Sure Yet"
                  checked={formik.values.WhenTraveling === "NotSureYet"}
                  onChange={(v) => formik.setFieldValue("WhenTraveling", v)}
                />
        </div>
        <form action="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <label className="form-labole" htmlFor="">From</label>
                    <input
                    value={formik.values.From}
                    onChange={formik.handleChange}
                    dir="" type="date" name="From" className="form-control" placeholder="Select the start date of the trip" id="" />
                    {formik.errors.From &&<>
                    <p className="text-red-500">{formik.errors.From}</p>
                    </>}
                </div>
                <div className="space-y-3">
                    <label className="form-labole" htmlFor="">to</label>
                    <select
                    value={formik.values.to}
                    onChange={formik.handleChange}
                    name="to"
                    className="form-control"
                    id="">
                        <option value="">Select the end date of the trip</option>
                        <option value="1">date 1</option>
                        <option value="2">date 2</option>
                        <option value="3">date 3</option>
                    </select>
                    {formik.errors.to &&<>
                    <p className="text-red-500">{formik.errors.to}</p>
                    </>}
                </div>
            </div>
        </form>
    </div>
  )
}
