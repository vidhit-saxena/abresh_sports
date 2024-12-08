interface BookProps {
    title: string;
    sub: string;
    buttonText: string;
}

const RegisterComponent: React.FC<BookProps> = ({ title, sub, buttonText }) => {
    return (
        <div className=" my-10 md:mx-32 mx-10 px-6 bg-secondary py-8 text-center block">
            <h2 className=" text-primary uppercase my-4 font-bold text-2xl pt-0 mt-0">
                {title}
            </h2>
            <p className=" text-primary mt-4 ">
                {sub}
            </p>
            <button className="bg-primary text-white p-2 rounded sm:w-80 w-32 mt-10">
                {buttonText}
            </button>
        </div>
    );
};

export default RegisterComponent;