export default function Badge({ word }: { word: string }) {
  return (
    <div className="px-2 text-gray-600 shadow-sm py-1 w-fit text-xs bg-blue-200/30 rounded-lg">
      {word} 
    </div>
  );
}
