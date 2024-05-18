import ColumnNav from './ColumnNav'

const InfoPages = ({ title }) => {
  return (
    <div className="flex flex-col p-[3rem] gap-[2rem]">
      <h2 className="text-[3rem]">{title}</h2>
      <div className="flex">
        <ColumnNav />
      </div>
    </div>
  )
}

export default InfoPages