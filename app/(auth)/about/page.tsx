// Import necessary components
import Link from 'next/link';

// Metadata for the page
export const metadata = {
  title: 'À Propos de Nous - CurveWeb',
  description: 'Découvrez-en plus sur CurveWeb et notre mission.',
};

// AboutUs component
export default function AboutUs() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">À Propos de CurveWeb</h1>
          </div>

          {/* About content */}
          <div className="max-w-sm mx-auto text-gray-300">
            <p className="mb-6">
              CurveWeb est dédié à simplifier l'entrepreneuriat. Nous croyons en fournissant des solutions innovantes pour rendre le parcours des entrepreneurs plus fluide et plus efficace.
            </p>
            <p className="mb-6">
              Chez CurveWeb, nous nous efforçons de créer des solutions web qui répondent aux besoins uniques des entreprises. Que vous débutiez ou cherchiez à améliorer votre présence en ligne, nous avons ce qu'il vous faut.
            </p>
            <p className="mb-6">
              Notre équipe est passionnée par la technologie, le design et les possibilités infinies qu'ils offrent. Nous nous engageons à fournir des sites web et des expériences numériques de haute qualité qui donnent aux entreprises les moyens de réussir à l'ère numérique.
            </p>
            <p className="mb-6">
              Rejoignez-nous dans cette aventure passionnante alors que nous ouvrons la voie à une expérience entrepreneuriale plus accessible et rationalisée.
            </p>
          </div>

          {/* Call to action */}
          <div className="flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3">
              <Link href="/contact" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Contactez-nous</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
