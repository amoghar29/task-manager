import { useParams } from "react-router-dom";
export default function ProfilePage() {
  const params = useParams();
  return (
    <div className="max-w-md mx-auto mt-10 bg-white overflow-hidden shadow-lg rounded-lg border">
      <div className="px-8 py-6">
        <h3 className="text-xl leading-7 font-medium text-gray-900">
          User Profile
        </h3>
        <p className="mt-2 max-w-2xl text-base text-gray-500">
          This is some information about the user.
        </p>
      </div>
      <div className="border-t border-gray-200 px-8 py-6">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-6 sm:grid sm:grid-cols-3 sm:gap-6">
            <dt className="text-base font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
              {params.userName}
            </dd>
          </div>
          <div className="py-4 sm:py-6 sm:grid sm:grid-cols-3 sm:gap-6">
            <dt className="text-base font-medium text-gray-500">
              Email address
            </dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
              johndoe@example.com
            </dd>
          </div>
          <div className="py-4 sm:py-6 sm:grid sm:grid-cols-3 sm:gap-6">
            <dt className="text-base font-medium text-gray-500">
              Phone number
            </dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
              (123) 456-7890
            </dd>
          </div>
          <div className="py-4 sm:py-6 sm:grid sm:grid-cols-3 sm:gap-6">
            <dt className="text-base font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
              123 Main St
              <br />
              Anytown, USA 12345
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
