const Branches = () => {
    return (
        <div
            className=" w-screen  bg-cover bg-center text-center pt-10 pb-10 "
            style={{
                backgroundImage: "url(/branches/background.png)",
            }}
        >
            <h2 className=" text-white uppercase my-4 font-bold text-3xl pt-0 mt-0 block mb-20">
                Branches
            </h2>
            <img src="/branches/globe.png" alt="glob pgoto" className=" h-56 m-auto w-screen bg-cover px-10 lg:px-80" />
        </div>
    );
};

export default Branches;