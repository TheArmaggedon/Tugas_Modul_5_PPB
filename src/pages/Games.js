import { Fragment } from "react";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardProfile";
import "./Movie.css";
import { useNavigate } from "react-router-dom";

export default function Movie() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    const nav = useNavigate();
    const poster = [
        {
            title: "Warframe", id: 1,
            genre: "MMO, Third Person,Looter Shooter",
            desc: "STORY They were called Tenno. Warriors of blade and gun: masters of the Warframe armor. Those that survived the old war were left drifting among the ruins. Now they are needed once more. The Grineer, with their vast armies, are spreading throughout the solar system. A call echoes across the stars summoning the Tenno to an ancient place. They summon you. Allow the Lotus to guide you. She has rescued you from your cryostasis chamber and given you a chance to survive. The Grineer will find you; you must be prepared. The Lotus will teach you the ways of the Warframes and the secrets to unlocking their powers. COME TENNO, YOU MUST JOIN THE WAR.",
            img: "https://image.api.playstation.com/vulcan/ap/rnd/202306/2121/e9239c09f22e85cbec9c4789ec80c600ce5f80700b368e9f.png",
        },
        {
            title: "Armored Core 6", id: 2,
            genre: "Mecha, Action",
            desc: "Armored Core VI is set in a future where humanity has developed an interstellar civilization. On the frontier planet of Rubicon 3, a substance called Coral was discovered that could be used as both an energy source and a data conduit. Coral was hailed as the key to humanity's technological advancement, but instead it caused a cataclysmic event known as the Fires of Ibis, which engulfed the planet and the surrounding star system in flames and left behind a lethal contaminant. All Coral in existence was thought to have been consumed by the disaster. Fifty years later, however, signs of Coral are once again detected on Rubicon 3. Corporations flock to exploit the planet and control the Coral, heedless of the cost and harm to the inhabitants, and mercenaries follow to profit from the conflict. The player is an augmented human designated who is in servitude to an infamous handler named Walter, and fights as an Armored Core pilot on the promise of earning a new life by taking on mercenary jobs. After illegally landing on Rubicon 3, C4-621 steals the license of a deceased mercenary and assumes their callsign: Raven",
            img: "https://m.media-amazon.com/images/I/810fF1amJjL._SL1500_.jpg",
        },
        {
            title: "Red Dead Redemptions 2", id: 3,
            genre: "Wild West, RPG",
            desc: "America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
            img: "https://m.media-amazon.com/images/I/71xnh5WM+GL.jpg",
        },

    ];

    const data = [
        {
            title: "Warframe", id: 1,
            genre: "MMO, Third Person,Looter Shooter",
            desc: "STORY They were called Tenno. Warriors of blade and gun: masters of the Warframe armor. Those that survived the old war were left drifting among the ruins. Now they are needed once more. The Grineer, with their vast armies, are spreading throughout the solar system. A call echoes across the stars summoning the Tenno to an ancient place. They summon you. Allow the Lotus to guide you. She has rescued you from your cryostasis chamber and given you a chance to survive. The Grineer will find you; you must be prepared. The Lotus will teach you the ways of the Warframes and the secrets to unlocking their powers. COME TENNO, YOU MUST JOIN THE WAR.",
            img: "https://image.api.playstation.com/vulcan/ap/rnd/202306/2121/e9239c09f22e85cbec9c4789ec80c600ce5f80700b368e9f.png",
        },
        {
            title: "Armored Core 6", id: 2,
            genre: "Mecha, Action",
            desc: "Armored Core VI is set in a future where humanity has developed an interstellar civilization. On the frontier planet of Rubicon 3, a substance called Coral was discovered that could be used as both an energy source and a data conduit. Coral was hailed as the key to humanity's technological advancement, but instead it caused a cataclysmic event known as the Fires of Ibis, which engulfed the planet and the surrounding star system in flames and left behind a lethal contaminant. All Coral in existence was thought to have been consumed by the disaster. Fifty years later, however, signs of Coral are once again detected on Rubicon 3. Corporations flock to exploit the planet and control the Coral, heedless of the cost and harm to the inhabitants, and mercenaries follow to profit from the conflict. The player is an augmented human designated who is in servitude to an infamous handler named Walter, and fights as an Armored Core pilot on the promise of earning a new life by taking on mercenary jobs. After illegally landing on Rubicon 3, C4-621 steals the license of a deceased mercenary and assumes their callsign: Raven",
            img: "https://m.media-amazon.com/images/I/810fF1amJjL._SL1500_.jpg",
        },
        {
            title: "Red Dead Redemptions 2", id: 3,
            genre: "Wild West, RPG",
            desc: "America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
            img: "https://m.media-amazon.com/images/I/71xnh5WM+GL.jpg",
        },

    ];
    const navToDetail = (item) => {
        nav(`/game/detail/${item.id}`, { state: { itemData: item } });
    };

    return (
        <>
            <p id="movies">Top Games</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR}
                        />
                        {data.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            
                <div className="column">
                    <p id="movies">All Games</p>
                    {poster.map((item, index) => (
                        <Fragment key={item.id}>

                            <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR}
                                onClick={() => navToDetail(item)}
                            />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            
        </>
    );
}
