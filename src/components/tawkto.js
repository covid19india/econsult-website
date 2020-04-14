import React from 'react';

function TawkTo(props) {
  return (
    <React.Fragment>
      <script>
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); (function()
        {`
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5e8b4c8669e9320caac0cb4a/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    `}
        )();
      </script>
      <div className="tawktoContainer">
        <iframe
          width="100%"
          height="100%"
          className="iframeCustom"
          src="https://tawk.to/chat/5e8b4c8669e9320caac0cb4a/default"
        ></iframe>
      </div>
    </React.Fragment>
  );
}

export default TawkTo;
