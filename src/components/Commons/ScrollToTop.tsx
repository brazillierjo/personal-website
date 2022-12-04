import { useEffect, useState } from "react";
import { HiArrowSmUp } from "react-icons/hi";

export default function ScrollToTop() {
    const [buttonIsShown, setButtonIsShown] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.onscroll = function () {
            if (document.documentElement.scrollTop > 500) {
                setButtonIsShown(true);
            } else {
                setButtonIsShown(false);
            }
        };
    }, []);

    return (
        <>
            {buttonIsShown ? (
                <div className='fixed bottom-10 right-10 z-20 h-10 w-10 rounded-full bg-secondary-200 text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <button onClick={scrollToTop}>
                        <HiArrowSmUp color='white' size={30} className='mt-1' />
                    </button>
                </div>
            ) : null}
        </>
    );
}
