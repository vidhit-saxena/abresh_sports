import React from 'react'

const RegisterAcademy: React.FC = () => {
    return (
        <section className="bg-white py-12 px-16 mt-0">
            <div className="bg-yellow-400 text-center py-10 px-6 sm:px-12 lg:px-24">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-800 uppercase">Register your academy</h2>
                <p className="text-sm sm:text-base lg:text-lg text-blue-800 font-semibold max-w-3xl mx-auto mb-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever.
                </p>
                <button className="bg-blue-600 text-white text-sm sm:text-base py-3 px-6 rounded hover:bg-blue-700 transition uppercase font-semibold mt-3">
                    Register your Academy
                </button>
            </div>
        </section>

    );
}

export default RegisterAcademy;
