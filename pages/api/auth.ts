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

  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  if (email.includes("erro@")) {
    res.status(401).json({
      success: false,
      error_code: "INVALID_CREDENTIALS",
    });

    return;
  }

  res.status(200).json({
    success: true,
    token: "EXAMPLE_TOKEN",
  });

  return;
};
