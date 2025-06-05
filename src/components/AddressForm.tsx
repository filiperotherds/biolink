"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import CepInput from "./ui/cep-input";

interface AddressFormProps {
    zipCode?: string;
    street?: string;
    city?: string;
    state?: string;
    number?: string;
}

export default function AddressForm(props: AddressFormProps) {
    const [zipCode, setZipCode] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [number, setNumber] = useState("");

    function handleZipCodeChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value.replace(/\D/g, "");
        if (value.length <= 8) {
            setZipCode(value);
        }
    }

    useEffect(() => {
        if (zipCode.length !== 8) return;

        async function fetchAddress() {

            try {
                const res = await fetch(`https://brasilapi.com.br/api/cep/v1/${zipCode}`);
                if (!res.ok) throw new Error("CNPJ não encontrado");

                const data = await res.json();
                setStreet(data.street || "");
                setCity(data.city || "");
                setState(data.state || "");
            } catch (err) {
                return err;
            }
        }
        fetchAddress();
    }, [zipCode]);

    useEffect(() => {
        if (props.zipCode && props.street && props.city && props.state) {
            setZipCode(props.zipCode || "");
            setStreet(props.street || "");
            setCity(props.city || "");
            setState(props.state || "");
            setNumber(props.number || "");
        }
    }, [props]);

    return (
        <div className="grid gap-4 pb-4">
            <div className="grid gap-3">
                <Label htmlFor="zipCode">CEP</Label>
                <CepInput name="zipCode" id="zipCode" type="text" value={zipCode} onChange={handleZipCodeChange} required/>
            </div>
            <div className="grid gap-3">
                <Label htmlFor="street">Rua</Label>
                <Input id="street" name="street" value={street} readOnly required/>
            </div>
            <div className="grid gap-3">
                <div className="w-full flex flex-row items-center justify-center gap-3">
                    <div className="w-full grid gap-3">
                        <Label htmlFor="city">Cidade</Label>
                        <Input id="city" name="city" type="text" value={city} readOnly required/>
                    </div>
                    <div className="w-24 grid gap-3">
                        <Label htmlFor="state">Estado</Label>
                        <Input id="state" name="state" type="text" value={state} readOnly required/>
                    </div>
                </div>
            </div>
            <div className="grid gap-3">
                <Label htmlFor="number">Número</Label>
                <Input id="number" name="number" type="text" value={number} onChange={(e) => setNumber(e.target.value)} required/>
            </div>
        </div>
    );
}