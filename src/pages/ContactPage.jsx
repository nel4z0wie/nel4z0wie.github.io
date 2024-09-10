import { SendHorizonalIcon } from 'lucide-react';
import { InstagramIcon } from 'lucide-react';
import { Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 px-3 py-4">
        <div className="space-y-10">
          <h1 className="text-5xl font-bold">Contact Me</h1>
          <p>
            Jika anda berminat untuk berkolaborasi dengan saya silahkan hubungi
            saya...
          </p>
          <div className="flex-wrap space-x-1">
            <button className="btn">
              <Mail size={25} />
              <span>loremipsum@gmail.com</span>
            </button>
            <button className="btn">
              <InstagramIcon size={25} />
              <span>@lorem42242</span>
            </button>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Hubungi Saya:</h3>

            <div className="py-4 space-y-2">
              <input
                type="text"
                className="input w-full"
                placeholder="Nama dan email kamu"
              />
              <textarea
                type="text"
                className="textarea w-full"
                rows={4}
                placeholder="Pertanyaan atau ajakan kolaborasi"
              ></textarea>
            </div>

            <div className="card-actions">
              <button className="btn btn-primary">
                <SendHorizonalIcon size={20} />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
