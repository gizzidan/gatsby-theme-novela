import React, { useEffect } from 'react';
import styled from "@emotion/styled";

const useDfpSlot = ({ path, size, id }) => {
  useEffect(() => {
    const googletag = window.googletag || {};
    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(function() {
      googletag.defineSlot(path, size, id)
        .addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
    });
    googletag.cmd.push(function() {
      googletag.display(id);
    });
  }, [path, size, id]);
};

const Leaderboard = () => {
  useDfpSlot({
   path: '/21862636432/home_top_leaderboard',
   size: [[320, 50], [728, 90]],
   id: 'div-gpt-ad-1574293347474-0',
  });
 return (
   <div
     id="div-gpt-ad-1574293347474-0"
   />
 )
};

export default Leaderboard;