const MobileBlocker = () => {
  return (
    <div className="sm:hidden flex items-center justify-center h-screen px-6 bg-gray-100 text-center">
      <div className="text-[#072635]">
        <div className="flex items-center justify-center my-10">
          <img src="/TestLogo.svg" alt="TestLogo" className="h-12 w-auto" />
        </div>
        <p className="text-lg">
          This dashboard is best viewed on tablets or desktop devices.
        </p>
      </div>
    </div>
  );
};

export default MobileBlocker;
