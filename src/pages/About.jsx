

export const About = () => {
  return (
    <div className="wrapper h-[450px]" id="bg_principal">
    <div className="container">
      <div className="flex flex-col md:flex-row">
       
        <div className="justify-center items-center">
          <div
            className="w-[60%] h-[60% ] m-10 pt-8 pl-8 pr-8 animate-trans-right space-y-10"
          >
            <img src="./images/principal/principal_mam.png" alt="" />
            <div className="text-xs">
              Mrs. Indrani Sanyal
              <span className="text-navbarColor">Principal</span>
            </div>
            <div className="text-xs">13th june,2020</div>
          </div>
        </div>
      
        <div className="justify-center items-center">
          <div className="w-[70%] h-[60% ] m-10 pt-8 pl-8 pr-8 space-y-10">
            <h1>
              Principal's<br /><span className="text-navbarColor">Message</span>
            </h1>
            <div className="text-xs">
              <span className="text-navbarColor">Lorem ipsum</span>Lorem ipsum
              dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, ad.
            </div>
            <button className="px-5 py-2 text-white bg-navbarColor">
              Read More
            </button>
          </div>
        </div>
       
        <div className="p-10">
          <h1>NOTICE</h1>
          <div>
           
            <div className="flex p-4 justify-between items-center">
              <img src="./images/principal/error.png" alt="" className="h-7" />
              <div>Fee structure and academic session 2021-22</div>
            </div>
           
            <div className="flex p-4 justify-between items-center">
              <img src="./images/principal/error.png" alt="" className="h-7" />
              <div>
                admission notice for XI for internal Studies only , Session
                2021-22
              </div>
            </div>
          
            <div className="flex p-4 justify-between items-center">
              <img src="./images/principal/error.png" alt="" className="h-7" />
              <div>Online Payment Portal for the fees</div>
            </div>
           

           
            <div className="flex p-4 justify-between items-center">
              <img src="./images/principal/error.png" alt="" className="h-7" />
              <div>Parents notice for Transport Fee</div>
            </div>
           
            <button className="px-5 py-2 text-white bg-navbarColor">
              VIEW ALL
            </button>
          </div>
        </div>
      
      </div>
    </div>
  </div>
  )
}

