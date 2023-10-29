import { useState } from "react"

export function HomePageCards(){

    const img1 = 'https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png'
    const img2 = 'https://images.ctfassets.net/rz1oowkt5gyp/3ZjLCD2fANfXYSN3ar9WpE/dc84a408c6a3ee89bee4a646ff6d5966/Lists_2x.png'
    const img3 = 'https://images.ctfassets.net/rz1oowkt5gyp/26CA6JZeRgoOK4nuRHnIlY/060702a80cf7c3be3651d9297d196267/Carousel_Image_Cards_2x.png'
    
    const [img, setImg] = useState(img1)
    
    return(
        <div className='productivity-slider-container'>
                <div className='slider-layout'>

                    <div className='cards'>
                        <button autoFocus onClick={() => setImg(img1)} className={(img===img1)?'card active':'card'}>
                            <h4>Boards</h4>
                            <p>Trilili boards keep tasks organized and work moving
                                forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”</p>
                        </button>
                        <button onClick={() => setImg(img2)} className={(img===img2)?'card active':'card'}>
                            <h4>Lists</h4>
                            <p>The different stages of a task. Start as simple as
                                To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trilili.</p>
                        </button>
                        <button onClick={() => setImg(img3)} className={(img===img3)?'card active':'card'}>
                            <h4>Cards</h4>
                            <p>Cards represent tasks and ideas and hold all
                                the information to get the job done. As you make progress, move cards across lists to show their status.</p>
                        </button>
                    </div>

                    <div className='images-slider '>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>

    )
}