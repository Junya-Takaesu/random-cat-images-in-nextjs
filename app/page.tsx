import Image from "next/image";
// import CatImageUseClient from '@/components/CatImageUseClient';
import CatImageUseServer from '@/components/CatImageUseServer';

export default function Home() {

  return (
    <div>
      <CatImageUseServer />
    </div>
  );
}
