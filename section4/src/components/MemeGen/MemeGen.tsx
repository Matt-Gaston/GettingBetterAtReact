import { useState, useEffect } from "react";
import "./MemeGen.css"



function MemeGen() {
    type ImgFlipMeme = {
        box_count: number,
        captions: number,
        height: number,
        id: string,
        name: string,
        url: string,
        width: number
    }

    const [meme, setMeme] = useState({
        topText:"One does not simply",
        bottomText:"Walk into Mordor",
        image_src: "http://i.imgflip.com/1bij.jpg"})

    const [allMemes, setAllMemes] = useState<ImgFlipMeme[]>([])

    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then( (res) => res.json() )
            .then( (data) => setAllMemes(data.data.memes))
    }, [])

    function handleTextChange (event: React.ChangeEvent<HTMLInputElement>){
        const {value, name} = event.currentTarget
        setMeme((prev_meme) => ({
            ...prev_meme,
            [name]: value
        }))
    }


    function randomChangeMemeImg () {
        const image_index = Math.floor(Math.random() * allMemes.length);
        const image_url = allMemes[image_index].url
        setMeme( (prev_meme) => ({
            ...prev_meme,
            image_src: image_url
        }
        ))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleTextChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleTextChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={randomChangeMemeImg}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.image_src} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}

export default MemeGen;