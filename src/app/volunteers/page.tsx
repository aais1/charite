import Volunteers from "@/components/inner-pages/volunteers";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Volunteers HopeHUB",
};
const index = () => {
   return (
      <Wrapper>
         <Volunteers />
      </Wrapper>
   )
}

export default index