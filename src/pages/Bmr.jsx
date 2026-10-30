import { useState } from "react";
import { Link } from "react-router-dom";
import bmrImg from "../assets/images/bmr.png";

const inputClass =
  "mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none";

export default function Bmr() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmr, setBmr] = useState(null);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    if (!(w > 0) || !(h > 0) || !(a > 0)) {
      setBmr(null);
      return;
    }
    // สูตร Harris-Benedict
    const result =
      gender === "male"
        ? 66 + 13.7 * w + 5 * h - 6.8 * a
        : 665 + 9.6 * w + 1.8 * h - 4.7 * a;
    setBmr(result);
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setBmr(null);
  };

  return (
    <div className="flex min-h-full items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-slate-800">BMR Calculator</h1>
          <p className="mt-1 text-sm text-gray-500">คำนวณ BMR</p>
          <img src={bmrImg} alt="BMR" className="mt-4 h-36 w-36 object-contain" />
        </div>

        <div className="mt-6 space-y-4">
          <label className="block text-xs font-medium text-slate-800">
            ป้อนน้ำหนัก (กิโลกรัม)
            <input
              type="number"
              min="0"
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
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className={inputClass}
            />
          </label>

          <label className="block text-xs font-medium text-slate-800">
            ป้อนอายุ (ปี)
            <input
              type="number"
              min="0"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={inputClass}
            />
          </label>

          <div className="text-xs font-medium text-slate-800">
            เพศ:
            <div className="mt-2 space-y-1">
              <label className="flex items-center gap-2 font-normal">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                ชาย
              </label>
              <label className="flex items-center gap-2 font-normal">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                หญิง
              </label>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleCalculate}
              className="flex-1 rounded-md bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              คำนวณ BMR
            </button>
            <button
              onClick={handleReset}
              className="flex-1 rounded-md bg-red-500 py-2.5 text-sm font-semibold text-white hover:bg-red-600"
            >
              รีเซ็ต
            </button>
          </div>

          <p className="pt-2 text-center text-sm font-semibold text-slate-800">
            ค่า BMR ที่คำนวณได้:{" "}
            <span className="font-bold text-indigo-600">
              {(bmr ?? 0).toFixed(2)}
            </span>
            {bmr !== null && <span className="font-normal"> kcal/วัน</span>}
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