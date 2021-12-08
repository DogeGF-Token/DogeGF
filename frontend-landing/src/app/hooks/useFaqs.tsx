import { useState, useEffect } from 'react';
import axios from 'axios';

const query = `{
  faqCollection {
    items {
      question
      answer {
        json
      }
    } 
  }
}`;

const useFaqs = (initialFaqs: any) => {
  const [faqs, setFaqs] = useState(initialFaqs);

  useEffect(() => {
    axios
      .post(
        'https://graphql.contentful.com/content/v1/spaces/7kpsd4jzl1w6/',
        JSON.stringify({ query }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer pfF4Xe-FjFXm2FB8Kws-4baQZsxwpVDMZR6nEgJoZ2Y',
          },
        }
      )
      .then((res) => {
        setFaqs(res.data.data.faqCollection.items);
      });
  }, []);

  return [faqs];
};

export default useFaqs;
