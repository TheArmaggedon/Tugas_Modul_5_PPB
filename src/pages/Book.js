import { Fragment } from "react";
import CardBig from "../component/CardBig"; 
import CardSmall from "../component/CardProfile"; 
import { useNavigate } from "react-router-dom";
import "./Movie.css";

export default function Book() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    const nav = useNavigate();

    const poster = [
        {
            title: "The Godfather", id: 1,
            genre : "Mafia",
            desc: "An undertaker, Amerigo Bonasera, watches a judge suspend the sentences of two men who savagely beat his daughter. Furious, he decides to seek true justice from Don Vito Corleone. In a Los Angeles hotel, celebrity Johnny Fontane drunkenly strikes his second wife, actress Margot Ashton, for cheating on him, but he cannot bring himself to hit her beautiful face. His voice and career failing, Johnny takes his problems to his Godfather, Don Corleone. Meanwhile, Nazorine, a New York baker, wants to prevent his employee, Enzo, from being deported back to Italy. The Baker knows that only Don Corleone can help. It is August 1945. The Godfather, Don Vito Corleone, the Sicilian-American boss of the Corleone Family, one of the Mafia’s Five Families that dominate organized crime in New York City, is hosting the wedding of his daughter, Connie Corleone, at his lavish Long Beach home. Also attending the wedding are Don Vito’s sons. The hot-tempered Sonny Corleone sneaks off to have sex with his mistress, Lucy Mancini. Fredo Corleone, the middle son, dutifully mixes with the wedding guests. Don Vito’s youngest son, the World War II hero Michael Corleone, sits with his non-Italian girlfriend, Kay Adams. The Don has amassed great wealth and power through his control of criminal rackets such as gambling and extortion. He is therefore a “man of respect” to whom people come seeking extralegal justice and other services in exchange for pledging their everlasting loyalty to their Godfather. The Don meets with Bonasera, Fontane, and Nazorine. He agrees to solve their problems but chastises Bonasera for his foolish faith in the legal system.",
            img: "https://m.media-amazon.com/images/I/71j6XAVkDfL._SL1500_.jpg",
        },
        {
            title: "The Lord of the Rings", id: 2,
            genre : "Fantasy" ,
            desc : "A hobbit named Frodo inherits the One Ring, which can destroy the entire world. With the recently reawakened evil being Sauron after the ring to cement his reign, Frodo joins with eight others to destroy the Ring and defeat Sauron.",
            img: "https://m.media-amazon.com/images/I/71Mv51N0XmL._SL1500_.jpg",
        },
        {
            title: "Percy Jackson : The Lightning Thief", id: 3,
            genre: "Fantasy",
            desc : "Rick Riordan",
            img: "https://m.media-amazon.com/images/I/519VZxUwSHL.jpg",
        },
        
    ];
    
    const data = [
        {
            title: "The Godfather", id: 1,
            genre : "Mafia",
            desc: "An undertaker, Amerigo Bonasera, watches a judge suspend the sentences of two men who savagely beat his daughter. Furious, he decides to seek true justice from Don Vito Corleone. In a Los Angeles hotel, celebrity Johnny Fontane drunkenly strikes his second wife, actress Margot Ashton, for cheating on him, but he cannot bring himself to hit her beautiful face. His voice and career failing, Johnny takes his problems to his Godfather, Don Corleone. Meanwhile, Nazorine, a New York baker, wants to prevent his employee, Enzo, from being deported back to Italy. The Baker knows that only Don Corleone can help. It is August 1945. The Godfather, Don Vito Corleone, the Sicilian-American boss of the Corleone Family, one of the Mafia’s Five Families that dominate organized crime in New York City, is hosting the wedding of his daughter, Connie Corleone, at his lavish Long Beach home. Also attending the wedding are Don Vito’s sons. The hot-tempered Sonny Corleone sneaks off to have sex with his mistress, Lucy Mancini. Fredo Corleone, the middle son, dutifully mixes with the wedding guests. Don Vito’s youngest son, the World War II hero Michael Corleone, sits with his non-Italian girlfriend, Kay Adams. The Don has amassed great wealth and power through his control of criminal rackets such as gambling and extortion. He is therefore a “man of respect” to whom people come seeking extralegal justice and other services in exchange for pledging their everlasting loyalty to their Godfather. The Don meets with Bonasera, Fontane, and Nazorine. He agrees to solve their problems but chastises Bonasera for his foolish faith in the legal system.",
            img: "https://m.media-amazon.com/images/I/71j6XAVkDfL._SL1500_.jpg",
        },
        {
            title: "The Lord of the Rings", id: 2,
            genre : "Fantasy" ,
            desc : "A hobbit named Frodo inherits the One Ring, which can destroy the entire world. With the recently reawakened evil being Sauron after the ring to cement his reign, Frodo joins with eight others to destroy the Ring and defeat Sauron.",
            img: "https://m.media-amazon.com/images/I/71Mv51N0XmL._SL1500_.jpg",
        },
        {
            title: "Percy Jackson : The Lightning Thief", id: 3,
            genre: "Fantasy",
            desc : "Rick Riordan",
            img: "https://m.media-amazon.com/images/I/519VZxUwSHL.jpg",
        },
    ];
        
        const navToDetail = (item) => {
            nav(`/book/detail/${item.id}`, { state: { itemData: item } });
        };
        
        
    
    return (
        <>
            <p id="movies">Books</p>
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
            <div className="rowcoba">
                <div className="column">
                <p id="movies">All Movies</p>
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} 
                            onClick={() => navToDetail(item)}
                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 10 }} />}
                    </Fragment>
                ))}
                </div>
            </div>
        </>
    );
}
