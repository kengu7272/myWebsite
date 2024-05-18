export default function Badge({ word }: { word: string }) {
  return (
    <div className="px-2 font-semibold text-white py-1 w-fit text-xs bg-sky-400 rounded-lg">
      {word} 
    </div>
  );
}
