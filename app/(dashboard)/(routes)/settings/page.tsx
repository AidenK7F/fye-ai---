import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title="Settings"
        description="Mangage your account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on the Plus plan."
            : "You are currently on the Free plan."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
      <div className="text-gray-700 mt-6 ml-8">
        v.1.3 - Update Logs
        <hr className="text-gray-500" />
        Update 1.3 -
        <div className="text-gray-500">
          • Image Generation model upgraded from 4o to DALLE-3 - for better
          image generation.
          <br />
          • Code, Error, Math, and Conversation models upgraded from 4o to
          4o-mini - for quicker responses.
          <br />
          • Image Generation disabled.
          <br />
          • Music Generation disabled.
          <hr className="text-gray-500" />
          <div className="text-gray-700">
            <br />
            Future Plans:
            <br />
            <div className="text-gray-500">
            • Code, Error, Math, and Conversation models being upgraded to o1 models - when o1 gets officially released.
                <br />
               • Video Generation Officially Released with New & Best Replicate AI.
            Models.
            <br />• Music Generation Officially Released with New & Best
            Replicate AI Models. 
            <br />
            • New chatbots.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
