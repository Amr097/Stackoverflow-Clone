"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

type SocialAuthButtonProps = {
  icon: string;
  text: string;
  alt?: string;
  provider: "google" | "github";
};

const SocialAuthButton: React.FC<SocialAuthButtonProps> = ({
  icon,
  text,
  alt,
  provider,
}) => {
  const handleSignIn = async () => {
    try {
      await signIn(provider, { callbackUrl: ROUTES.HOME, redirect: true }).then(
        () => {
          toast.success("Successfully logged in");
        }
      );
    } catch (error) {
      console.log(error);
      toast.error("Failed to login");
    }
  };

  return (
    <Button
      className="background-dark400_light900 body-medium text-dark-200_light800 rounded-2 min-h-12 px-4 py-3.5"
      onClick={handleSignIn}
    >
      <Image
        src={icon}
        alt={alt || text}
        width={20}
        height={20}
        className="invert-colors mr-2.5 object-contain"
      />
      <span>{text}</span>
    </Button>
  );
};

export default SocialAuthButton;
