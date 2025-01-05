"use client";
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import Layout from "../components/layouts";
import Head from "next/head";
import { supabase } from "../lib/supabase";

export default function Export() {
    const [responses, setResponses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                let { data: responses, error } = await supabase
                    .from("responses")
                    .select("*");

                setResponses(responses);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const calculateRisk = (response) => {
        let risk = 0;
        let result = "";

        if (response.question_1) risk += 1;
        if (response.question_2) risk += 1;
        if (response.question_3) risk += 1;
        if (response.question_4) risk += 1;
        if (response.question_5) risk += 1;
        if (response.question_6) risk += 1;
        if (response.question_7) risk += 1;
        if (response.question_8) risk += 1;
        if (response.question_9) risk += 1;
        if (response.question_10) risk += 1;

        if (risk <= 3) {
            result = "Rendah";
        } else if (risk >= 4 && risk <= 6) {
            result = "Sedang";
        } else {
            result = "Tinggi";
        }

        return result;
    };

    const onGetExporResponse = async (title, worksheetname) => {
        try {
            const now = new Date().toISOString().split("T")[0];

            setLoading(true);
            let { data: responses, error } = await supabase
                .from("responses")
                .select("*");

            if (responses && Array.isArray(responses)) {
                const dataToExport = responses.map((pro) => ({
                    Nama: pro.name,
                    "Jenis Kelamin":
                        pro.gender == "male" ? "Laki-laki" : "Perempuan",
                    Umur: pro.age,
                    "Berat Badan": pro.weight,
                    "Pertanyaan 1": pro.question_1 ? "✅" : "❌",
                    "Pertanyaan 2": pro.question_2 ? "✅" : "❌",
                    "Pertanyaan 3": pro.question_3 ? "✅" : "❌",
                    "Pertanyaan 4": pro.question_4 ? "✅" : "❌",
                    "Pertanyaan 5": pro.question_5 ? "✅" : "❌",
                    "Pertanyaan 6": pro.question_6 ? "✅" : "❌",
                    "Pertanyaan 7": pro.question_7 ? "✅" : "❌",
                    "Pertanyaan 8": pro.question_8 ? "✅" : "❌",
                    "Pertanyaan 9": pro.question_9 ? "✅" : "❌",
                    "Pertanyaan 10": pro.question_10 ? "✅" : "❌",
                    Resiko: calculateRisk(pro),
                }));

                const workbook = XLSX.utils.book_new();
                const worksheet = XLSX.utils?.json_to_sheet(dataToExport);
                XLSX.utils.book_append_sheet(
                    workbook,
                    worksheet,
                    worksheetname
                );

                XLSX.writeFile(workbook, `${title}-${now}.xlsx`);

                setLoading(false);
            } else {
                setLoading(false);

                console.warning("Export failed!");
            }
        } catch (error) {
            setLoading(false);

            console.log("Export failed!", error.message);
        }
    };

    return (
        <Layout>
            <Head>
                <title>Export Data - Diabetes Care</title>
            </Head>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto md:py-24 py-12 items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-5 text-primary ">
                            Export Data Skining Diabetes
                        </h1>

                        <p className="leading-relaxed text-center mb-5">
                            Export data pengguna yang telah melakukan skining
                            diabetes ke dalam format excel.
                        </p>

                        <button
                            className="btn bg-emerald-500 text-white hover:bg-emerald-600 w-full max-w-xs border-emerald-500 shadow-lg hover:border-emerald-700 mb-8 "
                            onClick={() =>
                                onGetExporResponse("diabetes-care", "Data")
                            }
                            disabled={loading}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                />
                            </svg>

                            {loading ? "Loading..." : "Export Excel"}
                        </button>
                    </div>

                    <div className="card bg-white shadow-lg">
                        <div className="card-body max-h-[90vh]">
                            <div className="overflow-x-auto h-full">
                                <table className="table table-md table-pin-rows">
                                    <thead className="bg-slate-100 text-center">
                                        <tr className="bg-slate-100">
                                            <th>#</th>
                                            <th>Nama</th>
                                            <th>Jenis Kelamin</th>
                                            <th>Umur</th>
                                            <th>Berat Badan</th>
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                                            <th>6</th>
                                            <th>7</th>
                                            <th>8</th>
                                            <th>9</th>
                                            <th>10</th>
                                            <th>Resiko</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {responses.map((response, index) => (
                                            <tr key={response.id}>
                                                <td>{index + 1}</td>
                                                <td className="whitespace-nowrap">
                                                    {response.name}
                                                </td>
                                                <td className="whitespace-nowrap">
                                                    {response.gender == "male"
                                                        ? "Laki-laki"
                                                        : "Perempuan"}
                                                </td>
                                                <td className="whitespace-nowrap">
                                                    {response.age} Tahun
                                                </td>
                                                <td className="whitespace-nowrap">
                                                    {response.weight} kg
                                                </td>
                                                <td>
                                                    {response.question_1
                                                        ? "✅"
                                                        : "❌"}
                                                </td>
                                                <td>
                                                    {response.question_2
                                                        ? "✅"
                                                        : "❌"}
                                                </td>
                                                <td>
                                                    {response.question_3
                                                        ? "✅"
                                                        : "❌"}
                                                </td>
                                                <td>
                                                    {response.question_4
                                                        ? "✅"
                                                        : "❌"}
                                                </td>
                                                <td>
                                                    {response.question_5
                                                        ? "✅"
                                                        : "❌"}
                                                </td>
                                                <td>
                                                    {response.question_6
                                                        ? "✅"
                                                        : "❌"}
                                                </td>
                                                <td>
                                                    {response.question_7
                                                        ? "✅"
                                                        : "❌"}
                                                </td>
                                                <td>
                                                    {response.question_8
                                                        ? "✅"
                                                        : "❌"}
                                                </td>
                                                <td>
                                                    {response.question_9
                                                        ? "✅"
                                                        : "❌"}
                                                </td>
                                                <td>
                                                    {response.question_10
                                                        ? "✅"
                                                        : "❌"}
                                                </td>
                                                <td>
                                                    {calculateRisk(response)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="card-body">
                            <h2 className="text-md text-primary font-bold mb-5">
                                Pertanyaan Skining Diabetes
                            </h2>

                            <ol className="max-w-lg">
                                <li className="mb-3">
                                    <b>Pertanyaan 1</b> <br />
                                    <p>
                                        Apakah Anda rutin mengonsumsi makanan
                                        dengan kadar gula atau karbohidrat
                                        tinggi, seperti kue, permen, atau nasi
                                        putih?
                                    </p>
                                </li>

                                <li className="mb-3">
                                    <b>Pertanyaan 2</b> <br />
                                    <p>
                                        Apakah Anda melakukan aktivitas fisik
                                        kurang dari 3 kali dalam seminggu?
                                    </p>
                                </li>

                                <li className="mb-3">
                                    <b>Pertanyaan 3</b> <br />
                                    <p>
                                        Apakah Anda lebih sering memilih makanan
                                        gorengan dibandingkan makanan rebus atau
                                        kukus?
                                    </p>
                                </li>

                                <li className="mb-3">
                                    <b>Pertanyaan 4</b> <br />
                                    <p>
                                        Apakah Anda pernah mengonsumsi minuman
                                        manis (seperti teh manis, kopi susu,
                                        atau soda) lebih dari satu gelas per
                                        hari?
                                    </p>
                                </li>

                                <li className="mb-3">
                                    <b>Pertanyaan 5</b> <br />
                                    <p>
                                        Apakah Anda sering makan malam dalam
                                        waktu kurang dari 2 jam sebelum tidur?
                                    </p>
                                </li>

                                <li className="mb-3">
                                    <b>Pertanyaan 6</b> <br />
                                    <p>
                                        Apakah Anda merasa kesulitan untuk
                                        mengatur pola makan seimbang
                                        (karbohidrat, protein, lemak, dan
                                        serat)?
                                    </p>
                                </li>

                                <li className="mb-3">
                                    <b>Pertanyaan 7</b> <br />
                                    <p>
                                        Apakah Anda memiliki riwayat diabetes
                                        dalam keluarga?
                                    </p>
                                </li>

                                <li className="mb-3">
                                    <b>Pertanyaan 8</b> <br />
                                    <p>
                                        Apakah Anda sering ngemil di luar waktu
                                        makan utama,terutama makanan manis?
                                    </p>
                                </li>

                                <li className="mb-3">
                                    <b>Pertanyaan 9</b> <br />
                                    <p>
                                        Apakah Anda memiliki tujuan jangka
                                        panjang terkait pencegahan diabetes?
                                    </p>
                                </li>

                                <li className="mb-3">
                                    <b>Pertanyaan 10</b> <br />
                                    <p>
                                        Apakah Anda merasa bahwa lingkungan
                                        sekitar Anda (misalnya tempat
                                        tinggal,tempat kerja) mendukung gaya
                                        hidup sehat untuk mencegah diabetes?
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
