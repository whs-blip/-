/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './components/ThemeProvider';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Studio } from './pages/Studio';
import { Pattern } from './pages/Pattern';
import { Fabric } from './pages/Fabric';
import { Mood } from './pages/Mood';
import { Gallery } from './pages/Gallery';
import { Models } from './pages/Models';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="studio" element={<Studio />} />
            <Route path="pattern" element={<Pattern />} />
            <Route path="fabric" element={<Fabric />} />
            <Route path="mood" element={<Mood />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="models" element={<Models />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
