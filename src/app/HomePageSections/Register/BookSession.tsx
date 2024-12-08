import RegisterComponent from "./RegisterComponent";

const BookSession = () => {
    return (
        <div>
            <RegisterComponent
                title={"Book a Training"}
                sub={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever `}
                buttonText={"Book a session"}
            />
        </div>
    );
};

export default BookSession;