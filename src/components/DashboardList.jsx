import img1 from "../assets/Rectangle 1534.png";
import avatar from "../assets/Avatar.png";

const DashboardList = () => {
  return (
    <tr className="border-white border-2 p-5 cursor-pointer">
      <td>01</td>
      <td
        scope="row"
        className="flex items-center  text-[20px] font-[100] pl-4 "
      >
        <img src={img1} alt="#@" className="h-14 w-28 mr-4" />
        Rune raises $100,000 for marketing through NFT butterflies sale
      </td>
      <td className=" text-center h-full text-[#9BFF00] ">ninjanft</td>
      <td className="text-center">254</td>
    </tr>
  );
};
export default DashboardList;
