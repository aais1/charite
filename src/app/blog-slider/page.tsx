import BlogSlider from "@/components/blogs/blog-slider";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Blog Slider HopeHUB",
};
const index = () => {
   return (
      <Wrapper>
         <BlogSlider />
      </Wrapper>
   )
}

export default index