import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CardBig from "../component/CardBig"; 
import CardSmall from "../component/CardProfile"; 
import "./Movie.css";
import { Link } from "react-router-dom";

export default function Profile() {
    
    const navigateToDetailPage = useNavigate();
    
    const data = [
        {
            title: "Muhammad Farrel Asyraf Abrar", id: 1,
            nim : "21120121140103",
            img: "https://pps.whatsapp.net/v/t61.24694-24/386665625_6156782257756597_112707711953703478_n.jpg?ccb=11-4&oh=01_AdRaG8cNdUHrNhj3hbtKRUYaf8ZDwYS5W4NHg157Uh_1fQ&oe=6557358E&_nc_sid=e6ed6c&_nc_cat=110",
        },
        {
            title: "Maulid Duhri Yanuardi", id: 2,
            nim: "21120121130043",
             img:  "https://media-cgk1-2.cdn.whatsapp.net/v/t61.24694-24/357680141_225461760389727_4317373975071160846_n.jpg?ccb=11-4&oh=01_AdSXT44jaqBeHAx3_UsPy61zNP6CSprivyT1CDrtCKBTdg&oe=655745CA&_nc_sid=e6ed6c&_nc_cat=100",
        },
        {
            title: "Ramadhin Putra Fadhli", id: 3,
            nim: "21120121140102",
            img: "https://media-cgk1-2.cdn.whatsapp.net/v/t61.24694-24/366388246_902470724534419_5178474117599528017_n.jpg?ccb=11-4&oh=01_AdTLnbsUWEIg5977u2DZLSrbhc9kZaJyIduFxFaKcAn3SQ&oe=65575DEA&_nc_sid=e6ed6c&_nc_cat=104",
        },
        {
            title: "Taufiqurrohman", id: 4,
            nim : "211201119400102",
            img:
                "https://media-cgk1-2.cdn.whatsapp.net/v/t61.24694-24/346002472_784434063057964_4487599037436728873_n.jpg?ccb=11-4&oh=01_AdTkN-twdO1yyF1dpp36M9DOWQYYkDDl7JC7wnTMp0ujZA&oe=65574276&_nc_sid=e6ed6c&_nc_cat=110",
        },
        
    ];

    return (
        <>
            <p id="profiles">Profil Kelompok</p>
            <div className="rowcoba">
                <div className="column">
                {Object.values(data).map((item, index) => (
                    
                    
                    <Fragment key={item.id}>
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre}  nim = {item.nim}
                            onClick={() => navigateToDetailPage(`/profile/${item.id}`)}
                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        
                    </Fragment>
                    
                ))}
                </div>
            </div>
        </>
    );
}
