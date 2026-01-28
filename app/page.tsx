//import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-[Montserrat] flex items-center justify-center">
      <div
        className="
    grid-rows-2
    grid grid-cols-3 gap-4
    w-[90%]
    h-[60vh]
    text-[#c7924a]
    gap-x-6         // khoảng cách giữa col1-2 và col2-3 = 40px
    gap-y-6
    justify-items-end    // col3 sát phải
  "
      >
        {/* Ô 1 – HÌNH CĂN TRÁI */}
        <div className="col-span-1.5 flex items-start justify-start">
          <img
            src="/vercel.svg"
            alt="vercel logo"
            className="w-10 h-10 object-contain"
          />
        </div>

        {/* Ô 2 – LIST A,B,C,D CĂN TRÁI */}
        <div className="flex flex-col items-start justify-start space-y-1 text-sm tracking-wide">
          <span>BIKES</span>
          <span>BIKES</span>
          <span>BIKES</span>
          <span>BIKES</span>
        </div>

        {/* Ô 3 – GIÁ TRỊ LIÊN TỤC A,B,C */}
        <div className="flex items-start gap-6">

          <span> <img src="/vercel.svg" alt="vercel logo" className="w-10 h-10 object-contain" />
          </span>

          <span> <img src="/vercel.svg" alt="vercel logo" className="w-10 h-10 object-contain" />
          </span>

          <span> <img src="/vercel.svg" alt="vercel logo" className="w-10 h-10 object-contain" />
          </span>

        </div>

        {/* Ô 4 – LIST A,B,C,D (HÀNG 2) */}
        <div className="col-start-1 col-end-3 flex flex-col items-start justify-start space-y-1 text-sm tracking-wide">
          <span>ALL RIGHTS RESERVED</span>
          <span>© BASTION CYCLES 2026</span>
        </div>

        {/* Ô 5 – LIST A,B,C,D (HÀNG 2) */}
        <div className="flex flex-col items-start justify-start space-y-1 text-sm tracking-wide">
          <span>TERMS & CONDITIONS</span>
          <span>PRIVACY POLICY</span>
        </div>

        {/* Ô 6 – GIÁ TRỊ LIÊN TỤC A,B,C (HÀNG 2) */}
        <div className="flex items-start justify-start text-sm tracking-[0.25em]">
          <span>BACK TO TOP</span>
        </div>



        {/* BIG TEXT ROW */}
        <div className="col-span-4 flex items-center justify-center text-8xl font-bold text-orange-300">
          A BOLD NEW ERA
        </div>
      </div>
    </main>
  );
}

