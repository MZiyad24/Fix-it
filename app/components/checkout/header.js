export default function Header() {
    return (
      <header
        className="relative bg-[#FBE4CC] h-60 flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/images/Online_Shopping2.jpg)" }}
      >
        {/* Overlay with Text */}
        <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
        {/* Optional overlay for better text readability */}
        <h1 className="text-6xl font-bold text-[#FFFFFF] relative z-10 mt-10">
          checkout
        </h1>
      </header>
    );
  }