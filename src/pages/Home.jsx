import CradMenu from "../components/CradMenu";
import calcImg from "../assets/images/calculate.png";
import bmiImg from "../assets/images/bmi.png";
import bmrImg from "../assets/images/bmr.png";
import carImg from "../assets/images/car.png";

const calculators = [
  {
    to: "/bmi",
    img: bmiImg,
    title: "BMI (ดัชนีมวลกาย)",
    desc: "คำนวณน้ำหนักและส่วนสูงว่าเหมาะสมหรือไม่",
  },
  {
    to: "/bmr",
    img: bmrImg,
    title: "BMR (อัตราเผาผลาญร่างกาย)",
    desc: "คำนวณอัตราการเผาผลาญที่ร่างกายต้องการ",
  },
  {
    to: "/car",
    img: carImg,
    title: "Car (เงินผ่อนรถต่อเดือน)",
    desc: "คำนวณเงินผ่อนรถยนต์หรือรถเครื่องต่อเดือน",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      <header className="mt-16 flex flex-col items-center text-center">
        <img src={calcImg} alt="เครื่องคำนวณ" className="h-32 w-32 object-contain" />
        <h1 className="mt-8 text-3xl font-bold">เครื่องคำนวณออนไลน์</h1>
        <p className="mt-1 text-sm text-gray-700">
          เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง
        </p>
      </header>

      <main className="mt-24 grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {calculators.map((item) => (
          <CradMenu key={item.to} {...item} />
        ))}
      </main>
    </div>
  );
}