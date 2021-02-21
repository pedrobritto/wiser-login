import type { NextApiRequest, NextApiResponse } from "next";

interface ResponseType {
  success: boolean;
  error_code?: "INVALID_CREDENTIALS";
  token?: "EXAMPLE_TOKEN";
}

export default (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
): void => {
  const { email } = req.body;

  if (email.includes("error@")) {
    res.status(401).json({
      success: false,
      error_code: "INVALID_CREDENTIALS",
    });
  } else {
    res.status(200).json({
      success: true,
      token: "EXAMPLE_TOKEN",
    });
  }
};
