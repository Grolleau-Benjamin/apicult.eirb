import HoneyBreak from "../assets/honey_break.png";

export const Break = () => {
    return (
        <div
            className="w-full h-20 shadow-lg"
            style={{
                backgroundImage: `url(${HoneyBreak})`,
                backgroundRepeat: "repeat",
                backgroundSize: "contain",
            }}
        >
        </div>
    );
};
