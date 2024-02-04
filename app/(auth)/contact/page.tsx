// Import necessary components
import Link from 'next/link';

// Metadata for the page
export const metadata = {
  title: 'Contactez-nous - CurveWeb',
  description: 'Contactez CurveWeb pour des questions et collaborations.',
};

// ContactUs component
export default function ContactUs() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Contactez nous.</h1>
          </div>

          {/* Contact form */}
          <div className="max-w-md mx-auto text-gray-300">
            <p className="mb-6">
              Nous serions ravis d'avoir de vos nouvelles ! Que vous ayez des questions sur nos services ou que vous souhaitiez discuter d'une collaboration, utilisez le formulaire ci-dessous pour nous contacter.
            </p>

            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-sm font-medium mb-1" htmlFor="name">Votre Nom</label>
                  <input id="name" type="text" className="form-input w-full text-gray-300" placeholder="John Doe" required />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Votre Email</label>
                  <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="vous@votreentreprise.com" required />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Votre Numéro</label>
                  <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="vous@votreentreprise.com" required />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Formule envisagé</label>
                  <select id="cars" className="form-input w-full text-gray-300" required>
                    <option value="volvo">Formule Start</option>
                    <option value="saab">Formule Boost</option>
                    <option value="opel">Formule Max</option>
                </select>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-sm font-medium mb-1" htmlFor="message">Votre Message</label>
                  <textarea id="message" className="form-textarea w-full text-gray-300" rows={4} placeholder="Écrivez votre message ici..." required></textarea>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-green-600 hover:bg-green-700 w-full">Envoyer le Message</button>
                </div>
              </div>
            </form>
          </div>

          {/* Call to action */}
          <div className="flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3">
              <p className="text-gray-400 text-center">
                Vous avez une question ? N'hésitez pas à nous envoyer un e-mail à{' '}
                <a href="mailto:info@curveweb.com" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">info@curveweb.com</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
