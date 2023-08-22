import { Carousel } from '@/components/carousel';
import { ThreeItemGrid } from '@/components/grid/three-items';
import Footer from '@/components/layout/footer';
import { AvatarComponent } from '@/components/ui/Avatar/Avatar';
import { Suspense } from 'react';

export const runtime = 'edge';

export const revalidate = 43200; // 12 hours

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Medusa.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
		<>
			{/* <ThreeItemGrid /> */}
			{/* <Suspense> */}
				<AvatarComponent
					src='/images/hero.png'
					fallback='/nextjs-commerce/public/images/hero.png'
				/>
				{/* <Carousel />
        <Suspense>
          <Footer />
        </Suspense> */}
			{/* </Suspense> */}
		</>
  );
}
