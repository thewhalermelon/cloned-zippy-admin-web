import { ApiResponse } from '../types';

const BASE_URL = 'https://your-api-domain.com/api';

async function fetchAPI<T>(url: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('JWT_TOKEN');

  const headers = new Headers({
    'Content-Type': 'application/json',
    ...options.headers,
  });

  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  const fetchOptions: RequestInit = {
    ...options,
    headers,
  };

  const response = await fetch(`${BASE_URL}${url}`, fetchOptions);

  if (!response.ok) {
    const errorData: { error: string } = await response.json();
    throw new Error(errorData.error || 'Unknown Error');
  }

  if (options.method === 'DELETE' || response.status === 204) {
    return null as any;
  }

  return response.json();
}

export function get<T>(url: string): Promise<ApiResponse<T>> {
  return fetchAPI<ApiResponse<T>>(url);
}

export function post<T>(url: string, data: object): Promise<ApiResponse<T>> {
  return fetchAPI<ApiResponse<T>>(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function put<T>(url: string, data: object): Promise<ApiResponse<T>> {
  return fetchAPI<ApiResponse<T>>(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export function del<T>(url: string): Promise<ApiResponse<T>> {
  return fetchAPI<ApiResponse<T>>(url, {
    method: 'DELETE',
  });
}
