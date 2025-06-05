import { executeAction } from "@/lib/executeAction"
import { schema } from "./schema";
import db from "@/lib/db";

const createAddress = (formData: FormData, institutionId: string) => {
    return executeAction({
        actionFn: async () => {
            const zipCode = formData.get("zipCode")?.toString().replace(/\D/g, "");
            const street = formData.get("street");
            const city = formData.get("city");
            const state = formData.get("state");
            const number = formData.get("number");
            const validatedData = schema.parse({
                zipCode,
                street,
                city,
                state,
                number,
            });
            await db.address.create({
                data: {
                    zipCode: validatedData.zipCode,
                    street: validatedData.street,
                    city: validatedData.city,
                    state: validatedData.state,
                    number: validatedData.number,
                    institutionId: institutionId,
                },
            });
        },
        successMessage: "Endereço adicionado com sucesso",
    });
};

const deleteAddress = async (addressId: string) => {
    return executeAction({
        actionFn: async () => {
            await db.address.delete({
                where: {
                    id: addressId,
                },
            });
        },
        successMessage: "Endereço removido com sucesso",
    });
};

const getAddressesByInstitutionId = async (institutionId: string) => {
    const addresses = await db.address.findMany({
        where: { institutionId },
        orderBy: { createdAt: "desc" },
    });
    return addresses;
}

const updateAddress = async (addressId: string, formData: FormData) => {
    return executeAction({
        actionFn: async () => {
            const zipCode = formData.get("zipCode")?.toString().replace(/\D/g, "");
            const street = formData.get("street");
            const city = formData.get("city");
            const state = formData.get("state");
            const number = formData.get("number");
            const validatedData = schema.parse({
                zipCode,
                street,
                city,
                state,
                number,
            });
            await db.address.update({
                where: {
                    id: addressId,
                },
                data: {
                    zipCode: validatedData.zipCode,
                    street: validatedData.street,
                    city: validatedData.city,
                    state: validatedData.state,
                    number: validatedData.number,
                },
            });
        },
        successMessage: "Endereço atualizado com sucesso",
    })
}

export { createAddress, deleteAddress, getAddressesByInstitutionId, updateAddress };