import { token } from "./api-endpoints";

type ApiResponse<T> = {
  success: boolean;
  data?: any;
  error?: string;
};

const BASE_URL = process.env.NODE_ENV === "development" ? "http://3.110.210.35:5000/api/v1/admin" : "http://3.110.210.35:5000/api/v1/admin";
const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    "x-auth": token,
  }
}
async function handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
  if (response.ok) {
    const data = await response.json();
    return { success: true, data };
  } else {
    const error = await response.text();
    return { success: false, error };
  }
}

export async function get<T>(url: string, headers?: object): Promise<ApiResponse<T>> {
  url = BASE_URL + url
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        ...getHeaders(),
        ...headers,
      }
    });
    return await handleResponse<T>(response);
  } catch (error) {
    return { success: false, error: 'An error occurred during the request.' };
  }
}

export async function post<T>(
  url: string,
  body: object,
  headers?: object,
): Promise<ApiResponse<T>> {
  url = BASE_URL + url
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        ...getHeaders(),
        ...headers,
      },
      body: JSON.stringify(body),
    });
    return await handleResponse<T>(response);
  } catch (error) {
    return { success: false, error: 'An error occurred during the request.' };
  }
}

export async function put<T>(
  url: string,
  body: object
): Promise<ApiResponse<T>> {
  url = BASE_URL + url
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers as needed
      },
      body: JSON.stringify(body),
    });
    return await handleResponse<T>(response);
  } catch (error) {
    return { success: false, error: 'An error occurred during the request.' };
  }
}

export async function del<T>(url: string): Promise<ApiResponse<T>> {
  url = BASE_URL + url
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers as needed
      },
    });
    return await handleResponse<T>(response);
  } catch (error) {
    return { success: false, error: 'An error occurred during the request.' };
  }
}