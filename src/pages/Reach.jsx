

export const Reach = () => {
  return (
    <chooseUs className="wrapper relative">
      <div className="container grid grid-cols-1 md:grid-cols-2 h-[600px] pb-4">
        
        <div className="gap-10 items-center pb-4 pt-8 " id="bg_college">
          <h4 className="text-buttonColor pb-4">Why choose us</h4>
          <h2 className="font-extra-thin pb-4">LOREM IPSUM</h2>
          <div className="items-start pb-4">
            one of the most premier and most progressive educational
            institutions in India ! More about school
          </div>
          <button className="btn pb-4">Explore More</button>
        </div>
       
        <div id="bg_leftHeart">
          <div
            className="bg-lightOrange w-[35%] h-[65%] absolute right-28 top-24 z-0"
          ></div>
          <img
            src="./images/chooseUs/classNameromm.png"
            alt="pic"
            className="z-40 absolute w-[35%] h-[60%] top-28 right-48"
          />
          
          <img
            src="./images/chooseUs/cross.png"
            alt="animated pic"
            className="absolute icon-zigzag top-24 right-28"
          />
          <img
            src="./images/chooseUs/red_triangle.png"
            alt="animated pic"
            className="absolute icon-triangle top-24 right-96"
          />
          <img
            src="./images/chooseUs/circle.png"
            alt="animated pic"
            className="absolute icon-circle bottom-24 right-96"
          />
          <img
            src="./images/chooseUs/cross.png"
            alt="animated pic"
            className="absolute icon-plus bottom-24 right-24"
          />
          <img src="./images/chooseUs/red_triangle.png" alt="animated pic" className="absolute icon-triangle top-96 right-96"/> 
        
        </div>
        
      </div>
    </chooseUs>
  )
}
