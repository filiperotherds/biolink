import { auth } from "@/lib/db/auth";
import { getAddressesByInstitutionId } from "@/modules/address/actions";
import AddressCard from "./address-card";

export default async function AddressesList() {
  const session = await auth();

  const addresses = await getAddressesByInstitutionId(
    session?.user.institutionId
  );

  return (
    <div className="w-full flex flex-col gap-2">
      {addresses.map((address) => (
        <AddressCard
          key={address.id}
          id={address.id}
          zipCode={address.zipCode}
          street={address.street}
          city={address.city}
          state={address.state}
          number={address.number}
        />
      ))}
    </div>
  );
}
