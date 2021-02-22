import { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void> => {
    setIsLoading(true);

    try {
      const response = await axios.post("/api/auth", {
        email,
        password,
      });

      setResponse(response.data);
    } catch (error) {
      setResponse(error.response.data);
    }

    setIsLoading(false);
  };

  return { onSubmit, isLoading, response };
};

export default useLogin;
