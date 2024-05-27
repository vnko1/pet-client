"use client";
import React from "react";

import { UIButton } from "@/components";
import { IconEnum } from "@/types";

function UserError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-wrapper">
      <p>{error.message.toUpperCase()}</p>
      <div className="error-wrapper__btn">
        <UIButton
          onClick={() => reset()}
          icon={IconEnum.PET}
          variant="contained"
          color="secondary"
          alignIcon="right"
          fullWidth
        >
          Reload
        </UIButton>
      </div>
    </div>
  );
}

export default UserError;
