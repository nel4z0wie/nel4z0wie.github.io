import { AlignEndHorizontal } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';

const ProfilePages = () => {
  return (
    <>
      <div className="flex gap-10 px-4">
        <div className="flex-1 space-y-10">
          <h1 className="text-6xl font-bold">Welcome To My Web Profile</h1>
          <p>
            Halo Ges Naila Disini...... Saya Adalah Seorang Perempuan yang masih
            minim Berpengalaman dalam bidang Web Programming. Jadi mohon
            bantuannya ya...
          </p>
        </div>
        <div className="flex-none p-2">
          <div className="avatar">
            <div className="w-48 rounded-lg">
              <img src="foto-naila.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">
              <LayoutDashboard className="stroke-accent fill-accent/50" />
              <span>UI/UX Designer</span>
            </h3>

            <p>
              Saya Saat Ini Sedang Mendalami Ilmu untuk menjadi seorang UI/UX
              Design.
            </p>
          </div>
        </div>
        <div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title">
                <AlignEndHorizontal className="stroke-secondary fill-secondary/50" />
                <span>Freelance Sales Bank</span>
              </h3>
              <p>
                Saya saat ini Sedang Bekerja juga Sebagai Sales Freelance Di
                Salah Satu Bank Swasta Di Indonesia...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePages;
