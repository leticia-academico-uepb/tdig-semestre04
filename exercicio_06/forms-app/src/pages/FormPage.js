import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function FormPage() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Nome é obrigatório'),
            email: Yup.string().email('Email inválido').required('Email é obrigatório'),
            password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Senha é obrigatória'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="form-container">
            <h1>Formulário</h1>
            <form onSubmit={formik.handleSubmit}>
                <input name="name" placeholder="Nome" onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name && <div className="error">{formik.errors.name}</div>}

                <input name="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email && <div className="error">{formik.errors.email}</div>}

                <input type="password" name="password" placeholder="Senha" onChange={formik.handleChange} value={formik.values.password} />
                {formik.errors.password && <div className="error">{formik.errors.password}</div>}

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
