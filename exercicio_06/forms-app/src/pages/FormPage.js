import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function FormPage() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            age: '',
            rating: '',
            recommend: 'yes',
            liked: [],
            comment: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Nome é obrigatório'),
            email: Yup.string().email('Email inválido').required('Email é obrigatório'),
            age: Yup.number().min(13, 'Idade mínima é 13').max(120, 'Idade máxima é 120').required('Idade é obrigatória'),
            rating: Yup.string().required('Selecione uma nota'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="form-container">
            <h1>Formulário de Avaliação</h1>
            <p>Avalie nosso serviço e nos ajude a melhorar a experiência dos clientes.</p>

            <form onSubmit={formik.handleSubmit}>
                <fieldset>
                    <label>
                        Nome:
                        <input name="name" type="text" placeholder="Digite seu nome" onChange={formik.handleChange} value={formik.values.name} />
                        {formik.errors.name && <div className="error">{formik.errors.name}</div>}
                    </label>

                    <label>
                        Email:
                        <input name="email" type="email" placeholder="Digite seu email" onChange={formik.handleChange} value={formik.values.email} />
                        {formik.errors.email && <div className="error">{formik.errors.email}</div>}
                    </label>

                    <label>
                        Idade:
                        <input name="age" type="number" min="13" max="120" placeholder="Digite sua idade" onChange={formik.handleChange} value={formik.values.age} />
                        {formik.errors.age && <div className="error">{formik.errors.age}</div>}
                    </label>

                    <label>
                        Avaliação do serviço:
                        <select name="rating" onChange={formik.handleChange} value={formik.values.rating}>
                            <option value="">(selecione uma opção)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        {formik.errors.rating && <div className="error">{formik.errors.rating}</div>}
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Você recomendaria nosso serviço?</legend>

                    <label>
                        <input type="radio" name="recommend" value="yes" checked={formik.values.recommend === 'yes'} onChange={formik.handleChange} />
                        Sim
                    </label>

                    <label>
                        <input type="radio" name="recommend" value="no" checked={formik.values.recommend === 'no'} onChange={formik.handleChange} />
                        Não
                    </label>
                </fieldset>

                <fieldset>
                    <legend>O que você mais gostou?</legend>

                    <label>
                        <input type="checkbox" name="liked" value="service" onChange={formik.handleChange} />
                        Atendimento
                    </label>

                    <label>
                        <input type="checkbox" name="liked" value="speed" onChange={formik.handleChange} />
                        Rapidez
                    </label>

                    <label>
                        <input type="checkbox" name="liked" value="quality" onChange={formik.handleChange} />
                        Qualidade
                    </label>

                    <label>
                        <input type="checkbox" name="liked" value="price" onChange={formik.handleChange} />
                        Preço
                    </label>
                </fieldset>

                <label className="comment">
                    Comentários:
                    <textarea name="comment" rows="3" placeholder="Escreva aqui..." onChange={formik.handleChange} value={formik.values.comment} />
                </label>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
