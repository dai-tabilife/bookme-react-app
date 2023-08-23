import iconBenefit from "../../assets/images/icon-benefit.png";
import imgTokyo from "../../assets/images/imgTokyo.png";

export const RegisterMember = () => {
  const informations = [
    {
      logo: iconBenefit,
    },
    {
      logo: iconBenefit,
    },
    {
      logo: iconBenefit,
    },
    {
      logo: iconBenefit,
    },
    {
      logo: iconBenefit,
    },
    {
      logo: iconBenefit,
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${imgTokyo})` }}
      className="pt-10 pb-[100px] bg-lightgray bg-center bg-cover bg-no-repeat"
    >
      <div className="flex items-center justify-between w-[1240px] m-auto px-8">
        <div className="flex flex-col gap-6">
          <div className="max-w-[400px] flex flex-col gap-3">
            <p
              className="text-left font-medium text-[48px]"
              style={{
                background: "linear-gradient(56deg, #A0F649 0%, #EDFFDA 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Register as a TabiLife member
            </p>
            <p className="text-left text-white">
              Lorem ipsum dolor sit amet consectetur. Vitae viverra nunc elit
              aliquam libero sapien ut in.
            </p>
          </div>
          <button className="max-w-[160px] flex gap-3 items-center justify-center rounded-lg bg-white">
            <p className="font-medium text-black-10 px-4 py-2">Join us</p>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-8 w-1/2">
          {informations &&
            informations.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center flex-col gap-3 border-b border-white"
                >
                  <div className="w-16 h-16 p-[12.8] flex flex-col items-center justify-center gap-[12.8] rounded-full border-[0.8px] border-white">
                    <img src={item.logo} className="w-8 h-8" alt="" />
                  </div>
                  <p className="text-left text-white text-xl font-medium">
                    This is a benefit 1
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
