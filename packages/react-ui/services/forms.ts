import axios from 'axios';

interface formResponse {
  data?: any;
  error?: string;
}

type requestBody = {
  Name: string;
  Email: string;
  Phone: string;
  Subject: string;
  Message: string;
};

const postFormData = async (requestBody: requestBody): Promise<formResponse> => {
  try {
    const res: formResponse = await axios({
      url: '/api/forms',
      method: 'post',
      data: requestBody
    });
    const { data, error } = res;
    if (error) throw new Error(error);
    return { data };
  } catch (error: any) {
    console.log(error);
    return { error: error.message || JSON.stringify(error) };
  }
};

export default postFormData;
