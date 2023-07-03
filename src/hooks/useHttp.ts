import {useState, useCallback} from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const request = useCallback(
    async (
      url: string,
      method = 'GET',
      body: null | string | any = null,
      headers: any = {},
    ) => {
      try {
        if (body) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
        }
        const response = await fetch(url, {method, body, headers}).then(
          response => {
            return response;
          },
        );
        const data = await response.json();
        console.log(
          '%c jordan response',
          'color: lime; font-weight: bold; font-size: 16px; text-transform: uppercase',
          response,
          data,
        );
        if (!response.ok) {
          throw new Error(data.message || 'Something is wrong.. users');
        }
        setLoading(true);
        return data;
      } catch (error) {
        console.log('%c jordan error--', 'color: lime;', error);
        setLoading(false);
        let errorMessage = 'Failed to request';
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        setError(errorMessage);
        throw error;
      }
    },
    [],
  );

  const clearError = () => setError('');

  return {
    loading,
    request,
    error,
    clearError,
  };
};
