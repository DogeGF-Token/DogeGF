import { useState, useEffect } from 'react';
import axios from 'axios';

import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from 'app/constants';

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
        `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
        JSON.stringify({ query }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
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
