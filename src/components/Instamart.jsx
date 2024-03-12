import { useState } from "react"
import { flushSync } from "react-dom";

const Section = ({ title, description }) => {

    const [isVisible, setIsVisible] = useState(false);
    
    return (
        <div className="m-2 border border-black p-3 bg-[#bd9355]">
            <h3 className="text-xl">{title}</h3>
            {isVisible && <p>{description}</p>}
            {isVisible ? (
                <button
                    onClick={() => setIsVisible(false)}
                >Hide</button>
            ) : (
                <button
                    onClick={() => setIsVisible(true)}
                >Show</button>
            )}
        </div>
    )
}

const Instamart = () => {
    return (
        <>
            <h1 className="mt-10 p-10 bg-black text-white text-2xl">Instamart</h1>
            <Section title={"About Instamaer"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, pariatur possimus maxime minus dolor numquam eveniet inventore error impedit eum?"}/>
            <Section title={"Team Instamaer"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, pariatur possimus maxime minus dolor numquam eveniet inventore error impedit eum?"}/>
        </>
    )
}

export default Instamart;