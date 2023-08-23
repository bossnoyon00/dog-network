
import Typewriter from 'typewriter-effect';
const FancyModal = () => {
    return (
        <div>
            <form onSubmit={generateFancyText} className="page">
                <div className="text-violet-900 text-xl font-bold">
                    <h2 className="text-3xl mb-2 text-white">Type here your dog details</h2>
                    <Typewriter options={{
                        strings: ["Your dog is waiting to give you a sweet message !"],
                        autoStart: true,
                        loop: true,
                    }} />
                </div>
                <div className="field field_v1">
                    <label htmlFor="first-name" className="ha-screen-reader">Your Dog Name</label>
                    <input value={dogName} onChange={(e) => setDogName(e.target.value)} id="first-name" className="field__input text-white font-bold" placeholder="Type your dog name" />
                    <span className="field__label-wrap" aria-hidden="true">
                        <span className="field__label">Your Dog Name</span>
                    </span> <br />
                </div>
                {dogNameError && <p className="text-red-500 font-semibold">{dogNameError}</p>}
                <div className="field field_v1">
                    <label htmlFor="first-name" className="ha-screen-reader">Your Dog Breed</label>
                    <input value={dogType} onChange={(e) => setDogType(e.target.value)} id="first-name" className="field__input text-white font-bold" placeholder="Type your dog breed" />
                    <span className="field__label-wrap" aria-hidden="true">
                        <span className="field__label">Your Dog Breed</span>
                    </span>
                </div>
                {dogTypeError && <p className="text-red-500 font-semibold">{dogTypeError}</p>}
                <div className="text-center">
                    <button onClick={openModal} className="bg-blue-600 px-3 py-1 font-bold rounded text-white">See Fantastic Message</button>
                </div>
            </form>
        </div>
    );
};

export default FancyModal;