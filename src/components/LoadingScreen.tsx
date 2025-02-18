import { TypewriterEffectSmooth } from './ui/typeWritterEffect'

export default function LoadingScreen() {
  const words = [
    {
      text: "Loading",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-black text-off-white w-full h-screen">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}