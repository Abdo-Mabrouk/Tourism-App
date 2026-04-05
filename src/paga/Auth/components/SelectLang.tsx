import { useState } from "react";

export default function SelectLang() {
  const [selectedCurrencyId, setSelectedCurrencyId] = useState<number | null>(
    null,
  );
  const [selectedLandId, setSelectedLandId] = useState<number | null>(null);
  const dataCurrency = [
    { id: 1, ctey: "U.S. Dollars", Currency: "$ USD" },
    { id: 2, ctey: "Euros", Currency: "€ EUR" },
    { id: 3, ctey: "Egyptian Pounds", Currency: "£ EGP" },
  ];
  const dataLand = [
    { id: 1, ctey: "United States", lang: "English" },
    { id: 2, ctey: "France", lang: "Français" },
    { id: 3, ctey: "Deutschland", lang: "Deutsch" },
    { id: 4, ctey: "Italia", lang: "Italiano" },
    { id: 6, ctey: "Portugal", lang: "Português" },
    { id: 7, ctey: "Venezuela", lang: "Español" },
    { id: 5, ctey: "中国", lang: "中文" },
  ];
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-[#A5A5A5] text-base font-medium space-y-4">
          Currency
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {dataCurrency.map((c) => (
            <div
              key={c.id}
              onClick={() => setSelectedCurrencyId(c.id)}
              className={`text-[#1D1F1F] py-2 px-3 rounded-lg space-y-2 cursor-pointer
                 ${
                   selectedCurrencyId === c.id
                     ? "bg-black text-white hover:bg-black"
                     : "text-[#1D1F1F] bg-transparent hover:bg-black/20"
                 }
                `}
            >
              <p className="text-sm font-normal">{c.ctey}</p>
              <p className="text-sm font-medium">{c.Currency}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-[#A5A5A5] text-base font-medium space-y-4">
          Region and Language
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {dataLand.map((lang) => (
            <div
              key={lang.id}
              onClick={() => setSelectedLandId(lang.id)}
              className={`text-[#1D1F1F] py-2 px-3 rounded-lg space-y-2  cursor-pointer
                 ${
                   selectedLandId === lang.id
                     ? "bg-black text-white hover:bg-black"
                     : "text-[#1D1F1F] bg-transparent hover:bg-black/20"
                 }
                `}
            >
              <p className="text-sm font-normal">{lang.ctey}</p>
              <p className="text-sm font-medium">{lang.lang}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
