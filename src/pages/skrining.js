import Head from "next/head";
import Layout from "../components/layouts";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Skrining() {
    const router = useRouter();

    const [form, setForm] = useState({
        name: "",
        gender: "",
        age: "",
        height: "",
        weight: "",
        question_1: "",
        question_2: "",
        question_3: "",
        question_4: "",
        question_5: "",
        question_6: "",
        question_7: "",
        question_8: "",
        question_9: "",
        question_10: "",
    });

    function calculateRisk() {
        const questions = [
            "question_1",
            "question_2",
            "question_3",
            "question_4",
            "question_5",
            "question_6",
            "question_7",
            "question_8",
            "question_9",
            "question_10",
        ];

        let risk = 0;

        questions.forEach((question) => {
            if (form[question] === "true") {
                risk += 1;
            }
        });

        return risk;
    }

    async function addResponse(e) {
        e.preventDefault();

        if (typeof window !== "undefined" && typeof document !== "undefined") {
            const risk = calculateRisk();
            if (risk <= 3) {
                localStorage.setItem("risk", "low");
            } else if (risk >= 4 && risk <= 6) {
                localStorage.setItem("risk", "medium");
            } else {
                localStorage.setItem("risk", "high");
            }
        }

        try {
            const { data, error } = await supabase
                .from("responses")
                .insert([form]);

            if (error) {
                console.error("Error inserting data:", error);
            } else {
                console.log("Data inserted successfully:", data);
            }
        } catch (err) {
            console.error("Unexpected error:", err);
        }

        router.push("/hasil");
    }

    return (
        <Layout>
            <Head>
                <title>Skiring - Diabetes Care</title>
            </Head>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:py-24 py-12 items-center justify-center">
                    <div className="flex flex-col md:items-start md:text-justify mb-16 md:mb-0 items-center text-left">
                        <form
                            onSubmit={addResponse}
                            className="w-full max-w-lg"
                        >
                            <h1 className="text-3xl font-bold mb-5 text-primary text-center">
                                Cek Risiko Diabetesmu Sekarang!
                            </h1>

                            <p className="mb-8 leading-relaxed">
                                Kamu bisa mengetahui seberapa besar risiko
                                terkena penyakit diabetes saat ini. Semakin
                                cepat mengetahui, semakin cepat pula
                                mencegahnya!
                            </p>

                            <h3 className="text-1xl font-bold mb-5 text-primary">
                                Identitas Diri
                            </h3>

                            <div className="mb-10 border p-5 rounded-lg bg-slate-50">
                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">Nama</span>
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Masukkan nama..."
                                        className="input input-bordered"
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                name: e.target.value,
                                            })
                                        }
                                    />

                                    <div className="label">
                                        <span className="label-text-alt text-slate-300">
                                            Opsional/tidak wajib
                                        </span>
                                    </div>
                                </label>

                                <label className="form-control mb-3">
                                    <div className="label">
                                        <span className="label-text">
                                            Jenis Kelamin
                                        </span>
                                    </div>

                                    <div className="form-control">
                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="gender"
                                                className="radio"
                                                value="male"
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        gender: e.target.value,
                                                    })
                                                }
                                                required
                                            />

                                            <span className="label-text">
                                                Laki-laki
                                            </span>
                                        </label>

                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="gender"
                                                className="radio"
                                                value="female"
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        gender: e.target.value,
                                                    })
                                                }
                                                required
                                            />

                                            <span className="label-text">
                                                Perempuan
                                            </span>
                                        </label>
                                    </div>
                                </label>

                                <label className="form-control mb-3">
                                    <div className="label">
                                        <span className="label-text">Umur</span>
                                    </div>

                                    <label className="input input-bordered flex items-center gap-2">
                                        <input
                                            type="number"
                                            className="grow"
                                            placeholder="Masukkan umur..."
                                            min={1}
                                            max={100}
                                            required
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    age: e.target.value,
                                                })
                                            }
                                            name="age"
                                        />
                                        <span>Tahun</span>
                                    </label>
                                </label>

                                <label className="form-control mb-3">
                                    <div className="label">
                                        <span className="label-text">
                                            Tinggi Badan
                                        </span>
                                    </div>

                                    <label className="input input-bordered flex items-center gap-2">
                                        <input
                                            type="number"
                                            className="grow"
                                            placeholder="Masukkan tinggi badan..."
                                            min={100}
                                            max={200}
                                            required
                                            name="height"
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    height: e.target.value,
                                                })
                                            }
                                        />
                                        <span>cm</span>
                                    </label>
                                </label>

                                <label className="form-control mb-3">
                                    <div className="label">
                                        <span className="label-text">
                                            Berat Badan
                                        </span>
                                    </div>

                                    <label className="input input-bordered flex items-center gap-2">
                                        <input
                                            type="number"
                                            className="grow"
                                            placeholder="Masukkan berat badan..."
                                            min={10}
                                            max={100}
                                            required
                                            name="weight"
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    weight: e.target.value,
                                                })
                                            }
                                        />
                                        <span>kg</span>
                                    </label>
                                </label>
                            </div>

                            <h3 className="text-1xl font-bold mb-5 text-primary">
                                Skrining
                            </h3>

                            <div className="mb-10 border w-full p-5 rounded-lg bg-slate-50">
                                <label className="form-control mb-3">
                                    <div className="label">
                                        <span className="label-text text-lg">
                                            Apakah Anda rutin mengonsumsi
                                            makanan dengan kadar gula atau
                                            karbohidrat tinggi, seperti kue,
                                            permen, atau nasi putih?
                                        </span>
                                    </div>

                                    <div className="flex gap-5">
                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_1"
                                                className="radio"
                                                value="true"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_1:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Ya
                                            </span>
                                        </label>

                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_1"
                                                className="radio"
                                                value="false"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_1:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Tidak
                                            </span>
                                        </label>
                                    </div>
                                </label>
                            </div>

                            <div className="mb-10 border w-full p-5 rounded-lg bg-slate-50">
                                <label className="form-control mb-3">
                                    <div className="label">
                                        <span className="label-text text-lg">
                                            Apakah Anda melakukan aktivitas
                                            fisik kurang dari 3 kali dalam
                                            seminggu?
                                        </span>
                                    </div>

                                    <div className="flex gap-5">
                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_2"
                                                className="radio"
                                                value="true"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_2:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Ya
                                            </span>
                                        </label>

                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_2"
                                                className="radio"
                                                value="false"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_2:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Tidak
                                            </span>
                                        </label>
                                    </div>
                                </label>
                            </div>

                            <div className="mb-10 border w-full p-5 rounded-lg bg-slate-50">
                                <label className="form-control mb-3">
                                    <div className="label">
                                        <span className="label-text text-lg">
                                            Apakah Anda lebih sering memilih
                                            makanan gorengan dibandingkan
                                            makanan rebus atau kukus?
                                        </span>
                                    </div>

                                    <div className="flex gap-5">
                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_3"
                                                className="radio"
                                                value="true"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_3:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Ya
                                            </span>
                                        </label>

                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_3"
                                                className="radio"
                                                value="false"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_3:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Tidak
                                            </span>
                                        </label>
                                    </div>
                                </label>
                            </div>

                            <div className="mb-10 border w-full p-5 rounded-lg bg-slate-50">
                                <label className="form-control mb-3">
                                    <div className="label">
                                        <span className="label-text text-lg">
                                            Apakah Anda pernah mengonsumsi
                                            minuman manis (seperti teh manis,
                                            kopi susu, atau soda) lebih dari
                                            satu gelas per hari?
                                        </span>
                                    </div>

                                    <div className="flex gap-5">
                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_4"
                                                className="radio"
                                                value="true"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_4:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Ya
                                            </span>
                                        </label>

                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_4"
                                                className="radio"
                                                value="false"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_4:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Tidak
                                            </span>
                                        </label>
                                    </div>
                                </label>
                            </div>

                            <div className="mb-10 border w-full p-5 rounded-lg bg-slate-50">
                                <label className="form-control mb-3">
                                    <div className="label">
                                        <span className="label-text text-lg">
                                            Apakah Anda sering makan malam dalam
                                            waktu kurang dari 2 jam sebelum
                                            tidur?
                                        </span>
                                    </div>

                                    <div className="flex gap-5">
                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_5"
                                                className="radio"
                                                value="true"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_5:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Ya
                                            </span>
                                        </label>

                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_5"
                                                className="radio"
                                                value="false"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_5:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Tidak
                                            </span>
                                        </label>
                                    </div>
                                </label>
                            </div>

                            <div className="mb-10 border w-full p-5 rounded-lg bg-slate-50">
                                <label className="form-control mb-3">
                                    <div className="label">
                                        <span className="label-text text-lg">
                                            Apakah Anda merasa kesulitan untuk
                                            mengatur pola makan seimbang
                                            (karbohidrat, protein, lemak, dan
                                            serat)?
                                        </span>
                                    </div>

                                    <div className="flex gap-5">
                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_6"
                                                className="radio"
                                                value="true"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_6:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Ya
                                            </span>
                                        </label>

                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_6"
                                                className="radio"
                                                value="false"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_6:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Tidak
                                            </span>
                                        </label>
                                    </div>
                                </label>
                            </div>

                            <div className="mb-10 border w-full p-5 rounded-lg bg-slate-50">
                                <label className="form-control mb-3">
                                    <div className="label">
                                        <span className="label-text text-lg">
                                            Apakah Anda memiliki riwayat
                                            diabetes dalam keluarga ?
                                        </span>
                                    </div>

                                    <div className="flex gap-5">
                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_7"
                                                className="radio"
                                                value="true"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_7:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Ya
                                            </span>
                                        </label>

                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_7"
                                                className="radio"
                                                value="false"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_7:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Tidak
                                            </span>
                                        </label>
                                    </div>
                                </label>
                            </div>

                            <div className="mb-10 border w-full p-5 rounded-lg bg-slate-50">
                                <label className="form-control mb-3">
                                    <div className="label">
                                        <span className="label-text text-lg">
                                            Apakah Anda sering ngemil di luar
                                            waktu makan utama,terutama makanan
                                            manis?
                                        </span>
                                    </div>

                                    <div className="flex gap-5">
                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_8"
                                                className="radio"
                                                value="true"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_8:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Ya
                                            </span>
                                        </label>

                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_8"
                                                className="radio"
                                                value="false"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_8:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Tidak
                                            </span>
                                        </label>
                                    </div>
                                </label>
                            </div>

                            <div className="mb-10 border w-full p-5 rounded-lg bg-slate-50">
                                <label className="form-control mb-3">
                                    <div className="label">
                                        <span className="label-text text-lg">
                                            Apakah Anda memiliki tujuan jangka
                                            panjang terkait pencegahan diabetes?
                                        </span>
                                    </div>

                                    <div className="flex gap-5">
                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_9"
                                                className="radio"
                                                value="true"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_9:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Ya
                                            </span>
                                        </label>

                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_9"
                                                className="radio"
                                                value="false"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_9:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Tidak
                                            </span>
                                        </label>
                                    </div>
                                </label>
                            </div>

                            <div className="mb-10 border w-full p-5 rounded-lg bg-slate-50">
                                <label className="form-control mb-3">
                                    <div className="label">
                                        <span className="label-text text-lg">
                                            Apakah Anda merasa bahwa lingkungan
                                            sekitar Anda (misalnya tempat
                                            tinggal, tempat kerja) mendukung
                                            gaya hidup sehat untuk mencegah
                                            diabetes?
                                        </span>
                                    </div>

                                    <div className="flex gap-5">
                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_10"
                                                className="radio"
                                                value="true"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_10:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Ya
                                            </span>
                                        </label>

                                        <label className="label cursor-pointer justify-start gap-3">
                                            <input
                                                type="radio"
                                                name="question_10"
                                                className="radio"
                                                value="false"
                                                required
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        question_10:
                                                            e.target.value,
                                                    })
                                                }
                                            />

                                            <span className="label-text">
                                                Tidak
                                            </span>
                                        </label>
                                    </div>
                                </label>
                            </div>

                            <div className="mb-10 text-center">
                                <button className="btn bg-emerald-500 text-white hover:bg-emerald-600 w-full max-w-xs">
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
                                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                        />
                                    </svg>
                                    Cek Risiko Diabetes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
