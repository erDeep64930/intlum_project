

export const Academics = () => {
  return (
    <seniorSchool className="wrapper relative">
      <div className="container grid grid-cols-1 md:grid-cols-2 h-[600px] pb-4">
       
        <div id="bg_rightHeart">
          <div
            className="bg-fadedGreen w-[35%] h-[65%] absolute left-28 top-24 z-0"
          ></div>
          <img
            src="./images/seniorSchool/seniorSch.png"
            alt="pic"
            className="z-40 absolute w-[35%] h-[60%] top-28 left-48"
          />
         
          <img
            src="./images/chooseUs/cross.png"
            alt="animated pic"
            className="absolute icon-zigzag top-24 left-28"
          />
          <img
            src="./images/chooseUs/red_triangle.png"
            alt="animated pic"
            className="absolute icon-triangle top-24 left-96"
          />
          <img
            src="./images/chooseUs/circle.png"
            alt="animated pic"
            className="absolute icon-circle bottom-24 left-96"
          />
          <img
            src="./images/chooseUs/cross.png"
            alt="animated pic"
            className="absolute icon-plus bottom-24 left-24"
          />
         
        </div>
       

      
        <div className="gap-10 items-center pb-4 pt-8" id="bg_senior_school">
          <h4 className="text-buttonColor pb-4">LOREM IPSUM</h4>
          <h2 className="font-extra-thin pb-4 border-b border-gray-300">
            SENIOR SCHOOL
          </h2>
          <h2 className="font-extra-thin pb-4 border-b border-gray-300">
            JUNIOR SCHOOL
          </h2>
          <h2 className="font-extra-thin pb-4 border-b border-gray-300">
            PRE-PRIMARY SCHOOL
          </h2>
        </div>
        
      </div>
    </seniorSchool>
  )
}

