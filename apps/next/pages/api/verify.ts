import { NextApiRequest, NextApiResponse } from 'next';
import qs from 'querystring';
import axios, { AxiosResponse } from 'axios';

type RecaptureErrorCodes =
  | 'missing-input-secret'
  | 'invalid-input-secret'
  | 'missing-input-response'
  | 'invalid-input-response'
  | 'bad-request'
  | 'timeout-or-duplicate';

interface IRecaptureData {
  challenge_ts: string; // ISO-Format DateTime
  hostname: string;
}

interface IRecaptchaSuccess extends IRecaptureData {
  success: true;
}

interface IRecaptchaError extends IRecaptureData {
  success: false;
  'error-codes': Array<RecaptureErrorCodes>;
}

type IRecaptchaResponse = IRecaptchaSuccess | IRecaptchaError;

const handleVerify = async (req: NextApiRequest): Promise<IRecaptchaSuccess> => {
  const { response } = req.body;
  const secret = process.env.RECAP_SECRET;
  const requestBody = {
    secret,
    response
  };
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  try {
    const { data }: AxiosResponse<IRecaptchaResponse> = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      qs.stringify(requestBody),
      config
    );
    if (data.success === false) {
      throw data['error-codes'];
    }
    return data;
  } catch (error: unknown) {
    return Promise.reject(error);
  }
};

const verifyHandler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await handleVerify(req);
    res.status(200).send({ data });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};

export default verifyHandler;
