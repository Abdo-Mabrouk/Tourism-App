import CounterInput from "@/components/inputs/CounterInput";
import type { FormikProps } from "formik";
interface Step2FormValues {
  FillName: string;
  Email: string;
  Phone: string;
  Nationality: string;
  Adults: number;
  Children: number;
  Infants: number;
}
interface Step2Props {
  formik: FormikProps<Step2FormValues>;
}

export default function Step2({ formik }: Step2Props) {
  return (
    <div className="space-y-8">
      <form action="" className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="form-labole" htmlFor="">
              Fill Name
            </label>
            <input
              value={formik.values.FillName}
              onChange={formik.handleChange}
              dir=""
              type="text"
              name="FillName"
              className="form-control"
              placeholder="your full name here"
              id=""
            />
            {formik.errors.FillName && (
              <p className="text-red-500">{formik.errors.FillName}</p>
            )}
          </div>
          <div className="space-y-3">
            <label className="form-labole" htmlFor="">
              Email
            </label>
            <input
              value={formik.values.Email}
              onChange={formik.handleChange}
              dir=""
              type="email"
              name="Email"
              className="form-control"
              placeholder="Type your email.."
              id=""
            />
            {formik.errors.Email && (
              <p className="text-red-500">{formik.errors.Email}</p>
            )}
          </div>
          <div className="space-y-3">
            <label className="form-labole" htmlFor="">
              Phone
            </label>
            <input
              value={formik.values.Phone}
              onChange={formik.handleChange}
              dir=""
              type="tel"
              name="Phone"
              className="form-control"
              placeholder="Type your phone"
              id=""
            />
            {formik.errors.Phone && (
              <p className="text-red-500">{formik.errors.Phone}</p>
            )}
          </div>
          <div className="space-y-3">
            <label className="form-labole" htmlFor="">
              Nationality
            </label>
            <select
              value={formik.values.Nationality}
              onChange={formik.handleChange}
              name="Nationality"
              className="form-control"
              id=""
            >
              <option value="">Choose your nationality</option>
              <option value="1">Nationality 1</option>
              <option value="2">Nationality 2</option>
              <option value="3">Nationality 3</option>
            </select>
            {formik.errors.Nationality && (
              <>
                <p className="text-red-500">{formik.errors.Nationality}</p>
              </>
            )}
          </div>
        </div>
        <div className="w-full h-0.5 bg-[#F9FAFB]"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <label htmlFor="" className="form-labole">
              Adults (18+)
            </label>
            <CounterInput
              inputClassName="w-full"
              buttonClassName=" w-20! lg:w-50  "
              value={formik.values.Adults ?? 0}
              onChange={(val) => formik.setFieldValue("Adults", val)}
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="" className="form-labole">
              Children (4 - 17)
            </label>
            <CounterInput
              inputClassName="w-full"
              buttonClassName=" w-20! lg:w-50  "
              value={formik.values.Children ?? 0}
              onChange={(val) => formik.setFieldValue("Children", val)}
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="" className="form-labole">
              Infants (0 - 3)
            </label>
            <CounterInput
              inputClassName="w-full"
              buttonClassName=" w-20! lg:w-50  "
              value={formik.values.Infants ?? 0}
              onChange={(val) => formik.setFieldValue("Infants", val)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
