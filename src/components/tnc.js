import React, {useState, useEffect} from 'react';
import axios from 'axios';

function TNC(props) {
  const [tnc, setTnc] = useState([]);

  useEffect(() => {
    getTnc();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getTnc = () => {
    axios
      .get('https://econsult-api-lovat.now.sh/tnc')
      .then((response) => {
        setTnc(response.data['tnc']);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="FAQ">
      {tnc.map((tnc, index) => {
        return (
          <div
            key={index}
            className="faq fadeInUp"
            style={{animationDelay: `${0.5 + index * 0.1}s`}}
          >
            
            {tnc.tncno} . <h3
              className="answer"
              dangerouslySetInnerHTML={{__html: tnc.tncvalue}}
            ></h3>
          </div>
        );
      })}
    </div>
  );
}

export default TNC;
