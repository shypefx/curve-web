// Import necessary components
import Link from 'next/link';

// Metadata for the page
export const metadata = {
  title: 'Tarifs - CurveWeb',
  description: 'Découvrez nos forfaits et tarifs pour les services CurveWeb.',
};

// Pricing component
export default function Pricing() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1" data-aos="fade-up">Nos Tarifs</h1>
          </div>

          {/* Pricing plans */}
          <div className="flex flex-wrap -mx-4 justify-center">

            {/* Plan 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-black text-2xl font-semibold mb-4">Formule Start</h2>

                <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span className="text-black">Réalisation d'un site vitrine</span>
                </li>
                <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span className="text-black">Catégorie</span>
                </li>
                <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span className="text-black">Photos</span>
                </li>
                <li className="flex items-center mb-2">
                <svg className="w-4 h-4 fill-current text-green-500 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="#ff0019" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
                    <span className="text-black">aaaaaaaaa</span>
                </li>
                <p className="text-blue-600 font-bold text-lg mb-4">à partir de 150€</p>
                <Link href="/contact" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Commencer</Link>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
                <h2 className="text-2xl font-semibold mb-4">Plan Avancé</h2>
                <p className="text-gray-500 mb-4">Pour les entreprises en croissance</p>
                <p className="text-purple-600 font-bold text-lg mb-4">49,99 € / mois</p>
                <Link href="/contact" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Commencer</Link>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="900">
                <h2 className="text-2xl font-semibold mb-4">Plan Premium</h2>
                <p className="text-gray-500 mb-4">Idéal pour les grandes entreprises</p>
                <p className="text-purple-600 font-bold text-lg mb-4">99,99 € / mois</p>
                <Link href="/contact" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Commencer</Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
