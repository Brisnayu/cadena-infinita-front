import RowNav from "./RowNav";

const InfoPages = ({ title }) => {
  return (
    <div className="flex flex-col p-[3rem] gap-[2rem]">
      <h2 className="text-[3rem]">{title}</h2>
      <div className="flex">
        <RowNav />
      </div>
    </div>
  );
};

export default InfoPages;
