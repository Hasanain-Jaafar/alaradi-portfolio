function Button({ btn, isCta }) {
  if (isCta)
    return (
      <button className="bg-orange-600 px-4 py-1 text-neutral-800/95 shadow-md cursor-pointer transition-all duration-200 hover:bg-orange-700">
        {btn}
      </button>
    );
  else
    return (
      <button className=" border py-0.5 px-2 text-gray-800 cursor-pointer ">
        {btn}
      </button>
    );
}

export default Button;
