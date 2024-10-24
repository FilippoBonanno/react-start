function Card({ title, imgUrl, isVisited, children }) {





    return (
        <div className="rounded-md bg-zinc-950" >
            <img className="w-full" src={imgUrl} alt=""></img>
            <div className="flex flex-col p-4">
                <h2 className="text-2xl font-bold text-white" >{title}</h2>
                <p className="text-gray-500 mb-2">{children}</p>
                {/* SE è VERO FAI VEDERE QUESTO ALTRIMENTI QUELLO */}
                <span>{isVisited ? "Visited" : "Not Visited"}</span>
                {/* E ALLORA FAI VEDERE QUESTO  */}
                <span>{isVisited && "My Favorite"}</span>

            </div>

        </div>
    );
}

export default Card;