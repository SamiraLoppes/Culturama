import "./index.css"

export type SliderCardProps = {
    img: string;
    description?: string;
}

export function SliderCard({img,description}:SliderCardProps){
    return(
        <div className="slide">
            <img src={img} alt={description} className="carousel-img" />
            {description && (
                <div className="container-description">
                    <p className="description">{description}</p>
                </div>
            )}
        </div>

    )
}
