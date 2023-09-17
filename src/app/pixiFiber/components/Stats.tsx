import { useLayoutEffect } from 'react';
import StatsJS from 'stats.js';

export const Stats = () => {
  useLayoutEffect(() => {
    const stats = new StatsJS();
    // document.body.appendChild(stats.domElement);
    document.body.appendChild( stats.dom );

    let rafId:number;
    const update = () => {
      stats.update();
      rafId = window.requestAnimationFrame(update);
    };
    update();

    return function cleanup() {
      window.cancelAnimationFrame(rafId);
      // document.body.removeChild(stats.domElement);
      document.body.appendChild( stats.dom );
    };
  }, []);

  return null;
};
