import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Home() {
  const PreloadedAffirmations = [
    "It’s okay to feel a little scared, but I trust the process. I trust my intuition. I know things are aligning for me.",
    "I am ready for what I’ve asked for. I trust that it’s already mine, and I welcome it with open arms.",
    "I trust the process of life. Everything is unfolding in perfect timing. I am exactly where I need to be, and I welcome what’s coming with an open heart.",
    "I am open to receiving the love and partnership I deserve. I trust myself to navigate this new chapter with grace and excitement. I am ready for all the good things coming my way."
  ];

  // const getRandomAffirmation = () => {
  //   return preloadedAffirmations[Math.floor(Math.random() * preloadedAffirmations.length)];
  // };

  const [affirmation, setAffirmation] = useState("");
  const [affirmations, setAffirmations] = useState(PreloadedAffirmations);

  useEffect(() => {
    const savedAffirmations = localStorage.getItem("affirmations");
    if (savedAffirmations) {
      const combinedAffirmations = [...PreloadedAffirmations, ...JSON.parse(savedAffirmations)];
      setAffirmations(combinedAffirmations);
      console.log(combinedAffirmations);

    }
  }, []);

  useEffect(() => {
    if (affirmations.length > 0) {
      setAffirmation(affirmations[Math.floor(Math.random() * affirmations.length)]);
    }
  }, [affirmations]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-white mb-4">COMING SOON!</h1>
      {/* <p className="text-xl italic text-white mb-6">{affirmation}</p>
      <button
        onClick={() => setAffirmation(affirmations[Math.floor(Math.random() * affirmations.length)])}
        className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
      >
        Affirm Me Bitch!
      </button>

      <Link href="/add-affirmation" className="mt-6 text-white underline">Add your own affirmation
      </Link> */}
    </div>
  );
}
