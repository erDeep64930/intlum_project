export const Navbar = () => {
  return (
    <div>
      <div class="wrapper bg-black text-gray-100">
        <div class="max-w-6xl mx-auto gap-4 mr-2 ml-2">
          <div class="flex flex-col md:flex-row justify-between items-center p-5 text-xs">
            <div>
              <div className="mb-4">
                Ranked NO1 School- Times of India | Date: January 16, 2014 |
              </div>
            </div>
            <div class="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                For enquiry Call us at :
                <span class="text-limeGreen">+9112345678</span>
                <span class="text-gray-500">|</span>
                <span class="text-limeGreen">+9112345678</span>
              </div>
              <button class="btn">EMAIL LOG IN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
