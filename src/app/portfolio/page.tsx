import Portfolio from "@/components/portfolio/portfolio";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Portfolio HopeHUB",
};
const index = () => {
   return (
      <Wrapper>
         <Portfolio />
      </Wrapper>
   )
}

export default index