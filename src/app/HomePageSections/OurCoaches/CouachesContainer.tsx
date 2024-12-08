const CouachesContainer = () => {
    return (
        <div className="text-center group relative mx-auto w-[75%]">
            <div className="py-2  mx-auto bg-yellow-500 text-white  rounded-tl-md rounded-tr-md">
                <p className="font-bold text-xl">Jai Sharma</p>
                <p>Basketball Coach</p>
            </div>
            <div className=" ">
                <img src="/coaches.png" alt="couach photo" />
            </div>

            <div className="  bottom-5 m-auto relative bg-yellow-500 text-white py-2 rounded-sm w-[calc(50%)]  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>Book a Coach</p>
            </div>
        </div>
    );
};

export default CouachesContainer;