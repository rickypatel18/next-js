import Image from "next/image";

// const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
//     return `https://st5.depositphotos.com/${src}?w=${width}&q=${quality || 75}`;
//   };

const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
  }

export default function ImagePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Next.js Image Optimization</h1>

      {/* Local Image */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Local Image</h2>
        <Image
          src="https://st5.depositphotos.com/23188010/77062/i/450/depositphotos_770624600-stock-photo-green-field-morning-render-illustration.jpg" // Ensure this image is inside /public
          alt="Next.js Logo"
          width={300}
          height={150}
          style={imageStyle}
        />
      </div>

      {/* Remote Image (Example from Unsplash) */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Remote Image</h2>
        <Image
          src="https://st5.depositphotos.com/23188010/77062/i/450/depositphotos_770624600-stock-photo-green-field-morning-render-illustration.jpg"
          alt="Random Nature"
          width={500}
          height={300}        
          className="rounded-lg h-auto w-auto"
        />
      </div>

      {/* Responsive Image (Using layout fill) */}
      <div className="relative w-full h-[300px] mb-6">
        <h2 className="text-xl font-semibold">Full Width Responsive Image</h2>
        <Image
          src="https://st5.depositphotos.com/23188010/77062/i/450/depositphotos_770624600-stock-photo-green-field-morning-render-illustration.jpg"
          alt="Technology"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg"
          //   loader={imageLoader}
          placeholder="empty"
          priority // Loads instantly

        />
      </div>
    </main>
  );
}
