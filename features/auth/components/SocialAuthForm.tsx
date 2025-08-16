import React from "react";

import SocialAuthButton from "./SocialAuthButton";

const SocialAuthForm = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <SocialAuthButton
        icon="/icons/github.svg"
        text="Log in with Github"
        alt="Github Logo"
        provider="github"
      />
      <SocialAuthButton
        icon="/icons/google.svg"
        text="Log in with Google"
        alt="Google Logo"
        provider="google"
      />
    </div>
  );
};

export default SocialAuthForm;
