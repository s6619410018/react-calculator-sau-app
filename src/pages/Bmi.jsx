import { useState } from "react";
import { Link } from "react-router-dom";
import bmiImg from "../assets/images/bmi.png";

const inputClass =
  "mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none";

export default function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (!(w > 0) || !(h > 0)) {
      setBmi(0);
      return;
    }
    setBmi(w / (h * h));
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setBmi(0);
  };

  return (
    <div className="flex min-h-full items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-slate-800">BMI Calculator</h1>
          <p className="mt-1 text-sm text-gray-500">คำนวณ BMI</p>
          <img src={bmiImg} alt="BMI" className="mt-4 h-16 w-16 object-contain" />
        </div>

        <div className="mt-6 space-y-4">
          <label className="block text-xs font-medium text-slate-800">
            ป้อนน้ำหนัก (กิโลกรัม)
            <input
              type="number"
              min="0"
              placeholder="เช่น 65"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className={inputClass}
            />
          </label>

          <label className="block text-xs font-medium text-slate-800">
            ป้อนส่วนสูง (เซนติเมตร)
            <input
              type="number"
              min="0"
              placeholder="เช่น 170"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className={inputClass}
            />
          </label>

          <button
            onClick={handleCalculate}
            className="w-full rounded-md bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            คำนวณ BMI
          </button>
          <button
            onClick={handleReset}
            className="w-full rounded-md bg-gray-200 py-2.5 text-sm font-semibold text-slate-800 hover:bg-gray-300"
          >
            รีเซ็ต
          </button>

          <p className="pt-2 text-center text-sm font-semibold text-slate-800">
            ค่า BMI ที่คำนวณได้:{" "}
            <span className="font-bold text-blue-600">{bmi.toFixed(2)}</span>
          </p>

          <Link
            to="/"
            className="block w-full rounded-md bg-gray-200 py-2.5 text-center text-sm font-semibold text-slate-800 hover:bg-gray-300"
          >
            กลับหน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  );
}