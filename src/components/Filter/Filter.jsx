const Filter = () => {
    return (
        <div className="p-2 sm:flex    sm:items-end items-center  justify-center w-fit        ">
  <div className='flex '>
      <div className="flex flex-col     w-1/3 sm:w-1/2 ">


      <label  className=" ml-1 text-lg text-[--textColor] " >Par cités  :</label>
  <select className="  flex-1  text-xs  rounded-xl p-2  mr-1 font-normal capitalize text-[--softTextColor] border-2 border-solid border-[--softTextColor] outline-none">
    <option className="text-wrap">wheelchaire</option>
    <option>Lunettes de vue</option>
    <option>Tube d'alimentation gastrique</option>
    <option>Glucometre (moniteur de glucose) </option>
    <option>Matela médicale </option>
  </select>
  </div>

<div className="flex flex-col     w-1/3 sm:w-1/2  ">

  <label  className="ml-1  text-lg text-[--TextColor] " >Par type :</label>

  <select className="         flex-1     text-xs  rounded-xl p-2  mr-1 font-normal capitalize text-[--softTextColor] border-2 border-solid border-[--softTextColor] outline-none">
    <option className="text-wrap">wheelchaire</option>
    <option>Lunettes de vue</option>
    <option>Tube d'alimentation gastrique</option>
    <option>Glucometre (moniteur de glucose) </option>
    <option>Matela médicale </option>
  </select>
  </div>

  </div>
  <button class="  sm:w-1/3  w-8/12 	flex flex-col px-4 items-center text-center  text-base font-bold  rounded-xl p-1  m-0 capitalize bg-[--btnBlueHover] text-[--bg] hover:bg-[--bg] hover:text-[--btnBlueHover]  border-2  border-[--btnBlueHover] ">Filter
    </button>
</div>
);
};

export default Filter;
  