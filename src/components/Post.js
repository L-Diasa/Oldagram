import React, {useState} from "react"

export default function Post(props) {
    const [likes, setLikes] = useState(props.likes)
    const [popUpHeart, setPopUpHeart] = useState("hidden")
    const [iconHeart, setIconHeart] = useState("icon-heart")

    const likesText = () => {
        const text = likes ? likes === 1 ? "like" : "likes" : ""
        const num = likes ? likes.toString().replace(/(.)(?=(\d{3})+$)/g,'$1,') : ""
        return num + ' ' + text
    }

    function likePostImageHeart() {
        setPopUpHeart("")
        setTimeout(() => {
            setPopUpHeart("hidden")
        }, 1000)
        if(iconHeart === "icon-heart") {
            setIconHeart("icon-heart-filled-red")
            setLikes(prev => prev + 1)
        }
    }

    function likeIconHeart() {
        if(iconHeart === "icon-heart") {
            setIconHeart("icon-heart-filled-red")
            setLikes(prev => prev + 1)
        } else {
            setIconHeart("icon-heart")
            setLikes(prev => prev - 1)
        }
    }

    return (
        <div className="post-contect">
            <div className="post-header">
                <img src={`${props.avatar}`} alt=""  />
                <div>
                    <p className="bold">{props.name}</p>
                    <p className="post-header-location">{props.location}</p>
                </div>
            </div> 
            <div className="post-image-section">
            <img src={`${props.post}`} alt="" 
                className="post-image-section-post" 
                onDoubleClick={likePostImageHeart} 
            />
            <img src="images/icon-heart-filled.png" alt=""  
                className={`post-image-section-heart ${popUpHeart}`} />
            </div>
            <div className="post-interaction">
                <img src={`images/${iconHeart}.png`} alt="" 
                    className={iconHeart} onClick={likeIconHeart}/>
                <img src="images/icon-comment.png" alt=""  />
                <img src="images/icon-dm.png" alt=""  />
            </div>
            <p className="bold post-likes-text">{likesText()}</p>
            <div className="post-caption">
                <span className="bold">
                    {props.username}</span> {props.comment}
            </div>
        </div>
    )
}
