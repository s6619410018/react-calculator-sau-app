import { useState } from "react";
import { Link } from "react-router-dom";
import carImg from "../assets/images/car.png";

const inputClass =
  "mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none";

const downOptions = [15, 20, 25, 30, 35];
const monthOptions = [12, 24, 36, 48, 60, 72, 84];

export default function Car() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  const [down, setDown] = useState(15);
  const [months, setMonths] = useState(24);
  const [monthly, setMonthly] = useState(0);
  const [shownName, setShownName] = useState("");

  const handleCalculate = () => {
    const p = parseFloat(price);
    const r = parseFloat(rate);
    if (!(p > 0) || !(r >= 0)) {
      setMonthly(0);
      return;
    }
    // ดอกเบี้ยแบบเงินต้นคงที่ (Flat rate): (ยอดจัด + ดอกเบี้ยรวม) / จำนวนงวด
    const loan = p - (p * down) / 100;
    const interest = loan * (r / 100) * (months / 12);
    setMonthly((loan + interest) / months);
    setShownName(name.trim());
  };

  const handleReset = () => {
    setName("");
    setPrice("");
    setRate("");
    setDown(15);
    setMonths(24);
    setMonthly(0);
    setShownName("");
  };

  return (
    <div className="flex min-h-full items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-slate-800">
            Car Installment Calculator
          </h1>
          <p className="mt-1 text-sm text-gray-500">คำนวณ Car Installment</p>
          <img src={carImg} alt="Car" className="mt-4 h-36 w-36 object-contain" />
        </div>

        <div className="mt-6 space-y-4">
          <label className="block text-xs font-medium text-slate-800">
            ชื่อผู้คำนวณ
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </label>

          <label className="block text-xs font-medium text-slate-800">
            ราคารถ (บาท)
            <input
              type="number"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={inputClass}
            />
          </label>

          <label className="block text-xs font-medium text-slate-800">
            ดอกเบี้ยต่อปี (%)
            <input
              type="number"
              min="0"
              step="0.01"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className={inputClass}
            />
          </label>

          <div className="text-xs font-medium text-slate-800">
            เงินดาวน์ (%)
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              {downOptions.map((d) => (
                <label key={d} className="flex items-center gap-1 font-normal">
                  <input
                    type="radio"
                    name="down"
                    value={d}
                    checked={down === d}
                    onChange={() => setDown(d)}
                  />
                  {d}%
                </label>
              ))}
            </div>
          </div>

          <label className="block text-xs font-medium text-slate-800">
            จำนวนเดือนที่ผ่อน
            <select
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className={inputClass}
            >
              {monthOptions.map((m) => (
                <option key={m} value={m}>
                  {m} เดือน
                </option>
              ))}
            </select>
          </label>

          <div className="flex gap-4">
            <button
              onClick={handleCalculate}
              className="flex-1 rounded-md bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              คำนวณ
            </button>
            <button
              onClick={handleReset}
              className="flex-1 rounded-md bg-gray-200 py-2.5 text-sm font-semibold text-slate-800 hover:bg-gray-300"
            >
              ล้างข้อมูล
            </button>
          </div>

          <div className="pt-2 text-center text-sm font-semibold text-slate-800">
            {shownName && (
              <p className="mb-1 font-normal text-gray-500">
                ผู้คำนวณ: {shownName}
              </p>
            )}
            <p>
              ผ่อนชำระต่อเดือน:{" "}
              {monthly.toLocaleString("th-TH", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              บาท
            </p>
          </div>

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