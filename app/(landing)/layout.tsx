import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-full bg-[#252525]">
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
        </div>
     );
}
 
export default LandingLayout;