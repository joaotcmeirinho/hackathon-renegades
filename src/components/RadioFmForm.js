import React from 'react';
import { useForm } from 'react-hook-form';

export default function RadioFmForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <h1>form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Country" {...register("Country", {})} />
                <select {...register}>
                    <option value="parse from API">parse from API</option>
                </select>

                <input type="submit" />
            </form>
        </div>
    );
}