import Wrapper from "@/layout/Wrapper";
import HeaderOne from "@/layout/headers/HeaderOne";
import FooterOne from "@/layout/footers/FooterOne";

export const metadata = {
   title: "Contact Us HopeHUB",
};
const index = () => {
   return (
      <>
      <Wrapper>
         <div>
         <div className="d-flex p-5 justify-content-center gap-5">
            <div className="">
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3401.8572628597262!2d74.3202719!3d31.500607000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919055f653840d3%3A0x41ec31c45b542850!2sBarkat%20Market!5e0!3m2!1sen!2s!4v1716673226150!5m2!1sen!2s" width={600} height={450} ></iframe>
            </div>
            <div className="w-50">
               <h2>Contact US</h2>
               <br/>
               <p>Lorem ipsum something goes here Lorem ipsum something goes hereLorem ipsum something goes hereLorem ipsum something goes here</p>
               <div className="text-bg-secondary p-4 rounded-5">
                  <strong>NO # 03173353047</strong><br />
                  <strong>Email : Faizansattar1020@gmail.com</strong><br />
                  <strong>Location : Barkat market lahore</strong><br />
               </div>
            </div>
         </div>
         <div className="w-75 mx-auto text-center mt-2 mb-4">
            <div className="d-flex justify-content-between">
               <div>
                  <p className="fw-bold text-dark">Find us on Facebook</p>
               </div>
               <div>
                  <p className="fw-bold text-dark">Follow Us on Instagram</p>
               </div>
               <div>
                  <p className="fw-bold text-dark">Find Us on Twitter</p>
               </div>
            </div>
            <hr />
            <h2 className="text-center pt-4">SEND MESSAGE</h2>
            <form action="">
               <div className=" d-flex flex-column gap-3" >
               <div className="d-flex column-gap-3">
               <input type="text" className="py-2 px-4 w-50 rounded-3" placeholder="Your Name"/>
               <input type="text" className="py-2 px-4 w-50 rounded-3" placeholder="Your Email" />
               </div>
               <div>
                  <input type="text" className="py-2 px-4 w-100 rounded-3" placeholder="Your Phone" />
               </div>
               <div>
                  <textarea className="py-2 w-100 px-4 rounded-3" rows={10}  placeholder="Your Message" />
               </div>
               </div>
               <button className="bg-dark text-white rounded-2 my-4 px-2 py-1">Submit</button>
            </form>
         </div>
         </div>
      </Wrapper>
      </>
   )
}

export default index