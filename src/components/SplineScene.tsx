import Spline from '@splinetool/react-spline/next';

export default function SplineScene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Spline 
        scene="https://my.spline.design/untitled-b2c6b3c6950c362f6478c2d7f8f0d957/"
      />
      {/* Cool floating geometric shapes from Spline community */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
    </div>
  );
} 