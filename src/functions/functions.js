import axios from "axios";
import { useEffect } from "react";

export const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title && title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        // return the result
        return ` ${newTitle.join(' ')}...`;
    }
    return title;
}

export const useErrorHandler = () => {  

    const errorInterceptor = axios.interceptors.response.use(
      res => res,
      error => {
        if (error?.response?.status) {
          switch (error.response.status) {
            case 401:
              // Actions for Error 401
              throw error;
            case 500:
              // Actions for Error 500
              throw error;
            default:
              console.error('from hook interceptor => ', error);
              throw error;
          }
        } else { // Occurs for axios error.message = 'Network Error'
          throw error;
        }
      }
    );
  
    useEffect(() => {
      return () => {
        axios.interceptors.response.eject(errorInterceptor);
      };
    });
  };