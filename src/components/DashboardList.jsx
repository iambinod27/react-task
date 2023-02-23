import img1 from "../assets/Rectangle 1534.png";

const DashboardList = () => {
  return (
    <tr>
      <td>01</td>
      <td scope="row" className="flex items-center h-full px-5">
        <img src={img1} alt="#@" className="h-14 w-28 mr-4" />
        Rune raises $100,000 for marketing through NFT butterflies sale
      </td>
      <td className="text-center">ninjanft</td>
      <td>254</td>
    </tr>
  );
};
export default DashboardList;
