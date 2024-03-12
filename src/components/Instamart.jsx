import { useState } from "react"

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="m-2 border border-black p-3 bg-[#bd9355]">
            <h3 className="text-xl">{title}</h3>
            {isVisible && <p>{description}</p>}
            {isVisible ? (
                <button
                className="underline underline-offset-4"
                    onClick={() => setIsVisible(false)}
                >Hide</button>
            ) : (
                <button
                    className="underline underline-offset-4"
                    onClick={() => setIsVisible(true)}
                >Show</button>
            )}
        </div>
    )
}

const Instamart = () => {
    // In this children state is managed by parent this concept is known as lifting the state up

    const [sectionConfig, setSectionConfig] = useState({
        showAbout: false,
        showTeam: false,
        showCareer: false
    })

    return (
        <>
            <h1 className="mt-10 p-10 bg-black text-white text-2xl">Instamart</h1>
            <Section 
                title={"About Instamaer"} 
                description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, pariatur possimus maxime minus dolor numquam eveniet inventore error impedit eum?"}
                isVisible={sectionConfig.showAbout}
                setIsVisible = {(condition) => {
                    setSectionConfig({
                        showAbout: condition,
                        showTeam: false,
                        showCareer: false
                    })
                }}
            />
            <Section 
                title={"Team Instamaer"} 
                description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, pariatur possimus maxime minus dolor numquam eveniet inventore error impedit eum?"}
                isVisible={sectionConfig.showTeam}
                setIsVisible = {(condition) => {
                    setSectionConfig({
                        showAbout: false,
                        showTeam: condition,
                        showCareer: false
                    })
                }}
            />
            <Section 
                title={"Career Instamaer"} 
                description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, pariatur possimus maxime minus dolor numquam eveniet inventore error impedit eum?"}
                isVisible={sectionConfig.showCareer}
                setIsVisible = {(condition) => {
                    setSectionConfig({
                        showAbout: false,
                        showTeam: false,
                        showCareer: condition
                    })
                }}
            />
        </>
    )
}

export default Instamart;