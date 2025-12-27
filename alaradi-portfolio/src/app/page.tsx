import { House  } from 'lucide-react';
export default function Home() {
  return (
    <div className="container mx-auto pt-8 flex flex-col gap-4">
      <div className='flex items-center gap-2'>
        <House  color="#ccc" size={38} />
        <h2>Home page</h2>
      </div>
      <div>
        <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into .</p>
      </div>
    </div>
  );
}
