import { z } from "zod";

export const signUpOtpSchema = z.object({
    otp: z
      .array(z.string().length(1, "Each OTP digit should be 1 character"))
      .length(6, "OTP must be 6 digits"),
  });


