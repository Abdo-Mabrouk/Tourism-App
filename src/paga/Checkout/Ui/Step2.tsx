import type { FormikProps } from "formik";
interface Step2FormValues {
  FillName: string;
  SpeakingLanguage: string;
  Email: string;
  Phone: string;
  CountryRegion: string;
  TownCity: string;
  StateCounty: string;
  PPickUpLocationhone: string;
  AdditionalInformation: string;
}
interface Step2Props {
  formik: FormikProps<Step2FormValues>;
}

export default function Step2({ formik }: Step2Props) {
  return (
    <>
      <div className="bg-[#FFFFFF] rounded-3xl py-6 px-8">
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
                Speaking Language
              </label>
              <select
                value={formik.values.SpeakingLanguage}
                onChange={formik.handleChange}
                name="SpeakingLanguage"
                className="form-control"
                id=""
              >
                <option value="">Choose your Speaking Language</option>
                <option value="1">Speaking Language 1</option>
                <option value="2">Speaking Language 2</option>
                <option value="3">Speaking Language 3</option>
              </select>
              {formik.errors.SpeakingLanguage && (
                <>
                  <p className="text-red-500">
                    {formik.errors.SpeakingLanguage}
                  </p>
                </>
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
              <label className="form-labole flex items-center gap-1" htmlFor="">
                Email{" "}
                <span className="text-[#A5A5A5] font-normal text-[12px]">
                  (Optional)
                </span>
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
          </div>
          <div className="w-full h-0.5 bg-[#F9FAFB]"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <label className="form-labole" htmlFor="">
                Country / Region
              </label>
              <select
                value={formik.values.CountryRegion}
                onChange={formik.handleChange}
                name="CountryRegion"
                className="form-control"
                id=""
              >
                <option value="">Choose your Country</option>
                <option value="1">Country 1</option>
                <option value="2">Country 2</option>
                <option value="3">Country 3</option>
              </select>
              {formik.errors.CountryRegion && (
                <>
                  <p className="text-red-500">{formik.errors.CountryRegion}</p>
                </>
              )}
            </div>
            <div className="space-y-3">
              <label className="form-labole" htmlFor="">
                Town / City
              </label>
              <select
                value={formik.values.TownCity}
                onChange={formik.handleChange}
                name="TownCity"
                className="form-control"
                id=""
              >
                <option value="">Choose your Town </option>
                <option value="1">Town 1</option>
                <option value="2">Town 2</option>
                <option value="3">Town 3</option>
              </select>
              {formik.errors.TownCity && (
                <>
                  <p className="text-red-500">{formik.errors.TownCity}</p>
                </>
              )}
            </div>
            <div className="space-y-3">
              <label className="form-labole" htmlFor="">
                State / County
              </label>
              <select
                value={formik.values.StateCounty}
                onChange={formik.handleChange}
                name="StateCounty"
                className="form-control"
                id=""
              >
                <option value="">Choose your State </option>
                <option value="1">State 1</option>
                <option value="2">State 2</option>
                <option value="3">State 3</option>
              </select>
              {formik.errors.StateCounty && (
                <>
                  <p className="text-red-500">{formik.errors.StateCounty}</p>
                </>
              )}
            </div>
          </div>
          <div className="w-full h-0.5 bg-[#F9FAFB]"></div>
          <div className="space-y-3">
            <div className="space-y-3">
              <label className="form-labole" htmlFor="">
                Pick-Up Location
              </label>
              <input
                value={formik.values.PPickUpLocationhone}
                onChange={formik.handleChange}
                dir=""
                type="text"
                name="PPickUpLocationhone"
                className="form-control"
                placeholder="Choose Pick-Up Location"
                id=""
              />
              {formik.errors.PPickUpLocationhone && (
                <p className="text-red-500">
                  {formik.errors.PPickUpLocationhone}
                </p>
              )}
            </div>
          </div>
          <div className="w-full h-0.5 bg-[#F9FAFB]"></div>
          <div className="space-y-6">
            <label
              htmlFor="note"
              className="form-labole flex items-center gap-1"
            >
              Additional Information
              <span className="text-[#A5A5A5] font-normal text-[12px]">
                (Optional)
              </span>
            </label>
            <textarea
              name="AdditionalInformation"
              rows={5}
              value={formik.values.AdditionalInformation}
              onChange={formik.handleChange}
              className="form-control"
              placeholder="Additional Notes.........."
              id="AdditionalInformation"
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
}
