import SmallCard from "../SmallCard.tsx";

const CommonCards = () => (
  <>
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <SmallCard />
      </div>
      <div className="col-span-1">
        <SmallCard />
      </div>
      <div className="col-span-1">
        <SmallCard />
      </div>
      <div className="col-span-1">
        <SmallCard />
      </div>
      <div className="col-span-1">
        <SmallCard />
      </div>
      <div className="col-span-1">
        <SmallCard />
      </div>
      <div className="col-span-1">
        <SmallCard />
      </div>
      <div className="col-span-1">
        <SmallCard />
      </div>
      <div className="col-span-1">
        <SmallCard />
      </div>
    </div>

    <div className="flex justify-center mt-5">
      <button type="button" className=" text-Zomp text-lg font-bold">
        See more
      </button>
    </div>
  </>
);

export default CommonCards;
